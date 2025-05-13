"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

export default function WishListCard() {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden w-full h-fit max-w-xs sm:max-w-sm md:max-w-[260px] relative hover:shadow-md transition">
      {/* Favorite icon */}
      <button className="absolute top-3 right-3 text-red-500 z-50">
        <Heart size={18} fill="red" />
      </button>

      {/* Product Image */}
      <div className="w-full aspect-square relative mb-3">
        <Image
          src="/assets/favbag.jpg" // replace with your image path
          alt="Hiking Expedition Jacket"
          layout="fill"
          objectFit="contain"
          // className="rounded-md"
        />
      </div>

      {/* Product Title */}
      <div className="px-4">
        <h3 className="text-sm font-medium text-gray-900 mb-1">
          Hiking Expedition Jacket
        </h3>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#AF1500]">$139.99</span>
          <span className="text-sm line-through text-gray-400">$520.99</span>
        </div>
      </div>
    </div>
  );
}
