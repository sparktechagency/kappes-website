// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { GrLocation } from "react-icons/gr";
// import Image from "next/image";
// import Link from "next/link";

// export default function ShopBrandCard({ brandInfo }) {
//   const { id, name, location, logo, cover } = brandInfo;

//   return (
//     <div className="h-full">
//       <Link href={`/shop-by-store/store/${id}`}>
//         <div>
//           <Card className="p-0 overflow-hidden relative hover:scale-101">
//             {/* Cover Image */}
//             <div>
//               <Image
//                 src={cover}
//                 width={1000}
//                 height={1000}
//                 alt="cover"
//                 className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
//               />
//             </div>

//             {/* Logo and Info */}
//             <div className="flex items-end gap-4 absolute left-4 right-4 bottom-8 sm:bottom-10 md:bottom-14">
//               <Image
//                 src={logo}
//                 width={1000}
//                 height={1000}
//                 alt="logo"
//                 className="w-fit md:w-16 md:h-16 lg:h-20 lg:w-20 h-20 sm:w-24 sm:h-24 object-cover border rounded-md bg-white"
//               />
//               <div className="bg-white bg-opacity-80 p-2 rounded-md w-full max-w-[calc(100%-6rem)] text-wrap">
//                 <h2 className="text-lg sm:text-xl md:text-2xl font-semibold truncate">
//                   {name}
//                 </h2>
//                 <p className="flex items-center gap-2 text-sm sm:text-base text-gray-600 truncate">
//                   <GrLocation className="text-lg" />
//                   {location}
//                 </p>
//               </div>
//             </div>

//             {/* Footer Spacer */}
//             <CardFooter className="h-16 sm:h-20 md:h-16"></CardFooter>
//           </Card>
//         </div>
//       </Link>
//     </div>
//   );
// }

// import React from "react";
// import { MapPin } from "lucide-react";

// // ShopBrandCard Component
// function ShopBrandCard({ brandInfo }) {
//   const { id, name, location, logo, cover } = brandInfo;

//   return (
//     <div className="relative group cursor-pointer">
//       {/* Cover Image */}
//       <div className="relative overflow-hidden rounded-lg">
//         <img
//           src={cover}
//           alt="cover"
//           className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//         />

//         {/* Gradient overlay for better text readability */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//       </div>

//       {/* Logo and Info Overlay */}
//       <div className="absolute bottom-4 left-4 right-4 flex items-end gap-3">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img
//             src={logo}
//             alt="logo"
//             className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded-lg border-2 border-white shadow-lg bg-white"
//           />
//         </div>

//         {/* Brand Info */}
//         <div className="flex-grow min-w-0 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
//           <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 truncate">
//             {name}
//           </h3>
//           <div className="flex items-center gap-1.5 mt-1">
//             <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
//             <p className="text-xs sm:text-sm text-gray-600 truncate">
//               {location}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GrLocation } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

export default function ShopBrandCard({ brandInfo }) {
  const { id, name, location, logo, cover } = brandInfo;

  return (
    <div className="h-full">
      <Link href={`/shop-by-store/store/${id}`}>
        <div>
          <Card className="p-0 overflow-hidden relative hover:scale-101">
            {/* Cover Image */}
            <div>
              <Image
                src={cover}
                width={1000}
                height={1000}
                alt="cover"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
              />
            </div>

            {/* Logo and Info - Mobile: Center layout, Desktop: Side by side */}
            <div className="absolute left-4 right-4 bottom-8 sm:bottom-10 md:bottom-14">
              {/* Mobile Layout: Center everything */}
              <div className="flex flex-col items-center text-center sm:hidden">
                <Image
                  src={logo}
                  width={1000}
                  height={1000}
                  alt="logo"
                  className="w-20 h-20 object-cover border rounded-md bg-white mb-3"
                />
                <div className="bg-white bg-opacity-80 p-2 rounded-md w-full">
                  <h2 className="text-lg font-semibold truncate">{name}</h2>
                  <p className="flex items-center justify-center gap-2 text-sm text-gray-600 truncate">
                    <GrLocation className="text-lg" />
                    {location}
                  </p>
                </div>
              </div>

              {/* Desktop Layout: Side by side (original) */}
              <div className="hidden sm:flex items-end gap-4">
                <Image
                  src={logo}
                  width={500}
                  height={500}
                  alt="logo"
                  className=" sm:w-14 sm:h-14  md:w-16 md:h-16  object-cover border rounded-md bg-white"
                />
                <div className="bg-white bg-opacity-80 p-2 rounded-md w-full max-w-[calc(100%-6rem)] text-wrap">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold truncate">
                    {name}
                  </h2>
                  <p className="flex items-center gap-2 text-sm sm:text-base text-gray-600 truncate">
                    <GrLocation className="text-lg" />
                    {location}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Spacer */}
            <CardFooter className="h-16 sm:h-20 md:h-16"></CardFooter>
          </Card>
        </div>
      </Link>
    </div>
  );
}
