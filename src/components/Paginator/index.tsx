import React from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

const Paginator: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-3 m-5 bg-white border-gray-200 sm:px-6">
      <div className="flex justify-between flex-1 sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>

              <TiChevronLeft size={30} />
              <span className="px-3 uppercase text-secondary-action font-pt-sans">
                Older post
              </span>
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 border-t border-b border-indigo-500 bg-indigo-50"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-50"
            >
              2
            </a>
            <a
              href="#"
              className="relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-50 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-300">
              ...
            </span>
            <a
              href="#"
              className="relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-50 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-r border-gray-300 rounded-r-md hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <span className="px-3 uppercase text-text-primary font-pt-sans">
                Next post
              </span>
              <TiChevronRight size={30} />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
