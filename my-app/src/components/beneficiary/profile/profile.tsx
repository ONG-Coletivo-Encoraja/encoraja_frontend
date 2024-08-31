'use client';

import * as React from "react"
import { CircleUserRound, CalendarDays } from 'lucide-react';
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { cn } from "@/lib/utils"
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import Link from "next/link";



export function Profile() {
    const [date, setDate] = React.useState<Date>()
    const { data: session } = useSession();

    const userType = session?.user?.permission

  
    return (
      <Card className="w-[1007px] h-[600px] max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle>Meu perfil</CardTitle>
          <div className="flex items-center justify-center h-full">
            <CircleUserRound className="w-16 h-16 opacity-50" />
          </div>
        </CardHeader>
        <CardContent>
          <form> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome completo</Label>
                <Input id="name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="birthdate">Data de nascimento</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {date ? format(date, "P", { locale: ptBR }) : <span>Selecione a data</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="race">Raça</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="branca">Branca</SelectItem>
                    <SelectItem value="indigena">Indígena</SelectItem>
                    <SelectItem value="parda">Parda</SelectItem>
                    <SelectItem value="preta">Preta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gênero</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="feminino">Feminino</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cep">CEP</Label>
                <Input id="cep" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="street">Rua</Label>
                <Input id="street" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="number">Número</Label>
                <Input id="number" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="neighborhood">Bairro</Label>
                <Input id="neighborhood" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="city">Cidade</Label>
                <Input id="city" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="userType">Tipo de usuário</Label>
                <Input 
                    id="userType" 
                    value={userType} 
                    readOnly 
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/home"><Button variant="outline">Cancelar</Button></Link>             
          <Button>Salvar</Button>
        </CardFooter>
      </Card>
    )
  }
  