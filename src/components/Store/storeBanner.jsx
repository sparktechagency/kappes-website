import CarouselPlay from "@/common/components/carousel";
import React from "react";

function StoreBanner() {
  const bannerItem = [
    {
      id: 1,
      image: "/assets/storeFront/storeBanner.png",
    },
    {
      id: 2,
      image: "/assets/storeFront/storeBanner.png",
    },
    {
      id: 3,
      image: "/assets/storeFront/storeBanner.png",
    },
  ];
  return (
    <div className="w-full ">
      <CarouselPlay slideItem={bannerItem} />
    </div>
  );
}

export default StoreBanner;
