'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NumberFormat from 'react-number-format';
import { z } from "zod";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InputMask from "react-input-mask";
import { Checkbox } from "@/components/ui/checkbox";  
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { registerEvent } from "@/app/api/events/registerEvent";
import { EventData } from "@/interfaces/IEventData";
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { NumberFormatBase } from "react-number-format";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  date: z.string().refine((val) => !isNaN(Date.parse(val))),
  time: z.string().regex(/^\d{2}:\d{2}$/, { message: "Insira um horário válido." }),
  modality: z.string().min(2, { message: "Selecione uma modalidade" }),
  status: z.string().min(2, { message: "Selecione um status" }),
  type: z.string().min(2, { message: "Selecione um tipo de evento." }),
  target_audience: z.string(),
  vacancies: z.number().min(1, { message: "A quantidade de vagas deve ser no mínimo 1." }),
  social_vacancies: z.number().min(1, { message: "A quantidade de vagas deve ser no mínimo 1." }),
  regular_vacancies: z.number().min(1, { message: "A quantidade de vagas deve ser no mínimo 1." }),
  material: z.string(),
  interest_area: z.string(),
  price: z.number(),
  workload:  z.number(),
  owner:  z.number(),
});

export default function RegisterEvent() {
  const router = useRouter();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      date: "",
      time: "",
      modality: "",
      status: "",
      type: "",
      target_audience: "",
      vacancies: 10,
      social_vacancies: 10,
      regular_vacancies: 10,
      material: "",
      interest_area: "",
      price: 0,
      workload: 0,
      owner: 0
  }
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {

    const data: EventData = {
      name: values.name,
      description: values.description,
      date: values.date,
      time: values.time,
      modality: values.modality,
      status: values.status,
      type: values.type,
      target_audience: values.target_audience,
      vacancies: values.vacancies,
      social_vacancies: values.social_vacancies,
      regular_vacancies: values.regular_vacancies,
      material: values.material,
      interest_area: values.interest_area,
      price: values.price,
      workload: values.workload,
      owner: values.owner
    };

    try {
      const response = await registerEvent(data);
      toast({
        title: "Sucesso!",
        description: response.message,
        variant: "default",
      });
      console.log(response);
      if (response) {
        router.push('/home');
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errors = error.response.data.errors;
    
        const firstKey = Object.keys(errors)[0];
    
        const firstErrorMessage = errors[firstKey][0];
    
        console.log(firstErrorMessage);
    
        toast({
          title: "Falha no cadastro!",
          description: firstErrorMessage,
          variant: "destructive",
        });
      } else {
        console.error('Erro inesperado:', error);
        alert('Ocorreu um erro inesperado.');
      }
    }  
  };

  return (
    <Card className="w-full max-w-[1000px] mx-auto mt-10 shadow-lg">
      <CardHeader>
          <CardTitle>Cadastro de evento</CardTitle>
        </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do evento" {...field} />
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
                  <FormLabel>Data</FormLabel>
                  <FormControl className="flex justify-end">
                    <Input type="date" {...field} />
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
                  <FormLabel>Horário</FormLabel>
                  <FormControl className="flex justify-end">
                    <InputMask mask="99:99" value={field.value} onChange={field.onChange}>
                      {(inputProps) => <Input placeholder="00:00" {...inputProps} />}
                    </InputMask>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-4">
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                  <Textarea placeholder="Descrição do evento" className="border-[#ededed" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          <FormField
              control={form.control}
              name="modality"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Modalidade</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue="">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="presential">Presencial</SelectItem>
                        <SelectItem value="hybrid">Híbrido</SelectItem>
                        <SelectItem value="remote">Remoto</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
{/*
          <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue="">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Ativo</SelectItem>
                        <SelectItem value="inactive">Inativo</SelectItem>
                        <SelectItem value="pending">Pendente</SelectItem>
                        <SelectItem value="finished">Finalizado</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
*/}
          <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Tipo</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue="">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="course">Curso</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="lecture">Palestra</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

        <FormField
              control={form.control}
              name="target_audience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Público alvo</FormLabel>
                  <FormControl>
                    <Input placeholder="Público alvo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          <FormField
              control={form.control}
              name="vacancies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total de vagas</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          <FormField
              control={form.control}
              name="social_vacancies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vagas Sociais</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          <FormField
              control={form.control}
              name="regular_vacancies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vagas Regulares</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

        <FormField
              control={form.control}
              name="material"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Material</FormLabel>
                  <FormControl>
                    <Input placeholder="Material do evento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

        <FormField
              control={form.control}
              name="interest_area"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Área de interesse</FormLabel>
                  <FormControl>
                    <Input placeholder="Área de interesse" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

      <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
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
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Voluntário responsável</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
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
        <Button type="submit" onClick={form.handleSubmit(handleSubmit)}>
          Salvar
        </Button>
      </CardFooter>
    </Card>
  );
}
