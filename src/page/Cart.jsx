import { useDispatch, useSelector } from "react-redux";

import { Table } from "react-bootstrap";
import { ageChangeFn, countUpdateFn, nameChangeFn } from "../store";

const Cart = () => {
  const user = useSelector((state) => state.user);
  //productList 왜 업데이트 안되지?
  const productList = useSelector((state) => state.productList);

  const dispatch = useDispatch();

  return (
    <div>
      <p>
        {user.name}의 장바구니({user.age})
      </p>
      <button
        onClick={() => {
          dispatch(ageChangeFn());
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(countUpdateFn(product.id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
