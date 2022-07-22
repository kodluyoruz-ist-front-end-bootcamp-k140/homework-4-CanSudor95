import { Outlet } from "react-router-dom";

function SharedProductLayout() {
  return (
    <>
      <h2>Products</h2>
      <Outlet />
    </>
  );
}

export default SharedProductLayout;
