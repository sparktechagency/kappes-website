"use client";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const ProductRecomendation = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const productRecomendation = [
    {
      id: 1,
      name: "Adventure Ready Backpack",
      currentPrice: 49.99,
      price: 59.99,
      image: "/assets/recomendationProduct/bag.png",
    },
    {
      id: 2,
      name: "Adventure Ready Backpack",
      currentPrice: 49.99,
      price: 59.99,
      image: "/assets/recomendationProduct/bag.png",
    },
    {
      id: 3,
      name: "Adventure Ready Backpack",
      currentPrice: 49.99,
      price: 59.99,
      image: "/assets/recomendationProduct/bag.png",
    },
    {
      id: 4,
      name: "Adventure Ready Backpack",
      currentPrice: 49.99,
      price: 59.99,
      image: "/assets/recomendationProduct/bag.png",
    },
    {
      id: 5,
      name: "Adventure Ready Backpack",
      currentPrice: 49.99,
      price: 59.99,
      image: "/assets/recomendationProduct/bag.png",
    },
    {
      id: 6,
      name: "Adventure Ready Backpack",
      currentPrice: 49.99,
      price: 59.99,
      image: "/assets/recomendationProduct/bag.png",
    },
    {
      id: 7,
      name: "Adventure Ready Backpack",
      currentPrice: 49.99,
      price: 59.99,
      image: "/assets/recomendationProduct/bag.png",
    },
    {
      id: 8,
      name: "Adventure Ready Backpack",
      currentPrice: 49.99,
      price: 59.99,
      image: "/assets/recomendationProduct/bag.png",
    },
  ];

  return (
    <div className="w-full px-4 py-16 lg:px-32">
      {/* Header */}
      <div className="flex items-center justify-between pb-6">
        <h2 className="text-2xl font-bold">Popular Categories</h2>
        <button className="flex items-center text-gray-600 hover:text-gray-800 hover:underline transition">
          See all
          <IoArrowForward className="ml-2 rotate-[-45deg]" />
        </button>
      </div>

      {/* Carousel */}
      <div className="relative group">
        <Carousel
          opts={{ align: "start", loop: true, direction: "rtl" }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {productRecomendation.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 px-2"
              >
                <Card className="relative bg-white rounded-xl shadow-sm p-3">
                  {/* Heart Icon */}
                  <div className="absolute top-3 right-3 text-red-500 text-xl">
                    ♥
                  </div>

                  {/* Product Image */}
                  <div className="w-full h-40 flex justify-center items-center mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={120}
                      height={120}
                      className="object-contain max-h-full"
                    />
                  </div>

                  {/* Product Info */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-bold text-base">
                        ${product.currentPrice.toFixed(2)}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls */}
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full shadow-lg z-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full shadow-lg z-10" />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductRecomendation;
