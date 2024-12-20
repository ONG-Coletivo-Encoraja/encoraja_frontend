'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
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
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { translateStatusEvent, translateModalityEvent, translateTypeEvent } from "@/services/translate";

export default function EventsDetails() {
  const router = useRouter();
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inscriptionsDialogOpen, setInscriptionsDialogOpen] = useState(false);
  const { data: session } = useSession();

  const { fetchData, handleReviewClick } = useEventsDetailsFunctions(eventId, setEvent, setReviews, setLoading);

  useEffect(() => {
    fetchData();
  }, [eventId, session]);

  return (
    <div className="h-full flex justify-center items-center">
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
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
                  {event?.status !== 'finished' && (
                    <div>
                      <Link key={eventId} href={`/eventos/atualizar/${eventId}`}><Button>Editar evento</Button></Link>
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
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}