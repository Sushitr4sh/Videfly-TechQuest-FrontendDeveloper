import React from "react";

const TimeButton = ({ children }) => {
  return (
    <span className="font-medium text-sm lg:text-[0.688rem] bg-black/20 px-3 lg:px-2 py-1 lg:py-0 rounded-[0.451rem]">
      {children}
    </span>
  );
};

export default TimeButton;
