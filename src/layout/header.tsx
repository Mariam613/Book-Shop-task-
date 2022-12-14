import React from "react";
export function Header() {
  return (
    <>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#/">
                <span className="text-xl">Booksy</span>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <div className="relative">
                <button
                  type="button"
                  className="text-indigo-900 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900"
                  aria-expanded="false"
                >
                  <span>Home</span>
                </button>
              </div>

              <a
                href="#/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {" "}
                Bestseller{" "}
              </a>
              <a
                href="#/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {" "}
                Category{" "}
              </a>

              <div className="relative">
                <button
                  type="button"
                  className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span>Find a store</span>
                </button>
              </div>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#/"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {" "}
                Sign in{" "}
              </a>
              <a
                href="#/"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {" "}
                Sign up{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
