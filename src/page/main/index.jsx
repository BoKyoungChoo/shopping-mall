import { Container, Row } from "react-bootstrap";
import Product from "../../components/product";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {productInfo.map((info) => {
            return (
              <Link key={info.name} to="/detail">
                <Product productInfo={info} />
              </Link>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Main;

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
