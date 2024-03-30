import AddForm from "@/components/shared/AddForm";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-10 items-start">
      <h1 className="font-bold text-center tracking-tighter text-3xl ">
        Add Products Page
      </h1>
      <AddForm />
    </div>
  );
};

export default DashboardPage;
