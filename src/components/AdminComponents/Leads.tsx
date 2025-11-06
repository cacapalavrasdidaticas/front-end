import { getAllProspects } from "@/pages/api/LIbraryApi";
import { useState, useEffect, useRef } from "react";

const Leads = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [expandedLeadId, setExpandedLeadId] = useState<number | null>(null);

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

  const getValidMaterias = (materias: any): string[] => {
    if (!materias || !Array.isArray(materias) || materias.length === 0) {
      return [];
    }
    // Remove valores inválidos como "{}"
    return materias.filter((m: string) => m && m !== "{}");
  };

  const formatMaterias = (materias: any): string => {
    const validMaterias = getValidMaterias(materias);
    if (validMaterias.length === 0) {
      return "Nenhuma";
    }
    return validMaterias.join(", ");
  };

  const filteredLeads = leads.filter((lead) => {
    const searchLower = searchTerm.toLowerCase();
    const materiasStr = formatMaterias(lead.materia).toLowerCase();
    return (
      lead.nome?.toLowerCase().includes(searchLower) ||
      lead.email?.toLowerCase().includes(searchLower) ||
      lead.telefone?.includes(searchTerm) ||
      materiasStr.includes(searchLower)
    );
  });

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
            placeholder="Buscar Lead por nome, email, telefone ou matéria"
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
                  Matérias
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
                    <td className="px-6 py-4 border-b">
                      <MateriasCell
                        leadId={lead.id || index}
                        materias={lead.materia}
                        expandedLeadId={expandedLeadId}
                        setExpandedLeadId={setExpandedLeadId}
                      />
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
                  <td colSpan={5} className="text-center py-4">
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

interface MateriasCellProps {
  leadId: number;
  materias: any;
  expandedLeadId: number | null;
  setExpandedLeadId: (id: number | null) => void;
}

const MateriasCell = ({
  leadId,
  materias,
  expandedLeadId,
  setExpandedLeadId,
}: MateriasCellProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const validMaterias = materias
    ? materias.filter((m: string) => m && m !== "{}")
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setExpandedLeadId(null);
      }
    };

    if (expandedLeadId === leadId) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandedLeadId, leadId, setExpandedLeadId]);

  if (validMaterias.length === 0) {
    return <span className="text-sm text-gray-500">Nenhuma</span>;
  }

  const isExpanded = expandedLeadId === leadId;
  const visibleMaterias = validMaterias.slice(0, 3);
  const hiddenMaterias = validMaterias.slice(3);
  const hasMore = validMaterias.length > 3;

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex flex-wrap items-center gap-2">
        {visibleMaterias.map((materia: string, idx: number) => (
          <span
            key={idx}
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200"
          >
            {materia}
          </span>
        ))}
        {hasMore && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpandedLeadId(isExpanded ? null : leadId);
            }}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border border-indigo-200 transition-colors duration-200"
          >
            <span>+{hiddenMaterias.length}</span>
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </div>

      {isExpanded && hasMore && (
        <div className="absolute z-50 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">
                Todas as Matérias
              </h3>
              <span className="text-xs font-medium text-blue-100 bg-white/20 px-2 py-1 rounded-full">
                {validMaterias.length}
              </span>
            </div>
          </div>
          <div className="p-3 max-h-64 overflow-y-auto bg-gray-50">
            <div className="flex flex-wrap gap-2">
              {validMaterias.map((materia: string, idx: number) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-white text-gray-700 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 hover:text-blue-700 transition-all duration-200"
                >
                  {materia}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;
