import React from "react";

const OrderPageHero = () => {
  return (
    <div className="max-w-7xl mx-auto w-full mt-32 p-5 px-10">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="tracking-tighter font-extrabold text-lg md:text-xl border-b-2 border-red-500">
          ORDER
        </h1>
        <h1 className="tracking-tighter font-extrabold text-3xl md:text-5xl">
          Order Details
        </h1>
      </div>
    </div>
  );
};

export default OrderPageHero;
