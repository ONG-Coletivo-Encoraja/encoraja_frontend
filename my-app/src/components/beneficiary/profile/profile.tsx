'use client';

import { CircleUserRound } from 'lucide-react';
import { useSession } from "next-auth/react";
import { updateUserData, getUserData } from "@/app/api/auth";
import { UserData } from "@/interfaces/IUserData";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useParams, useRouter } from 'next/navigation';
import * as React from "react";
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

export function Profile() {
  const { data: session } = useSession();
  const router = useRouter();
  const [profileData, setProfileData] = React.useState<UserData | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setProfileData(data);
      } catch (err) {
        setError('Erro ao buscar dados do perfil.');
        console.error("Error fetching user data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [session?.token]);

  const form = useForm<UserData>({
    defaultValues: {
      name: '',
      email: '',
      cpf: '',
      date_birthday: '',
      ethnicity: '',
      gender: '',
      address: {
        street: '',
        number: '',
        neighbourhood: '',
        city: '',
        zip_code: '',
      },
      phone: ''
    },
  });

  React.useEffect(() => {
    if (profileData) {
      form.reset({
        name: profileData.name,
        email: profileData.email,
        cpf: profileData.cpf,
        date_birthday: profileData.date_birthday,
        ethnicity: profileData.ethnicity,
        gender: profileData.gender,
        address: {
          street: profileData.address.street,
          number: profileData.address.number,
          neighbourhood: profileData.address.neighbourhood,
          city: profileData.address.city,
          zip_code: profileData.address.zip_code
        },
        phone: profileData.phone
      });
    }
  }, [profileData, form]);

  const handleSubmit = async (values: UserData) => {
    if (!session?.token) return;

    const updatedData: Partial<UserData> = {};

    Object.keys(values).forEach((key) => {
      const value = values[key as keyof UserData];
      const originalValue = profileData?.[key as keyof UserData];

      if (typeof value === 'object' && value !== null) {
        Object.keys(value).forEach((subKey) => {
          if (value[subKey] !== originalValue?.[subKey as keyof typeof value]) {
            if (!updatedData[key as keyof UserData]) {
              updatedData[key as keyof UserData] = {};
            }
            updatedData[key as keyof UserData]![subKey as keyof typeof value] = value[subKey];
          }
        });
      } else if (value !== originalValue) {
        updatedData[key as keyof UserData] = value;
      }
    });

    if (Object.keys(updatedData).length === 0) {
      alert('Nenhuma alteração foi feita.');
      return;
    }

    try {
      const response = await updateUserData(updatedData);
      console.log(response);
      router.push('/home');
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errors = error.response.data.errors;

        if (errors && typeof errors === 'object') {
          const firstKey = Object.keys(errors)[0];
          const firstErrorMessage = errors[firstKey][0];
          alert(firstErrorMessage);
        } else {
          console.error("Errors object is not defined or not an object");
        }
      } else {
        console.error('Erro inesperado:', error);
        alert('Ocorreu um erro inesperado.');
      }
    }
  };

  if (isLoading) {
    return <p>Carregando...</p>;
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
