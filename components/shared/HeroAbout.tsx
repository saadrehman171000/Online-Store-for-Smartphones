import React from "react";

const HeroAbout = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 px-10 w-full mt-32">
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between md:gap-20 px-10 py-1">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="font-extrabold text-lg md:text-xl tracking-tighter border-b-2 border-red-300">
            ABOUT US
          </h1>
          <p className="font-extrabold text-3xl md:text-5xl tracking-tighter">
            Handphone! your ultimate destination for all modern smartphones
          </p>
        </div>
        <div>
          <p className="text-slate-500">
            Founded in 2010, our mission is to empower everyone with the latest
            and greatest in mobile technology. We are passionate about
            connecting you with the perfect devices and accessories that enhance
            and simplify your digital life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
