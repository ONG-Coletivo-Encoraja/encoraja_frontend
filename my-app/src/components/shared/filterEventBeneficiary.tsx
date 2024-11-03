import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Filter } from 'lucide-react';
import Link from "next/link";
import { useSession } from "next-auth/react";

interface FilterComponentProps {
    onFilterChange: (status: string | undefined) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange }) => {
    const { data: session } = useSession();
    const handleFilterChange = (value: string) => {
        onFilterChange(value === "all" ? undefined : value); 
    };

    return (
        <div className="mt-5 flex items-center">
            <div className="w-60">
                <Select onValueChange={handleFilterChange}>
                    <SelectTrigger className="shadow-md border-none bg-white w-full">
                        <Filter color="#702054" />
                        <SelectValue placeholder="Filtrar" className="truncate" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="active">Ativos</SelectItem>
                        <SelectItem value="finished">Finalizados</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            {session?.user.permission === 'volunteer' && (
            <Link href="/eventos/cadastrar-evento">
                <Button className="ml-2">
                    Criar
                </Button>
            </Link>
            )}
        </div>
    );
};

export default FilterComponent;