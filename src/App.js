import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Main from "./page";
import Detail from "./page/detail";
import Mypage from "./page/mypage";

function App() {
  const navigate = useNavigate();

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
            <Nav.Link
              href="#pricing"
              onClick={() => {
                navigate("/mypage");
              }}
            >
              My Page
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </div>
  );
}

export default App;
