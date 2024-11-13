import React from "react";

import { Search01Icon } from "hugeicons-react";

const SearchBar = () => {
  return (
    <div className="flex gap-x-2 items-center p-2 w-[12.5rem] bg-[#F2ECFF] rounded-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M11.667 11.666L14.667 14.666"
          stroke="#8A8A8A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.333 7.33398C13.333 4.02028 10.6467 1.33398 7.33301 1.33398C4.0193 1.33398 1.33301 4.02028 1.33301 7.33398C1.33301 10.6477 4.0193 13.334 7.33301 13.334C10.6467 13.334 13.333 10.6477 13.333 7.33398Z"
          stroke="#8A8A8A"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </svg>
      <input
        type="text"
        className="bg-transparent flex-grow focus:outline-none text-[#8A8A8A] text-xs font-medium placeholder-[#8A8A8A]"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
