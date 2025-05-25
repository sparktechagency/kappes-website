"use client";
import React, { useState } from "react";
import Filter from "./filter";
import ShopProductList from "./productList";

function ShopLayout() {
  const [filterVisible, setFilterVisible] = useState(false);

  const habdleFilterVisbile = () => {
    setFilterVisible(!filterVisible);
  };
  return (
    <div className="flex gap-5 py-5 px-5 md:px-24 lg:px-32 w-full ">
      <Filter filterVisible={filterVisible} />
      <ShopProductList
        filterVisible={filterVisible}
        habdleFilterVisbile={habdleFilterVisbile}
      />
    </div>
  );
}

export default ShopLayout;
