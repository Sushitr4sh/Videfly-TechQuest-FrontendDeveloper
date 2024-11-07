import React from "react";

const MainButton = ({ children, leftIcon, rightIcon }) => {
  return (
    <button className="bg-[#703BE7] flex items-center justify-center gap-x-3 text-white text-base font-semibold py-2 rounded-xl">
      {leftIcon}
      <p>{children}</p>
      {rightIcon}
    </button>
  );
};

export default MainButton;
