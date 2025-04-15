import React from "react";

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="min-h-[220px]">
      <div className="p-px rounded-[20px] flex-1 max-w-[626px]  bg-gradient-to-br from-secondary to-indigo-950">
        <div className="bg-background relative rounded-[20px] w-full h-full overflow-hidden">
          <div className="absolute blur-3xl -top-10 -left-10 size-34 bg-radial  from-indigo-500 to-background rounded-full"/>
          <div className="absolute blur-3xl -bottom-10 -right-10 size-34 bg-radial from-indigo-500 to-background rounded-full"/>
          <div className="rounded-[20px] w-full h-full flex sm:flex-row flex-col items-center justify-center gap-6 p-9 sm:p-13">
            <div className="">
              <img src={image} alt="" className="size=[128px]" />
            </div>
            <div className="space-y-3">
              <div className="">
                <h3 className="text-2xl capitalize font-semibold">{title}</h3>
              </div>
              <div className="sm:max-w-72">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
