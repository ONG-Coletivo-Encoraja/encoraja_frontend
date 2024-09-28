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
import { HandHeart } from "lucide-react";


export function DefaultCard() {
return (
    <Card className="w-[400px]">
        <CardHeader>
            <CardDescription className =" text-[#F69053]">Solicitações pendentes</CardDescription>
            <div className="flex items-center justify-between">
                <CardTitle>Voluntários</CardTitle>
                <div className="bg-[#A732A9] rounded-full w-12 h-12 flex items-center justify-center">
                    <HandHeart color="white" />
                </div>
            </div>
        </CardHeader>
        <CardContent>
        <Separator />
        <div className="mt-5">
        <ul>
            <li><Label className=" text-[20px] text-[#5E5E5E]">Curso de costura</Label></li>
            <li><Label className=" text-[15px] text-[#F69053]">Ver candidatura</Label></li>
            <br></br>
            <li><Label className=" text-[20px] text-[#5E5E5E]">Curso de costura</Label></li>
            <li><Label className=" text-[15px] text-[#F69053]">Ver candidatura</Label></li>
            <br></br>
            <li><Label className=" text-[20px] text-[#5E5E5E]">Curso de costura</Label></li>
            <li><Label className=" text-[15px] text-[#F69053]">Ver cadidatura</Label></li>
        </ul>
        </div>
        </CardContent>
    </Card>
)
}