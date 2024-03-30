"use client";
import React from "react";
import { ReactTyped } from "react-typed";

const BlogHeader = () => {
  return (
    <h1 className="font-bold text-7xl tracking-tighter">
      Our{" "}
      <ReactTyped
        className="font-bold bg-gradient-to-r from-red-700 via-red-500 to-red-400 inline-block text-transparent bg-clip-text pb-10"
        strings={["Blogs."]}
        typeSpeed={100}
        loop
        loopCount={5}
      />
    </h1>
  );
};

export default BlogHeader;
