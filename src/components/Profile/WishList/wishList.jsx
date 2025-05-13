import React from "react";
import WishListCard from "./wishListCard";

function WishList({ selectedMenu }) {
  if (selectedMenu !== 3) return null;
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <WishListCard />
      <WishListCard />
      <WishListCard />
    </div>
  );
}

export default WishList;
