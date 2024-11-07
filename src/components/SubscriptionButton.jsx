import React from "react";

const SubscriptionButton = ({ children }) => {
  return (
    <button
      type="button"
      className="md:block gradient-button from-[#F27121] text-xs text-white w-full font-semibold py-[0.375rem] rounded-lg flex items-center justify-center px-4"
    >
      {children}
    </button>
  );
};

export default SubscriptionButton;
