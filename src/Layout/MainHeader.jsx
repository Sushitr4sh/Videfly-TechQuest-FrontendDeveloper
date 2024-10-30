import { useState } from "react";

import Credit from "../components/Credit";
import SubscriptionButton from "../components/SubscriptionButton";
import MiscIconButton from "../components/MiscIconButton";
import Sidebar from "./Sidebar";
import Modal from "../components/Modal";

import { Menu03Icon } from "hugeicons-react";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed left-0 top-0 bg-white flex w-full items-center justify-between px-5 lg:px-10 py-2 lg:py-1 gap-x-2 z-40">
      <Menu03Icon onClick={() => setIsOpen(true)} />
      {isOpen && (
        <Modal onClose={setIsOpen}>
          <Sidebar />
        </Modal>
      )}
      <nav className="flex gap-x-6 ">
        <div className="flex items-center">
          <Credit>Sisa 5 kredit</Credit>
          <SubscriptionButton>Upgrad plan</SubscriptionButton>
        </div>
        <div className="flex gap-x-1 items-center">
          <MiscIconButton
            src="/icons/notification-01.svg"
            alt="notification icon"
          />
          <div className="flex items-center gap-x-3 md:gap-x-2">
            <p className="md:text-xs hidden md:block">Dewi Anjani</p>
            <img
              src="/images/Profile.png"
              alt="Profile Image"
              className="w-10 h-10 lg:w-auto md:h-auto"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
