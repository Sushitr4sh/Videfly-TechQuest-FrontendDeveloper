import React from "react";
import TimeButton from "./TimeButton";

import { Icon } from "@iconify/react/dist/iconify.js";

const Carousel = ({ items }) => {
  return (
    <div className="relative">
      <div className="overflow-x-auto flex scrollbar-hide space-x-2 snap-x snap-mandatory pb-4 lg:pb-0">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[80%] md:w-[40%] lg:w-[25%] pb-3 border-2 border-[#ececec] rounded-2xl shrink-0 flex items-center justify-center overflow-hidden relative snap-center"
          >
            <div className="w-full">
              <img
                src={item.src}
                className="object-cover object-top w-full h-[30vh] rounded-2xl"
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
                <div>
                  <p className="text-sm lg:text-xs font-semibold">
                    {item.title}
                  </p>
                  <p className="text-xs lg:text-[.688rem]">{item.date}</p>
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
