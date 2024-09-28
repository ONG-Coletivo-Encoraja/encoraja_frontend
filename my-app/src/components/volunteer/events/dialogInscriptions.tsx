'use client';

import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import StarRating from "@/components/ui/rating";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import ReviewUser from "./reviewUser";

export default function DialogInscriptions() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button id="open-review-dialog" className="mt-5" variant={'terciary'}>Inscritos</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Total de inscitos: 3</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center m-4 gap-4">
          <div className="bg-[#ECEAEA] h-[80px] w-[600px] rounded-lg flex justify-between items-center px-4">
            <div className="flex flex-col gap-2">
              <Label className="text-[#F69053]">Juliana Baiçar</Label>
              <Label className="font-normal">juliana@email.com</Label>
            </div>
            <div className="mr-4 flex items-center gap-2">
              <Label className="font-normal">Presença:</Label>
              <Checkbox />
            </div>
          </div>
          <div className="bg-[#ECEAEA] h-[80px] w-[600px] rounded-lg flex justify-between items-center px-4">
            <div className="flex flex-col gap-2">
              <Label className="text-[#F69053]">Juliana Baiçar</Label>
              <Label className="font-normal">juliana@email.com</Label>
            </div>
            <div className="mr-4 flex items-center gap-2">
              <Label className="font-normal">Presença:</Label>
              <Checkbox />
            </div>
          </div>
          <div className="bg-[#ECEAEA] h-[80px] w-[600px] rounded-lg flex justify-between items-center px-4">
            <div className="flex flex-col gap-2">
              <Label className="text-[#F69053]">Juliana Baiçar</Label>
              <Label className="font-normal">juliana@email.com</Label>
            </div>
            <div className="mr-4 flex items-center gap-2">
              <Label className="font-normal">Presença:</Label>
              <Checkbox />
            </div>
          </div>
        </div>

        <DialogFooter className="sm:justify-between ml-7 mr-7">
          <Button>Adicionar participante</Button>
          <DialogClose asChild>
            <Button type="button">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
