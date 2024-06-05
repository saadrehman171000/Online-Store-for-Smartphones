import { getBrandbyId, getProductById } from "@/actions/product/action";
import OrderCard from "@/components/shared/OrderCard";
import OrderPageHero from "@/components/shared/OrderPageHero";
import { headers } from "next/headers";
import React from "react";

const OrdersPage = async ({
  params: { id },
}: {
  params: { id: string };
  searchParams: {};
}) => {
  const productDetails = await getProductById(parseInt(id));

  return (
    <>
      <OrderPageHero />
      {productDetails && productDetails.data && (
        <OrderCard
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
    </>
  );
};

export default OrdersPage;
