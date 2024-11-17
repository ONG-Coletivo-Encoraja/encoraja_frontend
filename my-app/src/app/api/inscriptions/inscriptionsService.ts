import API from "@/services/api";
import { InscriptionsResponse, Inscription } from "@/interfaces/IInscription";
import { useSession } from "next-auth/react";

export const useDialogInscriptionsFunctions = (eventId: string, setInscriptions: React.Dispatch<React.SetStateAction<Inscription[]>>, setCheckboxStates: React.Dispatch<React.SetStateAction<Record<number, boolean>>>, open: boolean) => {
  const { data: session } = useSession();

  const fetchInscriptions = async () => {
    try {
      const response = await API.get<InscriptionsResponse>(`/admin/inscriptions/event/${eventId}`, {
        headers: {
          'Authorization': `Bearer ${session?.token}`,
          'Content-Type': 'application/json',
        },
      });
  
      const approvedInscriptions = response.data.inscriptions.data.filter(inscription => inscription.status === 'approved');
      setInscriptions(approvedInscriptions);
  
      const initialStates: Record<number, boolean> = {};
      approvedInscriptions.forEach(inscription => {
        initialStates[inscription.id] = inscription.present === 1;
      });
      setCheckboxStates(initialStates);
    } catch (error) {
      console.error("Erro ao buscar inscrições:", error);
    }
  };

  const handleCheckboxChange = async (id: number) => {
    try {
      await API.get(`/present/${id}`, {
        headers: {
          'Authorization': `Bearer ${session?.token}`,
          'Content-Type': 'application/json',
        },
      });

      setCheckboxStates((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    } catch (error) {
      console.error("Erro ao alterar presença:", error);
    }
  };

  return { fetchInscriptions, handleCheckboxChange };
};