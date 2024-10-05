'use client';

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForgotPassword } from "@/app/api/password/pass"; 
import Link from "next/link";

const forgotPassSchema = z.object({
    email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
});

export default function ForgotPassForm() {
    const form = useForm<FieldValues>({
        resolver: zodResolver(forgotPassSchema),
        defaultValues: {
            email: '',
        },
    });

    const { handleSubmit } = useForgotPassword();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        await handleSubmit(data);
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
                        <Button type="submit" className="mt-4">Enviar código</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex flex-col justify-center gap-4">
                <Link href='/recover-password'>
                    <Button type="button" className="mt-4">Recebi o código</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
