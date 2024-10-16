'use client';

import React, { useEffect, useState } from "react";
import { CalendarDays } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
import { Event } from "@/interfaces/IEventData";

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

        const fetchedEvent: Event = response.data.event;
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (eventData) {
      const newValue = id === 'vacancies' || id === 'social_vacancies' || id === 'regular_vacancies' || id === 'workload'
        ? Number(value)
        : value;

      setEventData(prev => ({
        ...prev!,
        [id]: newValue
      }));
    }
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const localDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
      setDate(localDate);
    }
  };

  const validateTimeFormat = (time: string) => {
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timePattern.test(time);
  };

  const handleSave = async () => {
    // if (eventData?.time && !validateTimeFormat(eventData.time)) {
    //   alert("O campo horário deve estar no formato HH:mm.");
    //   return;
    // }

    try {
      await API.put(`/admin/event/${eventId}`, {
        ...eventData,
        date: date?.toISOString().split('T')[0],
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };

  const handleSelectChange = (field: keyof Event) => (value: string) => {
    if (eventData) {
      setEventData(prev => ({
        ...prev!,
        [field]: value
      }));
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
                    onSelect={handleDateChange}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="time">Horário</Label>
              <Input
                id="time"
                type="time"
                placeholder="Horário do Evento (HH:mm)"
                value={eventData?.time || ''}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="modality">Modalidade</Label>
              <Select value={eventData?.modality || ''} onValueChange={handleSelectChange('modality')}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="presential">Presencial</SelectItem>
                  <SelectItem value="hybrid">Híbrido</SelectItem>
                  <SelectItem value="remote">Remoto</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="status">Status</Label>
              <Select value={eventData?.status || ''} onValueChange={handleSelectChange('status')}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Ativo</SelectItem>
                  <SelectItem value="inactive">Inativo</SelectItem>
                  <SelectItem value="pending">Pendente</SelectItem>
                  <SelectItem value="finished">Finalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Tipo</Label>
              <Select value={eventData?.type || ''} onValueChange={handleSelectChange('type')}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="course">Curso</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="lecture">Palestra</SelectItem>
                </SelectContent>
              </Select>
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
                value={eventData?.user_owner?.name || ''}
                className="w-full"
                readOnly
              />
            </div>

            <Button type="button" onClick={handleSave} className="mt-4">
              Salvar
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-end space-x-4">
          <Link href="/home">
            <Button variant="outline">Cancelar</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
