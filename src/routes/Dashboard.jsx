import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Outlet />
      <main>Aku kaya</main>
    </>
  );
};

export default Dashboard;
