import React from "react";
import { Link } from "react-router-dom";

function MemberItem({ member }) {
  return (
    <Link
      className="text-decoration-none text-reset member-card  "
      to={`/MemberList/${member.slug}`}
    >
      <div className="p-5 border rounded border-dark  ">
        <h2>{member.firstName + " " + member.lastName}</h2>
      </div>
    </Link>
  );
}

export default MemberItem;
