import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Filter } from 'lucide-react';

const FilterComponent = () => {
    return (
        <div className="mt-5 flex items-center">
            <div className="w-60">
                <Select>
                    <SelectTrigger className="border-[#702054] w-full" style={{ backgroundColor: 'white' }}>
                        <Filter color="#702054" />
                        <SelectValue placeholder="Filtrar" className="truncate" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="createdforme">Criados por mim</SelectItem>
                        <SelectItem value="active">Ativos</SelectItem>
                        <SelectItem value="finished">Finalizados</SelectItem>
                        <SelectItem value="inactive">Inativos</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button className="ml-2">
                Criar
            </Button>
        </div>
    );
};

export default FilterComponent;