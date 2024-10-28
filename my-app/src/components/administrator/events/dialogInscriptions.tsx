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
import { useDialogInscriptionsFunctions } from '@/app/api/inscriptions/inscriptionsService';
import { Inscription } from "@/interfaces/IInscription";

interface DialogInscriptionsProps {
  open: boolean;
  onClose: () => void;
  eventId: string;
  eventStatus: string;
}

export default function DialogInscriptions({ open, onClose, eventId, eventStatus }: DialogInscriptionsProps) {
  const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
  const [checkboxStates, setCheckboxStates] = useState<Record<number, boolean>>({});

  const { fetchInscriptions, handleCheckboxChange } = useDialogInscriptionsFunctions(eventId, setInscriptions, setCheckboxStates, open);

  useEffect(() => {
    if (open && eventId) {
      fetchInscriptions();
    }
  }, [open, eventId]);

  console.log(inscriptions);

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