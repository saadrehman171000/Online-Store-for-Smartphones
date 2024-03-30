import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getFeaturedProducts } from "@/app/api/products/route";
import Image from "next/image";
import { Button } from "../ui/button";

const FeaturedProducts = async () => {
  const featuredProducts = await getFeaturedProducts();

  console.log(featuredProducts.data);

  return (
    <div className="my-52">
      <h1 className="text-center font-extrabold tracking-tighter text-[2rem]">
        Check out our{" "}
        <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-400 inline-block text-transparent bg-clip-text">
          Featured Products
        </span>
      </h1>
      <div className="max-w-7xl mx-auto p-5 px-10 w-full my-2">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex gap-5 items-center justify-center mt-5">
            {featuredProducts.data?.map((data) => (
              <Card
                key={data.id}
                className="bg-white rounded-2xl shadow-2xl px-10 py-10 hover:scale-105 transition-all duration-300 w-[300px]"
              >
                <CardContent className="flex flex-col gap-7">
                  <Image
                    src={data.images[0].url}
                    alt="hello"
                    width={300}
                    height={300}
                    className="aspect-square object-contain"
                  />
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold tracking-tighter text-lg">
                      {data.name}
                    </h1>
                    <h1>${data.price}</h1>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button
            variant="secondary"
            className="font-bold text-lg tracking-tighter "
          >
            Browse more products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
