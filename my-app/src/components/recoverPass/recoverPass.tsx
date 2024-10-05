'use client';

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRecoverPassword } from "@/app/api/password/pass";

const recoverPassSchema = z.object({
    email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
    password: z.string().min(1, "Senha é obrigatória"),
    code: z.string().min(1, "Informe um código válido"),
});

export default function RecoverPassForm() {
    const form = useForm<FieldValues>({
        resolver: zodResolver(recoverPassSchema),
        defaultValues: {
            email: '',
            password: '',
            code: ''
        },
    });

    const { handleSubmit } = useRecoverPassword();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        await handleSubmit(data as { email: string; password: string; code: string });
    };

    return (
        <Card className="w-full max-w-[500px] mx-auto mt-10 shadow-lg">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <img src="/img/writted-logo.png" alt="Logo" className="h-[87px] w-[250px]" />
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                <div>
                    <p>Informe o email cadastrado para receber um código de recuperação de senha.</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
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
                            name="code"
                            render={({ field }) => (
                                <FormItem className="w-[450px]">
                                    <FormLabel>Código</FormLabel>
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
                                    <FormLabel>Nova senha</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="mt-4">Enviar código</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex flex-col justify-center gap-4">
            </CardFooter>
        </Card>
    );
}