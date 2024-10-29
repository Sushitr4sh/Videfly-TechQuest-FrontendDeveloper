const ContentCategoryItem = ({
  contentDescription,
  type,
  icon,
  percentage = 0,
}) => {
  return (
    <div className="flex flex-col border-2 border-[#ECECEC] rounded-2xl overflow-hidden">
      <div className="flex justify-between px-4 pt-2 pb-[1.125rem]">
        <div>
          <h5 className="font-semibold text-xs mb-1-">{contentDescription}</h5>
          <span
            className={
              type === "Video"
                ? "bg-[#FFD9D2] rounded-md px-2 py-[0.125rem] font-medium text-[#FE846F] text-[0.668rem]"
                : "bg-[#BFE8FF] rounded-md px-2 py-[0.125rem] font-medium text-[#65B9E7] text-[0.668rem]"
            }
          >
            {type}
          </span>
        </div>
        <button className="flex justify-center items-center bg-black/20 w-9 h-9 rounded-lg hover:bg-[#999999] transition duration-200">
          {icon}
        </button>
      </div>
      <div className="bg-violet-600 h-1" style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ContentCategoryItem;
