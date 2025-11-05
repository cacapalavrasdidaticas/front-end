"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { getProductByIdFromPdf } from "@/pages/api/LIbraryApi";
import { ProductData } from "@/interfaces/ProductData";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

function base64ToUint8Array(base64: string): Uint8Array {
  const raw = atob(base64);
  const array = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}

interface PdfCardProps extends ProductData {
  userName: string;
  userCPF: string; // CPF completo do usuário
}

const PdfCardComponent: React.FC<PdfCardProps> = ({
  id,
  title,
  imageSrc,
  imageAlt,
  userName,
  userCPF,
}) => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  // Limpa a URL do blob quando o componente for desmontado
  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  const handlePdfClick = async () => {
    const lastFourDigits = userCPF.slice(-4);

    if (enteredPassword !== lastFourDigits) {
      toast.error("Senha incorreta. Verifique e tente novamente.");
      return;
    }

    try {
      setLoading(true);
      // Obtém o PDF (em base64) a partir da sua API
      const response = await getProductByIdFromPdf(Number(id));
      const base64Pdf = response.pdf;

      // Converte o PDF base64 para bytes e carrega o documento
      const pdfBytes = base64ToUint8Array(base64Pdf);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pages = pdfDoc.getPages();
      const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      // Adiciona uma marca d'água em todas as páginas
      pages.forEach((page) => {
        const { height } = page.getSize();
        const text = `Comprado por: ${userName} Nº ${id}`;
        page.drawText(text, {
          x: 580,
          y: height / 20,
          size: 12,
          font,
          color: rgb(0, 0, 0),
          rotate: degrees(90),
          opacity: 0.3,
        });
      });

      // Salva as alterações no PDF e gera um Blob para exibição
      const updatedPdfBytes = await pdfDoc.save();
      const pdfBlob = new Blob([updatedPdfBytes], { type: "application/pdf" });

      // Cria uma URL do blob para exibir o PDF no modal (sem criptografia para permitir visualização)
      const url = URL.createObjectURL(pdfBlob);
      setPdfUrl(url);
      setIsPasswordModalOpen(false);
      setEnteredPassword("");
      setIsPdfModalOpen(true);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      toast.error("Ocorreu um erro ao gerar o PDF.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col border items-center justify-center rounded shadow-lg p-3 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      {imageSrc && (
        <Image
          objectFit="contain"
          quality={100}
          src={imageSrc}
          alt={imageAlt || "Product Image"}
          width={200}
          height={300}
          className="w-full max-h-44 min-h-44 object-contain"
        />
      )}
      <div className="flex flex-col px-3 py-2 w-full">
        <p className="text-black font-jost text-sm md:text-base lg:text-lg font-extrabold leading-5 truncate">
          {title}
        </p>

        {/* Botão para abrir o modal de senha */}
        <Dialog
          open={isPasswordModalOpen}
          onOpenChange={setIsPasswordModalOpen}
        >
          <DialogTrigger asChild>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Ver PDF
            </button>
          </DialogTrigger>
          <DialogContent className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">
                Digite a Senha
              </DialogTitle>
            </DialogHeader>
            <p className="text-gray-700 mb-4">
              Informe os últimos 4 dígitos do seu CPF para visualizar o PDF.
            </p>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="****"
              maxLength={4}
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading) {
                  handlePdfClick();
                }
              }}
            />
            <DialogFooter className="flex justify-end mt-4">
              <button
                onClick={handlePdfClick}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? "Processando..." : "Confirmar"}
              </button>
              <button
                onClick={() => {
                  setIsPasswordModalOpen(false);
                  setEnteredPassword("");
                }}
                className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                disabled={loading}
              >
                Cancelar
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Modal para visualizar o PDF */}
        <Dialog
          open={isPdfModalOpen}
          onOpenChange={(open) => {
            setIsPdfModalOpen(open);
            if (!open && pdfUrl) {
              URL.revokeObjectURL(pdfUrl);
              setPdfUrl(null);
            }
          }}
        >
          <DialogContent
            className="p-0 bg-white rounded-lg shadow-lg max-w-[70vw] w-full max-h-[95vh] select-none"
            onContextMenu={(e) => e.preventDefault()}
            style={{ userSelect: "none", WebkitUserSelect: "none" }}
          >
            <DialogHeader className="p-6 pb-2">
              <DialogTitle className="text-lg font-semibold">
                {title}
              </DialogTitle>
            </DialogHeader>
            <div
              className="flex-1 overflow-hidden p-6 pt-2 select-none"
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: "none", WebkitUserSelect: "none" }}
            >
              {pdfUrl && (
                <iframe
                  src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                  className="w-full  h-[80vh] border-0 select-none"
                  title="PDF Viewer"
                  style={{
                    pointerEvents: "auto",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                  }}
                  onContextMenu={(e) => e.preventDefault()}
                />
              )}
            </div>
            
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PdfCardComponent;
