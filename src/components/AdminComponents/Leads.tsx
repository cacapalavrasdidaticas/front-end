import { getAllProspects } from "@/pages/api/LIbraryApi";
import { useState, useEffect } from "react";

const Leads = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await getAllProspects();

        setLeads(response || []);
      } catch (error) {
        console.error("Erro ao buscar leads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.telefone?.includes(searchTerm)
  );

  const triggerUpdate = async () => {
    setLoading(true);
    try {
      const response = await getAllProspects();
      setLeads(response || []);
    } catch (error) {
      console.error("Erro ao atualizar leads:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="w-full my-4 flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Leads</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar Lead por nome, email ou telefone"
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded-md bg-gray-200 text-black p-2 w-80"
          />
          <button
            onClick={triggerUpdate}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Atualizar
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center p-6">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
          <p className="mt-2 text-gray-500">Carregando...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  E-mail
                </th>
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Telefone
                </th>
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Data de Cadastro
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.length > 0 ? (
                filteredLeads.map((lead, index) => (
                  <tr key={lead.id || index}>
                    <td className="px-6 py-4 whitespace-nowrap border-b">
                      <span className="text-sm font-medium text-gray-900">
                        {lead.nome || "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b">
                      <span className="text-sm text-gray-500">
                        {lead.email || "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b">
                      <span className="text-sm text-gray-500">
                        {lead.telefone || "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b">
                      <span className="text-sm text-gray-500">
                        {lead.created_at
                          ? new Date(lead.created_at).toLocaleDateString(
                              "pt-BR"
                            )
                          : "N/A"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-4">
                    Nenhum lead encontrado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Leads;
