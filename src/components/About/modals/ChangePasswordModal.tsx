import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "react-toastify";
import { sendResetCode, changePassword } from "@/pages/api/users";

interface ChangePasswordModalProps {
  title?: string;
  subtitle?: string;
  bg?: string;
  color?: string;
  triggerUpdate?: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  title = "Recuperar Senha",
  subtitle = "",
  bg = "blue-600",
  color = "white",
  triggerUpdate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    email: "",
    codigo: "",
    novaSenha: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step === 1) {
      try {
        await sendResetCode({ email: formData.email });
        toast.success("Código de verificação enviado para o seu e-mail.");
        setStep(2);
      } catch (error) {
        toast.error(
          "Erro ao enviar código. Verifique o e-mail e tente novamente."
        );
        console.error("Erro ao enviar código:", error);
      }
    } else if (step === 2) {
      try {
        const response = await changePassword({
          email: formData.email,
          codigo: formData.codigo,
          novaSenha: formData.novaSenha,
        });
        if (response.status === 200) {
          toast.success("Senha alterada com sucesso!");
          if (triggerUpdate) triggerUpdate();
          setIsOpen(false);
          setStep(1);
          setFormData({ email: "", codigo: "", novaSenha: "" });
        }
      } catch (error) {
        toast.error(
          "Erro ao alterar a senha. Verifique o código e tente novamente."
        );
        console.error("Erro ao alterar a senha:", error);
      }
    }
  };

  const handleBack = () => {
    setStep(1);
    setFormData((prev) => ({ ...prev, codigo: "", novaSenha: "" }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`px-4 py-2 bg-${bg} rounded text-${color}`}
        >
          {title}
        </button>
      </DialogTrigger>
      <DialogContent className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            {step === 1 ? "Recuperar Senha" : "Definir Nova Senha"}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            {step === 1
              ? "Informe seu e-mail para receber o código de verificação."
              : "Digite o código enviado e sua nova senha."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {step === 1 && (
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail cadastrado
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}

          {step === 2 && (
            <>
              <div>
                <label
                  htmlFor="codigo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Código de verificação
                </label>
                <input
                  type="text"
                  name="codigo"
                  required
                  value={formData.codigo}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="novaSenha"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nova senha
                </label>
                <input
                  type="password"
                  name="novaSenha"
                  required
                  value={formData.novaSenha}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </>
          )}

          <DialogFooter className="flex justify-between">
            {step === 2 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Voltar
              </button>
            )}
            <button
              type="submit"
              onClick={(e) => e.stopPropagation()}
              className={`px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 ml-auto`}
            >
              {step === 1 ? "Enviar Código" : "Alterar Senha"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
