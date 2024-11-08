'use client';

import { CircleUserRound } from 'lucide-react';
import { useSession } from "next-auth/react";
import { updateUserData, getUserData } from "@/app/api/auth";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserData, UserDataSend } from '@/interfaces/IUserData';
import CircularProgress from '@mui/material/CircularProgress';
import { useToast } from "@/hooks/use-toast";

export function AdminProfile() {
  const { data: session } = useSession();
  const router = useRouter();
  const [profileData, setProfileData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setProfileData(data);
      } catch (err) {
        setError('Erro ao buscar dados do perfil.');
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [session?.token]);

  const form = useForm<UserData>({
    defaultValues: profileData || {},
  });

  useEffect(() => {
    if (profileData) {
      form.reset(profileData);
    }
  }, [profileData, form]);

  const handleSubmit = async (values: UserData) => {
    if (!session?.token) return;

    const updatedData: UserDataSend = {};

    if (values.name !== profileData?.name) updatedData.name = values.name;
    if (values.email !== profileData?.email) updatedData.email = values.email;
    if (values.password) updatedData.password = values.password;
    if (values.cpf !== profileData?.cpf) updatedData.cpf = values.cpf;
    if (values.date_birthday !== profileData?.date_birthday) updatedData.date_birthday = values.date_birthday;
    if (values.ethnicity !== profileData?.ethnicity) updatedData.ethnicity = values.ethnicity;
    if (values.gender !== profileData?.gender) updatedData.gender = values.gender;
    if (values.phone !== profileData?.phone) updatedData.phone = values.phone;
    if (values.availability !== profileData?.availability) updatedData.availability = values.availability;
    if (values.course_experience !== profileData?.course_experience) updatedData.course_experience = values.course_experience;
    if (values.how_know !== profileData?.how_know) updatedData.how_know = values.how_know;
    if (values.expectations !== profileData?.expectations) updatedData.expectations = values.expectations;

    const address = profileData?.address;
    if (values.address?.street !== address?.street) updatedData.street = values.address?.street;
    if (values.address?.number !== address?.number) updatedData.number = values.address?.number;
    if (values.address?.neighbourhood !== address?.neighbourhood) updatedData.neighbourhood = values.address?.neighbourhood;
    if (values.address?.city !== address?.city) updatedData.city = values.address?.city;
    if (values.address?.zip_code !== address?.zip_code) updatedData.zip_code = values.address?.zip_code;

    if (Object.keys(updatedData).length === 0) {
      toast({
        title: 'Nada a atualizar!',
        description: 'Nenhuma alteração foi feita!',
        variant: 'alert',
      });
      return;
    }

    try {
      const response = await updateUserData(updatedData);
      toast({
        title: 'Dados atualizados com sucesso.',
        description: (response as { message?: string }).message,
      });
      router.push('/home');
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errors = error.response.data.errors;
        if (errors && typeof errors === 'object') {
          const firstKey = Object.keys(errors)[0];
          const firstErrorMessage = errors[firstKey][0];
          toast({
            title: "Erro!",
            description: firstErrorMessage,
            variant: "destructive",
          });
        } else {
          console.error("Errors object is not defined or not an object");
        }
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

  if (loading) {
    return <>
      <CircularProgress />
    </>;
  }

  return (
    <Card className="w-full max-w-[1000px] mx-auto mt-10 shadow-lg">
      <CardHeader>
        <CardTitle>Meu perfil</CardTitle>
        <div className="flex items-center justify-center h-full">
          <CircleUserRound className="w-16 h-16 opacity-50" />
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date_birthday"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de Nascimento</FormLabel>
                  <FormControl>
                    <Input type='date' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ethnicity"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Raça</FormLabel>
                  <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue>
                      {field.value ? field.value : "Selecione"}
                    </SelectValue>
                  </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="white">Branca</SelectItem>
                        <SelectItem value="asian">Asiática</SelectItem>
                        <SelectItem value="mixed">Parda</SelectItem>
                        <SelectItem value="black">Preta</SelectItem>
                        <SelectItem value="other">Outra</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
                        <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Gênero</FormLabel>
                  <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue>
                      {field.value ? field.value : "Selecione"}
                    </SelectValue>
                  </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="male">Masculino</SelectItem>
                        <SelectItem value="female">Feminino</SelectItem>
                        <SelectItem value="prefer not say">Prefiro não dizer</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.zip_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CEP </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.street"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Rua </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número </FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.neighbourhood"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Bairro </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.city"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Cidade </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <Button onClick={form.handleSubmit(handleSubmit)}>Salvar</Button>
      </CardFooter>
    </Card>
  );
}
