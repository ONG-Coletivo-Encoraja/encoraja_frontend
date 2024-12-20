'use client';

import React, { useEffect, useState } from "react";
import { RequestVolunteerCard } from "@/components/shared/requestVolunteerCard";
import FilterRequests from "@/components/shared/filterRequestsVolunteers";
import Link from "next/link";
import PaginationComponent from "@/components/shared/paginator";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import API from "@/services/api";
import { CircularProgress } from "@mui/material";

export function RequestVolunteerList() {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IRequestVolunteer[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        setLoading(true);
        try {
          const result = await API.get('/admin/requestsVolunteer', {
            headers: {
              'Authorization': `Bearer ${session?.token}`,
              'Content-Type': 'application/json',
            },
            params: {
              page: currentPage,
              status: filterStatus,
            }
          });
          setData(result.data.requests.data);
          setTotalPages(result.data.requests.last_page);
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
  }, [currentPage, session, filterStatus]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="h-full p-6 flex flex-col justify-between">
      <div>
        <h1 className="font-bold leading-none tracking-tight text-[#702054] text-[24px]">
          Solicitações de voluntariado
        </h1>
        <div>
          <FilterRequests onFilterChange={setFilterStatus} />
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-[500px]">
            <CircularProgress color="secondary" />
          </div>
        ) : (
          data.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {data.map((request) => (
                <RequestVolunteerCard key={request.id} request={request} />
              ))}
            </div>
          ) : (
            <p className="text-center text-[#5E5E5E] mt-4">Nenhuma solicitação encontrada</p>
          )
        )}
      </div>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
