'use client';

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CircleUserIcon } from "lucide-react";
import Link from "next/link";
import { translatePermission } from "@/services/translate";

interface UserCardProps {
  user: IUser
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card className="w-[400px]">
      <CardHeader className="flex items-center">
        <CircleUserIcon className="w-12 h-12 text-[#5E5E5E]" />
        <Badge variant={'secondary'}>{translatePermission(user.permission)}</Badge>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Label className=" text-[#727272]"><b>Nome:</b> {user.name} </Label>
          <Label className=" text-[#727272]"><b>Data de Nascimento:</b> {user.date_birthday} </Label>
          <Label className=" text-[#727272]"><b>Email:</b> {user.email} </Label>
          <Label className=" text-[#727272]"><b>Telefone:</b> {user.phone}</Label>
        </div>
      </CardContent>
      <CardFooter>
        <Label className="text-[#F69053] underline"><Link href={`/usuarios/detalhes/${user.id}`}>Alterar permissão</Link></Label>
      </CardFooter>
    </Card>
  )
}