import GetContact from "@/components/shared/GetContact";
import React from "react";

const EditContactPage = () => {
  return (
    <div className="flex flex-col gap-10 items-start ">
      <h1 className="font-bold text-center tracking-tighter text-3xl ">
        View Contact Request
      </h1>
      <GetContact />
    </div>
  );
};

export default EditContactPage;
