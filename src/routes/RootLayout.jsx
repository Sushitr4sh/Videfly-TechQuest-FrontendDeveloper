import { Outlet } from "react-router-dom";

import MainHeader from "../Layout/MainHeader";
import Sidebar from "../Layout/Sidebar";

const RootLayout = () => {
  return (
    <>
      <section className="lg:flex w-full">
        <MainHeader />
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <main className="relative w-full lg:ml-[260px] lg:mr-5">
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default RootLayout;
