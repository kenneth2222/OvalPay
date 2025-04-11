import React from "react";
import serviceIcon from "/service/service-icon.svg";

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  detail,
  reverse,
}) => {
  return (
    <div className={`flex flex-col gap-4 sm:${reverse ? "items-start" : "items-end"}`}>
      <div
        className={`flex flex-row-reverse justify-end sm:${
          reverse ? "flex-row-reverse" : "flex-row"
        } items-center gap-4`}
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <img src={serviceIcon} alt="" className="size-[53px]" />
      </div>
      <div className="">
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
