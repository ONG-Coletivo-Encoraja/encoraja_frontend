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

export function NextEventsCard() {
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardDescription className =" text-[#F69053]">Próximos eventos</CardDescription>
        <CardTitle>Curso de costura</CardTitle>
        <ul className="flex space-x-4">
          <li><Badge variant={'secondary'}>14H</Badge></li>
          <li><Badge>14H</Badge></li>
          <li><Badge>14H</Badge></li>
          <li><Badge variant={'tertiary'}>14H</Badge></li>
          <li><Badge className=" h-[50px] rounded-[25%] " variant={'quaternary'}>14/07</Badge></li>
        </ul>
        <Label className=" text-[#727272]">Responsável: Juliana Baiçar</Label>
      </CardHeader>
      <CardContent>
        <Separator />
      </CardContent>
      <CardHeader>
        <CardDescription className =" text-[#F69053]">Próximos eventos</CardDescription>
        <CardTitle>Curso de costura</CardTitle>
        <ul className="flex space-x-4">
          <li><Badge variant={'secondary'}>14H</Badge></li>
          <li><Badge>14H</Badge></li>
          <li><Badge>14H</Badge></li>
          <li><Badge variant={'tertiary'}>14H</Badge></li>
          <li><Badge className=" h-[50px] rounded-[25%] " variant={'quaternary'}>14/07</Badge></li>
        </ul>
        <Label className=" text-[#727272]">Responsável: Juliana Baiçar</Label>
      </CardHeader>
    </Card>
  )
}