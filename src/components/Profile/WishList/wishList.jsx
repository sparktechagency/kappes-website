"use client";
import React from "react";
import { useSelector } from "react-redux";
import WishListCard from "./wishListCard";

function WishList({ selectedMenu }) {
  const favorites = useSelector((state) => state.product);

  // Debug logs
  console.log("=== WishList Debug ===");
  console.log("selectedMenu:", selectedMenu);
  console.log("favorites array:", favorites);
  console.log("favorites length:", favorites.length);
  console.log(
    "Redux state structure:",
    useSelector((state) => state)
  );

  // Early return if not the right menu
  if (selectedMenu !== 3) {
    console.log("WishList not rendering - selectedMenu is not 3");
    return null;
  }

  return (
    <div className="w-full p-4 z-10">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">My Wishlist</h2>
        <p className="text-gray-600">
          {favorites.length} {favorites.length === 1 ? "item" : "items"} in your
          wishlist
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {favorites.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No favorite products yet
            </h3>
            <p className="text-gray-500">
              Start adding products to your wishlist by clicking the heart icon
              on any product.
            </p>
          </div>
        ) : (
          favorites.map((product, index) => {
            console.log(`Rendering product ${index}:`, product);
            return <WishListCard key={product.id || index} product={product} />;
          })
        )}
      </div>
    </div>
  );
}

export default WishList;

// import React from "react";
// import WishListCard from "./wishListCard";

// function WishList({ selectedMenu }) {
//   if (selectedMenu !== 3) return null;
//   return (
//     <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//       <WishListCard />
//       <WishListCard />
//       <WishListCard />
//     </div>
//   );
// }

// export default WishList;
