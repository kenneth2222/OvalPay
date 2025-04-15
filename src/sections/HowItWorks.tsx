import HowItWorksCard from "@/components/HowItWorksCard";
import SectionTitle from "@/components/SectionTitle";
import { guides } from "@/data/howItWorks";

const HowItWorks = () => {
  return (
    <section className="flex items-center justify-center mx-auto bg-gradient-to-b from-background from-70% to-indigo-950 py-14">
      <div className="max-w-[1440px] w-full p-2 space-y-9 flex flex-col">
        <SectionTitle className="mx-auto sm:mx-0" title="How It Works" />
        <div className="space-y-9 px-2">
          <div className="min-h-[466px] relative rounded-[20px] bg-gray-700 flex flex-wrap gap-9 items-center justify-center p-12 px-4 overflow-hidden">
            {guides.map((guide, index) => (
              <HowItWorksCard {...guide} index={index + 1} key={index} />
            ))}
            <div className="absolute  bottom-0 right-0 ">
              <div className="absolute size-30 bg-secondary rounded-full opacity-70 -bottom-15 right-5 "></div>
              <div className="absolute size-30 bg-secondary rounded-full opacity-40 bottom-2 -right-10 "></div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="space-y-3">
              <p className="font-bold text-3xl">
                Take charge of your payments today!
              </p>
              <p>Secure, Fast, and Hassle-Free </p>
            </div>
            <div className="w-full sm:w-fit">
              <div className="bg-secondary px-8 py-4 rounded-2xl sm:w-fit w-full font-semibold text-center text-xl sm:text-nowrap">
                App Launching Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
