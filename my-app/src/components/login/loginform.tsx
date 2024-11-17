'use client';

import { useForm, SubmitHandler, FieldValues } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'; 
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

const loginSchema = z.object({
  email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export default function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      console.error(result.error);
      toast({
        title: "Erro ao fazer login",
        description: "Por favor, insira as credenciais corretas.",
        variant: "destructive",
      });
      return; 
    }
    toast({
      title: "Login bem-sucedido!",
      description: "Você será redirecionado para a página inicial.",
      variant: "default",
    });
    router.replace('/pagina-inicial');
  };

  return (
    <Card className="w-full max-w-[500px] mx-auto mt-10 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-center">
          <img src="/img/writted-logo.png" alt="Logo" className=" w-[250px]" />
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-6">         
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-[450px]">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-[450px]">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4">Entrar</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col justify-center gap-4">
        <Link href="/forgot-password">
          <Label className="underline">Esqueci minha senha</Label>
        </Link>
        <Link href="/register">
          <Label className="underline">Criar conta</Label>
        </Link>
      </CardFooter>
    </Card>
  );
}