const ContentCategory = ({ contentTitle, children }) => {
  return (
    <div className="flex flex-col w-[80%] md:w-full lg:w-[30%] shrink-0 snap-start">
      <h4 className="font-medium text-xs mb-3">{contentTitle}</h4>
      <div className="flex flex-col gap-y-2">{children}</div>
    </div>
  );
};

export default ContentCategory;
