import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import bookstore from "./BookStore";

function ModalAddBook({ show1, handleClose1 }) {
  const [book, setBook] = useState({
    author: " ",
    title: " ",
    genre: " ",
  });
  const handleChange1 = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
    console.log(book);
  };
  const handleSubmit1 = (event) => {
    event.preventDefault();
    handleClose1();
    bookstore.addBook(book);
  };

  return (
    <Modal show={show1} onHide={handleClose1}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Book</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit1}>
        <Modal.Body>
          <Form.Label> Author:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author"
            onChange={handleChange1}
            name="author"
          />
          <Form.Label> Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={handleChange1}
            name="title"
          />
          <Form.Label>Genre:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Genre"
            onChange={handleChange1}
            name="genre"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="dark" type="submit" onClick={handleSubmit1}>
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalAddBook;
