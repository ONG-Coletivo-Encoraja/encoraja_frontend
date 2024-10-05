import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import StarRating from "@/components/ui/rating";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface DialogReviewProps {
  rating: number;
  observation: string;
  open: boolean;
  feel_welcomed: boolean;
  recommendation: boolean; 
  onClose: () => void;
}

export default function DialogReview({
  rating,
  observation,
  open,
  onClose,
  feel_welcomed,
  recommendation,
}: DialogReviewProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Deixe sua Avaliação</DialogTitle>
          <DialogDescription>
            Sua opinião é muito importante para nós. Preencha os campos abaixo:
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center space-y-4 mt-5">
          <Label className="text-center">De forma geral, como avalia as atividades ofertadas?</Label>
          <StarRating rating={rating} />
          <Label className="text-center">Você se sentiu acolhida em nosso espaço?</Label>
          <RadioGroup value={feel_welcomed ? "sim" : "nao"} disabled>
            <div className="flex flex-row space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="feel_welcomed_sim" disabled />
                <Label htmlFor="feel_welcomed_sim">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" id="feel_welcomed_nao" disabled />
                <Label htmlFor="feel_welcomed_nao">Não</Label>
              </div>
            </div>
          </RadioGroup>
          <Label className="text-center">Você recomendaria nosso espaço?</Label>
          <RadioGroup value={recommendation ? "sim" : "nao"} disabled>
            <div className="flex flex-row space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="recommendation_sim" disabled />
                <Label htmlFor="recommendation_sim">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" id="recommendation_nao" disabled />
                <Label htmlFor="recommendation_nao">Não</Label>
              </div>
            </div>
          </RadioGroup>
          <Label className="text-center">Gostaria de deixar um depoimento?</Label>
          <div className="border border-[#F69053] p-4 rounded-md h-20 w-[400px]">
            <Label className="text-sm text-muted-foreground">{observation}</Label>
          </div>
        </div>
        <DialogFooter className="sm:justify-end mt-4">
          <DialogClose asChild>
            <Button type="button" onClick={onClose}>Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}