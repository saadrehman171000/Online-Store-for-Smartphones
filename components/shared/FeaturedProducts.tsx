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
import Link from "next/link";

const FeaturedProducts = async () => {
  const featuredProducts = await getFeaturedProducts();
  console.log(featuredProducts.data)
  return (
    <div className="my-52  py-1 px-10">
      <div className="max-w-7xl mx-auto p-5 px-10 w-full">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-start font-extrabold tracking-tighter text-3xl md:text-6xl">
            Check out our Featured Products
          </h1>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col md:flex-row gap-5  mt-5">
              {featuredProducts.data?.map((data) => (
                <Card
                  key={data.id}
                  className="bg-white rounded-2xl shadow-2xl px-10 py-10 w-[300px]"
                >
                  <CardContent className="flex flex-col gap-7">
                    <Image
                      src={data.images}
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
            <Link
              href={"/products"}
              className="text-lg tracking-tighter bg-black text-white px-3 py-2 rounded-xl"
            >
              Browse more products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
