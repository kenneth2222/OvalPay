import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, stableCoins } from "@/data/supportedCoins";
import { Input } from "@/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import AppStoreButton from "@/components/AppStoreButton";

const SupportedCoins = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="p-4 w-full max-w-[1440px] mx-auto space-y-18">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-[600] text-xl">Supported Stablecoins</h2>
          <div className="flex items-center justify-center flex-wrap gap-4 ">
            {stableCoins.map((coin, index) => (
              <div key={index} className="flex items-center gap-1">
                <img src={coin.icon} alt="" className="size-[30px]" />
                <span className="font-semibold text-2xl uppercase">
                  {coin.name}
                </span>
              </div>
            ))}
            <span className="font-semibold text-2xl">More coming</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 border-b sm:border border-secondary sm:rounded-[20px] p-4 sm:p-12 items-center gap-4 min-h-[512px] bg-secondary/10 w-full overflow-hidden">
          <div className="relative max-w-fit">
            <p className="max-w-80 text-4xl font-semibold">
              Frequently Asked Questions
            </p>
            <img
              src="/logo-icon.svg"
              alt=""
              className="hidden sm:absolute sm:-bottom-10 -right-20"
            />
          </div>
          <div className="">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-[500] text-2xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row w-full">
          <div className="flex-1">
            <p className="text-[32px] font-semibold">Join the waitlist</p>
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-15 bg-secondary-foreground max-w-[734px]"
              />
              <ArrowUpRight className="absolute right-5 top-[16%] my-auto bg-secondary rounded-full size-9" />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-end sm:px-4">
            <p className="text-2xl font-semibold">App coming soon</p>
            <div className="flex justify-between sm:justify-center sm:flex-col flex-wrap gap-2 items-end w-full">
              <AppStoreButton
                icon="/app-store/Google-Play-Icon.svg"
                name="Google Play"
              />
              <AppStoreButton
                icon="/app-store/Apple-Store-Icon.svg"
                name="Google Play"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedCoins;
