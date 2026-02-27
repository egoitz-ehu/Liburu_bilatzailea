function BookItem({ book }) {
  return (
    <div className="p-6 bg-slate-800 rounded-lg shadow-md text-white">
      <img 
        className="w-full h-96 object-cover rounded mb-4" 
        src={book.cover_path} 
        alt={book.title}
      />
      <h3 className="font-bold text-base mb-3 line-clamp-2">{book.title}</h3>
      {book.authors && (
        <p className="text-slate-300 text-sm">
          {book.authors.join(", ")}
        </p>
      )}
    </div>
  );
}

export default BookItem;