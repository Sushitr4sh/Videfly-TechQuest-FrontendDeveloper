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
    icon: <Icon icon="mage:video" width={"18px"} height={"18px"} />,
    text: "URL to Video",
  },
  {
    icon: (
      <Icon icon="fluent:textbox-16-regular" width={"18px"} height={"18px"} />
    ),
    text: "Text to Video",
  },
  {
    icon: <Icon icon="tdesign:user-talk-1" width={"18px"} height={"18px"} />,
    text: "Speech to Video",
  },
  {
    icon: <UserStar02Icon size={18} strokeWidth={2} />,
    text: "AI Avatar",
  },
];

const carouselItems = [
  {
    duration: "1:00",
    title: "Alchemist Fragrance",
    date: "1 menit lalu",
    src: "/images/carousel.png",
    status: "Diterbitkan",
    icon: <ScissorIcon size={18} color="#ffffff" />,
  },
  {
    duration: "Tersimpan",
    title: "Product A Skincare",
    date: "15 menit lalu",
    src: "/images/carousel.png",
    icon: <ScissorIcon size={18} color="#ffffff" />,
  },
  {
    duration: "Tersimpan",
    title: "Product A Skincare",
    date: "9 Oktober 2024",
    src: "/images/carousel.png",
    icon: <ScissorIcon size={18} color="#ffffff" />,
  },
  {
    duration: "Tersimpan",
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
      <main className="mt-[4.375rem] sm:mt-[5.75rem] mx-4 sm:mr-6 sm:ml-[6.5rem] lg:mr-[2.625rem] lg:ml-[7.625rem] 2xl:ml-[18.875rem] pb-4">
        <div className="w-full h-[8.75rem] lg:h-[11.25rem] gradient-banner relative flex items-center justify-center rounded-2xl px-8 lg:px-0">
          <h2 className="text-white text-xl sm:text-2xl lg:text-[2rem] font-extrabold z-30 text-center">
            Mulai kreasi baru hari ini!
          </h2>
          <div className="w-[22rem] sm:w-[30.75rem] lg:w-[46rem] absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <QuickActionBar
              gridItems={actionBars}
              selectedItem={selectedItem}
              onSelect={setSelectedItem}
            />
          </div>
          <img
            src="/images/mobile_elipse1.png"
            alt="elipse"
            className="absolute top-0 left-0"
          />
          <img
            src="/images/mobile_elipse2_0.png"
            alt="elipse"
            className="absolute bottom-0 left-14"
          />
          <img
            src="/images/mobile_elipse2_1.png"
            alt="elipse"
            className="absolute bottom-0 left-14"
          />
          <img
            src="/images/mobile_elipse3.png"
            alt="elipse"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          />
          <img
            src="/images/mobile_elipse4.png"
            alt="elipse"
            className="hidden sm:block md:hidden absolute right-0 bottom-0"
          />
          <img
            src="/images/mobile_elipse5.png"
            alt="elipse"
            className="hidden md:block lg:hidden absolute right-8 bottom-0"
          />
          <img
            src="/images/mobile_elipse2_0.png"
            alt="elipse"
            className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2"
          />
          {
            <img
              src="/images/mobile_elipse7.png"
              alt="elipse"
              className="hidden lg:block absolute right-0 top-0"
            />
          }
        </div>
        <div className="mt-16 lg:mt-16 flex flex-col gap-y-4 lg:gap-y-8">
          <DashboardSection title="Kelola Konten">
            <div className="flex overflow-x-auto w-full gap-x-6 lg:gap-x-6 pb-4 lg:pb-0 snap-x snap-mandatory content-scrollbar">
              <ContentCategory contentTitle="Lanjutkan">
                <ContentCategoryItem
                  contentDescription="Alchemist Fragrance"
                  type="Video"
                  icon={<ScissorIcon size={18} color="#ffffff" />}
                  priority="Penting"
                />
                <ContentCategoryItem
                  contentDescription="Beauty of Angel - Lip Scrub"
                  type="Video"
                  icon={<ScissorIcon size={18} color="#ffffff" />}
                  priority="Tinggi"
                />
              </ContentCategory>
              <ContentCategory contentTitle="Agenda Hari Ini">
                <ContentCategoryItem
                  contentDescription="Alchemist Fragrance"
                  type="Video"
                  icon={<AddCircleHalfDotIcon size={18} color="#ffffff" />}
                  priority="Tinggi"
                />
                <ContentCategoryItem
                  contentDescription="Beauty of Angel - Lip Scrub"
                  type="Design"
                  icon={<AddCircleHalfDotIcon size={18} color="#ffffff" />}
                  priority="Normal"
                />
              </ContentCategory>
              <ContentCategory contentTitle="Agenda Besok">
                <ContentCategoryItem
                  contentDescription="Beauty of Angel - Lip Scrub"
                  type="Design"
                  icon={<AddCircleHalfDotIcon size={18} color="#ffffff" />}
                  priority="Rendah"
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
