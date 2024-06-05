import React from "react";
import iphone from "@/public/iphone-card-40-iphone15prohero-202309.jpeg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
  stock: string;
  images: string;
  color: string;
  description: string;
}

const ProductCard = ({
  id,
  name,
  price,
  stock,
  images,
  color,
  description,
}: Product) => {
  console.log(id);
  return (
    <div className="flex flex-col items-start justify-center gap-5 px-10 bg-white shadow-2xl rounded-2xl py-10 ">
      <Image
        src={images}
        alt="iphone"
        width={200}
        height={200}
        className="aspect-square object-contain"
      />

      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className="font-extrabold tracking-tighter text-xl">{name}</h1>
        <p className="font-extrabold tracking-tighter">${price}</p>
        <div className="flex items-center justify-between gap-10">
          <Link
            href={`orders/${id}`}
            className="bg-black rounded-xl tracking-tighter text-white hover:bg-black hover:opacity-80 px-5 py-2"
          >
            BUY NOW
          </Link>
          <Link
            href={`products/${id}`}
            className="font-extrabold tracking-tighter"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
