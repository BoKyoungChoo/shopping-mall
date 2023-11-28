import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Detail = ({ data }) => {
  useEffect(() => {
    setTimeout(() => {
      console.log("할인 끝!");
    }, 2000);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();

  if (data.length < id || isNaN(Number(id))) return <p>없는 상품입니다.</p>;

  return (
    <div>
      <div className="alert alert-wraning">2초이내 구매시 할인</div>
      <p>{data[id].name}</p>
      <p>{data[id].price}</p>
      <img src={data[id].imgUrl} />
    </div>
  );
};

export default Detail;
