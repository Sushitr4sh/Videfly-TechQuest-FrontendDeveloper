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
const berkasItems = [
  {
    title: "Background",
    total: 1,
    date: "10 menit lalu",
    src: ["/images/files1.jpg"],
  },
  {
    title: "Aset Mockup",
    total: 4,
    date: "15 menit lalu",
    src: ["/images/files2.png", "/images/files2_1.png", "/images/files2_2.png"],
  },
  {
    title: "Aset Mockup",
    total: 4,
    date: "15 menit lalu",
    src: ["/images/files2.png", "/images/files2_1.png", "/images/files2_2.png"],
  },
  {
    title: "Aset Mockup",
    total: 4,
    date: "15 menit lalu",
    src: ["/images/files2.png", "/images/files2_1.png", "/images/files2_2.png"],
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
        <div className="flex flex-col sm:flex-row gap-y-4 pb-2 mt-4 border-b border-[#E6E6E6]">
          <div className="hidden sm:block">
            <FilterToggle
              filters={filters}
              filter={filter}
              onSelect={setFilter}
            />
          </div>
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
              <p className="hidden lg:block text-xs font-medium">Urutkan</p>
            </CustomButton>
            <CustomButton color="#703BE7">
              <p className="hidden lg:block text-xs font-semibold text-white">
                Tambah
              </p>
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
          <div className="sm:hidden">
            <FilterToggle
              filters={filters}
              filter={filter}
              onSelect={setFilter}
            />
          </div>
        </div>

        {/* Semua */}
        {filter === "Semua" && (
          <>
            <div className="mt-6 flex flex-col gap-y-4">
              <MinMaxButton>Konten</MinMaxButton>
              <Carousel items={carouselItems} type="content" />
            </div>
            <div className="mt-6 flex flex-col gap-y-4">
              <MinMaxButton>Berkas</MinMaxButton>
              <Carousel items={berkasItems} type="file" />
            </div>
            <div className="mt-6 flex flex-col gap-y-4">
              <MinMaxButton>Gambar</MinMaxButton>
              <Carousel items={carouselItems} type="content" />
            </div>
            <div className="mt-6 flex flex-col gap-y-4">
              <MinMaxButton>Video</MinMaxButton>
              <Carousel items={carouselItems} type="content" />
            </div>
          </>
        )}

        {/* Konten */}
        {filter === "Konten" && (
          <div className="mt-6">
            <Carousel items={carouselItems} filter={filter} type="content" />
          </div>
        )}

        {/* Berkas */}
        {filter === "Berkas" && (
          <div className="mt-6">
            <Carousel items={berkasItems} type="file" filter={filter} />
          </div>
        )}

        {/* Gambar */}
        {filter === "Gambar" && (
          <div className="mt-6">
            <Carousel items={carouselItems} filter={filter} type="content" />
          </div>
        )}

        {/* Video */}
        {filter === "Video" && (
          <div className="mt-6">
            <Carousel items={carouselItems} filter={filter} type="content" />
          </div>
        )}

        {/* Sampah */}
        {filter === "Sampah" && (
          <div className="mt-6">
            <div className="flex items-center gap-x-2 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M12.8332 6.99935C12.8332 3.77769 10.2215 1.16602 6.99984 1.16602C3.77817 1.16602 1.1665 3.77769 1.1665 6.99935C1.1665 10.221 3.77817 12.8327 6.99984 12.8327C10.2215 12.8327 12.8332 10.221 12.8332 6.99935Z"
                  stroke="#8A8A8A"
                  stroke-width="1.5"
                />
                <path
                  d="M7.14144 9.91602V6.99935C7.14144 6.72437 7.14144 6.58687 7.05598 6.50142C6.97058 6.41602 6.83309 6.41602 6.55811 6.41602"
                  stroke="#8A8A8A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.99561 4.66602H7.00086"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-xs text-[#8A8A8A] tracking-[1.2px]">
                Konten atau item akan tersimpan di sini selama 30 hari sebelum
                dihapus secara otomatis.
              </p>
            </div>
            <Carousel items={carouselItems} filter={filter} type="content" />
          </div>
        )}
      </main>
    </>
  );
};

export default Project;
