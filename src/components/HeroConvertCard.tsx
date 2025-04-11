const HeroConvertCard = () => {
  return (
    <div className="p-px rounded-[10px] bg-gradient-to-br from-surface to-secondary bg-clip-border w-full lg:min-w-96">
      <div className="rounded-[10px] bg-background p-5 rounded-b-none">
        <div className="flex gap-12 p-2 justify-between">
          <div className="lg:space-y-5">
            <p className="capitalize">Convert from</p>
            <p className="font-bold">0.00</p>
          </div>
          <div className="">
            <span className="uppercase font-semibold">usd</span>
          </div>
        </div>
      </div>
      <div className="rounded-[10px] bg-background p-5 rounded-t-none border-t">
        <div className="flex gap-12 p-2 justify-between">
          <div className="lg:space-y-5">
            <p className="capitalize">Convert to</p>
            <p className="font-bold">0.00</p>
          </div>
          <div className="">
            <span className="uppercase font-semibold">ksh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroConvertCard;
