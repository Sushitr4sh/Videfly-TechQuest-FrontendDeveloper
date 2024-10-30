import { Notification01Icon } from "hugeicons-react";

const MiscIconButton = ({ isNotifOpen, onSelect }) => {
  return (
    <div className="relative">
      <button
        onClick={() => onSelect(!isNotifOpen)}
        className="w-10 h-10 flex md:hidden justify-center items-center  rounded-lg lg:hover:bg-violet-300 transition duration-200 "
      >
        <Notification01Icon size={36} color="#703BE7" strokeWidth={1.5} />
      </button>
      <button
        onClick={() => onSelect(!isNotifOpen)}
        className="hidden md:flex w-10 h-10 justify-center items-center  rounded-lg lg:hover:bg-violet-300 transition duration-200"
      >
        <Notification01Icon size={18} color="#703BE7" strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default MiscIconButton;
