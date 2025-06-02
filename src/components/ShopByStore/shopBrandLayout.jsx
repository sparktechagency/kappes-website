import React from "react";
import ShopBrandCard from "./shopBrandCard";

function ShopBrandLayout() {
  const brandList = [
    {
      id: 1,
      name: "Peak",
      location: "Victoria British Columbia",
      logo: "/assets/shopBrandCard/storeLogo1.png",
      cover: "/assets/shopBrandCard/storeBrandCover1.jpg",
    },
    {
      id: 2,
      name: "Peak",
      location: "Victoria British Columbia",
      logo: "/assets/shopBrandCard/shoeLogo.png",
      cover: "/assets/shopBrandCard/shoeStore.jpg",
    },
    {
      id: 3,
      name: "Peak",
      location: "Victoria British Columbia",
      logo: "/assets/shopBrandCard/pawLogo.png",
      cover: "/assets/shopBrandCard/catsCover.jpg",
    },
    {
      id: 4,
      name: "Peak",
      location: "Victoria British Columbia",
      logo: "/assets/shopBrandCard/hangerLogo.jpg",
      cover: "/assets/shopBrandCard/hangerCover.png",
    },
    {
      id: 5,
      name: "Peak",
      location: "Victoria British Columbia",
      logo: "/assets/shopBrandCard/hangerLogo.jpg",
      cover: "/assets/shopBrandCard/hangerCover.png",
    },
    {
      id: 6,
      name: "Peak",
      location: "Victoria British Columbia",
      logo: "/assets/shopBrandCard/hangerLogo.jpg",
      cover: "/assets/shopBrandCard/hangerCover.png",
    },
    {
      id: 7,
      name: "Peak",
      location: "Victoria British Columbia",
      logo: "/assets/shopBrandCard/hangerLogo.jpg",
      cover: "/assets/shopBrandCard/hangerCover.png",
    },
    {
      id: 8,
      name: "Peak",
      location: "Victoria British Columbia",
      logo: "/assets/shopBrandCard/hangerLogo.jpg",
      cover: "/assets/shopBrandCard/hangerCover.png",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 px-4">
      {brandList.map((item) => (
        <ShopBrandCard brandInfo={item} key={item.id} />
      ))}
    </div>
  );
}

export default ShopBrandLayout;

// function ShopBrandLayout() {
//   const brandList = [
//     {
//       id: 1,
//       name: "Peak",
//       location: "Victoria British Columbia",
//       logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 2,
//       name: "Runner Room",
//       location: "Toronto, Ontario",
//       logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 3,
//       name: "Pawlove - Pet Supplies",
//       location: "Thunder Bay, Ontario",
//       logo: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 4,
//       name: "Peak",
//       location: "Victoria British Columbia",
//       logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 5,
//       name: "Runner Room",
//       location: "Toronto, Ontario",
//       logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 6,
//       name: "Pawlove - Pet Supplies",
//       location: "Thunder Bay, Ontario",
//       logo: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 7,
//       name: "Peak",
//       location: "Victoria British Columbia",
//       logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 8,
//       name: "Runner Room",
//       location: "Toronto, Ontario",
//       logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 9,
//       name: "Pawlove - Pet Supplies",
//       location: "Thunder Bay, Ontario",
//       logo: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 10,
//       name: "Peak",
//       location: "Victoria British Columbia",
//       logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 11,
//       name: "Runner Room",
//       location: "Toronto, Ontario",
//       logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 12,
//       name: "Pawlove - Pet Supplies",
//       location: "Thunder Bay, Ontario",
//       logo: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 13,
//       name: "Peak",
//       location: "Victoria British Columbia",
//       logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 14,
//       name: "Runner Room",
//       location: "Toronto, Ontario",
//       logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop&crop=center",
//     },
//     {
//       id: 15,
//       name: "Pawlove - Pet Supplies",
//       location: "Thunder Bay, Ontario",
//       logo: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=100&h=100&fit=crop&crop=center",
//       cover:
//         "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop&crop=center",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
//           Shop by Store
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
//           {brandList.map((item) => (
//             <ShopBrandCard brandInfo={item} key={item.id} />
//           ))}
//         </div>

//         {/* Footer spacer */}
//         <div className="h-16"></div>
//       </div>
//     </div>
//   );
// }

// export default ShopBrandLayout;
