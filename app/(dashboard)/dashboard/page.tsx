import AddForm from "@/components/shared/AddForm";
import GetBrand from "@/components/shared/GetBrand";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-10 items-start px-10 pb-10">
      <h1 className="font-bold text-center tracking-tighter text-3xl ">
        Add Products Page
      </h1>
      <GetBrand />
    </div>
  );
};

export default DashboardPage;
