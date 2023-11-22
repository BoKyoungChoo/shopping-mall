import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";

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
    </div>
  );
}

export default App;
