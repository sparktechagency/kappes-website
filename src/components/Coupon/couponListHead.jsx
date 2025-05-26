import Image from "next/image";
import React from "react";

function CouponListHead() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 rounded-md p-4 md:p-6 shadow-lg bg-white dark:bg-gray-900">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/assets/logo.png"
          width={200}
          height={200}
          alt="coupon offer"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 border p-2 rounded-sm object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-comfortaa">
          The Canuck Mall Promo Code & Deals – April 2025
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          Satisfy Your Shopping Cravings and Explore Deals Like Never Before
          with The Canuck Mall! From daily essentials to niche finds, we've got
          your wishlist covered. Whether you're revamping your wardrobe,
          upgrading your tech, or sprucing up your home, it's all just a click
          away. Wander through our virtual aisles filled with top Canadian
          vendors, exclusive collections, and exciting seasonal offers. Shop
          smarter and save more when you use our exclusive Canuck Mall promo
          codes — because your cart deserves the best.
        </p>
      </div>
    </div>
  );
}

export default CouponListHead;
