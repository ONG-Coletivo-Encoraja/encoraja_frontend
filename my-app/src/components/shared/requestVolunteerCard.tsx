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
import { CircleUserIcon } from "lucide-react";
import Link from "next/link";



export function RequestVolunteerCard() {
  return (
    <Card className="w-[400px]">
      <CardHeader className="flex items-center">
        <CircleUserIcon className="w-12 h-12 text-[#5E5E5E]" />
      </CardHeader>
      <CardContent>
      <div className="flex flex-col gap-2">
        <Label className=" text-[#727272]"><b>Nome:</b> Maria Eduarda </Label>
        <Label className=" text-[#727272]"><b>Email:</b> maria@email.com </Label>
        <Label className=" text-[#727272]"><b>Telefone:</b> (41) 99127-9729</Label>
        <Label className=" text-[#727272]"><b>Disponibilidade:</b> todas as manhãs</Label>
        <Label className=" text-[#727272]"><b>Experiência:</b> Programação</Label>
      </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href="/accept-volunteers/details">
          <Label className="text-[#F69053] underline">Ver candidatura</Label>
        </Link>
      </CardFooter>
    </Card>
  )
}