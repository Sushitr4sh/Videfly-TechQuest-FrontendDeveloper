import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";

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
