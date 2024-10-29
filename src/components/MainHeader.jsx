import Credit from "./Credit";
import SubscriptionButton from "./SubscriptionButton";
import MiscIconButton from "./MiscIconButton";

const MainHeader = () => {
  return (
    <header className="fixed left-0 top-0 bg-white flex w-full items-center justify-between px-10 py-1 gap-x-2">
      <div />
      <nav className="flex gap-x-6 ">
        <div className="flex items-center">
          <Credit>Sisa 5 kredit</Credit>
          <SubscriptionButton>Upgrad plan</SubscriptionButton>
        </div>
        <div className="flex gap-x-1 items-center">
          <MiscIconButton
            src="/icons/notification-01.svg"
            alt="notification icon"
          />
          <div className="flex items-center gap-x-2">
            <p className="text-xs">Dewi Anjani</p>
            <img src="/images/Profile.png" alt="Profile Image" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
