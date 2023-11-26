import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import Product from "./components/product";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./page/main";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">Shop</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Best</Nav.Link>
            <Nav.Link href="#pricing">My Page</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<div>상세페이지</div>} />
        <Route path="/mypage" element={<div>마이페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
