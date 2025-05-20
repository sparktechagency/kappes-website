"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function CarouselPlay({ slideItem }) {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {slideItem.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.image}
              width={1000}
              height={1000}
              alt={item.image}
              className="w-full object-contain"
            />
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
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 9999px;
          margin: 0 6px !important;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 32px;
          background-color: white;
        }
      `}</style>
    </div>
  );
}

export default CarouselPlay;
