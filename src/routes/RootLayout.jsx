import { Outlet } from "react-router-dom";

import MainHeader from "../Layout/MainHeader";
import Sidebar from "../Layout/Sidebar";

const RootLayout = () => {
  return (
    <>
      <section className="flex w-full">
        <MainHeader />
        <Sidebar />
        <main className="relative w-[80%] ml-[260px]">
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default RootLayout;
