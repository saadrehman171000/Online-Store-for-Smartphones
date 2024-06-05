import React from "react";
import Image from "next/image";
import iphone from "@/public/iphone-card-40-iphone15prohero-202309.jpeg";
import { Button } from "../ui/button";
import Link from "next/link";

interface OrderCardProps {
  id: number;
  name: string;
  price: string;
  stock: string;
  images: string;
  color: string;
  description: string;
  brandName: string;
}

const GetProductCard = ({
  id,
  name,
  price,
  stock,
  images,
  color,
  description,
  brandName,
}: OrderCardProps) => {
  return (
    <div className="max-w-7xl mx-auto w-full p-5 px-10 mb-32">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between px-44 py-2">
        <Image
          src={images}
          alt="iphone"
          width={300}
          height={300}
          className="hidden md:block"
        />
        <div className="flex flex-col items-start justify-center gap-10 px-10 py-20">
          <div className="flex flex-col items-start justify-center gap-2 capitalize">
            <h1>{brandName}</h1>
            <h1 className="text-5xl font-extrabold tracking-tighter">{name}</h1>
          </div>

          <div className="flex flex-col items-start justify-center gap-5">
            <h1 className="text-slate-500 tracking-tighter max-w-xs">
              {description}
            </h1>
            <div className="flex items-center justify-between gap-2">
              <h1 className="font-extrabold tracking-tighter">
                Stock Available
              </h1>
              <h1 className="tracking-tighter">{stock}</h1>
            </div>
            <div className="flex items-center justify-between gap-2">
              <h1 className="font-extrabold tracking-tighter">Color</h1>
              <h1 className="tracking-tighter">{color}</h1>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tighter">
              ${price}
            </h1>
            <Link
              href={`http://localhost:3000/orders/${id}`}
              className="tracking-tighter bg-black text-white rounded-xl hover:bg-black hover:opacity-80 px-3 py-2"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetProductCard;
