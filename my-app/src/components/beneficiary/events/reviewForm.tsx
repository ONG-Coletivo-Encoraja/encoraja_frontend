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
import { Label } from "@/components/ui/label";
import StarRating from "@/components/ui/rating";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {Textarea} from "@/components/ui/textarea";


export default function ReviewForm() {

  return (
    <Dialog>
    <DialogTrigger>
        <Button>Deixe aqui a sua avaliação</Button>
    </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Deixe sua Avaliação</DialogTitle>
          <DialogDescription>
            Sua opinião é muito importante para nós. Preencha os campos abaixo:
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center space-y-4 mt-5">
          <Label className="text-center">De forma geral, como avalia as atividades ofertadas?</Label>
          <StarRating rating={2} />
          <Label className="text-center">Você se sentiu acolhida em nosso espaço?</Label>
          <RadioGroup>
            <div className="flex flex-row space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="feel_welcomed_sim" />
                <Label htmlFor="feel_welcomed_sim">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" id="feel_welcomed_nao" />
                <Label htmlFor="feel_welcomed_nao">Não</Label>
              </div>
            </div>
          </RadioGroup>
          <Label className="text-center">Você recomendaria nosso espaço?</Label>
          <RadioGroup>
            <div className="flex flex-row space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="recommendation_sim" />
                <Label htmlFor="recommendation_sim">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" id="recommendation_nao" />
                <Label htmlFor="recommendation_nao">Não</Label>
              </div>
            </div>
          </RadioGroup>
          <Label className="text-center">Gostaria de deixar um depoimento?</Label>
            <Textarea className="text-sm border-[#F69053] text-muted-foreground"></Textarea>
        </div>
        <DialogFooter className="sm:justify-end mt-4">
          <DialogClose asChild>
            <Button>Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}