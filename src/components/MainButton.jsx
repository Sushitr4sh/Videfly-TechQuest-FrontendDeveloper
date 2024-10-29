import React from "react";

const MainButton = ({ children, leftIcon, rightIcon }) => {
  return (
    <button className="bg-violet-500 flex items-center justify-center gap-x-3 text-white text-base font-semibold py-2 rounded-xl">
      {leftIcon && <img src={leftIcon} />}
      <p>{children}</p>
      {rightIcon && <img src={rightIcon} />}
    </button>
  );
};

export default MainButton;
