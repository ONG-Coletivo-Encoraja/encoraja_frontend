'use client';

import React, { useEffect, useState } from "react";
import { CalendarDays } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";
import API from '@/services/api';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { Event, UserOwner } from "@/interfaces/IEventData";

export default function EventUpdate() {
  const [eventData, setEventData] = useState<Event | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const { data: session } = useSession();

  const token = session?.token;
  const eventId = '4';

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await API.get(`/users/events/${eventId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });

        const fetchedEvent = response.data.event;

        const parsedDate = new Date(fetchedEvent.date);
        setEventData(fetchedEvent);
        setDate(parsedDate);

      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error:', error.response?.data || error.message);
        } else {
          console.error('Unexpected Error:', error);
        }
      }
    };

    fetchEventData();
  }, [eventId, token]);

  console.log()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (eventData) {
      setEventData({
        ...eventData,
        [id]: id === 'vacancies' || id === 'social_vacancies' || id === 'regular_vacancies' || id === 'workload'
          ? Number(value)
          : value
      });
    }
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    console.log("handleDateChange chamado");
    if (selectedDate) {
      const localDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
      
      console.log("Data local ajustada:", localDate);
      setDate(localDate);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-5xl">
        <CardHeader>
          <CardTitle>Detalhes do evento</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="flex flex-wrap gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Nome do Evento"
                value={eventData?.name || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Descrição</Label>
              <Input
                id="description"
                type="text"
                placeholder="Descrição do Evento"
                value={eventData?.description || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">Data</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {date ? date.toLocaleDateString() : 'Selecionar data'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => handleDateChange(selectedDate)}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="time">Horário</Label>
              <Input
                id="time"
                type="text"
                placeholder="Horário do Evento"
                value={eventData?.time || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="modality">Modalidade</Label>
              <Input
                id="modality"
                type="text"
                placeholder="Modalidade"
                value={eventData?.modality || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="status">Status</Label>
              <Input
                id="status"
                type="text"
                placeholder="Status"
                value={eventData?.status || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Tipo</Label>
              <Input
                id="type"
                type="text"
                placeholder="Tipo"
                value={eventData?.type || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="target_audience">Público Alvo</Label>
              <Input
                id="target_audience"
                type="text"
                placeholder="Público Alvo"
                value={eventData?.target_audience || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="vacancies">Vagas</Label>
              <Input
                id="vacancies"
                type="number"
                placeholder="Vagas"
                value={eventData?.vacancies || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="social_vacancies">Vagas Sociais</Label>
              <Input
                id="social_vacancies"
                type="number"
                placeholder="Vagas Sociais"
                value={eventData?.social_vacancies || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="regular_vacancies">Vagas Regulares</Label>
              <Input
                id="regular_vacancies"
                type="number"
                placeholder="Vagas Regulares"
                value={eventData?.regular_vacancies || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="material">Material</Label>
              <Input
                id="material"
                type="text"
                placeholder="Material"
                value={eventData?.material || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="interest_area">Área de Interesse</Label>
              <Input
                id="interest_area"
                type="text"
                placeholder="Área de Interesse"
                value={eventData?.interest_area || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Preço</Label>
              <Input
                id="price"
                type="number"
                placeholder="Preço"
                value={eventData?.price || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="workload">Carga Horária</Label>
              <Input
                id="workload"
                type="number"
                placeholder="Carga Horária"
                value={eventData?.workload || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="owner">Responsável</Label>
              <Input
                id="owner"
                type="text"
                placeholder="Nome do Proprietário"
                value={eventData?.user_owner.name || ''}
                className="w-full"
                onChange={(e) =>
                  setEventData({
                    ...eventData!,
                    user_owner: {
                      ...eventData!.user_owner,
                      name: e.target.value
                    }
                  })
                }
                readOnly
              />
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-end space-x-4">
          <Link href="/home">
            <Button variant="outline">Cancelar</Button>
          </Link>
          <Button type="submit">Salvar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
