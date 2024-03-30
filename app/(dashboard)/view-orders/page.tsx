import Orders from "@/components/shared/Orders";
import React from "react";

const ViewOrders = () => {
  return (
    <div className="flex flex-col gap-10 items-start ">
      <h1 className="font-bold text-center tracking-tighter text-3xl ">
        Orders
      </h1>
      <Orders />
    </div>
  );
};

export default ViewOrders;
