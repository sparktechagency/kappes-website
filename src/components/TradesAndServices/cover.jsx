import SearchBox from "@/common/components/searchBox";
import Image from "next/image";
import React from "react";

function Cover() {
  return (
    <div>
      <div className="relative">
        {/* Background image */}
        <Image
          src="/assets/tradesAndServies/tradesAndServices.png"
          width={1000}
          height={1000}
          alt="trades and service"
          className="w-full  object-cover"
        />

        {/* Centered content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
          <h2 className="text-3xl font-comfortaa md:text-4xl font-semibold text-white mb-4">
            <span>Find Trusted</span> <br />
            <span>Trades & Services near you</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <SearchBox palceHolder={"Search Trades & Services"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
