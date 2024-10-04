import { Input } from "../ui/input";
import { Search } from 'lucide-react';

interface SearchComponentProps {
    onSearch: (name: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className="w-30">
            <div className="relative">
                <Input 
                    className="shadow-md border-none bg-white" 
                    placeholder="Pesquisar..." 
                    onChange={handleSearchChange}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Search size={18} color="#F69053" />
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;
