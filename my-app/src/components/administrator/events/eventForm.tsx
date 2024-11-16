'use client';

import { useForm } from "react-hook-form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from 'next/navigation';
import { registerEvent } from "@/app/api/events/registerEvent";
import { EventData } from "@/interfaces/IEventData";
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUserData } from "@/app/api/volunteers/getVolunteers";
import { UserData } from "@/interfaces/IUserData";
import CircularProgress from '@mui/material/CircularProgress';

export default function RegisterEvent() {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getUserData();

        if (Array.isArray(userData)) {
          setUsers(userData);
        }
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();

  const form = useForm<EventData>({
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
      price: 10,
      workload: 1,
      owner: 1
    }
  });

  const handleSubmit = async (values: EventData) => {
    console.log(values);

    const data: EventData = {
      ...values,
    };

    if (!session?.token) {
      toast({
        title: "Erro!",
        description: "Token não encontrado. Por favor, faça login novamente.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await registerEvent(data, session.token);
      toast({
        title: "Sucesso!",
        description: response.message,
        variant: "default",
      });
      router.push('/eventos');
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errors = error.response.data.errors;

        if (errors && typeof errors === 'object') {
          const firstKey = Object.keys(errors)[0];
          const firstErrorMessage = errors[firstKey][0];
          toast({
            title: "Falha no cadastro!",
            description: firstErrorMessage,
            variant: "destructive",
          });
        } else {
          console.error('Erro inesperado:', error);
          toast({
            title: "Erro!",
            description: "Ocorreu um erro inesperado. Tente novamente mais tarde.",
            variant: "destructive",
          });
        }
      }
    };
  }

  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-[1000px] m-5 shadow-lg">
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
                      <Input placeholder="00:00" type="time" {...field} />
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
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um voluntário" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.isArray(users) && users.map(user => (
                            <SelectItem key={user.id} value={user.id.toString()}>
                              {user.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                          {/* <SelectItem value="inactive">Inativo</SelectItem> */}
                          <SelectItem value="pending">Pendente</SelectItem>
                          {/* <SelectItem value="finished">Finalizado</SelectItem> */}
                        </SelectContent>
                      </Select>
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
    </div>
  )
};

