import React from "react";
import ProductCard from "./ProductCard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { getProducts } from "@/actions/product/action";
import CardsSection from "./CardsSection";

const AnotherSection = async () => {
  const productsData = await getProducts();

  return <CardsSection productsData={productsData.data} />;
};

export default AnotherSection;
