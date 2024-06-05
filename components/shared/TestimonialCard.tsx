import React from "react";
import Image from "next/image";
import imagePerson from "@/public/person.jpg";

const TestimonialCard = () => {
  return (
    <div className="bg-white rounded-md shadow-2xl px-5 py-5 max-w-md mt-10">
      <div className="flex flex-col items-start justify-center gap-10">
        <div className="flex flex-col items-start justify-center gap-5">
          <Image
            src={imagePerson}
            alt="person"
            className="aspect-square  object-cover rounded-full w-[40px] h-[40px]"
          />
          <p className="tracking-tighter text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
            esse consequatur expedita aperiam accusantium assumenda amet
            voluptates similique! Esse.
          </p>
        </div>
        <div className="border-t-2 border-gray-400">
          <h1 className="font-bold tracking-tighter">Saad Rehman</h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
