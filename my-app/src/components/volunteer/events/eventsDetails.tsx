'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import DialogReview from './dialogReview';
import DialogInscriptions from './dialogInscriptions';
import { Event } from '@/interfaces/IEventData';
import { Review } from '@/interfaces/IReview';
import CircularProgress from '@mui/material/CircularProgress';
import { useEventsDetailsFunctions } from '@/app/api/events/eventService';
import ReviewUser from './reviewUser';
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { createInscription } from '@/app/api/inscriptions/inscription';
import ReviewForm from './reviewForm';
import { AxiosError } from "axios";
import { translateModalityEvent, translateTypeEvent, translateStatusEvent } from "@/services/translate";

import Link from 'next/link';

export default function EventsDetails() {
  const { toast } = useToast();
  const { data: session } = useSession(); 
  const router = useRouter();
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inscriptionsDialogOpen, setInscriptionsDialogOpen] = useState(false);

  const { fetchData, handleReviewClick } = useEventsDetailsFunctions(eventId, setEvent, setReviews, setLoading);

  useEffect(() => {
    fetchData();
  }, [eventId, session]);

  const handleCreateInscription = async () => {
    if (session?.token) {
        try {
            await createInscription(Number(eventId), session.token); 
            toast({
                description: "Inscrição realizada com sucesso!",
            });
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                const errorMessage = error.response.data?.message;
                if (errorMessage) {
                    toast({
                        title: "Erro!",
                        description: errorMessage,
                        variant: "destructive",
                    });
                } else {
                    console.error("Erro inesperado na resposta:", error);
                    toast({
                        title: "Erro!",
                        description: "Ocorreu um erro inesperado. Tente novamente mais tarde.",
                        variant: "destructive",
                    });
                }
            }
        }
    }
};



  return (
    <div className='flex justify-center items-center h-full w-full'>
      {loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <CircularProgress />
        </div>
      ) : (
        <Card className="w-[1000px] h-[600px] flex">
          <div className='m-5 flex flex-wrap'>
            <CardHeader>
              <div className="flex justify-start mb-5">
                <Button onClick={() => router.back()}>Voltar</Button>
              </div>
              <CardDescription className="text-[#F69053]">Próximos eventos</CardDescription>
              <CardTitle>{event?.name}</CardTitle>
              <ul className="flex space-x-4">
                <li><Badge>{event?.time}</Badge></li>
                <li><Badge>{translateModalityEvent(event?.modality)}</Badge></li>
                <li><Badge>{translateTypeEvent(event?.type)}</Badge></li>
                <li><Badge>{translateStatusEvent(event?.status)}</Badge></li>
                <li><Badge className="h-[50px] rounded-3xl" variant={'quaternary'}>{event?.date}</Badge></li>
              </ul>
              <Label className="text-[#727272]">Responsável: {event?.user_owner.name}</Label>
            </CardHeader>
            <CardContent className='flex flex-col gap-5'>
              <Separator />
              <br />
              <Label className="text-[#727272]">Carga horária: {event?.workload}h</Label>
              <Label className="text-[#727272]">{event?.description}</Label>
              <div className='mt-5 flex flex-col items-start space-y-3'>
                <Label>Materiais necessários: {event?.material}</Label>
                <Label>Valor do curso: R$ {event?.price}</Label>
              </div>
              <div className='flex justify-start flex-wrap gap-5'>
                {(event?.status === 'finished' || event?.status === 'active') && (
                  <div>
                    <Button onClick={() => setInscriptionsDialogOpen(true)}>Ver Inscritos</Button> 
                    <DialogInscriptions
                      open={inscriptionsDialogOpen}
                      onClose={() => setInscriptionsDialogOpen(false)}
                      eventId={eventId}
                      eventStatus={event?.status}
                    />
                  </div>
                )}
                {event?.status !== 'finished' && event?.user_owner.id === session?.user.id && (
                  <div>
                    <Link href={`/eventos/atualizar/${eventId}`}>
                    <Button>Editar evento</Button>
                    </Link>
                  </div>
                )}
                {event?.user_owner.id === session?.user.id && event?.status === 'finished' && (
                <Link href={`/relatorios/eventos/${eventId}`}>
                <Button>
                  Relatório
                </Button>
                </Link>
              )}
              </div>
            </CardContent>
            <CardFooter className='flex items-end justify-center'>
              {event?.status !== 'finished' && event?.user_owner.id !== session?.user.id && (
                  <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Se inscrever</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Inscrição</AlertDialogTitle>
                      <AlertDialogDescription>
                        Você deseja se inscrever no evento {event?.name}, que ocorrerá no dia {event?.date} às {event?.time}?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={handleCreateInscription}>Sim</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                  )}
            </CardFooter>
          </div>
          <div className='m-5'>
            <CardHeader className='w-[400px]'>
              <CardTitle>Avaliações</CardTitle>
            </CardHeader>
            <CardContent className='h-[400px] flex items-center overflow-y-auto'>
              <div className='flex flex-col gap-4'>
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div key={review.id} onClick={() => handleReviewClick(review, setSelectedReview, setDialogOpen)}>
                      <ReviewUser
                        userName={review.user.name}
                        rating={review.rating}
                        observation={review.observation}
                      />
                    </div>
                  ))
                ) : (
                  <Label>Nenhuma avaliação encontrada.</Label>
                )}
                <DialogReview
                  rating={selectedReview?.rating || 0}
                  observation={selectedReview?.observation || ''}
                  feel_welcomed={selectedReview?.feel_welcomed || false}
                  recommendation={selectedReview?.recommendation || false}
                  open={dialogOpen}
                  onClose={() => setDialogOpen(false)}
                />
              </div>
            </CardContent>
            <Separator />

            <CardFooter className='mt-4 flex justify-center'>
            {event?.status === 'finished' && (
              <ReviewForm />
            )}
            </CardFooter>

          </div>
        </Card>
      )}
    </div>
  );
}