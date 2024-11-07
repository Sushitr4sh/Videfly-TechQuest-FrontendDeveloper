import { Outlet } from "react-router-dom";
import { useState } from "react";

import MainHeader from "../Layout/MainHeader";
import Sidebar from "../Layout/Sidebar";

const RootLayout = () => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  return (
    <>
      <section className="lg:flex w-full">
        <MainHeader isNotifOpen={isNotifOpen} setIsNotifOpen={setIsNotifOpen} />
        <div className="hidden sm:block">
          <Sidebar isNotifOpen={isNotifOpen} setIsNotifOpen={setIsNotifOpen} />
        </div>
        <main className="relative w-full">
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default RootLayout;
