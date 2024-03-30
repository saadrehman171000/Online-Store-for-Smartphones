import View from "@/components/shared/View";
import React from "react";

const ViewProducts = () => {
  return (
    <div className="flex flex-col gap-10 items-start ">
      <h1 className="font-bold text-center tracking-tighter text-3xl ">
        Products Available
      </h1>
      <View />
    </div>
  );
};

export default ViewProducts;
