import { useLocation, useNavigate, useParams } from "react-router-dom";

const Detail = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(Number(id));

  if (data.length < id || isNaN(Number(id))) return <p>없는 상품입니다.</p>;

  return (
    <div>
      <p>{data[id].name}</p>
      <p>{data[id].price}</p>
      <img src={data[id].imgUrl} />
    </div>
  );
};

export default Detail;
