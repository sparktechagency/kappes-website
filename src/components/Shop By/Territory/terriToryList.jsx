"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TerritoryList() {
  const territoryList = [
    {
      id: 1,
      provinceName: "British Columbia",
      image: "/assets/province/britshColumbia.png",
    },
    {
      id: 2,
      provinceName: "Alberta",
      image: "/assets/province/alberta.png",
    },
    {
      id: 3,
      provinceName: "Manitoba",
      image: "/assets/province/manitoba.png",
    },
    {
      id: 4,
      provinceName: "Saskatchewan",
      image: "/assets/province/saskatchewan.png",
    },
    {
      id: 5,
      provinceName: "Ontario",
      image: "/assets/province/ontario.png",
    },
    {
      id: 6,
      provinceName: "Quebec",
      image: "/assets/province/quebec.png",
    },
    {
      id: 7,
      provinceName: "New Brunswick",
      image: "/assets/province/newBrunswick.png",
    },
    {
      id: 8,
      provinceName: "Nova Scotia",
      image: "/assets/province/novaScotia.png",
    },
    {
      id: 9,
      provinceName: "Prince Edward Island",
      image: "/assets/province/princeEdwardIsland.png",
    },
    {
      id: 10,
      provinceName: "Newfoundland",
      image: "/assets/province/newFoundland.png",
    },
  ];

  const [selectedProvince, setSelectedProvince] = useState("");

  const handleSelectProvince = (provinceName) => {
    console.log("Selected Province:", provinceName);
    setSelectedProvince(provinceName);
  };

  return (
    <div className=" w-full md:p-8">
      {/* Mobile/Tablet View - Select Dropdown */}
      <div className="block md:hidden mb-8">
        <Select onValueChange={handleSelectProvince} value={selectedProvince}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a province" />
          </SelectTrigger>
          <SelectContent>
            {territoryList.map((province) => (
              <SelectItem key={province.id} value={province.provinceName}>
                {province.provinceName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedProvince && (
          <div className="mt-4 flex justify-center">
            <Image
              src={
                territoryList.find((p) => p.provinceName === selectedProvince)
                  ?.image || ""
              }
              alt={selectedProvince}
              width={200}
              height={200}
              className="w-40 h-40 object-contain"
            />
          </div>
        )}
      </div>

      {/* Desktop View - Grid Layout */}
      <div className="hidden md:block">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Canadian Territories
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {territoryList.map((province) => (
            <li
              key={province.id}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 hover:scale-110 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={() => handleSelectProvince(province.provinceName)}
            >
              <div className="relative w-32 h-32">
                <Image
                  src={province.image}
                  alt={province.provinceName}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-center font-medium">
                {province.provinceName}
              </span>
              <span className="flex items-center gap-2">
                {/* SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.33333 14.4869C7.53603 14.604 7.76595 14.6656 8 14.6656C8.23405 14.6656 8.46397 14.604 8.66667 14.4869L13.3333 11.8203C13.5358 11.7034 13.704 11.5353 13.821 11.3328C13.938 11.1304 13.9998 10.9007 14 10.6669V5.33359C13.9998 5.09978 13.938 4.87013 13.821 4.6677C13.704 4.46527 13.5358 4.29717 13.3333 4.18026L8.66667 1.51359C8.46397 1.39657 8.23405 1.33496 8 1.33496C7.76595 1.33496 7.53603 1.39657 7.33333 1.51359L2.66667 4.18026C2.46418 4.29717 2.29599 4.46527 2.17897 4.6677C2.06196 4.87013 2.00024 5.09978 2 5.33359V10.6669C2.00024 10.9007 2.06196 11.1304 2.17897 11.3328C2.29599 11.5353 2.46418 11.7034 2.66667 11.8203L7.33333 14.4869Z"
                    stroke="#3A3A3A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14.6667V8"
                    stroke="#3A3A3A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.19336 4.66699L8.00003 8.00033L13.8067 4.66699"
                    stroke="#3A3A3A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 2.84668L11 6.28001"
                    stroke="#3A3A3A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                200 Products
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TerritoryList;
