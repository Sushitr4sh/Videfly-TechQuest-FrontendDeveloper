import { useState } from "react";

import Credit from "../components/Credit";
import SubscriptionButton from "../components/SubscriptionButton";
import MiscIconButton from "../components/MiscIconButton";
import Sidebar from "./Sidebar";
import Modal from "../components/Modal";
import Notification from "../components/Notification";

import { Menu03Icon } from "hugeicons-react";
import { Icon } from "@iconify/react/dist/iconify.js";

const notifications = [
  {
    picture: (
      <Icon
        icon="f7:layers-fill"
        width={"24px"}
        height={"24px"}
        color="#8A8A8A"
      />
    ),
    title: (
      <p>
        <span className="font-semibold">Your</span> video is rendering! This may
        take a moment.
      </p>
    ),
    type: "Video",
    date: "Just now",
    progress: 50,
  },
  {
    picture: "/images/Profile 2.png",
    title: (
      <p>
        <span className="font-semibold">Leslie Alexander</span> created new{" "}
        <span className="font-semibold">URL to Video</span>
      </p>
    ),
    type: "Video",
    date: "15 min ago",
    status: "online",
  },
  {
    picture: "/images/Profile 3.png",
    title: (
      <p>
        <span className="font-semibold">James Bond</span> created new{" "}
        <span className="font-semibold">URL to Video</span>
      </p>
    ),
    type: "Video",
    date: "2 hours ago",
    status: "idle",
  },
];

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  return (
    <header className="fixed left-0 top-0 bg-white flex w-full h-[3.5rem] items-center justify-between px-4 lg:px-10 lg:py-1 z-40">
      <div className="flex gap-x-3">
        <button onClick={() => setIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <line
              x1="4.65"
              y1="5.35"
              x2="19.35"
              y2="5.35"
              stroke="#111336"
              stroke-width="1.3"
              stroke-linecap="round"
            />
            <line
              x1="4.65"
              y1="11.35"
              x2="15.35"
              y2="11.35"
              stroke="#111336"
              stroke-width="1.3"
              stroke-linecap="round"
            />
            <line
              x1="4.65"
              y1="17.35"
              x2="19.35"
              y2="17.35"
              stroke="#111336"
              stroke-width="1.3"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <img src="/icons/logo.svg" alt="videfly logo" />
      </div>
      {isOpen && (
        <Modal onClose={setIsOpen}>
          <Sidebar onClose={setIsOpen} />
        </Modal>
      )}
      <nav className="flex gap-x-6 ">
        <div className="hidden lg:flex items-center">
          <Credit>Sisa 5 kredit</Credit>
          <SubscriptionButton>Upgrade plan</SubscriptionButton>
        </div>
        <div className="flex gap-x-1 items-center">
          <div className="flex items-center gap-x-3 md:gap-x-2">
            <p className="md:text-xs hidden md:block">Dewi Anjani</p>
            <img
              src="/images/Profile.png"
              alt="Profile Image"
              className="w-9 h-9 lg:w-auto md:h-auto"
            />
          </div>
        </div>
      </nav>
      {isNotifOpen && <Notification notifications={notifications} />}
    </header>
  );
};

export default MainHeader;
