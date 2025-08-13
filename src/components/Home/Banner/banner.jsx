// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import Image from "next/image";

// export default function Banner() {
//   return (
//     <div className="w-full h-[85%] relative">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         loop={true}
//         className="w-full h-full"
//       >
//         {Array.from({ length: 5 }).map((_, index) => (
//           <SwiperSlide key={index}>
//             <div className="w-full">
//               <Image
//                 width={5000}
//                 height={5000}
//                 src="/assets/cover.jpg"
//                 alt="Slide"
//                 className="w-[full] h-[40.625rem] object-contain"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom pill-style pagination */}
//       <style jsx global>{`
//         .swiper-pagination {
//           bottom: 40px !important;
//         }

//         .swiper-pagination-bullet {
//           width: 8px;
//           height: 8px;
//           // background-color: rgba(255, 255, 255, 0.3);
//           background-color: white;
//           border-radius: 9999px;
//           margin: 0 6px !important;
//           opacity: 1;
//           transition: all 0.3s ease;
//         }

//         .swiper-pagination-bullet-active {
//           width: 32px;
//           background-color: #b01501;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <Image
                width={1920}
                height={1080}
                src="/assets/cover.jpg"
                alt="Slide"
                className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[650px] object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pill-style pagination */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 9999px;
          margin: 0 6px !important;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 24px;
          background-color: #b01501;
        }

        @media (min-width: 768px) {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
          .swiper-pagination-bullet-active {
            width: 32px;
          }
        }
      `}</style>
    </div>
  );
}
