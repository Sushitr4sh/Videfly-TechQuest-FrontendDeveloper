import { TickDouble02Icon, Cancel01Icon } from "hugeicons-react";

const Notification = ({ notifications }) => {
  return (
    <div className="fixed bg-white top-14 right-0 flex flex-col gap-y-4 rounded-2xl py-4 shadow-[8px_8px_8px_rgba(0,0,0,0.15)] border border-[#ececec] w-screen sm:w-[70vw] lg:w-[50vw] xl:w-[32vw] -z-10">
      <div className="flex justify-between items-center pb-4 border-b-[1.5px] border-[#f1f1f1] z-20">
        <p className="font-bold text-base ml-6">Notifications</p>
        <div className="flex items-center gap-x-6 mr-6">
          <button>
            <TickDouble02Icon size={24} />
          </button>
          <button>
            <Cancel01Icon size={24} />
          </button>
        </div>
      </div>
      <div className="flex flex-col border-b-2 border-[#f1f1f1]">
        <button className="ml-6 flex gap-x-2 pb-4 relative w-min">
          <p className="font-semibold text-sm text-nowrap">All Inbox</p>
          <div className="rounded-[0.188rem] bg-[#E94057] font-semibold text-white text-xs self-start flex justify-center items-center w-[1.125rem] h-[1.125rem]">
            {notifications.length}
          </div>
          <div className="absolute bottom-0 left-0 bg-[#703BE7] h-[4px] w-full rounded-full" />
        </button>
      </div>
      {notifications.map((notif, index) => (
        <button key={index} className="flex gap-x-2 py-4 px-6 w-full">
          <div className="bg-[#cfcfcf] rounded-full w-10 h-10 aspect-square flex justify-center items-center">
            {typeof notif.picture === "string" ? (
              <img src={notif.picture} alt="profile picture" className="" />
            ) : (
              notif.picture
            )}
          </div>
          <div className="flex flex-col gap-y-1 w-full">
            <div className="text-sm self-start text-start">{notif.title}</div>
            <div className="font-medium text-[#b0b0b0] flex gap-x-3 text-xs">
              <p>{notif.type}</p>
              <img src="/icons/separator.svg" alt="separator" />
              <p>{notif.date}</p>
            </div>
            {notif.progress && (
              <div className="relative flex flex-col w-full">
                <p className="font-semibold text-xs text-[#b0b0b0] self-end">
                  {notif.progress}%
                </p>
                <div
                  className="absolute -bottom-2 z-20 left-0 bg-[#1877F2] h-1 rounded-full"
                  style={{ width: `${notif.progress}%` }}
                />
                <div className="absolute -bottom-2  z-10 left-0 bg-[#E6E6E6] h-1 rounded-full w-full" />
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default Notification;
