'use client';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from 'react';
import API from "@/services/api";
import { useSession } from "next-auth/react";

interface User {
  id: number;
  name: string;
  email: string;
  permission: string;
}

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  modality: string;
  status: string;
  type: string;
  target_audience: string;
  vacancies: number;
  social_vacancies: number;
  regular_vacancies: number;
  material: string;
  interest_area: string;
  price: string;
  workload: number;
  user_owner: User;
}

interface Inscription {
  id: number;
  user: User;
  event: Event;
  status: string; 
  present: number;
}

interface DialogInscriptionsProps {
  open: boolean;
  onClose: () => void;
  eventId: string;
  eventStatus: string;
}

interface InscriptionsResponse {
  status: boolean;
  inscriptions: {
    current_page: number;
    data: Inscription[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{ url: string | null; label: string; active: boolean }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}

export default function DialogInscriptions({ open, onClose, eventId, eventStatus }: DialogInscriptionsProps) {
  const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
  const [checkboxStates, setCheckboxStates] = useState<Record<number, boolean>>({});
  const { data: session } = useSession();

  useEffect(() => {
    if (open && eventId) {
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
            initialStates[inscription.id] = inscription.present === 0;
          });
          setCheckboxStates(initialStates);
        } catch (error) {
          console.error("Erro ao buscar inscrições:", error);
        }
      };
      fetchInscriptions();
    }
  }, [open, eventId]);

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

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Total de inscritos: {inscriptions.length}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center m-4 gap-4">
          {inscriptions.map((inscription) => (
            <div key={inscription.id} className="bg-[#ECEAEA] h-[80px] w-[600px] rounded-lg flex justify-between items-center px-4">
              <div className="flex flex-col gap-2">
                <Label className="text-[#F69053]">{inscription.user.name}</Label>
                <Label className="font-normal">{inscription.user.email}</Label>
              </div>
              <div className="mr-4 flex items-center gap-2">
                <Label className="font-normal">Presença:</Label>
                <input
                  type="checkbox"
                  checked={checkboxStates[inscription.id] || false} 
                  onChange={() => handleCheckboxChange(inscription.id)} 
                  disabled={eventStatus === 'finished'}
                />
              </div>
            </div>
          ))}
        </div>
        <DialogFooter className="sm:justify-between ml-7 mr-7">
          <Button>Adicionar participante</Button>
          <DialogClose asChild>
            <Button type="button" onClick={onClose}>
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
