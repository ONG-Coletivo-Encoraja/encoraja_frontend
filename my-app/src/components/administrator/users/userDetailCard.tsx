'use client';

import { useToast } from "@/hooks/use-toast";
import API from "@/services/api";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectGroup, SelectLabel, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CircleUserIcon } from "lucide-react";
import { CircularProgress } from "@mui/material";

export default function RequestVolunteerDetailsCard() {
    const router = useRouter();
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState<boolean>(true);
    const { data: session } = useSession();
    const { toast } = useToast();
    const [user, setUser] = useState<IUser>();
    const [selectedPermission, setSelectedPermission] = useState<string>('');


    useEffect(() => {
        const fetchData = async () => {
            if (session?.token) {
                setLoading(true);
                try {
                    const result = await API.get(`/admin/users/${id}`, {
                        headers: {
                            'Authorization': `Bearer ${session?.token}`,
                            'Content-Type': 'application/json',
                        }
                    });
                    console.log(result.data.user)
                    setUser(result.data.user);
                } catch (error) {
                    console.error(error);
                    toast({
                        title: "Erro ao carregar usuário",
                        description: "Houve um problema ao tentar carregar informações. Tente novamente mais tarde.",
                        variant: "destructive",
                    });
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [session, id]);

    const handlePermissionChange = (value: string) => {
        setSelectedPermission(value);
    };
    const handleSave = async () => {
        if (session?.token) {
            setLoading(true);
            try {
                await API.put(`/admin/users/${id}`,
                    { type: selectedPermission },
                    {
                        headers: {
                            'Authorization': `Bearer ${session?.token}`,
                            'Content-Type': 'application/json',
                        }
                    }
                );
                router.push('/users');
                toast({
                    title: "Sucesso!",
                    description: "Permissão atualizada com sucesso.",
                    variant: "default",
                });
            } catch (error) {
                console.error(error);
                toast({
                    title: "Erro ao atualizar o status",
                    description: "Houve um problema ao tentar atualizar a permissão. Tente novamente mais tarde.",
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
                                <Label className=" text-[#727272]"><b>Nome: {user?.name}</b> </Label>
                                <Label className=" text-[#727272]"><b>Data de nascimento: {user?.date_birthday}</b> </Label>
                                <Label className=" text-[#727272]"><b>Email:</b> {user?.email} </Label>
                                <Label className=" text-[#727272]"><b>Telefone:</b> {user?.phone}</Label>
                                {user?.availability && (
                                    <Label className="text-[#727272]"><b>Disponibilidade:</b> {user.availability}</Label>
                                )}
                                {user?.course_experience && (
                                    <Label className="text-[#727272]"><b>Experiência:</b> {user.course_experience}</Label>
                                )}
                                {user?.expectations && (
                                    <Label className="text-[#727272]"><b>Expectativas:</b> {user.expectations}</Label>
                                )}
                                {user?.how_know && (
                                    <Label className="text-[#727272]"><b>Como soube:</b> {user.how_know}</Label>
                                )}
                            </div>
                            <div className="m-6 flex items-center gap-4">
                                <Label className=" text-[#727272] text-semibold">Permissão:</Label>
                                <Select value={selectedPermission} onValueChange={handlePermissionChange}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Selecione a permissão:" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="volunteer">Voluntário</SelectItem>
                                            <SelectItem value="administrator">Administrador</SelectItem>
                                            <SelectItem value="beneficiary">Beneficiário</SelectItem>
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
    )
}