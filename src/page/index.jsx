import { Container, Row } from "react-bootstrap";
import Product from "../components/product";
import { Link } from "react-router-dom";

const Main = ({ data }) => {
  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {data.map((info) => {
            return (
              <Link key={info.name} to={`/detail/${info.id}`}>
                <Product data={info} />
              </Link>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Main;
