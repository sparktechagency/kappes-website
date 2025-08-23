"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Banner() {
  const bannerImages = [
    "/assets/cover.jpg",
    "/assets/cover2.jpg",
    "/assets/cover3.jpg",
    "/assets/cover4.jpg",
  ];
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <Image
                width={1920}
                height={1080}
                src={image}
                alt="Slide"
                className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[600px] 2xl:h-[800px] object-cover"
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
