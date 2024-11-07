import React from "react";

const QuickActionBar = ({ gridItems, selectedItem, onSelect }) => {
  return (
    <div className="flex overflow-x-auto w-full  p-2 rounded-2xl bg-white z-30 lg:border-2 lg:border-[#ececec] gap-2 lg:gap-0 hide-scrollbar">
      {gridItems.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelect(item)}
          className={`hover:bg-[#dbdbdc] border-2 border-[#ececec] lg:border-none flex items-center justify-center gap-x-3 font-extrabold text-sm px-4 py-2 rounded-xl transition duration-200 ${
            selectedItem === item ? "bg-[#dbdbdc]" : "bg-white"
          }`}
        >
          {item.icon}
          <p>{item.text}</p>
        </button>
      ))}
    </div>
  );
};

export default QuickActionBar;
