import React from "react";

const Carousel = ({ items }) => {
  return (
    <div className="relative">
      <div className="overflow-x-auto flex scrollbar-hide space-x-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[25%] pb-3 border border-[#ececec] rounded-2xl snap-center shrink-0 flex items-center justify-center overflow-hidden"
          >
            <div>
              <img
                src={item.src}
                className="object-cover object-center h-[30vh] rounded-2xl"
                alt="Carousel Image 2"
              />
              <div className="flex justify-between px-3 mt-3">
                <div>
                  <p className="text-xs font-semibold">{item.title}</p>
                  <p className="text-[.688rem]">{item.date}</p>
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
