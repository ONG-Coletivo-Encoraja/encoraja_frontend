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

export default function DialogReview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button id="open-review-dialog">Deixe aqui a sua avaliação</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Deixe sua Avaliação</DialogTitle>
          <DialogDescription>
            Sua opinião é muito importante para nós. Preencha os campos abaixo:
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center space-y-4 mt-5">
            <Label className="text-center">
                De forma geral, como avalia as atividades ofertadas?
            </Label>
            <StarRating />
            <Label className="text-center">
                Você se sentiu acolhida em nosso espaço?
            </Label>
            <div className="flex items-center justify-center">
            <RadioGroup defaultValue="option-one" className="flex flex-row space-x-4">
                <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Sim</Label>
                </div>
                <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Não</Label>
                </div>
            </RadioGroup>
            </div>
            <Label className="text-center">
                Você recomendaria nossas atividades para outras mulheres?
            </Label>
            <div className="flex items-center justify-center">
            <RadioGroup defaultValue="option-one" className="flex flex-row space-x-4">
                <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Sim</Label>
                </div>
                <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Não</Label>
                </div>
            </RadioGroup>
            </div>
            <Label className="text-center">
                Gostaria de deixar um depoimento?
            </Label>
            <Textarea></Textarea>


        </div>
        <DialogFooter className="sm:justify-end mt-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fechar
            </Button>
          </DialogClose>
          <Button type="submit">
            Enviar Avaliação
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
