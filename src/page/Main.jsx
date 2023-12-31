import { Container, Row } from "react-bootstrap";
import Product from "../components/product";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

let btnClickNum = 2;

const Main = ({ data }) => {
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    return () => {
      btnClickNum = 2;
    };
  }, []);

  return (
    <>
      <div className="main-bg"></div>
      <Container className="mt-5">
        <Row>
          {dataList.map((info) => {
            return <Product key={info.name ?? info.title} data={info} />;
          })}
        </Row>
        {btnClickNum < 4 && (
          <button
            type="button"
            onClick={() => {
              axios
                .get(
                  `https://codingapple1.github.io/shop/data${btnClickNum}.json`
                )
                .then((data) => {
                  btnClickNum++;
                  setDataList((prev) => prev.concat(data.data));
                })
                .catch(() => {
                  console.log("통신 실패");
                });
            }}
          >
            더보기
          </button>
        )}
      </Container>
    </>
  );
};

export default Main;
