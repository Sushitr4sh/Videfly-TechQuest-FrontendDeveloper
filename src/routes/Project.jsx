import { useState } from "react";
import { Outlet } from "react-router-dom";

import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import CustomButton from "../components/CustomButton";
import FilterToggle from "../components/FilterToggle";
import MinMaxButton from "../components/MinMaxButton";

const carouselItems = [
  {
    duration: "1:10",
    title: "Boa lip balm",
    date: "1 menit lalu",
    src: "/images/carousel.png",
    status: "Diterbitkan",
  },
  {
    duration: "1:10",
    title: "Flavored powder drink",
    date: "5 menit lalu",
    src: "/images/carousel.png",
  },
  {
    duration: "Draf",
    title: "Selfmology",
    date: "10 menit lalu",
    src: "/images/carousel.png",
  },
  {
    duration: "Draf",
    title: "Selfmology serum",
    date: "1 hari lalu",
    src: "/images/carousel.png",
  },
];

const filters = ["Semua", "Konten", "Berkas", "Gambar", "Video", "Sampah"];

const Project = () => {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Outlet />
      <main className="mt-[5.75rem] sm:mt-[5.75rem] mx-4 sm:mr-6 sm:ml-[6.5rem] lg:mr-[2.625rem] lg:ml-[7.625rem] 1366:ml-[18.875rem] pb-4">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl font-nunito">Proyek</h1>
          <SearchBar />
        </div>
        <div className="flex flex-col gap-y-4 pb-2 mt-4 border-b border-[#E6E6E6]">
          <div className="w-full flex justify-end gap-x-[0.625rem]">
            <CustomButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.125 2.25039V15.7504M2.625 6.71289L7.125 2.21289M10.875 2.28789V15.7879L15.375 11.2879"
                  stroke="#111336"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CustomButton>
            <CustomButton color="#703BE7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M3.75 9H9M9 9H14.25M9 9V3.75M9 9V14.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CustomButton>
          </div>
          <FilterToggle
            filters={filters}
            filter={filter}
            onSelect={setFilter}
          />
        </div>
        <div className="mt-6 flex flex-col gap-y-4">
          <MinMaxButton>Konten</MinMaxButton>
          <Carousel items={carouselItems} project={true} />
        </div>
        <div className="mt-6 flex flex-col gap-y-4">
          <MinMaxButton>Berkas</MinMaxButton>
          <Carousel items={carouselItems} project={true} />
        </div>
      </main>
    </>
  );
};

export default Project;
