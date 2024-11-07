import React from "react";

const TimeButton = ({ children }) => {
  return (
    <span className="font-medium text-sm lg:text-[0.688rem] bg-black/20 px-2 lg:px-2 rounded-[0.451rem]">
      {children}
    </span>
  );
};

export default TimeButton;
