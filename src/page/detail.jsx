import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addItemFn } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Detail = ({ data }) => {
  const [showNotice, setShowNotice] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setShowNotice(false);
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  console.log(productList);
  if (data.length < id || isNaN(Number(id))) return <p>없는 상품입니다.</p>;

  return (
    <>
      <div>
        {showNotice && (
          <div className="alert alert-wraning">2초이내 구매시 할인</div>
        )}
        <p>{data[id].name}</p>
        <p>{data[id].price}</p>
        <img src={data[id].imgUrl} />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(addItemFn({ id: id, name: data[id].name, count: 1 }));
          }}
        >
          주문하기
        </button>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item
            onClick={() => {
              setTab(0);
            }}
          >
            <Nav.Link eventKey="link0">상세</Nav.Link>
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              setTab(1);
            }}
          >
            <Nav.Link eventKey="link1">리뷰</Nav.Link>
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              setTab(2);
            }}
          >
            <Nav.Link eventKey="link2">반품 및 교환</Nav.Link>
          </Nav.Item>
        </Nav>
        {tab === 0 && <div>내용0</div>}
        {tab === 1 && <div>내용1</div>}
        {tab === 2 && <div>내용2</div>}
      </div>
    </>
  );
};

export default Detail;
