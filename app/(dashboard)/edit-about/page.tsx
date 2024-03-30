import About from "@/components/shared/About";
import React from "react";

const EditAboutPage = () => {
  return (
    <div className="flex flex-col gap-10 items-start ">
      <h1 className="font-bold text-center tracking-tighter text-3xl ">
        Edit About Page
      </h1>
      <About />
    </div>
  );
};

export default EditAboutPage;
