import { Outlet } from "react-router-dom";

export const Mypage = () => {
  return (
    <div>
      마이페이지
      <Outlet></Outlet>
    </div>
  );
};
