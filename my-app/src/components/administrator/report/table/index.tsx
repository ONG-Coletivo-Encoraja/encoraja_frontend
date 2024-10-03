'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import { fetchReportData } from '@/app/api/graphics/graph';
import PaginationComponent from "@/components/shared/paginator";
import CircularProgress from '@mui/material/CircularProgress';
import { Eye } from "lucide-react";
import EventDetailModal from "@/components/pop-ups/ReportAdmin"; 
import { IReportAdmin } from "@/interfaces/IReportAdmin";

const ReportAdmin = () => {
    const { data: session } = useSession();
    const [data, setData] = useState<IReportAdmin[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<IReportAdmin | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (session?.token) {
                setLoading(true);
                try {
                    const result = await fetchReportData(session.token, currentPage);
                    setData(result.data);
                    setTotalPages(result.last_page);
                } catch (error) {
                    console.log(error);
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

    const openModal = (item: IReportAdmin) => {
        setSelectedEvent(item);
        setModalOpen(true);
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
                                        <TableHead className="p-2 font-bold text-left text-[#5E5E5E]">Ações</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map(item => (
                                        <TableRow key={item.id}>
                                            <TableCell className="p-2 text-left text-[#5E5E5E]">{item.relates_event.user.name}</TableCell>
                                            <TableCell className="p-2 text-left text-[#5E5E5E]">{item.relates_event.event.date}</TableCell>
                                            <TableCell className="p-2 text-left text-[#5E5E5E]">{item.relates_event.event.time}</TableCell>
                                            <TableCell className="p-2 text-left text-[#5E5E5E]">{item.relates_event.event.name}</TableCell>
                                            <TableCell className="p-2 text-left text-[#5E5E5E]">
                                                <Eye onClick={() => openModal(item)} className="cursor-pointer" />
                                            </TableCell>
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
            <EventDetailModal 
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                selectedEvent={selectedEvent} 
            />
        </>
    );
}

export default ReportAdmin;