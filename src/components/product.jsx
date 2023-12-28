import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  return (
    <Col md={4}>
      <Link
        key={data.name ?? data.title}
        to={`/detail/${data.id}`}
        className="text-decoration-none"
      >
        <img src={`${data.imgUrl}`} alt="상품이미지" />
        <h2 className="text-black fs-5 text-decoration-none">
          {data.name ?? data.title}
        </h2>
        <p className="text-black">{data.price}</p>
      </Link>
    </Col>
  );
};

export default Product;
