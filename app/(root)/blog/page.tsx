import BlogHeader from "@/components/shared/BlogHeader";
import BlogsCards from "@/components/shared/BlogsCards";
import React from "react";

const page = () => {
  return (
    <div className="my-32 mx-auto p-5 px-10 w-full">
      <BlogHeader />
      <BlogsCards />
    </div>
  );
};

export default page;
