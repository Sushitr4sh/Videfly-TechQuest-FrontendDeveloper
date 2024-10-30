import React from "react";

const MiscIconButton = ({ src, alt }) => {
  return (
    <button className="">
      <img
        src={src}
        alt={alt}
        className="w-8 h-8 md:w-6 md:h-6 md:mr-2 rounded-lg lg:hover:bg-violet-300 transition duration- p-0"
      />
    </button>
  );
};

export default MiscIconButton;
