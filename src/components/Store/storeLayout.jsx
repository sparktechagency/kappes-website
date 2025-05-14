import React from "react";
import StoreCover from "./storeCover";
import StoreBanner from "./storeBanner";
import Filter from "../Shop/filter";
import ShopProductList from "../Shop/productList";

function StoreLayout() {
  return (
    <div className="lg:px-32">
      <StoreCover />
      <StoreBanner />
      <div className="flex items-start justify-start my-10 border">
        <Filter />
        <ShopProductList />
      </div>
    </div>
  );
}

export default StoreLayout;
