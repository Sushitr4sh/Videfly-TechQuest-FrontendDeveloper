import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ScissorIcon } from "hugeicons-react";
import TimeButton from "./TimeButton";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showOption, setShowOption] = useState(null);

  return (
    <div className="relative">
      <div className="overflow-x-auto flex scrollbar-hide gap-x-6 snap-x snap-mandatory pb-4 lg:pb-2 content-scrollbar">
        {items.map((item, index) => (
          <div
            onMouseEnter={() => setShowOption(index)}
            onMouseLeave={() => setShowOption(null)}
            onTouchStart={() => setShowOption(index)}
            key={index}
            className="w-[15.875rem] pb-3 border border-[#ececec] rounded-2xl shrink-0 flex items-center justify-center overflow-hidden relative snap-center"
          >
            <div className="w-full">
              <img
                src={item.src}
                className="object-cover object-top w-full"
                alt="Carousel Image"
              />
              <div className="flex items-center text-white justify-between w-full absolute top-0 p-2">
                <div className="flex items-center gap-x-1">
                  {item.duration !== "Draf" && (
                    <TimeButton visible={true}>Render</TimeButton>
                  )}
                  <TimeButton visible={true}>{item.duration}</TimeButton>
                </div>
                <TimeButton type="icon" visible={showOption === index}>
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
        ))}
      </div>
    </div>
  );
};

export default Carousel;
