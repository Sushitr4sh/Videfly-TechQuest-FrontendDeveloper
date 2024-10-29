import React from "react";

const QuickActionBar = ({ gridItems, selectedItem, onSelect }) => {
  return (
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex w-[72%]  p-2 rounded-2xl bg-white z-50 border-2 border-[#ececec]">
      {gridItems.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelect(item)}
          className={`hover:bg-[#dbdbdc] flex items-center justify-center gap-x-3 font-extrabold text-sm px-4 py-2 rounded-xl w-full transition duration-200 ${
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
