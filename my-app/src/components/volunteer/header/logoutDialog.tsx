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

export function LogoutDialog({ isOpen, onClose }) {

    const { data: session, status } = useSession(); 
    const router = useRouter();

    const handleLogout = async () => {
        try {
          await API.post('/auth/logout',{}, {
            headers: { 
              'Authorization': `Bearer ${session?.token}`,
              'Content-Type': 'application/json',
            },
          }); 
          await signOut();
          router.push('/login');
        } catch (error) {
          console.error('Logout falhou', error);
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
