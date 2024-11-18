'use client';

import React from 'react';

import Navbar from "@/components/homepage/navbar";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IComplaince } from '@/interfaces/IComplaince';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { registerComplaince } from '@/app/api/complainces/complaince';
import { Textarea } from '@/components/ui/textarea';

export default function Transparency() {

const { toast } = useToast();

const form = useForm<IComplaince>({
    defaultValues: {
        name: "",
        email: "",
        phone_number: "",
        description: "",
        relation: "",
        motivation: "",
    }
    });
const handleSubmit = async (values: IComplaince) => {
    console.log(values);

    const data: IComplaince = {
        ...values,
    };

    try {
        const response = await registerComplaince(data); 
        toast({
        title: "Sucesso!",
        description: response.message,
        variant: "default",
        });
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
        <div className="fixed top-0 left-0 w-full z-10 h-16">
        <Navbar />
        </div>
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 pt-28">
        <div id='about-us' className="grid md:grid-cols-1 md:gap-4 text-center w-full max-w-[800px] px-4 md:px-8">
            <Label className='text-[#73225D] text-3xl font-semibold'>Ética e Transparência</Label>
            <Label className="md:text-1xl text-justify">
                No Coletivo, a ética e a transparência são os pilares que sustentam todas as nossas ações. Acreditamos que um ambiente justo e seguro é fundamental para o bem-estar das mulheres que atendemos. Por isso, buscamos ser transparentes em todas as nossas atividades, respeitando os direitos e a dignidade de cada pessoa.
            </Label>
            <Label className="md:text-1xl text-justify">
                Estamos comprometidos em manter um espaço livre de discriminação, assédio e qualquer tipo de violência. Valorizamos a integridade e a confiança de todos que fazem parte da nossa comunidade e incentivamos a denúncia de qualquer atitude que contrarie esses princípios. Se você se sentir desconfortável ou presenciar alguma situação inadequada, sua voz será ouvida, e suas preocupações serão tratadas com seriedade e respeito.
            </Label>
        </div>
        <Card className='w-full md:max-w-[700px]'>
            <CardTitle className='flex items-center justify-center md:mt-4'>Formulário de Denúncia</CardTitle>
            <CardContent>
                <Label className='text-justify'>Se você presenciou ou foi vítima de qualquer tipo de discriminação, assédio ou violência em nossas atividades, por favor, preencha o formulário abaixo. Sua denúncia será tratada com seriedade e confidencialidade.</Label>
                <Label>Insira os seus dados caso queira se identificar:</Label>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 md:grid-col gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                            <FormLabel>Nome (Não obrigatório)</FormLabel>
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
                            <FormLabel>Email (Não obrigatório)</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="phone_number"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                            <FormLabel>Telefone (Não obrigatório)</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                    <FormField
                        control={form.control}
                        name="relation"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                            <FormLabel>Qual a sua relação com a ONG Coletivo Encoraja?</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="motivation"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                            <FormLabel>Qual o motivo do seu contato?</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                            <FormLabel>Descreva com detalhes o que o motivo do seu contato</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </form>
                </Form>
            </CardContent>
            <CardFooter className='flex items-center justify-end'>
                <Button type="submit" onClick={form.handleSubmit(handleSubmit)}>Enviar</Button>
            </CardFooter>
        </Card>

        <div
              id="contact"
              className="text-[#BF6550] sm:mt-60 text-3xl flex flex-col items-center justify-center h-[200px]"
            >
              <Label
                className="text-[#BF6550] text-3xl"
                style={{
                  fontSize: '2rem',
                   
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  maxWidth: '100%',
                  textAlign: 'center',
                }}
              >
                Contatos
              </Label>

              <div className="sm:mt-4 flex justify-center items-center sm:space-x-6 font-rosario">
                <a
                  href="https://www.instagram.com/coletivo_encoraja/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img loading="lazy" src="https://img.shields.io/badge/Instagram-E1306C?style=for-the-badge&logo=instagram&logoColor=white"></img>
                </a>
                <a
                  href="mailto:contato@institutoencoraja.org"
                  className="text-[#73225D] text-xl font-rosario"
                >
                  <img loading="lazy" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></img>
                </a>
                <a
                href="https://www.google.com/maps?q=Rua+Tibagi,+99+-+Centro,+Curitiba+-+PR,+Brasil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#73225D] text-xl underline"
              >
                <img loading="lazy" src="https://img.shields.io/badge/Google%20Maps-E1306C?style=for-the-badge&logo=googlemaps&logoColor=white"></img>
              </a>
              </div>
            </div>
      </div>
  </>
  );
}
