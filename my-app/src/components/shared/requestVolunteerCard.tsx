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
import { CircleUserIcon } from "lucide-react";
import Link from "next/link";

interface RequestCardProps {
  request: IRequestVolunteer
}

export function RequestVolunteerCard({ request }: RequestCardProps) {
  return (
    <Card className="w-[400px]">
      <CardHeader className="flex items-center">
        <CircleUserIcon className="w-12 h-12 text-[#5E5E5E]" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Label className=" text-[#727272]"><b>Nome:</b>{request.user?.name} </Label>
          <Label className=" text-[#727272]"><b>Email:</b> {request.user?.email} </Label>
          <Label className=" text-[#727272]"><b>Disponibilidade:</b>{request.availability}</Label>
          <Label className=" text-[#727272]"><b>Experiência:</b> {request.course_experience}</Label>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link key={request.id} href={`/accept-volunteers/details/${request.id}`}>
          <Label className="text-[#F69053] underline">Ver candidatura</Label>
        </Link>
      </CardFooter>
    </Card>
  )
}