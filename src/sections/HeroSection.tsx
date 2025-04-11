import HeroConvertCard from "@/components/HeroConvertCard";
import Tablet from "@/components/Tablet";
import { Input } from "@/components/ui/input";
import { heroTables } from "@/data/homeHero";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex md:py-14">
      <div className="flex p-4 gap-18 flex-wrap mx-auto">
        <div className="space-y-16 max-w-3xl">
          <div className="flex gap-2 items-center justify-center sm:justify-start">
            {heroTables.map((data, index) => (
              <Tablet key={index} text={data.text} color={data.color} />
            ))}
          </div>
          <h1 className="bg-gradient-to-r from-surface to-secondary bg-clip-text text-transparent text-4xl sm:text-5xl font-extrabold leading-14">
            Seamless onramp & Offramp for Effortless Crypto Transactions
          </h1>
          <div className="space-y-8">
            <p className="text-zinc-500 max-w-xl">
              Be the first to access our seamless stablecoin onramp and offramp.
              Sign up today for waitlist and get early access!
            </p>
            <div className="relative">
              <Input type="email" placeholder="Enter your email" className="h-15" />
              <ArrowUpRight className="absolute right-5 top-[16%] my-auto bg-secondary rounded-full size-9" />
            </div>
          </div>
        </div>
        <div className="flex-1 w-full md:w-fit">
          <HeroConvertCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
