"use client"; // Ensure this is a Client Component

import React, { useState } from "react";
import ProvinceList from "./Province/provinceList";

import ProvinceRelatedProducts from "./provinceRelatedProducts";
import Filter from "../Shop/filter";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import CityList from "./City/city";
import TerritoryList from "./Territory/terriToryList";

function ShopByProvinceLayout() {
  const [selectedTab, setSelectedTab] = useState("province");

  return (
    <div className="px-4 lg:px-32">
      <div className="w-2/3  mx-auto mt-4">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid grid-cols-3 w-full bg-red-700">
            <TabsTrigger
              value="province"
              className="data-[state=active]:text-black data-[state=inactive]:text-white"
            >
              Province
            </TabsTrigger>
            <TabsTrigger
              value="territory"
              className="data-[state=active]:text-black data-[state=inactive]:text-white"
            >
              Territory
            </TabsTrigger>
            <TabsTrigger
              value="city"
              className="data-[state=active]:text-black data-[state=inactive]:text-white"
            >
              City
            </TabsTrigger>
          </TabsList>

          <TabsContent value="province">
            <ProvinceList />
          </TabsContent>
          <TabsContent value="territory">
            <TerritoryList />
          </TabsContent>
          <TabsContent value="city">
            <CityList />
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex gap-5 py-5 px-5 md:px-24 w-full">
        <Filter />
        <ProvinceRelatedProducts />
      </div>
    </div>
  );
}

export default ShopByProvinceLayout;
