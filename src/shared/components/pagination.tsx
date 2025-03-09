import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  const createPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
        pages.push(
          <button
            key={i}
            className={`px-2 py-1 border-none rounded-lg transition-all hover:bg-gray-100 ${
              i === currentPage ? "bg-gray-100" : ""
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>,
        );
      } else if (i === 2 || i === totalPages - 1) {
        pages.push(
          <span key={`ellipsis-${i}`} className="px-2 text-gray-500">
            ...
          </span>,
        );
      }
    }
    return pages;
  };

  return (
    <div className="flex mt-10 justify-center gap-2">
      <button
        className="px-4 py-1 border-none rounded-lg transition-all hover:bg-gray-100 disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowLeftIcon />
      </button>
      {createPagination()}
      <button
        className="px-4 py-1 border-none rounded-lg transition-all hover:bg-gray-100 disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};
