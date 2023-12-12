import { Col } from "react-bootstrap";

const Product = ({ data }) => {
  return (
    <Col sm>
      <img src={`${data.imgUrl}`} alt="상품이미지" />
      <h2>{data.name ?? data.title}</h2>
      <p>{data.price}</p>
    </Col>
  );
};

export default Product;
