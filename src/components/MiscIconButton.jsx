import React from "react";

const MiscIconButton = ({ src, alt }) => {
  return (
    <button className="">
      <img
        src={src}
        alt={alt}
        className="w-10 h-10 rounded-lg hover:bg-violet-300 transition duration-200"
      />
    </button>
  );
};

export default MiscIconButton;
