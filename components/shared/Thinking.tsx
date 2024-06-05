import React from "react";
import Image from "next/image";
import think from "@/public/think.jpg";
import phone from "@/public/iphone1.webp";
import imagephone from "@/public/imagephone.webp";

const Thinking = () => {
  return (
    <div className="max-w-7xl mx-auto w-full p-5 px-10 my-32">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between md:gap-10 px-10 py-10">
        <Image src={imagephone} alt="think" className="" />
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="font-extrabold tracking-tighter text-3xl md:text-5xl border-b-4 border-red-500 py-2">
            Why choose us?
          </h1>
          <p className="text-slate-500 tracking-tighter">
            <span className="font-extrabold">Expertise and Passion:</span>{" "}
            <br /> Our team is made up of tech enthusiasts and experts who are
            always ready to help you find the product that best suits your needs
            and preferences. <br />{" "}
            <span className="font-extrabold">Quality Assurance:</span> <br /> We
            ensure that all our products meet a high standard of quality, with
            warranties and customer support to back them up. <br />{" "}
            <span className="font-extrabold"> Competitive Prices: </span>
            <br /> We believe in fair pricing. Enjoy our regularly updated
            specials and promotions that make our top-quality products even more
            accessible. <br />{" "}
            <span className="font-extrabold">
              {" "}
              Fast and Reliable Delivery:
            </span>{" "}
            <br /> We know you want your new tech as soon as possible, which is
            why we offer fast, reliable, and trackable shipping.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thinking;
