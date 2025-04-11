import React from "react";

const AppStoreButton: React.FC<AppStoreButtonProps> = ({icon, name}) => {
  return (
    <div className="cursor-pointer flex items-center w-fit gap-2 bg-white rounded-2xl px-4 py-2">
      <img
        src={icon}
        alt=""
        className="size-11"
      />
      <p className="capitalize text-xl text-black">{name}</p>
    </div>
  );
};

export default AppStoreButton;
