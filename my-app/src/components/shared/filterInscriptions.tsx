import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "../ui/select";
import { Filter } from 'lucide-react';

interface FilterInscriptionsProps {
    onFilterChange: (value: string) => void;
}

const FilterInscriptions: React.FC<FilterInscriptionsProps> = ({ onFilterChange }) => {
    const handleFilterChange = (value: string) => {
        onFilterChange(value);
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
                        <SelectItem value=" ">Todos</SelectItem>
                        <SelectItem value="approved">Aprovados</SelectItem>
                        <SelectItem value="pending">Pendentes</SelectItem>
                        <SelectItem value="rejected">Rejeitados</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default FilterInscriptions;
