import membersData from "../membersData";
import { makeAutoObservable } from "mobx";

class MemberStore {
  members = membersData;

  constructor() {
    makeAutoObservable(this);
  }

  addMember = (member) => {
    member.id = this.members[this.members.length - 1].id + 1;
    this.members = [...this.members, member];
  };
}

const memberstore = new MemberStore();
export default memberstore;
