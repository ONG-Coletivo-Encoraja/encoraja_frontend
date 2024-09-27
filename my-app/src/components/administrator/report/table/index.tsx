import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import API from "@/services/api";
import PaginationComponent from "@/components/shared/paginator";
import CircularProgress from '@mui/material/CircularProgress'; // Importando o componente de carregamento

interface User {
    id: number;
    name: string;
    email: string;
    permission: string;
}

interface Event {
    id: number;
    name: string;
    date: string;
    time: string;
}

interface RelatesEvent {
    id: number;
    event: Event;
    user: User;
}

interface DataItem {
    id: number;
    relates_event: RelatesEvent;
}

const ReportAdmin = () => {
    const { data: session } = useSession();
    const [data, setData] = useState<DataItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true); // Estado de carregamento

    useEffect(() => {
        const fetchData = async () => {
            if (session?.token) {
                setLoading(true);
                try {
                    const response = await API.get(`/admin/report?page=${currentPage}`, {
                        headers: {
                            'Authorization': `Bearer ${session.token}`,
                            'Content-Type': 'application/json',
                        },
                    });
                    setData(response.data.data);
                    setTotalPages(response.data.last_page);
                } catch (error) {
                    console.error('Erro ao buscar os dados:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [currentPage, session]);

    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center w-11/12 h-full justify-between">
                <div className="flex flex-col items-center w-11/12 h-full">
                    <div className="flex content-center items-center h-10 font-bold text-xl text-[#702054]">
                        <h1>Relatório de Evento</h1>
                    </div>
                    <div className="flex items-center justify-center w-[90%] bg-white rounded-lg p-3">
                        {loading ? (
                            <CircularProgress color="secondary" />
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="p-2 font-bold text-left text-[#5E5E5E]">Responsável</TableHead>
                                        <TableHead className="p-2 font-bold text-left text-[#5E5E5E]">Data</TableHead>
                                        <TableHead className="p-2 font-bold text-left text-[#5E5E5E]">Horário</TableHead>
                                        <TableHead className="p-2 font-bold text-left text-[#5E5E5E]">Evento</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map(item => (
                                        <TableRow key={item.id}>
                                            <TableCell className="p-2 text-left text-[#5E5E5E]">{item.relates_event.user.name}</TableCell>
                                            <TableCell className="p-2 text-left text-[#5E5E5E]">{item.relates_event.event.date}</TableCell>
                                            <TableCell className="p-2 text-left text-[#5E5E5E]">{item.relates_event.event.time}</TableCell>
                                            <TableCell className="p-2 text-left text-[#5E5E5E]">{item.relates_event.event.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </div>
                </div>
                <PaginationComponent
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
}

export default ReportAdmin;