import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto w-full p-5 px-10 mt-32">
      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className="border-b-2 border-red-500 font-extrabold tracking-tighter text-lg md:text-xl">
          Testimonials
        </h1>
        <p className="font-extrabold text-3xl md:text-5xl tracking-tighter">
          What our clients say about us
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center md:grid md:grid-cols-3 md:gap-3">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
