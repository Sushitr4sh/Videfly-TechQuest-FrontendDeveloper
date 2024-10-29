const DashboardSection = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-base">{title}</h3>
        <button className="text-xs text-violet-600 font-medium">Lainnya</button>
      </div>
      {children}
    </div>
  );
};

export default DashboardSection;
