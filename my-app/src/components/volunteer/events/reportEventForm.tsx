'use client';

import { useForm } from "react-hook-form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEventsDetailsFunctions } from '@/app/api/events/eventService';
import { Event } from '@/interfaces/IEventData';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import { Review } from '@/interfaces/IReview';
import { IReportAdmin } from '@/interfaces/IReportAdmin';
import { registerReportAdmin } from "@/app/api/volunteers/reportAdmin";
import { AxiosError } from 'axios';
import { useToast } from "@/hooks/use-toast";
import CircularProgress from '@mui/material/CircularProgress';
import { translateModalityEvent, translateTypeEvent, translateStatusEvent } from "@/services/translate";

export default function ReportEvent() {
  const { data: session } = useSession(); 
  const router = useRouter();
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inscriptionsDialogOpen, setInscriptionsDialogOpen] = useState(false);
  const { toast } = useToast();

  const { fetchData, handleReviewClick } = useEventsDetailsFunctions(eventId, setEvent, setReviews, setLoading);


  useEffect(() => {
    fetchData();
  }, [eventId, session?.token]);
  console.log("Dados do evento:", event, "Id do evento:", eventId);

  const form = useForm<IReportAdmin>({
    defaultValues: {
      qtt_person: 0,
      event_id: event?.id,
      description: "",
      results:  "",
      observation:  ""
    },
  });

  useEffect(() => {
    if (event && event.id) {
      form.setValue("event_id", event.id);
    }
  }, [event, form]);


  const handleSubmit = async (values: IReportAdmin) => {
    console.log(values);

    const data: IReportAdmin = {
      ...values,
    };

    if (!session?.token) {
      return;
    }

    try {
      const response = await registerReportAdmin(data, session.token); 
      console.log(response);
      toast ({
        title: "Relatório enviado com sucesso!",
        description: response.message,
      });
      router.back();
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response.data?.message;
        const errors = error.response.data.errors;

        if (errorMessage) {
          toast({
            title: "Erro!",
            description: errorMessage,
            variant: "destructive",
          });
        }
        else if (errors && typeof errors === 'object') {
          const firstKey = Object.keys(errors)[0];
          const firstErrorMessage = errors[firstKey][0];
  
          toast({
            title: "Falha ao enviar relatório!",
            description: firstErrorMessage,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Erro!",
            description: "Ocorreu um problema ao enviar o relatório.",
            variant: "destructive",
          });
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }
  return (

    <Card className="w-full max-w-[800px] mx-auto mt-10 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Relatório do Evento</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-3">
            <Label>Nome do evento</Label>
            <Input readOnly value={event?.name} />
          </div>
          <div>
          <Label>Status do evento</Label>
          <Input readOnly value={translateStatusEvent(event?.status)} />
          </div>
          <div>
            <Label>Data do evento</Label>
            <Input readOnly value={event?.date} />
          </div>
          <div>
            <Label>Horário do evento</Label>
            <Input readOnly value={event?.time} />
          </div>
          <div>
            <Label>Modalidade do evento</Label>
            <Input readOnly value={translateModalityEvent(event?.modality)} />
          </div>
          <div>
            <Label>Tipo do evento</Label>
            <Input readOnly value={translateTypeEvent(event?.type)} />
          </div>
          <div>
            <Label>Carga horária</Label>
            <Input readOnly value={event?.workload} />
          </div>
          <div className="col-span-3">
            <Label>Voluntário responsável</Label>
            <Input readOnly value={event?.user_owner.name} />
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          <FormField
            control={form.control}
            name="event_id"
            render={({ field }) => (
              <FormItem className="col-span-2 flex items-center">
                <FormControl>
                  <Input type="hidden" {...field} value={field.value || ''} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
              control={form.control}
              name="qtt_person"
              render={({ field }) => (
                <FormItem className="col-span-2 flex items-center">
                  <FormLabel className="mr-2">Quantas pessoas participaram do evento?</FormLabel>
                  <FormControl>
                    <Input type="number" className="w-16" {...field} /> 
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Descrição da atividade</FormLabel>
                  <FormControl>
                    <Textarea required placeholder="Descreva a atividade do evento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="results"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Resultados obtidos</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descreva os resultados do evento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="observation"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Observações</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Adicione qualquer observação relevante" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <Button onClick={() => router.back()} variant="outline">
          Cancelar
        </Button>
        <Button type="submit" onClick={form.handleSubmit(handleSubmit)}>
          Salvar
        </Button>
      </CardFooter>
    </Card>
  );
}
