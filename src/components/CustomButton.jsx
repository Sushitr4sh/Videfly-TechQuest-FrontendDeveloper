import { button } from "framer-motion/client";
import React from "react";

const CustomButton = ({ color, children }) => {
  return (
    <button
      className={
        "px-3 border border-[#E6E6E6] rounded-xl flex items-center justify-center h-8"
      }
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
