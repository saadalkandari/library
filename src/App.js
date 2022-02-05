import "./App.css";
import Home from "./component/Home";
import MemberList from "./component/MemberList";
import MemberDetail from "./component/MemberDetail";
import BookDetail from "./component/BookDetail";
import BookList from "./component/BookList";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";

function App() {
  return (
    <div className="App">
      <div className="Members">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MemberList" element={<MemberList />} />
          <Route path="/MemberList/:slug" element={<MemberDetail />} />
          <Route path="/BookList" element={<BookList />} />
          <Route path="/BookList/:slug" element={<BookDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
//<Button onClick={handleShow1} variant="dark">
// Add Book
//</Button>;
//<BookList />
