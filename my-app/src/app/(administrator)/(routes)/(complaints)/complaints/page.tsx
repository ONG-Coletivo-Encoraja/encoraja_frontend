'use client'

import AccordionComplaince from '@/components/administrator/complaince';
import { useToast } from '@/hooks/use-toast';
import API from '@/services/api';
import { useSession } from 'next-auth/react';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import PaginationComponent from '@/components/shared/paginator';

interface ICompliance {
  name: string
  email: string
  phone_number: string
  description: string
  relation: string
  motivation: string
  ip_address: string
  browser: string
  created_at: Date
}

export default function ComplaincePage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { toast } = useToast();
  const [compliances, setCompliances] = useState<ICompliance[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        setLoading(true);
        try {
          const result = await API.get(`/complainces`, {
            headers: {
              'Authorization': `Bearer ${session?.token}`,
              'Content-Type': 'application/json',
            },
            params: {
              page: currentPage,
            },
          });

          console.log(result.data.compliances.data)
          setCompliances(result.data.compliances.data);
          setTotalPages(result.data.compliances.last_page);
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
  }, [currentPage, session]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
    <div className='flex flex-col items-center w-full bg-[#EDEDED] h-[88vh] gap-5'>
      <a className='text-lg font-bold p-3'>Denúncias</a>
      {loading ? (
        <CircularProgress />
      ) : (
        compliances.map((compliance, index) => (
          <AccordionComplaince key={index} compliance={compliance} />
        ))
      )}
    </div>
    <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
    </>
  );
}