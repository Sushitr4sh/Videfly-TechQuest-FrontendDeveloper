import React from "react";

const SidebarItem = ({ sidebarItems, selectedItem, onSelect, config }) => {
  return (
    <div className="flex flex-col gap-y-2">
      {!config
        ? sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => onSelect(item)}
              className={`hover:bg-[#F1EBFD] flex items-center gap-x-3 hover:text-[#8D62EC] hover:font-semibold text-sm px-4 py-2 rounded-xl w-full transition duration-200 ${
                selectedItem === item
                  ? "bg-[#F1EBFD] text-[#8D62EC] font-semibold"
                  : "bg-white text-black font-medium"
              }`}
            >
              {item.icon}
              <p>{item.text}</p>
            </button>
          ))
        : sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => onSelect(item)}
              className={`flex items-center gap-x-3   text-sm px-4 py-2 rounded-xl w-full transition duration-200 hover:font-semibold ${
                index === 1
                  ? "text-red-500 hover:bg-red-100 hover:text-red-500"
                  : "text-black hover:bg-violet-100 hover:text-violet-500"
              } ${
                selectedItem === item
                  ? `${
                      index === 1
                        ? "bg-red-100 text-red-500 font-semibold"
                        : "bg-violet-100 text-violet-500 font-semibold"
                    } `
                  : "bg-white text-black font-medium"
              }`}
            >
              {item.icon}
              <p>{item.text}</p>
            </button>
          ))}
    </div>
  );
};

export default SidebarItem;
