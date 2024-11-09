import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';
import API from "@/services/api";
import { useToast } from "@/hooks/use-toast";

interface LogoutDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LogoutDialog({ isOpen, onClose }: LogoutDialogProps) {

    const { data: session, status } = useSession(); 
    const router = useRouter();
    const { toast } = useToast();

    const handleLogout = async () => {
        try {
          await API.post('/auth/logout',{}, {
            headers: { 
              'Authorization': `Bearer ${session?.token}`,
              'Content-Type': 'application/json',
            },
          }); 
          await signOut();
          router.push('/');
          toast({
            title: "Log-out realizado com sucesso!",
            description: "Você foi desconectado e será redirecionado para a tela de início.",
            });
        } catch (error) {
          console.error('Logout falhou', error);
            toast({
                title: "Erro ao fazer logout",
                description: "Não foi possível fazer logout. Tente novamente.",
                variant: "destructive",
            });
        }
      };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Tem certeza que deseja sair?</DialogTitle>
                    <DialogDescription>
                        Ao confirmar, sua sessão será encerrada e você retornará à tela de login.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button onClick={() => { handleLogout(); onClose(); }}>
                        Sair
                    </Button> 
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
