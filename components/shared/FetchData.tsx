import React from "react";
import Image from "next/image";
import { getProductById } from "@/actions/product/action";

interface FetchDataProps {
  id: string;
}
const FetchData = ({ id }: FetchDataProps) => {
  const getData = getProductById(parseInt(id));
  console.log(getData);
  return (
    <div className="max-w-7xl mx-auto w-full p-5 px-10 mb-32">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between px-10 py-2">
        {/* <Image src={} alt="iphone" /> */}
        <div className="flex flex-col items-start justify-center gap-10 px-10 py-20">
          <div className="flex flex-col items-start justify-center gap-2">
            <h1>apple</h1>
            <h1 className="text-5xl font-extrabold tracking-tighter">
              iPhone 15
            </h1>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h1 className="text-slate-500 tracking-tighter max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              quasi! Dolor amet, nulla accusantium ducimus velit obcaecati nisi
              sint placeat?
            </h1>
            <div className="flex items-center justify-between gap-2">
              <h1 className="font-extrabold tracking-tighter">
                Stock Available
              </h1>
              <h1 className="tracking-tighter">20</h1>
            </div>
            <div className="flex items-center justify-between gap-2">
              <h1 className="font-extrabold tracking-tighter">Color</h1>
              <h1 className="tracking-tighter">Blue</h1>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tighter">$999</h1>
            {/* <Link
            href={`orders/${id}`}
            className="tracking-tighter bg-black text-white rounded-xl hover:bg-black hover:opacity-80"
          >
            Buy Now
          </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchData;
