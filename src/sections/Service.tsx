import ServiceCard from "@/components/ServiceCard";
import { serviceDataLeft, serviceDataRight } from "@/data/service";
import serviceDevice from "/service/service-device.svg";
// todo: set all section max with to 1440px
const Service = () => {
  return (
    <section className="p-2">
      <div className="max-w-[1440px] mx-auto space-y-20">
        <div className="text-center flex flex-col items-center gap-5">
          <h2 className="text-[24px]">
            We Deliver The Best{" "}
            <span className="bg-gradient-to-r from-secondary to-surface bg-clip-text text-transparent">
              Payment Solution
            </span>
          </h2>
          <p className="font-bold text-[32px] max-w-4xl">
            One application with multiple options to give you freedom of
            sending, receiving & conversion
          </p>
        </div>
        <div className="">
          <div className="grid sm:grid-cols-3 gap-9 sm:gap-2">
            <div className="flex sm:hidden bg-[url('/service/service-device-bg.svg')] items-center justify-center bg-no-repeat bg-contain bg-center">
              <img src={serviceDevice} alt="" />
            </div>
            <div className="grid gap-9 items-center">
              {serviceDataLeft.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            <div className="hidden sm:flex bg-[url('/service/service-device-bg.svg')] items-center justify-center bg-no-repeat bg-contain bg-center">
              <img src={serviceDevice} alt="" />
            </div>
            <div className="grid items-center">
              {serviceDataRight.map((service, index) => (
                <ServiceCard key={index} {...service} reverse />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
