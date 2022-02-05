import booksData from "../books";
import { makeAutoObservable } from "mobx";

class BookStore {
  books = booksData;

  constructor() {
    makeAutoObservable(this);
  }

  addBook = (book) => {
    book.id = this.books[this.books.length - 1].id + 1;
    this.books = [...this.books, book];
  };
}

const bookstore = new BookStore();
export default bookstore;
