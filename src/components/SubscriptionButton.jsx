import React from "react";

const SubscriptionButton = ({ children }) => {
  return (
    <button
      type="button"
      className="hidden md:block gradient-button from-[#F27121] md:text-xs text-white font-semibold px-4 rounded-lg h-[1.875rem]"
    >
      {children}
    </button>
  );
};

export default SubscriptionButton;
