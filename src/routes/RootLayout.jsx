import { Outlet } from "react-router-dom";

import MainHeader from "../Layout/MainHeader";
import Sidebar from "../Layout/Sidebar";

const RootLayout = () => {
  return (
    <>
      <section className="flex w-full">
        <Sidebar />
        <main className="relative w-[80%]">
          <MainHeader />
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default RootLayout;
