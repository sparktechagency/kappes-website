import Image from "next/image";
import React from "react";

function CouponListHead() {
  return (
    <div>
      <div className="flex gap-4 border rounded-md p-4">
        <Image
          src="/assets/logo.png"
          width={1000}
          height={1000}
          alt="coupon offer"
          className="w-30 h-30 border p-2 rounded-sm"
        />

        <div className="flex flex-col justify-between">
          <h2 className="text-3xl font-bold font-comfortaa">
            The Canuck Mall Promo Code & Deals – April 2025
          </h2>
          <p>
            Satisfy Your Shopping Cravings and Explore Deals Like Never Before
            with The Canuck Mall! From daily essentials to niche finds, we've
            got your wishlist covered. Whether you're revamping your wardrobe,
            upgrading your tech, or sprucing up your home, it's all just a click
            away. Wander through our virtual aisles filled with top Canadian
            vendors, exclusive collections, and exciting seasonal offers. Shop
            smarter and save more when you use our exclusive Canuck Mall promo
            codes — because your cart deserves the best.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CouponListHead;
