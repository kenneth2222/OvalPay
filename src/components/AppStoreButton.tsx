import React from "react";

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ icon, name }) => {
  return (
    <div className="cursor-pointer flex max-w-[161px] sm:max-w-fit gap-2 bg-white rounded-[11.56px] sm:rounded-2xl px-4 py-2">
      <img src={icon} alt="" className="size-5 sm:size-11" />
      <p className="capitalize sm:text-xl text-black">{name}</p>
    </div>
  );
};

export default AppStoreButton;
