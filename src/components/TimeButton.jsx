import React from "react";

const TimeButton = ({ children, type, visible }) => {
  return (
    <button
      className={`font-medium text-sm lg:text-[0.688rem] bg-black/20 trainsition duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      } ${
        type === "icon" && "hover:bg-black/25 active:bg-[#703BE7]"
      } px-2 lg:px-2 rounded-[0.451rem]`}
    >
      {children}
    </button>
  );
};

export default TimeButton;
