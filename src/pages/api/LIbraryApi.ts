import api from "./api";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/produtos/descricao");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
};
export const getProductById = async (id_product: number) => {
  try {
    const response = await api.get(`/produto/${id_product}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
};
export const getProductByIdFromPdf = async (id_product: number) => {
  try {
    const response = await api.get(`/produto/${id_product}/pdf`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
};

export interface ProspectData {
  nome: string;
  email: string;
  telefone: string;
  materia: string[];
}

export const createProspect = async (data: ProspectData) => {
  try {
    const response = await api.post("/prospects", data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar prospect:", error);
    throw error;
  }
};

export const getAllProspects = async () => {
  try {
    const response = await api.get("/prospects");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar prospects:", error);
    throw error;
  }
};
