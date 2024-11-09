'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectGroup, SelectLabel, SelectValue } from "@/components/ui/select";
import { CircleUserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import API from "@/services/api";
import { useToast } from "@/hooks/use-toast";
import { CircularProgress } from "@mui/material";

export function RequestVolunteerDetailsCard() {
  const { id } = useParams<{ id: string }>();
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [request, setRequest] = useState<IRequestVolunteer | undefined>();
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        setLoading(true);
        try {
          const result = await API.get(`/admin/requestsVolunteer/${id}`, {
            headers: {
              'Authorization': `Bearer ${session?.token}`,
              'Content-Type': 'application/json',
            }
          });
          setRequest(result.data.request);
          setSelectedStatus(result.data.request.status);
        } catch (error) {
          console.error(error);
          toast({
            title: "Erro ao carregar a solicitação de voluntariado",
            description: "Houve um problema ao tentar carregar suas solicitações. Tente novamente mais tarde.",
            variant: "destructive",
          });
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [session, id]);

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
  };

  const handleSave = async () => {
    if (session?.token) {
      setLoading(true);
      try {
        await API.put(`/admin/requestsVolunteer/${id}`,
          { status: selectedStatus },
          {
            headers: {
              'Authorization': `Bearer ${session?.token}`,
              'Content-Type': 'application/json',
            }
          }
        );
        router.push('/solicitacoes');
        toast({
          title: "Sucesso!",
          description: "Status atualizado com sucesso.",
          variant: "default",
        });
      } catch (error) {
        console.error(error);
        toast({
          title: "Erro ao atualizar o status",
          description: "Houve um problema ao tentar atualizar o status. Tente novamente mais tarde.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="h-screen">
      <Card className="w-[1000px] h-[600px]">
        <CardHeader className="flex items-center">
          <CircleUserIcon className="w-16 h-16 text-[#5E5E5E]" />
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center mt-6">
              <CircularProgress color="secondary" />
            </div>
          ) : (
            <div>
              <div className="flex flex-col gap-6 ml-6">
                <Label className=" text-[#727272]"><b>Nome:</b> {request?.user.name}</Label>
                <Label className=" text-[#727272]"><b>Data de nascimento:</b> {request?.user.date_birthday}</Label>
                <Label className=" text-[#727272]"><b>Email:</b> {request?.user.email}</Label>
                <Label className=" text-[#727272]"><b>Telefone:</b> {request?.user.phone}</Label>
                <Label className=" text-[#727272]"><b>Disponibilidade:</b> {request?.availability}</Label>
                <Label className=" text-[#727272]"><b>Experiência:</b> {request?.course_experience}</Label>
                <Label className=" text-[#727272]"><b>Como soube:</b> {request?.how_know}</Label>
                <Label className=" text-[#727272]"><b>Expectativas:</b> {request?.expectations}</Label>
              </div>
              <div className="m-6 flex items-center gap-4">
                <Label className=" text-[#727272] text-semibold">Status:</Label>
                <Select value={selectedStatus} onValueChange={handleStatusChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="pending">Pendente</SelectItem>
                      <SelectItem value="accepted">Aprovado</SelectItem>
                      <SelectItem value="rejected">Rejeitado</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button onClick={() => { router.back() }} variant="outline">
            Cancelar
          </Button>
          <Button onClick={handleSave} type="button">
            Salvar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}