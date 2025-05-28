import React from "react";
import ShopBrandCard from "./shopBrandCard";

function ShopBrandLayout() {
  const brandList = [
    {
      id: 1,
      name: "Peak",
      location: "Victoria British Columbia",
      logo: "/assets/shopBrandCard/storeLogo1.png",
      cover: "/assets/shopBrandCard/storeBrandCover1.jpg",
    },
    {
      id: 2,
      name: "Peak",
      location: "Victoria British Columbia",
      logo: "/assets/shopBrandCard/shoeLogo.png",
      cover: "/assets/shopBrandCard/shoeStore.jpg",
    },
    {
      id: 3,
      name: "Peak",
      location: "Victoria British Columbia",
      logo: "/assets/shopBrandCard/pawLogo.png",
      cover: "/assets/shopBrandCard/catsCover.jpg",
    },
    {
      id: 4,
      name: "Peak",
      location: "Victoria British Columbia",
      logo: "/assets/shopBrandCard/hangerLogo.jpg",
      cover: "/assets/shopBrandCard/hangerCover.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
      {brandList.map((item) => (
        <ShopBrandCard brandInfo={item} key={item.id} />
      ))}
    </div>
  );
}

export default ShopBrandLayout;
