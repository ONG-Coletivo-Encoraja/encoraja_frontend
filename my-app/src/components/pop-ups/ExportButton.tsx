'use client';

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
import { useSession } from "next-auth/react";
import { handleDownload } from '@/app/api/graphics/graph';

const ExportButton = () => {
    const { data: session } = useSession();

    return (
        <Dialog>
            <DialogTrigger className="bg-[#702054] p-3 rounded-md text-white text-base font-medium">Exportação de relatórios</DialogTrigger>
            <DialogContent>
                <DialogHeader className="flex gap-3 flex-col">
                    <DialogTitle>Relatórios disponíveis para exportação em CSV</DialogTitle>
                    <DialogDescription className="flex flex-col gap-3">
                        <Button variant="csv" onClick={() => handleDownload('/report/events', 'relatorio_evento.csv', session?.token)}>
                            RELATÓRIO DE EVENTO E AVALIAÇÃO <FileDown />
                        </Button>
                        <Button variant="csv" onClick={() => handleDownload('/report/inscriptions', 'relatorio_inscricao.csv', session?.token)}>
                            RELATÓRIO DE INSCRIÇÃO E AVALIAÇÃO <FileDown />
                        </Button>
                        <Button variant="csv" onClick={() => handleDownload('/report/users', 'relatorio_usuarios.csv', session?.token)}>
                            RELATÓRIO DE USUÁRIOS <FileDown />
                        </Button>
                        <Button variant="csv" onClick={() => handleDownload('/report/compliance', 'relatorio_denuncias.csv', session?.token)}>
                            RELATÓRIO DE DENÚNCIAS <FileDown />
                        </Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default ExportButton;