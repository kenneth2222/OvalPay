import React from "react";

const Tablet: React.FC<TabletProps> = ({ text, color }) => {
  return (
    <div className="relative py-1 px-6 sm:px-8 rounded-full overflow-hidden w-fit">
      <div
        style={{ color, backgroundColor: color, opacity: ".3" }}
        className="absolute left-0 top-0 h-full w-full"
      ></div>
      <p style={{ color }} className="font-semibold capitalize">
        {text}
      </p>
    </div>
  );
};

export default Tablet;
