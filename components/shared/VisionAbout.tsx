import React from "react";
import Image from "next/image";
import mobile from "@/public/iphone1.webp";
import person from "@/public/person.jpg";
const VisionAbout = () => {
  return (
    <div className="max-w-7xl mx-auto w-full p-5 px-10 mt-36">
      <div className="flex flex-col items-start justify-center gap-10 md:flex-row md:justify-between md:gap-20 px-10 py-1">
        <div className="flex flex-col items-start justify-center gap-5">
          <Image src={mobile} alt="mobile" className="rounded-md" />
          <div className="flex items-center justify-center gap-4">
            <Image
              src={person}
              alt="person"
              className="aspect-square rounded-full object-cover h-[40px] w-[40px]"
            />
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-bold tracking-tighter">Saad Rehman</h1>
              <p className="text-slate-500 tracking-tighter">CEO, Handphone</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 px-10 py-10">
          <div className="flex flex-col items-start justify-center gap-5">
            <h1 className="font-extrabold text-lg md:text-xl border-b-2 border-red-500 tracking-tighter">
              Our aim
            </h1>
            <h1 className="font-extrabold text-2xl md:text-5xl tracking-tighter">
              Vision for the future
            </h1>
          </div>

          <p className="text-slate-500 tracking-tighter">
            At Handphone, we envision a world where everyone has access to
            affordable and cutting-edge technology. We strive to be at the
            forefront of the mobile industry, delivering innovation and quality
            directly to your hands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionAbout;
