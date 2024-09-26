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

    useEffect(() => {
        const fetchData = async () => {
            if (session?.token) {
                try {
                    const response = await API.get('/admin/report', {
                        headers: {
                            'Authorization': `Bearer ${session.token}`,
                            'Content-Type': 'application/json',
                        },
                    });
                    console.log(response);
                    setData(response.data.data);
                } catch (error) {
                    console.error('Erro ao buscar os dados:', error);
                }
            }
        };

        fetchData();
    });

    return (
        <>
            <div className="flex content-center items-center h-10 font-bold text-xl text-[#702054]">
                <h1>Relatório de Evento</h1>
            </div>
            <div className="flex items-center justify-center w-[90%] bg-white rounded-lg p-3">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="p-2 font-bold text-left text-[#5E5E5E]">Evento</TableHead>
                            <TableHead className="p-2 font-bold text-left text-[#5E5E5E]">Data</TableHead>
                            <TableHead className="p-2 font-bold text-left text-[#5E5E5E]">Horário</TableHead>
                            <TableHead className="p-2 font-bold text-left text-[#5E5E5E]">Responsável</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map(item => (
                            <TableRow key={item.id}>
                                <TableCell className="p-2 text-left text-[#5E5E5E]">{item.relates_event.event.name}</TableCell>
                                <TableCell className="p-2 text-left text-[#5E5E5E]">{item.relates_event.event.date}</TableCell>
                                <TableCell className="p-2 text-left text-[#5E5E5E]">{item.relates_event.event.time}</TableCell>
                                <TableCell className="p-2 text-left text-[#5E5E5E]">{item.relates_event.user.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}

export default ReportAdmin;
