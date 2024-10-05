'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import DialogReview from './dialogReview';
import DialogInscriptions from './dialogInscriptions'; // Importando o DialogInscriptions
import { fetchEventById } from '@/app/api/events/eventService';
import { Event } from '@/interfaces/IEventData';
import { useSession } from 'next-auth/react';
import ReviewUser from '@/components/administrator/events/reviewUser';
import { Review } from '@/interfaces/IReview';
import CircularProgress from '@mui/material/CircularProgress';

export default function EventsDetails() {
  const router = useRouter();
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const { data: session } = useSession();
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inscriptionsDialogOpen, setInscriptionsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (eventId && session?.token) {
        try {
          const eventData = await fetchEventById(eventId, session.token);
          setEvent(eventData);
          const reviewResponse = await fetch(`http://127.0.0.1:8000/api/reviews/${eventId}`, {
            headers: { Authorization: `Bearer ${session.token}` },
          });
          const reviewData = await reviewResponse.json();
          setReviews(reviewData.reviews.data);
        } catch (error) {
          console.error("Erro ao buscar evento:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchData();
  }, [eventId, session]);

  const handleReviewClick = (review: Review) => {
    setSelectedReview(review);
    setDialogOpen(true);
  };

  return (
    <div>
      <Button onClick={() => router.back()} className="mb-5">Voltar</Button>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <CircularProgress />
        </div>
      ) : (
        <Card className="w-[1000px] h-[600px] flex flex-wrap">
          <div className='m-5'>
            <CardHeader>
              <CardDescription className="text-[#F69053]">Próximos eventos</CardDescription>
              <CardTitle>{event?.name}</CardTitle>
              <ul className="flex space-x-4">
                <li><Badge variant={'secondary'}>{event?.time}</Badge></li>
                <li><Badge>{event?.modality}</Badge></li>
                <li><Badge>{event?.type}</Badge></li>
                <li><Badge variant={'red'}>{event?.status}</Badge></li>
                <li><Badge className="h-[50px] rounded-[25%]" variant={'quaternary'}>{event?.date}</Badge></li>
              </ul>
              <Label className="text-[#727272]">Responsável: {event?.user_owner.name}</Label>
            </CardHeader>
            <CardContent className='flex flex-col gap-5'>
              <Separator />
              <br />
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
                {event?.status !== 'finished' && (
                  <div>
                    <Button>Editar evento</Button>
                  </div>
                )}
              </div>
            </CardContent>
          </div>
          <div className='m-5'>
            <CardHeader className='w-[400px]'>
              <CardTitle>Avaliações</CardTitle>
            </CardHeader>
            <CardContent className='h-[400px] flex items-center overflow-y-auto'>
              <div className='flex flex-col gap-4'>
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div key={review.id} onClick={() => handleReviewClick(review)}>
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
          </div>
        </Card>
      )}
    </div>
  );
}