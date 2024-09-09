import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from 'lucide-react';

const SearchComponent = () => {
    return (
        <div className="w-30">
            <div className="relative">
                <Input className="shadow-md" style={{ backgroundColor: 'white' }} placeholder="Pesquisar.."></Input>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search size={18} color="#F69053" />
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;
