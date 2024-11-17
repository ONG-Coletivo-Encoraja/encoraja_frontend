import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponentProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <Pagination  className="p-3">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious 
                        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)} 
                        className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Anterior
                    </PaginationPrevious>
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => (
                    <PaginationItem key={index + 1}>
                        <PaginationLink 
                            href="#" 
                            onClick={() => onPageChange(index + 1)}
                            className={`${currentPage === index + 1 ? "font-bold" : ""} cursor-pointer`}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext 
                        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)} 
                        className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Próximo
                    </PaginationNext>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export default PaginationComponent;
