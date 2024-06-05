"use server";
import React from "react";
import { getBrandNames } from "@/actions/product/action";
import AddForm from "./AddForm";

const GetBrand = async () => {
  const response = await getBrandNames();

  return (
    <>
      {!response.success || !response.data ? (
        <div>Error or No Brands Found</div>
      ) : (
        <AddForm brands={response.data} />
      )}
    </>
  );
};

export default GetBrand;
