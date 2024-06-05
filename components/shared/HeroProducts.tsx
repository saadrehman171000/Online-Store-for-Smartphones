import React from "react";

const HeroProducts = () => {
  return (
    <div className="max-w-7xl mx-auto w-full p-5 px-10 mt-32">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between md:gap-20 px-10 py-1">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="border-b-2 border-red-500 font-extrabold tracking-tighter text-lg md:text-xl">
            Products
          </h1>
          <h1 className="font-extrabold tracking-tighter text-3xl md:text-5xl">
            Have a look at a variety of our amazing products!
          </h1>
        </div>
        <p className="tracking-tighter text-slate-500">
          Welcome to Handphone, where innovation meets style. Discover our
          curated collection of the latest smartphones designed to elevate your
          mobile experience. From flagship devices to budget-friendly options,
          we have something for everyone.
        </p>
      </div>
    </div>
  );
};

export default HeroProducts;
