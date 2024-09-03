import { Select, SelectContent, SelectTrigger, SelectItem } from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const FilterComponent = () => {
  return (
    <div className="filter-container p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Filtros</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Categoria</label>
        <Select>
            <SelectTrigger></SelectTrigger>
            <SelectContent>
            <SelectItem value="teste">Categoria 1</SelectItem>
          <SelectItem value="teste">Categoria 2</SelectItem>
          <SelectItem value="teste">Categoria 3</SelectItem>

            </SelectContent>

        </Select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Pesquisa</label>
        <Input placeholder="Digite sua pesquisa..." />
      </div>
      <Button className="w-full">
        Aplicar Filtros
      </Button>
    </div>
  );
};

export default FilterComponent;
