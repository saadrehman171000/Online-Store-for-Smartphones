import ContactUs from "@/components/shared/ContactUs";
import React from "react";

const EditContactPage = () => {
  return (
    <div className="flex flex-col gap-10 items-start ">
      <h1 className="font-bold text-center tracking-tighter text-3xl ">
        Edit Contact Page
      </h1>
      <ContactUs />
    </div>
  );
};

export default EditContactPage;
