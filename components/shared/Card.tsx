import Link from "next/link";
import React from "react";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  date: Date;
}
const Card = ({ id, title, description, image, date }: Blog) => {
  return (
    <div className="bg-white rounded-2xl py-10 px-6 flex flex-col gap-10 shadow-2xl">
      <h1 className="text-xl font-bold tracking-tighter">{title}</h1>
      <p className="text-slate-600 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between">
        <h1 className="font-extrabold tracking-tighter">
          {date?.toDateString()}
        </h1>
        <Link
          href={`/getBlogs/${id}`}
          className="text-red-400 mr-8 font-medium"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
