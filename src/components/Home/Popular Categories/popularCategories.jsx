// "use client";
// import React from "react";
// import { IoArrowBackSharp } from "react-icons/io5";

// // import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// function PopularCategories() {
//   const popularCategories = [
//     {
//       id: 1,
//       name: "Clothing",
//       image: "/assets/popularCategories/Clothing.png",
//     },
//     {
//       id: 2,
//       name: "Footwear",
//       image: "/assets/popularCategories/Footwear.png",
//     },
//     {
//       id: 3,
//       name: "Food Products",
//       image: "/assets/popularCategories/FoodProduct.png",
//     },
//     {
//       id: 4,
//       name: "Beauty Products",
//       image: "/assets/popularCategories/BeautyProducts.png",
//     },
//     {
//       id: 5,
//       name: "Self Care",
//       image: "/assets/popularCategories/SelfCare.png",
//     },
//     {
//       id: 6,
//       name: "Furniture",
//       image: "/assets/popularCategories/Furniture.png",
//     },
//   ];

//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   );
//   return (
//     <div className="w-full px-5 lg:px-32 py-20">
//       <div className="w-full flex items-center justify-between py-4 border-b border-gray-300 ">
//         <h1>Popular Categories</h1>
//         <p className="flex items-center justify-start gap-4">
//           See all <IoArrowBackSharp className="rotate-[145deg]" />
//         </p>
//       </div>
//       <div>
//         <Carousel
//           opts={{
//             align: "start",
//           }}
//           className="w-full"
//         >
//           <CarouselContent className="bg-red-400 w-[50%]">
//             {popularCategories.map((category) => (
//               <CarouselItem
//                 key={category.id}
//                 className="md:basis-1/2 lg:basis-1/3 border rounded-full flex items-center justify-center w-50 h-50 "
//               >
//                 <Image
//                   width={100}
//                   height={100}
//                   key={category.id}
//                   src={category.image}
//                   alt={category.name}
//                   className="w-25 h-25 object-cover"
//                 />
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// export default PopularCategories;

"use client";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

function PopularCategories() {
  const popularCategories = [
    {
      id: 1,
      name: "Clothing",
      image: "/assets/popularCategories/Clothing.png",
    },
    {
      id: 2,
      name: "Footwear",
      image: "/assets/popularCategories/Footwear.png",
    },
    {
      id: 3,
      name: "Food Products",
      image: "/assets/popularCategories/FoodProduct.png",
    },
    {
      id: 4,
      name: "Beauty Products",
      image: "/assets/popularCategories/BeautyProducts.png",
    },
    {
      id: 5,
      name: "Self Care",
      image: "/assets/popularCategories/SelfCare.png",
    },
    {
      id: 6,
      name: "Furniture",
      image: "/assets/popularCategories/Furniture.png",
    },
    {
      id: 7,
      name: "Furniture",
      image: "/assets/popularCategories/Furniture.png",
    },
    {
      id: 8,
      name: "Furniture",
      image: "/assets/popularCategories/Furniture.png",
    },
    {
      id: 9,
      name: "Furniture",
      image: "/assets/popularCategories/Furniture.png",
    },
    {
      id: 10,
      name: "Furniture",
      image: "/assets/popularCategories/Furniture.png",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-full px-5 lg:px-32 py-20">
      <div className="w-full flex items-center justify-between pb-6">
        <h1 className="text-2xl font-bold ">Popular Categories</h1>
        <button className="flex items-start text-gray-600 hover:text-gray-800 hover:underline transition-colors">
          See all
          <IoArrowForward className="ml-2 rotate-[-45deg]" />
        </button>
      </div>

      <div className="relative group">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {popularCategories.map((category) => (
              <CarouselItem
                key={category.id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <div className="flex flex-col items-center p-4 gap-2">
                  <div className="w-24 h-24 rounded-full bg-gray-100 p-4 flex ring-1 items-center justify-center overflow-hidden">
                    <Image
                      width={80}
                      height={80}
                      src={category.image}
                      alt={category.name}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full shadow-lg" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full shadow-lg" />
        </Carousel>
      </div>
    </div>
  );
}

export default PopularCategories;
