import { useState } from "react";

import Credit from "../components/Credit";
import SubscriptionButton from "../components/SubscriptionButton";
import MiscIconButton from "../components/MiscIconButton";
import Sidebar from "./Sidebar";
import Modal from "../components/Modal";
import Notification from "../components/Notification";

import { Menu03Icon } from "hugeicons-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";

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

const MainHeader = ({ isNotifOpen, setIsNotifOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 bg-white flex w-full h-[3.5rem] items-center justify-between px-4 sm:px-6 lg:px-10 lg:py-1 z-40">
      <div className="flex gap-x-3">
        <button onClick={() => setIsOpen(true)} className="sm:hidden">
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
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <line
              x1="4.65"
              y1="11.35"
              x2="15.35"
              y2="11.35"
              stroke="#111336"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <line
              x1="4.65"
              y1="17.35"
              x2="19.35"
              y2="17.35"
              stroke="#111336"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <img src="/icons/logo.svg" alt="videfly logo" className="sm:hidden" />
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center bg-black/20"
            >
              <Modal onClose={() => setIsOpen(false)} />
            </motion.div>
            <motion.div
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg"
            >
              <Sidebar onClose={() => setIsOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <nav className="flex gap-x-4 ">
        <div className="hidden sm:flex items-center">
          <div className="hidden lg:block">
            <Credit>Sisa 5 kredit</Credit>
          </div>
          <SubscriptionButton>Upgrade plan</SubscriptionButton>
        </div>
        <div className="flex gap-x-1 items-center">
          <div className="hidden sm:block">
            <MiscIconButton
              isNotifOpen={isNotifOpen}
              onSelect={setIsNotifOpen}
            />
          </div>
          <div className="flex items-center gap-x-3 sm:gap-x-2">
            <p className="sm:text-xs hidden sm:block">Dewi Anjani</p>
            <img
              src="/images/Profile.png"
              alt="Profile Image"
              className="w-9 h-9"
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isNotifOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Notification
              notifications={notifications}
              onSelect={setIsNotifOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MainHeader;
