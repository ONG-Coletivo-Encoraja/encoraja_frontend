import * as React from "react";
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

export default function Events(): React.JSX.Element {
  const date = new Date(); 
  // data estática

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
                value="Exemplo de Evento"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Descrição</Label>
              <Input
                id="description"
                type="text"
                placeholder="Descrição do Evento"
                value="Descrição do evento"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">Data</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {date.toLocaleDateString()}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="time">Horário</Label>
              <Input
                id="time"
                type="text"
                placeholder="Horário do Evento"
                value="14:00"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="modality">Modalidade</Label>
              <Input
                id="modality"
                type="text"
                placeholder="Modalidade"
                value="Online"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="status">Status</Label>
              <Input
                id="status"
                type="text"
                placeholder="Status"
                value="Ativo"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Tipo</Label>
              <Input
                id="type"
                type="text"
                placeholder="Tipo"
                value="Tipo do Evento"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="target_audience">Público Alvo</Label>
              <Input
                id="target_audience"
                type="text"
                placeholder="Público Alvo"
                value="Público Alvo"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="vacancies">Vagas</Label>
              <Input
                id="vacancies"
                type="number"
                placeholder="Vagas"
                value="100"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="social_vacancies">Vagas Sociais</Label>
              <Input
                id="social_vacancies"
                type="number"
                placeholder="Vagas Sociais"
                value="20"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="regular_vacancies">Vagas Regulares</Label>
              <Input
                id="regular_vacancies"
                type="number"
                placeholder="Vagas Regulares"
                value="80"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="material">Material</Label>
              <Input
                id="material"
                type="text"
                placeholder="Material"
                value="Material do Evento"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="interest_area">Área de Interesse</Label>
              <Input
                id="interest_area"
                type="text"
                placeholder="Área de Interesse"
                value="Área de Interesse"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Preço</Label>
              <Input
                id="price"
                type="number"
                placeholder="Preço"
                value="100"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="workload">Carga Horária</Label>
              <Input
                id="workload"
                type="number"
                placeholder="Carga Horária"
                value="4"
                className="w-full"
                readOnly
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="owner">ID do Proprietário</Label>
              <Input
                id="owner"
                type="number"
                placeholder="ID do Proprietário"
                value="1"
                className="w-full"
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
