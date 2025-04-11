const HeroConvertCard = () => {
  return (
    // <div className="p-px rounded-[10px] bg-gradient-to-br from-surface to-secondary bg-clip-border w-full lg:min-w-150 lg:h-90 ">
    //   <div className="rounded-[10px] bg-background p-5 rounded-b-none">
    //     <div className="flex gap-12 p-2 justify-between">
    //       <div className="lg:space-y-5">
    //         <p className="capitalize">Convert from</p>
    //         <p className="font-bold">0.00</p>
    //       </div>
    //       <div className="">
    //         <span className="uppercase font-semibold">usd</span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="rounded-[10px] bg-background p-5 rounded-t-none border-t">
    //     <div className="flex gap-12 p-2 justify-between">
    //       <div className="lg:space-y-5">
    //         <p className="capitalize">Convert to</p>
    //         <p className="font-bold">0.00</p>
    //       </div>
    //       <div className="">
    //         <span className="uppercase font-semibold">ksh</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="p-px rounded-[10px] bg-gradient-to-br from-surface to-secondary bg-clip-border w-full lg:w-150 lg:h-90">
  <div className="rounded-[10px] bg-background flex flex-col h-full mr-0.5">
    <div className="p-5 rounded-t-[10px] flex-1">
      <div className="flex gap-12 p-2 justify-between">
        <div className="lg:space-y-5">
          <p className="capitalize text-xl">Convert from</p>
          <p className="font-bold text-xl">0.00</p>
        </div>
        <div>
          <span className="uppercase font-semibold text-xl">usd</span>
        </div>
      </div>
    </div>
    <div className="p-5 rounded-b-[10px] border-t flex-1">
      <div className="flex gap-12 p-2 justify-between">
        <div className="lg:space-y-5">
          <p className="capitalize text-xl">Convert to</p>
          <p className="font-bold text-xl">0.00</p>
        </div>
        <div>
          <span className="uppercase font-semibold text-xl">ksh</span>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default HeroConvertCard;
