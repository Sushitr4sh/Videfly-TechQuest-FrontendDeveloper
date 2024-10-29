import { useState } from "react";
import { Outlet } from "react-router-dom";

import QuickActionBar from "../components/QuickActionBar";

import { Icon } from "@iconify/react/dist/iconify.js";
import { UserStar02Icon } from "hugeicons-react";

const actionBars = [
  {
    icon: <Icon icon="mage:video" width={"24px"} height={"24px"} />,
    text: "URL to Video",
  },
  {
    icon: (
      <Icon icon="fluent:textbox-16-regular" width={"24px"} height={"24px"} />
    ),
    text: "Text to Video",
  },
  {
    icon: <Icon icon="tdesign:user-talk-1" width={"24px"} height={"24px"} />,
    text: "Speech to Video",
  },
  {
    icon: <UserStar02Icon size={24} strokeWidth={2} />,
    text: "AI Avatar",
  },
];

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <>
      <Outlet />
      <main className="mt-24 ml-10">
        <div className="w-full h-[26vh] gradient-banner relative flex items-center justify-center rounded-2xl ">
          <p className="text-white text-[2rem] font-extrabold">
            Mulai kreasi baru hari ini!
          </p>
          <QuickActionBar
            gridItems={actionBars}
            selectedItem={selectedItem}
            onSelect={setSelectedItem}
          />
          <img
            src="/images/elipse1_0.png"
            alt="elipse"
            className="absolute top-0 left-5"
          />
          <img
            src="/images/elipse1_1.png"
            alt="elipse"
            className="absolute top-0 left-5"
          />
          <img
            src="/images/elipse2_0.png"
            alt="elipse"
            className="absolute bottom-0 left-16"
          />
          <img
            src="/images/elipse2_1.png"
            alt="elipse"
            className="absolute bottom-0 left-16"
          />
          <img
            src="/images/elipse3.png"
            alt="elipse"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          />
          <img
            src="/images/elipse4.png"
            alt="elipse"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          />
          <img
            src="/images/elipse5_0.png"
            alt="elipse"
            className="absolute top-0 right-0"
          />
          <img
            src="/images/elipse5_1.png"
            alt="elipse"
            className="absolute top-0 right-0"
          />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
