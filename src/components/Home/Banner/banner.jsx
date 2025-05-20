// "use client";
// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export default function Banner() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 1000, stopOnInteraction: true })
//   );

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className="w-full h-[85%] "
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="h-full">
//             <div className="w-full h-full bg-red-600">
//               <img
//                 src="/assets/cover.jpg"
//                 alt="Slide"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       {/* <CarouselPrevious className="bg-black text-white" />
//       <CarouselNext className="bg-black text-white" /> */}
//     </Carousel>
//   );
// }

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Banner() {
  return (
    <div className="w-full h-[85%] relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full bg-black">
              <img
                src="/assets/cover.jpg"
                alt="Slide"
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pill-style pagination */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 10px !important;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          // background-color: rgba(255, 255, 255, 0.3);
          background-color: white;
          border-radius: 9999px;
          margin: 0 6px !important;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 32px;
          background-color: #b01501;
        }
      `}</style>
    </div>
  );
}
