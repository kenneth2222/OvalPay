import SectionTitle from "@/components/SectionTitle";
import WhyChooseUsCard from "@/components/WhyChooseUsCard";
import { whyChooseUsData } from "@/data/whyChooseUs";

const WhyChooseUsSection = () => {
  return (
    <section className="flex justify-center bg-gradient-to-b from-background from-70% to-indigo-950">
      <div className=" mx-20 p-2 space-y-9">
        <SectionTitle title="Why Choose Us?" />
        <div className="flex">
          <div className="grid sm:grid-cols-2  justify-center gap-30 mx-auto">
          {/* <div className="flex flex-wrap justify-center gap-8 mx-auto"> */}
            {whyChooseUsData.map((data, index) => (
              <WhyChooseUsCard {...data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
