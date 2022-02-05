import React from "react";
import MemberItem from "./MemberItem";
import { observer } from "mobx-react";
import memberstore from "./MemberStore";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "./ModalAdd";

function MemberList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="member-img">
      <div className="p-3 ">
        <div className="member-text ">
          <h2>Library Members</h2>
        </div>

        <div className="d-flex gap-3 flex-wrap m-3">
          {memberstore.members.map((member) => (
            <MemberItem member={member} />
          ))}
        </div>
        <Button onClick={handleShow} variant="dark">
          Add Member
        </Button>
        <Modal show={show} handleClose={handleClose}></Modal>
      </div>
    </div>
  );
}

export default observer(MemberList);
