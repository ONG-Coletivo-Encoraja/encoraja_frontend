import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { FileDown } from "lucide-react";
import API from "@/services/api";
import { useSession } from "next-auth/react";

const ExportButton = () => {
    const { data: session } = useSession();

    const handleDownload = async (endpoint: string, filename: string) => {
        try {
            const response = await API.get(endpoint, {
                responseType: 'blob',
                headers: {
                    Authorization: `Bearer ${session?.token}`,
                },
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            console.error('Erro ao baixar o arquivo:', error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger className="bg-[#702054] p-3 rounded-md text-white text-base font-medium">Exportação de relatórios</DialogTrigger>
            <DialogContent>
                <DialogHeader className="flex gap-3 flex-col">
                    <DialogTitle>Relatórios disponíveis para exportação em CSV</DialogTitle>
                    <DialogDescription className="flex flex-col gap-3">
                        <Button variant="csv" onClick={() => handleDownload('/report/events', 'relatorio_evento.csv')}>
                            RELATÓRIO DE EVENTO E AVALIAÇÃO <FileDown />
                        </Button>
                        <Button variant="csv" onClick={() => handleDownload('/report/inscriptions', 'relatorio_inscricao.csv')}>
                            RELATÓRIO DE INSCRIÇÃO E AVALIAÇÃO <FileDown />
                        </Button>
                        <Button variant="csv" onClick={() => handleDownload('/report/users', 'relatorio_usuarios.csv')}>
                            RELATÓRIO DE USUÁRIOS <FileDown />
                        </Button>
                        <Button variant="csv" onClick={() => handleDownload('/report/compliance', 'relatorio_denuncias.csv')}>
                            RELATÓRIO DE DENÚNCIAS <FileDown />
                        </Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default ExportButton;
