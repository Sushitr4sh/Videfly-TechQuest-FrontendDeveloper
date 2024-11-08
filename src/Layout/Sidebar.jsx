import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MainButton from "../components/MainButton";
import SidebarItem from "../components/SidebarItem";
import MiscIconButton from "../components/MiscIconButton";
import Credit from "../components/Credit";
import SubscriptionButton from "../components/SubscriptionButton";

import {
  AddCircleHalfDotIcon,
  Home03Icon,
  Calendar03Icon,
  FolderLibraryIcon,
  UserStar02Icon,
  Settings02Icon,
  Logout03Icon,
  Cancel01Icon,
} from "hugeicons-react";
import { Icon } from "@iconify/react/dist/iconify.js";

const sidebarItems = [
  {
    icon: <Home03Icon strokeWidth={2} size={24} />,
    text: "Beranda",
    alt: "home page icon",
  },
  {
    icon: <Calendar03Icon strokeWidth={2} size={24} />,
    text: "Kelola Konten",
    alt: "manage content icon",
  },
  {
    icon: <FolderLibraryIcon strokeWidth={2} size={24} />,
    text: "Proyek",
    alt: "project icon",
  },
  {
    icon: (
      <Icon icon="streamline:ai-edit-spark" width={"24px"} height={"24px"} />
    ),
    text: "AI Tools",
    alt: "ai tools icon",
  },
  {
    icon: <UserStar02Icon strokeWidth={2} size={24} />,
    text: "Avatars",
    alt: "avatars icon",
  },
  {
    icon: (
      <Icon
        icon="heroicons-outline:color-swatch"
        width={"24px"}
        height={"24px"}
      />
    ),
    text: "Brand Kit",
    alt: "brand kit icon",
  },
];

const sidebarConfigItems = [
  {
    icon: <Settings02Icon strokeWidth={2} size={24} />,
    text: "Pengaturan",
    alt: "Settings icon",
  },
  {
    icon: <Logout03Icon strokeWidth={2} size={24} />,
    text: "Keluar",
    alt: "logout icon",
  },
];

const Sidebar = ({ onClose, isNotifOpen, setIsNotifOpen }) => {
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);
  const [selectedConfigItem, setSelectedConfigItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setSelectedConfigItem(null); // Deselect any config item when a normal item is selected
  };

  const handleSelectConfigItem = (configItem) => {
    setSelectedConfigItem(configItem);
    setSelectedItem(null); // Deselect any normal item when a config item is selected
  };

  return (
    <>
      <aside className="flex flex-col justify-between pt-16 1366:pt-9 px-4 pb-6 border-r border-[#ececec] w-[16.25rem] h-[100dvh] z-50 gap-y-3 bg-white fixed top-0 left-0 sm:hidden 1366:flex">
        <button
          className="absolute top-4 left-4 1366:hidden"
          onClick={() => onClose(false)}
        >
          <Cancel01Icon width={24} height={24} color="#111336" />
        </button>
        <Link to="/" className="self-center hidden 1366:block">
          <img
            src="/icons/logo2.svg"
            alt="videfly logo"
            className="w-[8.75rem]"
          />
        </Link>
        <div className="w-full hidden 1366:block">
          <MainButton
            rightIcon={<AddCircleHalfDotIcon size={24} strokeWidth={2} />}
          >
            Buat Video
          </MainButton>
        </div>
        <div className="flex flex-col gap-y-9 1366:hidden">
          <Link to="/" className="self-center">
            <img
              src="/icons/logo.svg"
              alt="videfly logo"
              className="w-[8.75rem]"
            />
          </Link>
          <div className="flex justify-between 1366:hidden">
            <div className="flex gap-x-2 items-center">
              <img
                src="/images/Profile.png"
                alt="Profile Image"
                className="w-9 h-9 lg:w-auto md:h-auto"
              />
              <p className="text-xs font-medium">Dewi Anjani</p>
            </div>
            <MiscIconButton
              isNotifOpen={isNotifOpen}
              onSelect={setIsNotifOpen}
            />
          </div>
          <MainButton
            rightIcon={<AddCircleHalfDotIcon size={24} strokeWidth={2} />}
          >
            Buat Video
          </MainButton>
        </div>
        <SidebarItem
          sidebarItems={sidebarItems}
          selectedItem={selectedItem}
          onSelect={handleSelectItem}
          config={false}
        />
        <div className="flex flex-col items-center px-4 1366:hidden">
          <div className="h-[2.5rem] flex items-center justify-center">
            <Credit>Sisa 5 kredit</Credit>
          </div>
          <SubscriptionButton>Upgrade plan</SubscriptionButton>
        </div>
        <SidebarItem
          sidebarItems={sidebarConfigItems}
          selectedItem={selectedConfigItem}
          onSelect={handleSelectConfigItem}
          config={true}
        />
      </aside>

      <aside className="hidden sm:flex 1366:hidden flex-col justify-between py-6 border-r border-[#ececec] w-[5rem] h-[100dvh] z-50 gap-y-3 bg-white fixed top-0 left-0">
        <div className="flex flex-col gap-y-[2.875rem] items-center">
          <div className="px-4 flex flex-col gap-y-[2.875rem]">
            <Link to="/" className="self-center">
              <img
                src="/icons/logo-short2.svg"
                alt="videfly logo"
                className="w-12"
              />
            </Link>
            <MainButton
              rightIcon={<AddCircleHalfDotIcon size={24} strokeWidth={2} />}
            >
              Buat Video
            </MainButton>
          </div>
          <SidebarItem
            sidebarItems={sidebarItems}
            selectedItem={selectedItem}
            onSelect={handleSelectItem}
            config={false}
          />
        </div>
        <SidebarItem
          sidebarItems={sidebarConfigItems}
          selectedItem={selectedConfigItem}
          onSelect={handleSelectConfigItem}
          config={true}
        />
      </aside>
    </>
  );
};

export default Sidebar;
