'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { register } from '../../app/api/auth';
import { UserData } from '../../interfaces/IUserData'; 
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Insira um email válido." }),
  password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
  confirmPassword: z.string().min(6, { message: "A confirmação de senha deve ter pelo menos 6 caracteres." }),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "Insira um CPF válido no formato 000.000.000-00." }),
  date_birthday: z.string().refine((val) => !isNaN(Date.parse(val)), { message: "Insira uma data de nascimento válida." }),
  ethnicity: z.string().min(2, { message: "Selecione uma etnia." }),
  gender: z.string().min(2, { message: "Selecione um gênero." }),
  image_term: z.boolean().refine(val => val === true, { message: "Você deve aceitar os termos de imagem." }),
  data_term: z.boolean().refine(val => val === true, { message: "Você deve aceitar os termos de dados." }),
  street: z.string().min(2, { message: "A rua deve ter pelo menos 2 caracteres." }),
  number: z.string().min(1, { message: "O número deve ser informado." }),
  neighbourhood: z.string().min(2, { message: "O bairro deve ter pelo menos 2 caracteres." }),
  city: z.string().min(2, { message: "A cidade deve ter pelo menos 2 caracteres." }),
  zip_code: z.string().regex(/^\d{5}-\d{3}$/, { message: "Insira um CEP válido no formato 00000-000." }),
  phone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, { message: "Insira um telefone válido no formato (00) 00000-0000." }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais.",
    path: ["confirmPassword"],
  });

export default function RegisterForm() {
  const router = useRouter();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      cpf: "",
      date_birthday: "",
      ethnicity: "",
      gender: "",
      image_term: false,
      data_term: false,
      street: "",
      number: "",
      neighbourhood: "",
      city: "",
      zip_code: "",
      phone: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values.password !== values.confirmPassword) {
      toast({
        title: "Erro!",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }

    const data: UserData = {
      name: values.name,
      email: values.email,
      password: values.password,
      cpf: values.cpf,
      date_birthday: values.date_birthday,
      ethnicity: values.ethnicity,
      gender: values.gender,
      image_term: values.image_term,
      data_term: values.data_term,
      street: values.street,
      number: values.number,
      neighbourhood: values.neighbourhood,
      city: values.city,
      zip_code: values.zip_code,
      phone: values.phone,
    };

    try {
      const response = await register(data);
      toast({
        title: "Sucesso!",
        description: response.message,
        variant: "default",
      });
      console.log(response);
      if (response) {
        router.push('/login');
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

  useEffect(() => {
    const zipCodeField = form.watch("zip_code");

    if (zipCodeField) {
      const cep = zipCodeField.replace(/\D/g, '');
      if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(response => response.json())
          .then(data => {
            if (!data.erro) {
              form.setValue("street", data.logradouro);
              form.setValue("neighbourhood", data.bairro);
              form.setValue("city", data.localidade);
            } else {
              toast ({
                title: "Erro!",
                description: "CEP não encontrado.",
                variant: "destructive",
              });
            }
          })
          .catch(() => alert("Erro ao buscar CEP."));
      }
    }
  }, [form.watch("zip_code")]);

  return (
    <Card className="w-full max-w-[1000px] mx-auto mt-10 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Cadastro</CardTitle>
        <div className="flex items-center justify-center">
            <img src="/img/writted-logo.png" alt="Logo" className="h-[87px] w-[250px]" />
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
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome Completo" {...field} />
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
                        <InputMask mask="999.999.999-99" value={field.value} onChange={field.onChange}>
                        {(inputProps: InputProps) => (<Input placeholder="000.000.000-00" {...inputProps} />)}
                        </InputMask>
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
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
                  <FormControl className="flex justify-end">
                    <Input type="date" {...field} />
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
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <InputMask mask="(99) 99999-9999" value={field.value} onChange={field.onChange}>
                      {(inputProps) => <Input placeholder="(00) 00000-0000" {...inputProps} />}
                    </InputMask>
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
                  <FormLabel>Etnia</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue="">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma etnia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="white">Branca</SelectItem>
                        <SelectItem value="black">Preta</SelectItem>
                        <SelectItem value="mixed">Parda</SelectItem>
                        <SelectItem value="asian">Amarela</SelectItem>
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
                    <Select onValueChange={field.onChange} defaultValue="">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um gênero" />
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
              name="zip_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CEP</FormLabel>
                  <FormControl>
                    <InputMask mask="99999-999" value={field.value} onChange={field.onChange}>
                      {(inputProps) => <Input placeholder="00000-000" {...inputProps} />}
                    </InputMask>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Rua</FormLabel>
                  <FormControl>
                    <Input placeholder="Rua" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número</FormLabel>
                  <FormControl>
                    <Input placeholder="Número" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="neighbourhood"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Bairro</FormLabel>
                  <FormControl>
                    <Input placeholder="Bairro" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Cidade</FormLabel>
                  <FormControl>
                    <Input placeholder="Cidade" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Confirmar Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirmar Senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image_term"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  <FormLabel className="ml-2">Aceito os termos de uso da imagem.</FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="data_term"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  <FormLabel className="ml-2">Aceito os termos de uso dos dados.</FormLabel>
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
