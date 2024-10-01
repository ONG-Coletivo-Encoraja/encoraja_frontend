import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Filter } from 'lucide-react';

const FilterInscriptions = () => {
    return (
        <div className="mt-5 flex items-center">
            <div className="w-60">
                <Select>
                    <SelectTrigger className="shadow-md border-none bg-white w-full">
                        <Filter color="#702054" />
                        <SelectValue placeholder="Filtrar" className="truncate" />
                    </SelectTrigger>
                    <SelectContent>
                        {/* PRECISA DECIDIR O QUE SERA ADICIONADO NESSE FILTRO */}
                        <SelectItem value="active">Ativos</SelectItem>
                        <SelectItem value="finished">Finalizados</SelectItem>
                        <SelectItem value="inactive">Inativos</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default FilterInscriptions;