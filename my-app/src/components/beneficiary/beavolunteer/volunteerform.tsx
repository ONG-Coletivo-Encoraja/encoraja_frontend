'use client';

import React from "react";
import { VolunteerForm } from "@/components/shared/volunteerForm";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Form, FormField, FormMessage, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { getUserData } from "@/app/api/auth";
import { UserData } from "@/interfaces/IUserData";
import { Textarea } from "@/components/ui/textarea";
import { requestVolunteer } from "@/app/api/volunteers/beAVolunteer";
import { AxiosError } from "axios";
import { useParams, useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";


export function BeAVolunteer() {
  const { data: session } = useSession();
  const [profileData, setProfileData] = React.useState<UserData | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const permission = session?.user?.permission;
  const router = useRouter();
  const { toast } = useToast();


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setProfileData(data);
        console.log(data);
      } catch (err) {
        setError('Erro ao buscar dados do perfil.');
        console.error("Error fetching user data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const form = useForm<IRequestVolunteer>({
    defaultValues: {
      availability: "",
      course_experience: "",
      how_know: "",
      expectations: "",
    },
  });

  const handleSubmit = async (values: IRequestVolunteer) => {
    console.log(values);

    const data: IRequestVolunteer = {
      ...values,
    };

    if (!session?.token) {
      return;
    }

    try {
      const response = await requestVolunteer(data, session.token);
      console.log(response);
      toast({
        title: "Solicitação enviada",
        description: "Solicitação de voluntariado enviada com sucesso!",
      });
      router.push('/home');
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errors = error.response.data.errors;
        toast({
          title: "Erro ao enviar solicitação",
          description: "Solicitação de voluntariado não enviada.",
          variant: "destructive",
        });

        if (errors && typeof errors === 'object') {
          const firstKey = Object.keys(errors)[0];
          const firstErrorMessage = errors[firstKey][0];
        } else {
          console.error("Errors object is not defined or not an object");
        }
      } else {
        console.error('Erro inesperado:', error);
        alert('Ocorreu um erro inesperado.');
      }
    }
  };

  return (
    <>
      <Card className="w-full max-w-[1000px] mx-auto mt-10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Seja voluntário</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-3">
              <Label>Nome</Label>
              <Input readOnly value={profileData?.name} />
            </div>
            <div>
              <Label>CPF</Label>
              <Input readOnly value={profileData?.cpf} />
            </div>
            <div className="col-span-2">
              <Label>Email</Label>
              <Input readOnly value={profileData?.email} />
            </div>
            <div>
              <Label>Data de nascimento</Label>
              <Input readOnly value={profileData?.date_birthday} />
            </div>
            <div>
              <Label>Telefone</Label>
              <Input readOnly value={profileData?.phone} />
            </div>
            <div className="col-span-2">
              <Label>Raça</Label>
              <Input readOnly value={profileData?.ethnicity} />
            </div>
            <div className="col-span-2">
              <Label>Genero</Label>
              <Input readOnly value={profileData?.gender} />
            </div>
            <div>
              <Label>CEP</Label>
              <Input readOnly value={profileData?.address.zip_code} />
            </div>
            <div className="col-span-2">
              <Label>Rua</Label>
              <Input readOnly value={profileData?.address.street} />
            </div>
            <div>
              <Label>Número</Label>
              <Input readOnly value={profileData?.address.number} />
            </div>
            <div className="col-span-2">
              <Label>Bairro</Label>
              <Input readOnly value={profileData?.address.neighbourhood} />
            </div>
            <div className="col-span-2">
              <Label>Cidade</Label>
              <Input readOnly value={profileData?.address.city} />
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">

              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Disponilibilidade</FormLabel>
                    <FormControl>
                      <Textarea {...field} value={field.value || ''} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="course_experience"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Experiência</FormLabel>
                    <FormControl>
                      <Textarea {...field} value={field.value || ''} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="how_know"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Como soube?</FormLabel>
                    <FormControl>
                      <Textarea {...field} value={field.value || ''} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expectations"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Expectativas</FormLabel>
                    <FormControl>
                      <Textarea {...field} value={field.value || ''} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button onClick={() => router.back()} variant="outline">
            Cancelar
          </Button>
          <Button type="submit" onClick={form.handleSubmit(handleSubmit)}>
            Salvar
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
