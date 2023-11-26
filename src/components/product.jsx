import { Col } from "react-bootstrap";

const Product = ({ productInfo }) => {
  return (
    <Col sm>
      <img src={`${productInfo.imgUrl}`} alt="상품이미지" />
      <h2>{productInfo.name}</h2>
      <p>{productInfo.price}</p>
    </Col>
  );
};

export default Product;
