import { useEffect, useState } from "react";
import BookItem from "./BookItem";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./library.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books.slice(0, 100));
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-white text-2xl font-bold mb-6">Liburutegia</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {books.map((book, idx) => (
          <BookItem key={idx} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;