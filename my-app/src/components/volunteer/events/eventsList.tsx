'use client';

import { useEffect, useState } from "react";
import { EventCard } from "@/components/shared/eventCard";
import FilterComponent from "@/components/shared/filterEvent";
import SearchComponent from "@/components/shared/search";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { fetchEvents } from "@/app/api/events/eventService";
import { Event, ApiResponse } from "@/interfaces/IEventData";
import CircularProgress from '@mui/material/CircularProgress';
import PaginationComponent from "@/components/shared/paginator";

export function EventsList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { data: session } = useSession();
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const itemsPerPage = 2;

  useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        try {
          const response: ApiResponse = await fetchEvents(
            statusFilter,
            nameFilter,
            session.token,
            currentPage,
            itemsPerPage
          );
          setEvents(response.events.data);
          setTotalPages(response.events.last_page);
        } catch (error) {
          console.error("Erro ao buscar eventos:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [session, statusFilter, nameFilter, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full h-full p-5 flex justify-between items-center flex-col">
      <div className="w-full">
        <div className="flex justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-bold leading-none tracking-tight text-[#702054] text-[24px]">Eventos cadastrados</h1>
            <div>
              <FilterComponent onFilterChange={setStatusFilter} />
            </div>
          </div>
          <div className="flex items-center">
            <SearchComponent onSearch={setNameFilter} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          {loading ? (
            <div className="w-96 h-96 flex justify-center items-center">
              <CircularProgress color="secondary" />
            </div>
          ) : (
            events.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 mt-6">
              {events.map(event => (
                <Link key={event.id} href={`/eventos/detalhes/${event.id}`}>
                  <EventCard event={event} />
                </Link>
              ))}
            </div>
            ) : (
            <p className="text-center text-[#acacac]">Sem eventos cadastrados</p>
            )
          )}
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