import React from "react";

const QuickActionBar = ({ gridItems, selectedItem, onSelect }) => {
  return (
    <div className="flex items-center justify-start overflow-x-scroll w-full p-2 rounded-xl lg:rounded-1366 bg-white z-30 border border-[#ececec] hide-scrollbar ">
      {gridItems.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelect(item)}
          className={`hover:bg-[#dbdbdc] flex items-center justify-center gap-x-2 font-medium text-xs lg:text-sm px-2 py-1 lg:p-8 lg:pl-2 lg:pr-4 lg:py-[0.625rem] rounded-xl transition duration-200 sm:w-full ${
            selectedItem === item ? "bg-[#dbdbdc]" : "bg-white"
          }`}
        >
          {item.icon}
          <p className="whitespace-nowrap">{item.text}</p>
        </button>
      ))}
    </div>
  );
};

export default QuickActionBar;
