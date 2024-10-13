'use client';

import * as React from "react";
import { CircleUserRound, CalendarDays } from 'lucide-react';
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";

export function ProfileForm({ formData, onSubmit }: any) {
  const [date, setDate] = React.useState<Date>();

  return (
   <Card className="w-full max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle>Meu perfil</CardTitle>
        <div className="flex items-center justify-center h-full">
          <CircleUserRound className="w-16 h-16 opacity-50" />
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="flex flex-wrap gap-4">
          {formData.map((field: any) => (
            <div
              key={field.id}
              className="flex flex-col space-y-1.5"
              style={{ flexBasis: field.colSpan ? `${field.colSpan}px` : 'auto', flex: '1 1 calc(33.333% - 1rem)' }}
            >
              <Label htmlFor={field.id}>{field.label}</Label>
              {field.type === "date" ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarDays cl assName="mr-2 h-4 w-4" />
                      {date
                        ? format(date, "P", { locale: ptBR })
                        : <span>{field.placeholder || "Selecione a data"}</span>}
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
              ) : field.type === "select" ? (
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={field.placeholder} />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {field.options.map((option: any) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  id={field.id}
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  readOnly={field.readOnly}
                  defaultValue={field.value || ""}
                  className="w-full"
                />
              )}
            </div>
          ))}
        </form>
      </CardContent>
      <CardFooter className="flex justify-end space-x-4">
        <Link href="/home">
            <Button variant="outline">Cancelar</Button>
        </Link>
        <Button type="submit">Salvar</Button>
        </CardFooter>
    </Card>
  );
}
