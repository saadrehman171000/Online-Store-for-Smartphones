"use client";
import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 px-10 w-full text-center my-52">
      <h1 className="font-extrabold text-4xl md:text-7xl tracking-tighter">
        Welcome to Handphone <br />{" "}
        <span className="font-extrabold bg-gradient-to-r from-red-700 via-red-500 to-red-400 inline-block text-transparent bg-clip-text">
          Your Gateway to the latest
        </span>{" "}
        <br />
        <ReactTyped
          className="font-extrabold bg-gradient-to-r from-red-700 via-red-500 to-red-400 inline-block text-transparent bg-clip-text pb-10"
          strings={["in Mobile Technology"]}
          typeSpeed={80}
          loop
        />
      </h1>
    </div>
  );
};

export default Hero;
