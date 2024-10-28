import { useEffect, useState } from "react";
import { useParams, useRouter } from 'next/navigation';
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
import { Rating } from "@mui/material";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { registerReview } from "@/app/api/events/registerReview";
import { useSession } from "next-auth/react";
import { Review } from "@/interfaces/IReview";
import { Textarea } from "@/components/ui/textarea";
import { useEventsDetailsFunctions } from '@/app/api/events/eventService';
import { Event } from '@/interfaces/IEventData';


export default function ReviewForm() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const { toast } = useToast();
  const [ratings, setRatings] = useState<number>(5);

  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const { fetchData, handleReviewClick } = useEventsDetailsFunctions(eventId, setEvent, setReviews, setLoading);

  useEffect(() => {
    fetchData();
  }, [eventId]);

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<Review>({
    defaultValues: {
      rating: 5,
      observation: "",
      feel_welcomed: true,
      recommendation: true,
      event_id: Number(eventId),
    }
  });

  const rating = watch("rating");

  const onSubmit = async (values: Review) => {
    if (!session?.token) {
      toast({
        title: "Erro!",
        description: "Token não encontrado. Por favor, faça login novamente.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await registerReview(values, session.token);
      toast({
        title: "Sucesso!",
        description: response.message,
        variant: "default",
      });
      setOpen(false); // Fecha o diálogo após o sucesso
    } catch (error) {
      const errorMessage = (error instanceof AxiosError && error.response?.data?.errors)
        ? error.response.data.errors[Object.keys(error.response.data.errors)[0]][0]
        : "Erro desconhecido";

      toast({
        title: "Falha no cadastro!",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Deixe aqui a sua avaliação!</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Deixe sua Avaliação</DialogTitle>
          <DialogDescription>
            Sua opinião é muito importante para nós. Preencha os campos abaixo:
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-4 mt-5">
          <Label className="text-center">De forma geral, como avalia as atividades ofertadas?</Label>
          <Rating
            name="simple-controlled"
            value={ratings}
            onChange={(event, newValue) => {
              setRatings(newValue || 5);
              setValue("rating", newValue || 5);
            }}
          />

          <Label className="text-center">Você se sentiu acolhida em nosso espaço?</Label>
          <RadioGroup value={watch("feel_welcomed") ? "sim" : "nao"} onValueChange={(value) => setValue("feel_welcomed", value === "sim")}>
            <div className="flex flex-row space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" />
                <Label>Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" />
                <Label>Não</Label>
              </div>
            </div>
          </RadioGroup>

          <Label className="text-center">Você recomendaria nosso espaço?</Label>
          <RadioGroup value={watch("recommendation") ? "sim" : "nao"} onValueChange={(value) => setValue("recommendation", value === "sim")}>
            <div className="flex flex-row space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" />
                <Label>Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" />
                <Label>Não</Label>
              </div>
            </div>
          </RadioGroup>

          <Label className="text-center">Gostaria de deixar um depoimento?</Label>
          <Textarea
            {...register("observation")}
            className="border border-[#F69053] p-4 rounded-md h-20 w-[400px]"
          />

          <DialogFooter className="sm:justify-end mt-4">
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
 