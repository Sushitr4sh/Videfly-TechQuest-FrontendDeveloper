import { useState } from "react";
import { Outlet } from "react-router-dom";

import QuickActionBar from "../components/QuickActionBar";
import DashboardSection from "../components/DashboardSection";
import ContentCategory from "../components/ContentCategory";
import ContentCategoryItem from "../components/ContentCategoryItem";

import { Icon } from "@iconify/react/dist/iconify.js";
import {
  UserStar02Icon,
  ScissorIcon,
  AddCircleHalfDotIcon,
} from "hugeicons-react";
import Carousel from "../components/Carousel";

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

const carouselItems = [
  {
    duration: "Drafted",
    title: "Alchemist Fragrance",
    date: "1 menit lalu",
    src: "/images/carousel.png",
    icon: <ScissorIcon size={18} color="#ffffff" />,
  },
  {
    duration: "Drafted",
    title: "Product A Skincare",
    date: "15 menit lalu",
    src: "/images/carousel.png",
    icon: <ScissorIcon size={18} color="#ffffff" />,
  },
  {
    duration: "01:00",
    title: "Product A Skincare",
    date: "9 Oktober 2024",
    src: "/images/carousel.png",
    icon: <ScissorIcon size={18} color="#ffffff" />,
  },
];

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <>
      <Outlet />
      <main className="mt-24 ml-10 pb-12">
        <div className="w-full h-[26vh] gradient-banner relative flex items-center justify-center rounded-2xl">
          <h2 className="text-white text-[2rem] font-extrabold">
            Mulai kreasi baru hari ini!
          </h2>
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
        <div className="mt-16 flex flex-col gap-y-8">
          <DashboardSection title="Kelola Konten">
            <div className="px-6 flex gap-x-6">
              <ContentCategory contentTitle="Lanjutkan">
                <ContentCategoryItem
                  contentDescription="Alchemist Fragrance"
                  type="Video"
                  icon={<ScissorIcon size={18} color="#ffffff" />}
                  percentage={50}
                />
                <ContentCategoryItem
                  contentDescription="Beauty of Angel - Lip Scrub"
                  type="Video"
                  icon={<ScissorIcon size={18} color="#ffffff" />}
                  percentage={75}
                />
              </ContentCategory>
              <ContentCategory contentTitle="Agenda Hari Ini">
                <ContentCategoryItem
                  contentDescription="Alchemist Fragrance"
                  type="Video"
                  icon={<AddCircleHalfDotIcon size={18} color="#ffffff" />}
                />
                <ContentCategoryItem
                  contentDescription="Beauty of Angel - Lip Scrub"
                  type="Design"
                  icon={<AddCircleHalfDotIcon size={18} color="#ffffff" />}
                />
              </ContentCategory>
              <ContentCategory contentTitle="Agenda Besok">
                <ContentCategoryItem
                  contentDescription="Beauty of Angel - Lip Scrub"
                  type="Design"
                  icon={<AddCircleHalfDotIcon size={18} color="#ffffff" />}
                />
              </ContentCategory>
            </div>
          </DashboardSection>
          <DashboardSection title="Proyek">
            <Carousel items={carouselItems} />
          </DashboardSection>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
