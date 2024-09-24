'use client';

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import StarRating from "../ui/rating";



export function EventCard() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardDescription className =" text-[#F69053]">Próximos eventos</CardDescription>
        <CardTitle>Curso de costura</CardTitle>
        <ul className="flex space-x-4">
          <li><Badge variant={'secondary'}>14:00</Badge></li>
          <li><Badge>Remoto</Badge></li>
          <li><Badge>Oficina</Badge></li>
          <li><Badge variant={'tertiary'}>Ativo</Badge></li>
          <li><Badge className=" h-[50px] rounded-[25%] " variant={'quaternary'}>14/07</Badge></li>
        </ul>
        <Label className=" text-[#727272]">Responsável: Juliana Baiçar</Label>
      </CardHeader>
      <CardContent>
      <Separator />
      <br></br>
      <Label className=" text-[#727272]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt praesentium laborum illum voluptates. </Label>
      </CardContent>
      <CardFooter className="flex justify-end">
        <StarRating />
      </CardFooter>
    </Card>
  )
}