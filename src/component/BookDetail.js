import React from "react";
import bookstore from "./BookStore";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { slug } = useParams();
  const book = bookstore.books.find((book) => book.slug === slug);
  return (
    <div className="book-detail-img">
      <div className="text-block">
        <p>{`author: ${book.author}`}</p>
        <p>{`Genre: ${book.genre}`}</p>
        <p>{`Borrowed: ${book.borrowedBy}`}</p>
      </div>
    </div>
  );
}

export default BookDetail;
