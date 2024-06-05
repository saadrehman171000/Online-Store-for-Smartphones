import { getBlogId } from "@/actions/action";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import image from "@/public/iphones.avif";
interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  date: Date;
}
const GetBlogId = async () => {
  const heads = headers();
  const pathname = heads.get("next-url");
  const urlParts = pathname?.split("/");
  const idString = urlParts?.[2];
  const numericId = Number(idString);

  console.log(idString);

  const blogData = await getBlogId(numericId);
  console.log(blogData.data);

  return (
    <div className="max-w-7xl my-32 mx-auto p-5 px-10 w-full">
      {blogData.data ? (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-5 items-start justify-between">
            <div className="flex flex-col gap-5">
              <p className="text-red-400 text-lg">LATEST NEWS</p>
              <h1 className="font-bold text-5xl md:text-7xl uppercase max-w-md tracking-tighter">
                {blogData.data?.title}
              </h1>
              <p className="font-bold tracking-tighter">
                {blogData.data?.date.toDateString()}
              </p>
            </div>
            <Image src={image} alt="iphone" width={500} height={500} />
          </div>
          <p className="text-slate-600">{blogData.data?.description}</p>
        </div>
      ) : (
        <div>Loading data</div>
      )}
    </div>
  );
};

export default GetBlogId;
