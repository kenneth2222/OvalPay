import SectionTitle from "@/components/SectionTitle";
import WhyChooseUsCard from "@/components/WhyChooseUsCard";
import { whyChooseUsData } from "@/data/whyChooseUs";

const WhyChooseUsSection = () => {
  return (
    <section className="flex items-center justify-center mx-auto bg-gradient-to-b from-background from-70% to-indigo-950">
      <div className="p-2 space-y-9  max-w-6xl ">
        <SectionTitle title="Why Choose Us?" />
        <div className="flex">
          <div className="grid sm:grid-cols-2 flex-wrap justify-center gap-8 mx-auto">
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
