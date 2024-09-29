'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  description: z.string().min(2, { message: "A descrição deve ter pelo menos 2 caracteres." }),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), { message: "Insira uma data válida." }),
  time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Insira um horário no formato HH:MM." }),
  modality: z.enum(["online", "presencial", "híbrido"], { message: "Selecione uma modalidade válida." }),
  status: z.enum(["ativo", "inativo", "pendente"], { message: "Selecione um status válido." }),
  type: z.enum(["palestra", "workshop", "curso"], { message: "Selecione um tipo de evento válido." }),
  workload: z.number().min(1, { message: "A carga horária deve ser no mínimo 1 hora." }),
  owner: z.string().min(2, { message: "O responsável deve ter pelo menos 2 caracteres." }),
  results: z.string().min(2, { message: "Os resultados devem ter pelo menos 2 caracteres." }),
  observation: z.string().min(2, { message: "A observação deve ter pelo menos 2 caracteres." }),
});

export default function ReportEvent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      date: "",
      time: "",
      modality: "presencial",
      status: "ativo",
      type: "palestra",
      workload: 10,
      owner: "",
      results: "",
      observation: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="w-full max-w-[2000px] mx-auto mt-10 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Relatório do Evento</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-3 md:col-span-1">
                  <FormLabel>Nome do evento</FormLabel>
                  <FormControl>
                    <Input placeholder="Curso de costura" className="w-[300px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data do evento</FormLabel>
                  <FormControl>
                    <Input type="date" className="flex justify-end" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Horário do evento</FormLabel>
                  <FormControl>
                    <Input type="time" className="flex justify-end" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="modality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Modalidade do evento</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a modalidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="presencial">Presencial</SelectItem>
                        <SelectItem value="online">Online</SelectItem>
                        <SelectItem value="híbrido">Híbrido</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de evento</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de evento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="palestra">Palestra</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="curso">Curso</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workload"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Carga horária</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem className="col-span-3 md:col-span-1">
                  <FormLabel>Voluntário responsável</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do responsável" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status do evento</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ativo">Ativo</SelectItem>
                        <SelectItem value="inativo">Inativo</SelectItem>
                        <SelectItem value="pendente">Pendente</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Descrição da atividade</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descreva a atividade do evento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="results"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Resultados obtidos</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descreva os resultados do evento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="observation"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Observações</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Adicione qualquer observação relevante" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <Button variant="outline">
          Cancelar
        </Button>
        <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
          Salvar
        </Button>
      </CardFooter>
    </Card>
  );
}
