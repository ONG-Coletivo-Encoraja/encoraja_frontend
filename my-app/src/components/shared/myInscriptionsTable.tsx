'use client';

import React from 'react';
import FilterInscriptions from "@/components/shared/filterInscriptions";
import SearchComponent from "@/components/shared/search";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Inscription } from "@/interfaces/IInscription";
import { getMyInscriptions, deleteInscription } from '@/app/api/inscriptions/inscription';
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import API from '@/services/api';
import PaginationComponent from './paginator';


export default function MyInscriptions() {
    const { toast } = useToast();
    const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
    const [nameFilter, setNameFilter] = useState<string>("");
    const { data: session } = useSession();
    const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchData = async () => {
          if (session?.token) {
            setLoading(true);
            try {
              const result = await API.get(`/myInscriptions`, {
                headers: {
                  'Authorization': `Bearer ${session?.token}`,
                  'Content-Type': 'application/json',
                },
                params: {
                  page: currentPage,
                  status: statusFilter,
                  eventName: nameFilter,
                },
              });
              setInscriptions(result.data.inscriptions.data);
              setTotalPages(result.data.inscriptions.last_page);
            } catch (error) {
              console.error(error);
              toast({
                title: "Erro ao carregar solicitações de voluntariado",
                description: "Houve um problema ao tentar carregar suas solicitações. Tente novamente mais tarde.",
                variant: "destructive",
              });
            } finally {
              setLoading(false);
            }
          }
        };
    
        fetchData();
      }, [currentPage, session, statusFilter, nameFilter]);

    const handleDeleteInscription = async (id: number) => {
        if (session?.token) {
            try {
                await deleteInscription(session.token, String(id));
                setInscriptions(prevData => prevData.filter(item => item.id !== id));
                toast ({
                    description: "Inscrição cancelada com sucesso!",
                });
            } catch (error) {
                console.error('Error deleting inscription:', error);
                toast({
                    title: "Erro!",
                    description: "Não foi possível cancelar a inscrição.",
                    variant: "destructive",
                  });
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
            <h2 className="font-bold leading-none tracking-tight text-[#702054] text-[24px]">Minhas Inscrições</h2>

            <div className="p-4">
                <div className="flex justify-between mb-4">
                    <div>
                        <FilterInscriptions  onFilterChange={setStatusFilter} />
                    </div>
                    <div>
                        <SearchComponent onSearch={setNameFilter} />
                    </div>
                </div>

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
                                    {inscriptions.map((item: Inscription) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">{item.event?.name || 'N/A'}</TableCell>
                                            <TableCell className="font-medium">{item.user?.name || 'N/A'}</TableCell>
                                            <TableCell className="font-medium">{item.event?.date || 'N/A'}</TableCell>
                                            <TableCell className="font-medium">{item.event?.time || 'N/A'}</TableCell>
                                            <TableCell className="font-medium">{item.status || 'N/A'}</TableCell>
                                            <TableCell className="font-medium">
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button>Cancelar</Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                        <AlertDialogTitle>Cancelar inscrição?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Você deseja realmente cancelar a sua inscrição no evento {item.event?.name}?
                                                        </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                        <AlertDialogAction onClick={() => handleDeleteInscription(item.id)}>
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
                </div>
            </div>
            <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
