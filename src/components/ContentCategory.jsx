const ContentCategory = ({ contentTitle, children }) => {
  return (
    <div className="flex flex-col w-[30%]">
      <h4 className="font-medium text-xs mb-3">{contentTitle}</h4>
      <div className="flex flex-col gap-y-2">{children}</div>
    </div>
  );
};

export default ContentCategory;
