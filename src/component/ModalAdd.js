import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import memberstore from "./MemberStore";

function ModalAdd({ show, handleClose }) {
  const [member, setMember] = useState({
    firstName: " ",
    lastName: " ",
    currentlyBorrowedBooks: " ",
    membership: "",
  });
  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
    console.log(member);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    memberstore.addMember(member);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Member</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={handleChange}
            name="firstName"
          />
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={handleChange}
            name="lastName"
          />
          <Form.Label>Borrowed Books:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a Number"
            onChange={handleChange}
            name="currentlyBorrowedBooks"
          />
          <Form.Label>Membership:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="membership"
            onChange={handleChange}
          >
            <option>Member Ship</option>
            <option value="platinum">platinum</option>
            <option value="gold">gold</option>
            <option value="silver">silver</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalAdd;
