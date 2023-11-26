import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import Product from "./components/product";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Best</Nav.Link>
            <Nav.Link href="#pricing">My Page</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          {productInfo.map((info) => {
            return <Product key={info.name} productInfo={info} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;

const productInfo = [
  {
    imgUrl:
      "https://image.msscdn.net/images/goods_img/20210722/2037173/2037173_16976143519631_125.jpg",
    name: "베이직 푸퍼",
    price: 72910,
  },
  {
    imgUrl:
      "https://image.msscdn.net/images/goods_img/20210722/2037167/2037167_16941494688973_125.jpg",
    name: "파스텔 푸퍼",
    price: 52910,
  },
];
