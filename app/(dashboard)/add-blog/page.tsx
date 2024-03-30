import Blog from "@/components/shared/Blog";
import React from "react";

const AddBlogPage = () => {
  return (
    <div className="flex flex-col gap-10 items-start ">
      <h1 className="font-bold text-center text-3xl tracking-tighter">
        Add Blog
      </h1>
      <Blog />
    </div>
  );
};

export default AddBlogPage;
