import React from "react";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProductCard from "./ProductCard";
import AnotherSection from "./AnotherSection";
import { getProducts } from "@/actions/product/action";

const CardsSection = async () => {
  const productsData = await getProducts();

  return (
    <div className="max-w-7xl mx-auto p-5 px-10 w-full my-36">
      <h1 className="font-extrabold tracking-tighter text-3xl md:text-5xl ">
        You will surely like some of our latest collections
      </h1>

      <div className=" mt-10">
        <div className="flex flex-col items-center justify-center gap-10 md:grid md:grid-cols-3 md:gap-10">
          {productsData.data?.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              stock={item.stock}
              images={item.images}
              color={item.color}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
