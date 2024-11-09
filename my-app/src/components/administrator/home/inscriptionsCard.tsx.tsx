'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Inscription } from "@/interfaces/IInscription";
import API from "@/services/api";
import { CircularProgress } from "@mui/material";
import { HandHeart } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";


export function InscriptionsCard() {
    const { data: session } = useSession();
    const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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
                            status: 'pending',
                        },
                    });
                    setInscriptions(result.data.inscriptions.data);
                } catch (error) {
                    console.error('Error fetching inscriptions:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [session]);

    return (
        <Card className="w-[400px]">
            <CardHeader>
                <CardDescription className=" text-[#F69053]">Inscrições pendentes</CardDescription>
                <div className="flex items-center justify-between">
                    <CardTitle>Inscrições</CardTitle>
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
                            {inscriptions.map((inscription) => (
                                <div key={inscription.id}>
                                    <li><Label className=" text-[20px] text-[#5E5E5E]">{inscription.user.name}</Label></li>
                                    <li><Label className="text-[#F69053] underline"><Link href={`/inscricoes`}>Ver inscrições</Link></Label></li>
                                </div>
                            ))}
                        </ul>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}