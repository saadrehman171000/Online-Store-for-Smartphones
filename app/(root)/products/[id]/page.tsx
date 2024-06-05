import React from "react";
import { headers } from "next/headers";
import {
  getBrandNames,
  getBrandbyId,
  getProductById,
} from "@/actions/product/action";
import GetProductHero from "@/components/shared/GetProductHero";
import GetProductCard from "@/components/shared/GetProductCard";

const page = async ({
  params: { id },
}: {
  params: { id: string };
  searchParams: {};
}) => {
  console.log(id);
  const productDetails = await getProductById(parseInt(id));
  console.log(productDetails);
  return (
    <div>
      <GetProductHero />
      {productDetails && productDetails.data && (
        <GetProductCard
          id={productDetails.data.id}
          name={productDetails.data.name}
          price={productDetails.data.price}
          stock={productDetails.data.stock}
          images={productDetails.data.images}
          color={productDetails.data.color}
          description={productDetails.data.description}
          brandName={productDetails.data.brand.brandName}
        />
      )}
    </div>
  );
};

export default page;
