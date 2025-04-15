import React from "react";

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <div className={`flex gap-4 w-fit ${className || "items-center"}`}>
      <span className="bg-secondary ring-3 ring-primary-foreground rounded-full size-[38px]"></span>
      <h1 className="font-bold text-2xl sm:text-[32px]">{title}</h1>
    </div>
  );
};

export default SectionTitle;
