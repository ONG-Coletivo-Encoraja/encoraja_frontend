import { FieldValues } from "react-hook-form";
import API from "@/services/api";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

export const useForgotPassword = () => {
    const { toast } = useToast();

    const handleSubmit = async (data: FieldValues) => {
        try {
            const response = await API.post('/forgot-password-code', data);
            const result = response.data;
            toast({
                title: "Código enviado!",
                description: result.message,
                variant: "default",
            });
            console.log(result);
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                toast({
                    title: "Erro ao enviar código",
                    description: error.response?.data.message,
                    variant: "destructive",
                });
                console.error('Erro ao enviar o e-mail:', error.response ? error.response.data : error.message);
            } else {
                toast({
                    title: "Erro ao enviar código",
                    description: "Erro ao enviar código, tente novamente mais tarde.",
                    variant: "destructive",
                });
                console.error('Erro desconhecido:', error);
            }
        }
    };

    return { handleSubmit };
};

export const useRecoverPassword = () => {
    const { toast } = useToast();

    const handleSubmit = async (data: { email: string; password: string; code: string }) => {
        try {
            const response = await API.post('/reset-password-code', data);
            const result = response.data;

            toast({
                title: "Código verificado!",
                description: result.message,
                variant: "default",
            });

            // Redirecionando após o sucesso
            window.location.href = '/login';

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                toast({
                    title: "Erro ao enviar código",
                    description: error.response?.data.message || "Erro desconhecido.",
                    variant: "destructive",
                });
                console.error('Erro ao verificar código:', error.response ? error.response.data : error.message);
            } else {
                toast({
                    title: "Erro ao enviar código",
                    description: "Erro ao verificar, insira um código válido.",
                    variant: "destructive",
                });
                console.error('Erro desconhecido:', error);
            }
        }
    };

    return { handleSubmit };
};