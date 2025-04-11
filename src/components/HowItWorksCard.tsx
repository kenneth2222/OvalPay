import React from "react";

const HowItWorksCard: React.FC<GuideCardProps> = ({
  title,
  description,
  index,
}) => {
  return (
    <div className="flex flex-col gap-6 w-[275px]">
      <span className="bg-primary-foreground font-semibold text-secondary text-2xl rounded-xl size-[80px] flex items-center justify-center">
        {index}
      </span>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default HowItWorksCard;
