import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MainButton from "../components/MainButton";
import SidebarItem from "../components/SidebarItem";

import {
  AddCircleHalfDotIcon,
  Home03Icon,
  Calendar03Icon,
  FolderLibraryIcon,
  UserStar02Icon,
  Settings02Icon,
  Logout03Icon,
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

const Sidebar = () => {
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
    <aside className="flex flex-col justify-between px-4 py-6 border-r-2 border-[#ececec] w-[260px] h-[100dvh] z-50 gap-y-3 bg-white fixed top-0 left-0">
      <Link to="/" className="self-center">
        <img src="/icons/logo.svg" alt="videflt logo" />
      </Link>
      <MainButton
        rightIcon={<AddCircleHalfDotIcon size={24} strokeWidth={2} />}
      >
        Buat Video
      </MainButton>
      <SidebarItem
        sidebarItems={sidebarItems}
        selectedItem={selectedItem}
        onSelect={handleSelectItem}
        config={false}
      />
      <SidebarItem
        sidebarItems={sidebarConfigItems}
        selectedItem={selectedConfigItem}
        onSelect={handleSelectConfigItem}
        config={true}
      />
    </aside>
  );
};

export default Sidebar;
