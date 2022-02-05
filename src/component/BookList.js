import React from "react";
import { observer } from "mobx-react";
import bookstore from "./BookStore";
import BookItem from "./BookItem";
import { useState } from "react";
import Modal1 from "./ModalAddBook";
import { Button } from "react-bootstrap";
//import ModalAddBook from "./ModalAddBook";

function BookList() {
  const [show1, setShow1] = useState(false);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const genretype = (event) => setGenre(event.target.value);
  const search = (event) => setQuery(event.target.value);

  return (
    <div className="book-img">
      <div className="p-3">
        <input placeholder="search" onChange={search} />
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={genretype}
        >
          <option value="" selected>
            All
          </option>
          <option value="Self-Help">Self-Help</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Suspense">Suspense</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Biography">Biography</option>
          <option value="Business">Business</option>
          <option value="Entrepreneurship">Entrepreneurship</option>
          <option value="Crime">Crime</option>
          <option value="Mystery">Mystery</option>
          <option value="Fiction">Fiction</option>
        </select>
        <div className="member-text ">
          <h2>Library Books</h2>
        </div>
        <div>
          <div className="d-flex gap-3 flex-wrap my-3">
            {bookstore.books
              .filter(
                (book) =>
                  book.title
                    .toLocaleLowerCase()
                    .includes(query.toLocaleLowerCase()) ||
                  book.genre.includes(genre)
              )
              .map((book) => (
                <BookItem book={book} />
              ))}
          </div>
        </div>
        <Button onClick={handleShow1} variant="dark">
          Add Book
        </Button>
        <Modal1 show1={show1} handleClose1={handleClose1}></Modal1>
      </div>
    </div>
  );
}

export default observer(BookList);
