import { Col, Container, Nav, Navbar, Placeholder, Row } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Main from "./page/Main";
// import Error from "./page/Error";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { lazy } from "react";

// const Detail = lazy(() => import("./page/Mypage"));
const Cart = lazy(() => import("./page/Cart"));
const Mypage = lazy(() => import("./page/Mypage"));

function App() {
  const navigate = useNavigate();

  const { data: user } = useQuery({
    queryKey: ["get_user"],
    queryFn: () => {
      return axios
        .get("https://codingapple1.github.io/userdata.json")
        .then((data) => {
          return data.data;
        });
    },
    options: {
      staleTime: 2000,
    },
  });

  if (!user) return;

  return (
    <div className="App mb-5">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
              href="#features"
            >
              cart
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() => {
                navigate("/mypage");
              }}
            >
              My Page
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto text-white-50">반가워요 {user.name}</Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main data={products} />} />
        {/* <Route path="/detail/:id" element={<Detail data={products} />} /> */}
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

const products = [
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
  {
    id: 2,
    imgUrl:
      "https://image.msscdn.net/images/goods_img/20210722/2037167/2037167_16941494688973_125.jpg",
    name: "파스텔 푸퍼2",
    price: 52910,
  },
];
