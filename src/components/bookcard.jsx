// write the book component code here
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg max-w-xs">
      <img src={book.image} alt={book.name} className="w-full h-40 object-cover rounded-lg mb-2" />
      <h2 className="text-lg font-semibold">{book.name}</h2>
      <p className="text-gray-600">Genre: {book.genre}</p>
      <p className="text-gray-600">Author: {book.author}</p>
    </div>
  );
};

export default BookCard;
