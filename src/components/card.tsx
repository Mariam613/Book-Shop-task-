import React from "react";
import { Book } from "../models/book";
type BookProps = {
  book: Book;
};
export function Card({ book }: BookProps) {
  return (
    <div className="w-full md:w-1/4 px-2 mb-4">
      {" "}
      <div className="max-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
          <div className="p-4">
            <h1 className="mt-4 text-2xl line-clamp-1 overflow-hidden font-bold hover:underline cursor-pointer">
              {book.title}
            </h1>
            {book.authors.map(({ name }, i) => (
              <p
                className="line-clamp-1 overflow-hidden mt-2 font-sans text-gray-700"
                key={i}
              >
                {name}
              </p>
            ))}
          </div>
          <div className="relative">
            <img
              className="w-80 h-80"
              src={book.formats["image/jpeg"]}
              alt="bg"
            />
            <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>{book.download_count}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
