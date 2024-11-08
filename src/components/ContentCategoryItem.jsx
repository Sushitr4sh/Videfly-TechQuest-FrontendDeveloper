import { Icon } from "@iconify/react/dist/iconify.js";

const ContentCategoryItem = ({
  index,
  activeIndex,
  setActiveIndex,
  contentDescription,
  type,
  icon,
  priority = "Normal",
  percentage = 0,
}) => {
  return (
    <div className="flex flex-col border border-[#ECECEC] rounded-1366 overflow-hidden p-4 relative">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-1">
          <h5 className="font-semibold text-sm lg:text-xs mb-1-">
            {contentDescription}
          </h5>
          <div className="flex items-center gap-x-2">
            <button
              className={
                type === "Video"
                  ? "bg-[#FFD9D2] rounded-md px-2 py-[0.125rem] font-medium text-[#FE846F] text-xs lg:text-[0.668rem]"
                  : "bg-[#BFE8FF] rounded-md px-2 py-[0.125rem] font-medium text-[#65B9E7] text-xs lg:text-[0.668rem]"
              }
            >
              {type}
            </button>
            <div className="flex items-center gap-x-1">
              {priority === "Penting" && (
                <Icon
                  icon="iconamoon:flag-fill"
                  color="#B13A41"
                  width="16px"
                  height="16px"
                />
              )}
              {priority === "Tinggi" && (
                <Icon
                  icon="iconamoon:flag-fill"
                  color="#FFC905"
                  width="16px"
                  height="16px"
                />
              )}
              {priority === "Normal" && (
                <Icon
                  icon="iconamoon:flag-fill"
                  color="#1877F2"
                  width="16px"
                  height="16px"
                />
              )}
              {priority === "Rendah" && (
                <Icon
                  icon="iconamoon:flag-fill"
                  color="#8A8A8A"
                  width="16px"
                  height="16px"
                />
              )}
              <p className="leading-none text-xs font-medium">{priority}</p>
            </div>
          </div>
        </div>
        <button
          onMouseDown={() => setActiveIndex(index)}
          onMouseUp={() => setActiveIndex(null)}
          className="flex justify-center items-center bg-black/5 hover:bg-black/10 active:bg-[#8D62EC] w-9 h-9 rounded-lg transition duration-200"
        >
          <div
            className="transition-colors duration-200"
            style={{
              color: activeIndex === index ? "#FFFFFF" : "#111936",
            }}
          >
            {icon}
          </div>
        </button>
      </div>
      <div
        className="absolute bottom-0 left-0 bg-violet-600 h-1"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ContentCategoryItem;
