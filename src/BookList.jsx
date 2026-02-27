import { useEffect, useState } from "react";
import BookItem from "./BookItem";

function BookList() {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("./library.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
      });
  }, []);

  useEffect(() => {
    const filtered = books.filter(book =>
      book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredBooks(filtered);
  }, [searchTerm, books])

  return (
    <div className="p-6">
      <h1 className="text-white text-2xl font-bold mb-6">Liburutegia</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Bilatu liburua izenburuarekin..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {
        filteredBooks.length > 0
        ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredBooks.map((book, idx) => (
          <BookItem key={idx} book={book} />
        ))}
      </div>
        )
        : 
        (
          <div className="flex items-center justify-center">
            <div className="text-white text-xl font-bold">Ez da aurkitu libururik</div>
          </div>
        )
      }
    </div>
  );
}

export default BookList;