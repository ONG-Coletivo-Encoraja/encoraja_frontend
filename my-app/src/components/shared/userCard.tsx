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



export function UserCard() {
  return (
    <Card className="w-[400px]">
      <CardHeader className="flex items-center">
        <CircleUserIcon className="w-12 h-12 text-[#5E5E5E]" />
        <Badge variant={'secondary'}>Beneficiário</Badge>
      </CardHeader>
      <CardContent>
      <div className="flex flex-col gap-2">
        <Label className=" text-[#727272]"><b>Nome:</b> Maria Eduarda </Label>
        <Label className=" text-[#727272]"><b>Data de Nascimento:</b> 16/02/2004 </Label>
        <Label className=" text-[#727272]"><b>Email:</b> maria@email.com </Label>
        <Label className=" text-[#727272]"><b>Telefone:</b> (41) 99127-9729</Label>
        <Label className=" text-[#727272]"><b>Inscrições:</b> 5 </Label>
      </div>

      </CardContent>
    </Card>
  )
}