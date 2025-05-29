"use client";
import SearchBox from "@/common/components/searchBox";
import Image from "next/image";
import React from "react";

function Cover() {
  const searchServices = [
    { id: 1, serviceName: "Fresh Painting" },
    { id: 2, serviceName: "Dentist" },
    { id: 3, serviceName: "Car Wash" },
    { id: 4, serviceName: "GC Bakery" },
    { id: 5, serviceName: "Cake Storys" },
    { id: 6, serviceName: "Sharlan PhotoStudio" },
    { id: 7, serviceName: "Abby Clothing" },
    { id: 8, serviceName: "Strawberry" },
    { id: 9, serviceName: "Smith Rent a Car" },
    { id: 10, serviceName: "Fire Safety Store" },
    { id: 11, serviceName: "Fishing Accessories" },
  ];

  const handleSearch = (searchTerm) => {
    const found = searchServices.some(
      (service) =>
        service.serviceName.toLowerCase() === searchTerm.toLowerCase()
    );
    console.log("Search found:", found);
  };
  return (
    <div>
      <div className="relative">
        <Image
          src="/assets/tradesAndServies/tradesAndServices.png"
          width={1000}
          height={1000}
          alt="trades and service"
          className="w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
          <h2 className="text-3xl font-comfortaa md:text-4xl font-semibold text-white mb-4">
            <span>Find Trusted</span> <br />
            <span>Trades & Services near you</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <SearchBox
              placeholder="Search Trades & Services"
              searchServices={searchServices}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
