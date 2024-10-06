import React from "react";
import{
    Card, 
    CardHeader, 
    CardFooter, 
    CardTitle, 
    CardDescription, 
    CardContent
} from "@/components/ui/card";
import{
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
} from "@/components/ui/table";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function MyInscriptionsTable (): React.JSX.Element{
    return(
        <Card>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[150px]">Evento</TableHead>
                        <TableHead className="w-[150px]">Inscrito</TableHead>
                        <TableHead className="w-[150px]">Data do Evento</TableHead>
                        <TableHead className="w-[150px]">Horario do Evento</TableHead>
                        <TableHead className="w-[150px]">Status</TableHead>
                        <TableHead className="w-[150px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                        <TableCell className="font-medium">Curso de costura</TableCell>
                        <TableCell className="font-medium">Maria Eduarda da Silva</TableCell>
                        <TableCell className="font-medium">30/09/2024</TableCell>
                        <TableCell className="font-medium">10:00</TableCell>
                        <TableCell className="font-medium">Aprovação pendente</TableCell>
                        <TableCell className="font-medium">
                            <Link href="/home">
                                <Button className="ml-2">Cancelar</Button>
                            </Link>
                        </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>      
        </Card>
    );
}