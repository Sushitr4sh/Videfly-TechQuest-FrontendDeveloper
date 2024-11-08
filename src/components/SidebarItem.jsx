import React from "react";

const SidebarItem = ({ sidebarItems, selectedItem, onSelect, config }) => {
  return (
    <div className="flex flex-col gap-y-2 sm:gap-y-4 1366:gap-y-2">
      {!config
        ? sidebarItems.map((item, index) => (
            <div className="sm:px-2 1366:px-0">
              <button
                key={index}
                onClick={() => onSelect(item)}
                className={`hover:bg-[#F1EBFD] flex sm:flex-col 1366:flex-row items-center gap-x-3 hover:text-[#8D62EC] hover:font-semibold text-sm px-4 py-2 sm:py-0 1366:py-2 font-medium rounded-xl w-full transition duration-200 ${
                  selectedItem === item &&
                  "bg-[#F1EBFD] text-[#8D62EC] font-semibold"
                }`}
              >
                {item.icon}
                <p className="sm:hidden 1366:block">{item.text}</p>
              </button>
              <p
                className={`hidden sm:block 1366:hidden text-xs text-center mt-2 ${
                  selectedItem === item
                    ? "text-[#8D62EC] font-medium"
                    : "bg-white text-black font-medium"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))
        : sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => onSelect(item)}
              className={`text-sm sm:text-xs font-medium flex sm:flex-col 1366:flex-row items-center gap-x-3 px-4 py-2 sm:p-0 1366:py-2 1366:px-4 w-full transition duration-200 ${
                index === 1 ? "text-[#FF6D6D]" : "text-black"
              }`}
            >
              {item.icon}
              <p className="mt-0 sm:mt-2 1366:mt-0">{item.text}</p>
            </button>
          ))}
    </div>
  );
};

export default SidebarItem;
