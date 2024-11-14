import React from "react";

const FilterToggle = ({ filters, filter, onSelect }) => {
  return (
    <div className="w-full flex justify-between sm:justify-start sm:gap-x-4 md:gap-x-8">
      {filters.map((f, index) => (
        <button
          key={index}
          className="text-center text-xs font-medium flex flex-col gap-y-2"
          onClick={() => onSelect(f)}
        >
          {f}
          <div
            className={`rounded-[5rem] ${
              f === filter && "bg-[#703BE7]"
            } w-full h-1`}
          />
        </button>
      ))}
    </div>
  );
};

export default FilterToggle;
