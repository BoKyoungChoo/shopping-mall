import { useDispatch, useSelector } from "react-redux";

import { Table } from "react-bootstrap";
import { nameChangeFn } from "../store";

const Cart = () => {
  const userName = useSelector((state) => state.userName);
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  return (
    <div>
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
                      dispatch(nameChangeFn());
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
