'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import API from "@/services/api";
import { CircularProgress } from "@mui/material";
import { Label } from "@radix-ui/react-label";
import { HandHeart } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";


export function RequestsCard() {
    const { data: session } = useSession();
    const [requests, setRequests] = useState<IRequestVolunteer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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
                            status: 'pending',
                        },
                    });
                    setRequests(result.data.requests.data);
                } catch (error) {
                    console.error('Error fetching inscriptions:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [session]);

    console.log(requests)
    return (
        <Card className="w-[400px] mb-6">
            <CardHeader>
                <CardDescription className=" text-[#F69053]">Solicitações de voluntariado pendentes</CardDescription>
                <div className="flex items-center justify-between">
                    <CardTitle>Candidatos</CardTitle>
                    <div className="bg-[#A732A9] rounded-full w-12 h-12 flex items-center justify-center">
                        <HandHeart color="white" />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div>
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <CircularProgress />
                        </div>
                    ) : (
                        <ul>
                            {requests.map((request) => (
                                <div key={request.id}>
                                    <li><Label className=" text-[20px] text-[#5E5E5E]">{request.user.name}</Label></li>
                                    <li><Label className="text-[#F69053] underline"><Link href={`/solicitacoes/detalhes/${request.id}`}>Ver candidatura </Link></Label></li>
                                </div>
                            ))}
                        </ul>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}