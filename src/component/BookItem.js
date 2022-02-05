import React from "react";
import { Link } from "react-router-dom";

function BookItem({ book }) {
  return (
    <Link
      className="text-decoration-none text-reset book-card "
      to={`/BookList/${book.slug}`}
    >
      <div className="p-5 border rounded border-dark h-100">
        <h2>{book.title}</h2>
      </div>
    </Link>
  );
}

export default BookItem;
