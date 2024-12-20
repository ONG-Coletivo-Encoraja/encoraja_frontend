  'use client';

  import React, { useEffect, useState } from "react";
  import { UserCard } from "@/components/shared/userCard";
  import { useSession } from "next-auth/react";
  import { useToast } from "@/hooks/use-toast";
  import API from "@/services/api";
  import PaginationComponent from "@/components/shared/paginator";
  import FilterComponent from "@/components/shared/filterUsers";
  import SearchComponent from "@/components/shared/search";
  import CircularProgress from '@mui/material/CircularProgress';

  export function UsersList() {
    const { toast } = useToast();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const { data: session } = useSession();
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<IUser[]>([]);
    const [filterPermission, setFilterPermission] = useState<string>("");
    const [filterName, setFilterName] = useState<string>("");

    useEffect(() => {
      const fetchData = async () => {
        if (session?.token) {
          setLoading(true);
          try {
            const result = await API.get(`admin/users`, {
              headers: {
                'Authorization': `Bearer ${session?.token}`,
                'Content-Type': 'application/json',
              },
              params: {
                page: currentPage,
                permission: filterPermission,
                name: filterName,
              },
            });
            setUsers(result.data.users.data);
            setTotalPages(result.data.users.last_page);
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
    }, [currentPage, session, filterPermission, filterName]);

    const handlePageChange = (newPage: number) => {
      if (newPage > 0 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };

    return (
      <div className="h-full p-5 flex justify-between flex-col">
        <div>
          <div className="flex justify-between">
            <h1 className="font-bold leading-none tracking-tight text-[#702054] text-[24px]">Todos os usuários</h1>
            <div className="flex justify-end">
              <SearchComponent onSearch={setFilterName} />
            </div>
          </div>
          <div>
            <FilterComponent onFilterChange={setFilterPermission} />
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-[500px]">
              <CircularProgress />
            </div>
          ) : (
            users.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-4 mt-6 p-5">
                {users.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            ) : (
              <p className="text-center text-[#acacac]">Sem usuários</p>
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