import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Main from "./page/Main";
import Detail from "./page/Detail";
import Mypage from "./page/Mypage";
import Error from "./page/Error";
import Cart from "./page/Cart";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
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
        <Route path="/" element={<Main data={data} />} />
        <Route path="/detail/:id" element={<Detail data={data} />} />
        <Route path="/mypage" element={<Mypage />}>
          <Route path="point" element={<div>포인트내역</div>} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

const data = [
  {
    id: 0,
    imgUrl:
      "https://image.msscdn.net/images/goods_img/20210722/2037173/2037173_16976143519631_125.jpg",
    name: "베이직 푸퍼",
    price: 72910,
  },
  {
    id: 1,
    imgUrl:
      "https://image.msscdn.net/images/goods_img/20210722/2037167/2037167_16941494688973_125.jpg",
    name: "파스텔 푸퍼",
    price: 52910,
  },
];
