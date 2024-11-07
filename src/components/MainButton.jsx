import React from "react";

const MainButton = ({ children, leftIcon, rightIcon }) => {
  return (
    <button className="bg-[#703BE7] flex items-center justify-center gap-x-3 text-white text-base font-semibold py-2 sm:p-0 w-auto h-auto sm:w-11 sm:h-11 2xl:w-full 2xl:h-auto 2xl:px-4 2xl:py-2 rounded-xl">
      {leftIcon}
      <p className="sm:hidden 2xl:block">{children}</p>
      {rightIcon}
    </button>
  );
};

export default MainButton;
