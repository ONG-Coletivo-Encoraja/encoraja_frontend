'use client';

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Inscription } from "@/interfaces/IInscription";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import API from '@/services/api';
import CircularProgress from '@mui/material/CircularProgress';
import PaginationComponent from '@/components/shared/paginator';
import FilterInscriptions from "@/components/shared/filterInscriptions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AxiosError } from 'axios';


interface MyInscriptionsProps {
    filterStatus: string;
}

export default function MyInscriptions({ filterStatus }: MyInscriptionsProps) {
    const { toast } = useToast();
    const { data: session } = useSession();
    const [data, setData] = useState<Inscription[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [statusInscription, setStatusInscription] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            if (session?.token) {
                setLoading(true);
                try {
                    const result = await API.get('/admin/inscriptions', {
                        headers: {
                            'Authorization': `Bearer ${session?.token}`,
                            'Content-Type': 'application/json',
                        },
                        params: {
                            status: filterStatus,
                        },
                    });

                    setData(result.data.inscriptions.data);
                    setTotalPages(result.data.inscriptions.last_page);
                } catch (error) {
                    console.error('Error fetching inscriptions:', error);
                    toast({
                        title: "Erro ao carregar inscrições",
                        description: "Houve um problema ao tentar carregar suas inscrições. Tente novamente mais tarde.",
                        variant: "destructive",
                    });
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [currentPage, session, filterStatus]);

    const handleUpdateInscription = async (id: number) => {
        if (session?.token) {
            try {
                const result = await API.put(`/admin/inscriptions/${id}`, {
                    status: statusInscription,
                }, {
                    headers: {
                        'Authorization': `Bearer ${session?.token}`,
                        'Content-Type': 'application/json',
                    }
                });

                setData(prevData =>
                    prevData.map(item =>
                        item.id === id ? { ...item, status: statusInscription } : item
                    )
                );

                toast({
                    title: "Sucesso!",
                    description: result.data.message,
                    variant: "default",
                });

            } catch (error) {
                console.error('Error updating inscription:', error);
                if (error instanceof AxiosError && error.response) {
                    const errors = error.response.data.errors;
                    const firstKey = Object.keys(errors)[0];
                    const firstErrorMessage = errors[firstKey][0];
                    toast({
                      title: "Algo deu errado!",
                      description: firstErrorMessage,
                      variant: "destructive",
                    });
                    console.log(firstErrorMessage)
                    
                  } else {
                    console.error('Erro inesperado:', error);
                    toast({
                      title: "Algo deu errado!",
                      description: "Ocorreu um erro inesperado.",
                      variant: "destructive",
                    });
                  }
            }
        }
    };

    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <CircularProgress />
                </div>
            ) : (
                <div className="mt-4">
                    <Card>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[150px]">Evento</TableHead>
                                        <TableHead className="w-[150px]">Inscrito</TableHead>
                                        <TableHead className="w-[150px]">Data do Evento</TableHead>
                                        <TableHead className="w-[150px]">Horário do Evento</TableHead>
                                        <TableHead className="w-[150px]">Status</TableHead>
                                        <TableHead className="w-[150px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map((item: Inscription) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">{item.event?.name || 'N/A'}</TableCell>
                                            <TableCell className="font-medium">{item.user?.name || 'N/A'}</TableCell>
                                            <TableCell className="font-medium">{item.event?.date || 'N/A'}</TableCell>
                                            <TableCell className="font-medium">{item.event?.time || 'N/A'}</TableCell>
                                            <TableCell className="font-medium">{item.status || 'N/A'}</TableCell>
                                            <TableCell className="font-medium">
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button>Alterar Status</Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Cancelar inscrição?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                Selecione o novo status do evento: {item.event?.name}?
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <Select onValueChange={setStatusInscription} defaultValue={item.status}>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Selecione" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="approved">Aprovar</SelectItem>
                                                                <SelectItem value="pending">Pendente</SelectItem>
                                                                <SelectItem value="rejected">Rejeitar</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                            <AlertDialogAction onClick={() => handleUpdateInscription(item.id)}>
                                                                Sim
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <PaginationComponent
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </div>
    );
}
