import React from "react";
import memberstore from "./MemberStore";
import { useParams } from "react-router-dom";

function MemberDetail() {
  const { slug } = useParams();
  const member = memberstore.members.find((member) => member.slug === slug);
  return (
    <div className="member-detail-img">
      <div className="text-block1 ">
        <h2>{member.firstName + " " + member.lastName}</h2>
        <p>{`Borrowed Books (${member.currentlyBorrowedBooks})`}</p>
        <p>{`Membership: ${member.membership}`}</p>
      </div>
    </div>
  );
}

export default MemberDetail;
