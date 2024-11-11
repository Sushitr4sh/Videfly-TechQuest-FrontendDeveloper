import { Notification01Icon } from "hugeicons-react";

const MiscIconButton = ({ isNotifOpen, onSelect }) => {
  return (
    <div className="relative">
      <button
        onClick={() => onSelect(true)}
        className="flex justify-center items-center rounded-lg hover:bg-[#d3c2f8] transition duration-200"
      >
        <img src="/icons/notification-01.svg" alt="notification icon" />
      </button>
    </div>
  );
};

export default MiscIconButton;
