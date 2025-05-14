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
function CarouselPlay({ slideItem }) {
  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {slideItem.map((item) => (
          <CarouselItem key={item.id}>
            <Image
              src={item.image}
              width={1000}
              height={1000}
              alt={item.image}
              className="w-full "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselPlay;
