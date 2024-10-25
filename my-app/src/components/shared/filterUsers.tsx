import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "../ui/select";
import { Filter } from 'lucide-react';

interface FilterUsersProps {
  onFilterChange: (value: string) => void;
}

const FilterUsers: React.FC<FilterUsersProps> = ({ onFilterChange }) => {
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
            <SelectItem value="volunteer">Voluntário</SelectItem>
            <SelectItem value="administrator">Administrador</SelectItem>
            <SelectItem value="beneficiary">Beneficiário</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterUsers;