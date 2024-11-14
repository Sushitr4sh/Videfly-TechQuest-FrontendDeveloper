import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ sidebarItems, selectedItem, onSelect, config }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-y-2 sm:gap-y-4 1366:gap-y-2">
      {!config
        ? sidebarItems.map((item, index) => (
            <div className="sm:px-2 1366:px-0">
              <button
                key={index}
                onClick={() => {
                  onSelect(item);
                  navigate(`${item.url}`);
                }}
                className={`hover:bg-[#F1EBFD] flex sm:flex-col 1366:flex-row items-center gap-x-3 text-sm px-4 py-2 sm:py-0 1366:py-2 font-medium rounded-xl w-full transition duration-200 ${
                  selectedItem === item &&
                  "bg-[#F1EBFD] text-[#8D62EC] font-semibold"
                }`}
              >
                {item.icon ? (
                  item.icon
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d={item.d}
                      strokeWidth={item.strokeWidth}
                      strokeLinecap={item.strokeLinecap}
                      strokeLinejoin={item.strokeLinejoin}
                      className={`transition duration-200 ${
                        selectedItem === item
                          ? "stroke-[#8D62EC]"
                          : "stroke-[#111336]"
                      }`}
                    />
                  </svg>
                )}
                <p className="sm:hidden 1366:block">{item.text}</p>
              </button>
              <p
                className={`hidden sm:block 1366:hidden text-xs text-center mt-2 ${
                  selectedItem === item
                    ? "text-[#8D62EC] font-semibold"
                    : "bg-white text-black"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))
        : sidebarItems.map((item, index) => (
            <div>
              <button
                key={index}
                onClick={() => onSelect(item)}
                className={`text-sm font-medium flex sm:flex-col 1366:flex-row items-center gap-x-3 px-4 py-2 sm:p-0 1366:py-2 1366:px-4 w-full transition rounded-xl duration-200 ${
                  index === 1
                    ? "hover:bg-[#FFEAEA] text-[#FF6D6D]"
                    : "hover:bg-[#F1EBFD]"
                } ${
                  selectedItem === item && index !== 1
                    ? "text-[#8D62EC] bg-[#F1EBFD] font-semibold"
                    : "text-black"
                } ${
                  selectedItem === item &&
                  index === 1 &&
                  "bg-[#FFEAEA] font-semibold"
                }`}
              >
                {item.icon}
                <p
                  className={`sm:hidden 1366:block ${
                    index === 1 && "text-[#FF6D6D]"
                  }`}
                >
                  {item.text}
                </p>
              </button>
              <p
                className={`hidden sm:block 1366:hidden text-xs text-center mt-2 ${
                  index === 1 && "text-[#FF6D6D]"
                } ${
                  selectedItem === item && index !== 1
                    ? "text-[#8D62EC] font-semibold"
                    : ""
                } ${
                  selectedItem === item &&
                  index === 1 &&
                  "font-semibold text-[#FF6D6D]"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
    </div>
  );
};

export default SidebarItem;
