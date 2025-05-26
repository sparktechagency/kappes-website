import React from "react";
import ProvinceList from "./provinceList";
import ProvinceRelatedProducts from "./provinceRelatedProducts";
import Filter from "../Shop/filter";

function ShopByProvinceLayout() {
  return (
    <div className="px-4 lg:px-32">
      <ProvinceList />
      <div className="flex gap-5 py-5 px-5 md:px-24 w-full ">
        <Filter />
        <ProvinceRelatedProducts />
      </div>
    </div>
  );
}

export default ShopByProvinceLayout;
