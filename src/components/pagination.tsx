import React from "react";
type PaginationProps = {
  pagination: {
    next: string | null;
    previous: string | null;
  };
  handlePagination: (e: any) => void;
};
export function Pagination({ pagination, handlePagination }: PaginationProps) {
  return (
    <div className=" px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          {pagination.previous !== null && (
            <button
              onClick={handlePagination}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <svg
                data-txt="prev"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  data-txt="prev"
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          <a
            href="#/"
            aria-current="page"
            className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            {Number(pagination.next?.split("?")[1].split("=")[1]) - 1 || 1}
          </a>
          {pagination.next !== null && (
            <button
              data-txt="next"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={handlePagination}
            >
              <span className="sr-only">Next</span>
              <svg
                data-txt="next"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  data-txt="next"
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
