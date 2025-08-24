"use client";
import React from "react";
import ShopBrandCard from "./shopBrandCard";
import { useGetShopListQuery } from "@/redux/shopApi/shopApi";

function ShopBrandLayout() {
  const fields = "name,logo,coverPhoto,address";
  const { data, isLoading } = useGetShopListQuery({
    fields: fields,
  });
  console.log(data?.data?.result);

  const shopList = data?.data?.result?.map((item) => {
    const a = item?.address;
    return {
      id: item?.id,
      name: item?.name,
      logo: item?.logo,
      cover: item?.coverPhoto,
      address: `${a?.detail_address}, ${a?.city}, ${a?.province}, ${a?.country}`,
    };
  });

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 px-4">
      {shopList?.map((item) => (
        <ShopBrandCard brandInfo={item} key={item.id} />
      ))}
    </div>
  );
}

export default ShopBrandLayout;
