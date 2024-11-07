import React from "react";
import TimeButton from "./TimeButton";

import { Icon } from "@iconify/react/dist/iconify.js";

const Carousel = ({ items }) => {
  return (
    <div className="relative">
      <div className="overflow-x-auto flex scrollbar-hide gap-x-6 snap-x snap-mandatory pb-4 lg:pb-0 content-scrollbar">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[15.875rem] pb-3 border border-[#ececec] rounded-2xl shrink-0 flex items-center justify-center overflow-hidden relative snap-center"
          >
            <div className="w-full">
              <img
                src={item.src}
                className="object-cover object-top w-full h-[11.25rem] rounded-2xl"
                alt="Carousel Image 2"
              />
              <div className="flex items-center text-white justify-between w-full absolute top-0 p-3">
                <TimeButton>{item.duration}</TimeButton>
                <TimeButton>
                  <Icon
                    icon="pepicons-pencil:dots-x"
                    width={"24px"}
                    height={"24px"}
                  />
                </TimeButton>
              </div>
              <div className="flex justify-between px-3 mt-3">
                <div className="flex flex-col gap-y-1">
                  <p className="text-sm lg:text-xs font-semibold">
                    {item.title}
                  </p>
                  <div className="flex justify-between gap-x-2 items-center">
                    <p className="text-[0.688rem]">{item.date}</p>

                    {item.status && (
                      <>
                        <img src="/icons/separator2.svg" alt="separator" />
                        <button
                          className={
                            "bg-[#E3FFE5] rounded-md px-2 py-[0.125rem] font-medium text-[#60D669] text-[0.688rem]"
                          }
                        >
                          {item.status}
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <button className="flex justify-center items-center bg-black/20 w-9 h-9 rounded-lg hover:bg-[#999999] transition duration-200">
                  {item.icon}
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
