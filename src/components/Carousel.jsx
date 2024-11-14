import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ScissorIcon } from "hugeicons-react";
import TimeButton from "./TimeButton";

const useHoverSupport = () => {
  const [isHoverSupported, setIsHoverSupported] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    setIsHoverSupported(mediaQuery.matches);

    const handleChange = (event) => setIsHoverSupported(event.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isHoverSupported;
};

const Carousel = ({ items, type, filter = "semua" }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showOption, setShowOption] = useState(null);
  const isHoverSupported = useHoverSupport();

  return (
    <div className="relative">
      <div
        className={`${
          filter === "semua"
            ? "overflow-x-auto flex scrollbar-hide gap-x-6 snap-x snap-mandatory pb-3 lg:pb-2 content-scrollbar"
            : `w-full flex flex-col sm:flex-row justify-center lg:justify-start items-center sm:flex-wrap sm:gap-x-4 md:gap-x-[2.375rem] lg:gap-x-6 gap-y-6 md:gap-y-[2.375rem] ${
                filter === "Berkas" && "md:grid-cols-3"
              }`
        }`}
      >
        {type !== "file"
          ? items.map((item, index) => (
              <div
                onMouseEnter={() => isHoverSupported && setShowOption(index)}
                onMouseLeave={() => isHoverSupported && setShowOption(null)}
                onTouchStart={() => setShowOption(index)}
                key={index}
                className={`${
                  type === "content"
                    ? "w-[15.375rem] md:w-[15.875rem] h-[15rem] md:h-[243px]"
                    : "w-[15.875rem]"
                } pb-3 border border-[#ececec] rounded-2xl shrink-0 flex items-center justify-center overflow-hidden relative snap-center`}
              >
                <div className="w-full">
                  <img
                    src={item.src}
                    className="object-cover object-top w-full rounded-2xl"
                    alt="Carousel Image"
                  />
                  <div className="flex items-center text-white justify-between w-full absolute top-0 p-2">
                    <div className="flex items-center gap-x-1">
                      {item.duration !== "Draf" && (
                        <TimeButton visible={true}>Render</TimeButton>
                      )}
                      <TimeButton visible={true}>{item.duration}</TimeButton>
                    </div>
                    <TimeButton
                      type="icon"
                      visible={showOption === index || !isHoverSupported}
                    >
                      <Icon
                        icon="pepicons-pencil:dots-x"
                        width={"24px"}
                        height={"24px"}
                      />
                    </TimeButton>
                  </div>
                  <div className="flex justify-between px-3 mt-3">
                    <div className="flex flex-col gap-y-1">
                      <p className="text-sm lg:text-xs font-semibold text-[#111336]">
                        {item.title}
                      </p>
                      <div className="flex justify-between gap-x-2 items-center">
                        <p
                          className={`text-[0.688rem] text-[#545454] ${
                            !item.status && "py-[0.125rem]"
                          }`}
                        >
                          {item.date}
                        </p>
                        {item.status && (
                          <>
                            <img src="/icons/separator2.svg" alt="separator" />
                            <button className="bg-[#E3FFE5] rounded-md px-2 py-[0.125rem] font-medium text-[#60D669] text-[0.688rem]">
                              {item.status}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    <button
                      onMouseDown={() => setActiveIndex(index)}
                      onMouseUp={() => setActiveIndex(null)}
                      onTouchStart={() => setActiveIndex(index)}
                      onTouchEnd={() => setActiveIndex(null)}
                      className={`flex justify-center items-center ${
                        activeIndex === index
                          ? "bg-[#8D62EC]"
                          : "bg-black/5 hoverable:hover:bg-black/10"
                      } w-9 h-9 rounded-lg transition duration-200`}
                    >
                      <div
                        className="transition-colors duration-200"
                        style={{
                          color: activeIndex === index ? "#FFFFFF" : "#111936",
                        }}
                      >
                        <ScissorIcon size={18} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))
          : items.map((item, index) => (
              <div
                key={index}
                className="w-[12.75rem] p-4 rounded-2xl border border-[#E6E6E6] flex flex-col gap-y-3 snap-center shrink-0"
              >
                <div className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="47"
                      height="47"
                      rx="9.5"
                      stroke="#8A8A8A"
                      strokeDasharray="4 4"
                    />
                  </svg>
                  <div className="flex">
                    {item.src.map((i, index) => (
                      <img
                        key={index}
                        src={i}
                        alt="berkas image"
                        className="w-12 h-12 rounded-[0.625rem] object-cover -ml-4 first:ml-0 border border-white"
                        style={{ zIndex: item.src.length - index }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm lg:text-xs font-semibold text-[#111336]">
                    {item.title}
                  </p>
                  <div className="flex gap-x-[0.375rem] items-center">
                    <p
                      className={`text-[0.688rem] text-[#545454] ${
                        !item.status && "py-[0.125rem]"
                      }`}
                    >
                      {item.total} Item
                    </p>
                    <img src="/icons/separator2.svg" alt="separator" />
                    <p
                      className={`text-[0.688rem] text-[#545454] ${
                        !item.status && "py-[0.125rem]"
                      }`}
                    >
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Carousel;
