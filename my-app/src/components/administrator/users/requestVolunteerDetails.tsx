'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectGroup, SelectLabel, SelectValue } from "@/components/ui/select";
import { CircleUserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";



export function RequestVolunteerDetailsCard() {
  return (
    <Card className="w-[1000px] h-[600px]">
      <CardHeader className="flex items-center">
        <CircleUserIcon className="w-16 h-16 text-[#5E5E5E]" />
      </CardHeader>
      <CardContent>
      <div className="flex flex-col gap-6 ml-6">
        <Label className=" text-[#727272]"><b>Nome:</b> Maria Eduarda </Label>
        <Label className=" text-[#727272]"><b>Data de nascimento:</b> 16/02/2004 </Label>
        <Label className=" text-[#727272]"><b>Email:</b> maria@email.com </Label>
        <Label className=" text-[#727272]"><b>Telefone:</b> (41) 99127-9729</Label>
        <Label className=" text-[#727272]"><b>Disponibilidade:</b> todas as manhãs</Label>
        <Label className=" text-[#727272]"><b>Experiência:</b> Programação</Label>
        <Label className=" text-[#727272]"><b>Como soube:</b> Amigos</Label>
        <Label className=" text-[#727272]"><b>Expectativas:</b> Altas</Label>
        <Label className=" text-[#727272]"><b>Redes Socias:</b> Intagram</Label>
      </div>
      <div className="m-6 flex items-center gap-4">
        <Label className=" text-[#727272] text-semibold">Status:</Label>
        <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue  />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
            <SelectItem value="Pendente">Pendete</SelectItem>
            <SelectItem value="Aprovado">Aprovado</SelectItem>
            <SelectItem value="Rejeitado">Rejeitado</SelectItem>
            </SelectGroup>
        </SelectContent>
        </Select>
      </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <Button variant="outline">
          Cancelar
        </Button>
        <Button type="submit">
          Salvar
        </Button>
      </CardFooter>
    </Card>
  )
}