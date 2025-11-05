import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import amostraImg from "@/images/banner_amostra.jpg";
import Image from "next/image";
import { createProspect } from "@/pages/api/LIbraryApi";
import { toast } from "react-toastify";

const AmostraGratis: NextPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    materia: [] as string[],
  });
  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    telefone: "",
    materia: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openLinkInNewTab = () => {
    window.open(
      "https://drive.google.com/drive/folders/1ds80-jR25R5DeYrhVpbQSYufP_bmnV_b?usp=drive_link",
      "_blank"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleMateriaChange = (materia: string) => {
    setFormData((prev) => {
      const isSelected = prev.materia.includes(materia);
      return {
        ...prev,
        materia: isSelected
          ? prev.materia.filter((m) => m !== materia)
          : [...prev.materia, materia],
      };
    });
    // Limpar erro do campo quando o usuário selecionar
    if (errors.materia) {
      setErrors((prev) => ({
        ...prev,
        materia: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      nome: "",
      email: "",
      telefone: "",
      materia: "",
    };

    let isValid = true;

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
      isValid = false;
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
      isValid = false;
    } else if (!/^[\d\s\(\)\-\+]+$/.test(formData.telefone)) {
      newErrors.telefone = "Telefone inválido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      try {
        await createProspect(formData);
        toast.success("Dados enviados com sucesso!");
        setIsSubmitted(true);
        // Limpa o formulário após o sucesso
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          materia: [],
        });
      } catch (error: any) {
        console.error("Erro ao enviar dados:", error);
        toast.error(
          error?.response?.data?.message ||
            "Erro ao enviar dados. Tente novamente."
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-14">
      <Head>
        <title>AMOSTRAS GRÁTIS</title>
        <meta
          name="description"
          content="Amostra grátis do site Caça Atividades Escolares"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center h-full w-full">
        {!isSubmitted ? (
          <div className="w-full h-full max-w-5xl">
            <div className=" grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-center">
              {/* Lado Esquerdo - Conteúdo de Vendas */}
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  🎁 100% GRÁTIS - Sem compromisso
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Acesse Agora Nossas{" "}
                  <span className="text-blue-600">Amostras Grátis</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Explore materiais exclusivos e descubra como podemos
                  transformar sua experiência educacional!
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">
                      Material exclusivo e de alta qualidade
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">
                      Acesso imediato após preenchimento
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">
                      Sem necessidade de cartão de crédito
                    </p>
                  </div>
                </div>
              </div>

              {/* Lado Direito - Formulário */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-200 transform hover:scale-[1.01] transition-transform duration-300">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Preencha e Acesse Agora
                    </h2>
                    <p className="text-gray-500">Leva menos de 30 segundos</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 text-base border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                          errors.nome
                            ? "border-red-400 bg-red-50 focus:border-red-500"
                            : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white focus:shadow-lg"
                        }`}
                        placeholder="Seu nome completo"
                      />
                      {errors.nome && (
                        <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                          <span>•</span>
                          <span>{errors.nome}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 text-base border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                          errors.email
                            ? "border-red-400 bg-red-50 focus:border-red-500"
                            : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white focus:shadow-lg"
                        }`}
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                          <span>•</span>
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 text-base border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                          errors.telefone
                            ? "border-red-400 bg-red-50 focus:border-red-500"
                            : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white focus:shadow-lg"
                        }`}
                        placeholder="(00) 00000-0000"
                      />
                      {errors.telefone && (
                        <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                          <span>•</span>
                          <span>{errors.telefone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Matérias que você leciona?
                      </label>
                      <div
                        className={`max-h-60 overflow-y-auto border-2 rounded-xl p-4 space-y-2 ${
                          errors.materia
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        {[
                          "Alfabetização",
                          "Arte",
                          "Biologia",
                          "Ciências",
                          "Educação Física",
                          "Eletivas",
                          "Ensino Religioso",
                          "Filosofia",
                          "Física",
                          "Geografia",
                          "História",
                          "Inglês",
                          "Língua Portuguesa",
                          "Matemática",
                          "Química",
                          "Sociologia",
                        ].map((materia) => (
                          <label
                            key={materia}
                            className="flex items-center gap-3 cursor-pointer hover:bg-white p-2 rounded-lg transition-colors duration-150"
                          >
                            <input
                              type="checkbox"
                              checked={formData.materia.includes(materia)}
                              onChange={() => handleMateriaChange(materia)}
                              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
                            />
                            <span className="text-base text-gray-700">
                              {materia}
                            </span>
                          </label>
                        ))}
                      </div>
                      {errors.materia && (
                        <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                          <span>•</span>
                          <span>{errors.materia}</span>
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isLoading
                        ? "Enviando..."
                        : "🚀 Quero Minhas Amostras Grátis Agora!"}
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                      Seus dados estão seguros conosco. Não enviamos spam.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <Image
              src={amostraImg}
              alt="Amostra grátis"
              className="cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={openLinkInNewTab}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default AmostraGratis;
