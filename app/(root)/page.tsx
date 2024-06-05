import Brands from "@/components/shared/Brands";
import FeaturedProducts from "@/components/shared/FeaturedProducts";
import Hero from "@/components/shared/Hero";
import React from "react";
import ReactTyped from "react-typed";

const page = () => {
  return (
    <div>
      <Hero />
      <h1 className="text-center font-extrabold tracking-tighter text-2xl md:text-[2rem]">
        We provide wide range of{" "}
        <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-400 inline-block text-transparent bg-clip-text">
          Products
        </span>
      </h1>
      <Brands />
      <FeaturedProducts />
    </div>
  );
};

export default page;
