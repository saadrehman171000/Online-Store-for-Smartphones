import React, { useState } from "react";
import Card from "./Card";
import { getBlogs } from "@/actions/action";

const BlogsCards = async () => {
  const blogData = await getBlogs();

  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 gap-10">
        {blogData.data?.map((item) => (
          <Card
            key={item.title}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsCards;
