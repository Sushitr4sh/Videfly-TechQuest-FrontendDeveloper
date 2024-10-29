import { Link } from "react-router-dom";

import MainButton from "./MainButton";

const Sidebar = () => {
  return (
    <aside className="flex flex-col px-4 py-6 border-r-2 border-[#ececec] w-[260px] h-[100vh] z-50 gap-y-3">
      <Link to="/" className="self-center">
        <img src="/icons/logo.svg" alt="videflt logo" />
      </Link>
      <MainButton rightIcon="/icons/add-circle-half-dot.svg">
        Buat Video
      </MainButton>
    </aside>
  );
};

export default Sidebar;
