import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import apple from "@/public/Apple Black.png";
import samsung from "@/public/Samsung (1).png";
import sony from "@/public/Sony Xperia.png";
import asus from "@/public/Asus.png";
import huawei from "@/public/Huawei Logotype.png";
import android from "@/public/Android New 2023.png";
import oneplus2 from "@/public/OnePlus.png";

const Brands = () => {
  const brands = [apple, asus, huawei, android, oneplus2, samsung];
  return (
    <div className="max-w-7xl my-10 mx-32">
      <Carousel>
        <CarouselContent className="-ml-1">
          {brands.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      width={200}
                      height={200}
                      src={image}
                      className="aspect-square object-contain mix-blend-color-burn"
                      alt={`Brand ${index}`}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Brands;
