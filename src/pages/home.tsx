import React, { useState, useEffect } from "react";
import { Header } from "../layout/header";
import { getAll } from "../api/booksApi";
import { Card } from "../components/card";
import { Book } from "../models/book";
import { Pagination } from "../components/pagination";
import { Footer } from "../layout/footer";
import { Spinner } from "react-bootstrap";
export function Home() {
  const [books, setBooks] = useState<Book[]>();
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<{
    next: string | null;
    previous: string | null;
  }>({ next: null, previous: null });
  useEffect(() => {
    getAll().then((data) => {
      setLoading(false);
      setBooks(data.results);
      setPagination({ next: data.next, previous: data.previous });
    });
  }, []);
  const handlePagination = (e: any) => {
    const { txt } = e.target.dataset;
    const { next, previous } = pagination;
    setLoading(true);
    if (txt !== null) {
      getAll(
        txt === "next" ? next?.split("?")[1] : previous?.split("?")[1]
      ).then((data) => {
        setLoading(false);
        setBooks(data.results);
        setPagination({ next: data.next, previous: data.previous });
      });
    }
  };
  return (
    <>
      <Header />
      <div
        className="py-20"
        style={{
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container  mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Build your Library
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Buy two selected books and get one for free
          </h3>

          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            View all
          </button>
        </div>
      </div>
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-left text-gray-800 mb-8">
            Popular Now
          </h2>
          {loading && (
            <div
              style={{ width: "200px", height: "200px" }}
              className="w-100 d-flex text-[#DC2626] justify-content-center align-items-center"
            >
              {/* bootstrap spinner */}
              <Spinner
                animation="border"
                role="status"
                style={{ width: "4rem", height: "4rem" }}
              ></Spinner>
            </div>
          )}
          {!loading && (
            <div className="flex flex-wrap">
              {books?.map((book: Book) => (
                <Card key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
        <Pagination
          pagination={pagination}
          handlePagination={handlePagination}
        />
      </section>
      <Footer />
    </>
  );
}
