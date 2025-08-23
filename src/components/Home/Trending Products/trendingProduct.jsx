"use client";
import React, { useRef, useEffect } from "react";
import { IoArrowForward } from "react-icons/io5";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import useTrendingProducts from "@/hooks/useTrendingProducts";
import { getImageUrl } from "@/redux/baseUrl";

const TrendingProduct = () => {
  const { trendingProducts, isLoading, error } = useTrendingProducts();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("trendingProducts", trendingProducts);

  return (
    <div className="w-full px-4 py-16 lg:px-32">
      {/* Header */}
      <div className="flex items-center justify-between pb-6">
        <h2 className="text-3xl font-extrabold font-comfortaa">
          Trending Products
        </h2>
        <button className="flex items-center text-gray-600 hover:text-gray-800 hover:underline transition">
          See all
          <IoArrowForward className="ml-2 rotate-[-45deg]" />
        </button>
      </div>

      {/* Swiper Carousel */}
      <div className="relative group">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          direction="horizontal"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            // Mobile
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            // Tablet
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            // Desktop
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            // Large Desktop
            1280: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }}
          className="w-full product-swiper"
        >
          {trendingProducts.map((product) => (
            <SwiperSlide key={product.id || product._id}>
              <Card
                className="relative bg-white rounded-xl shadow-sm p-0 overflow-hidden h-80 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => router.push(`/product-page/${product._id}`)}
              >
                {/* Heart Icon */}
                <div
                  className="absolute top-3 right-3 text-red-500 text-xl cursor-pointer hover:scale-110 transition-transform z-10"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    // Add favorite functionality here
                  }}
                >
                  ♥
                </div>

                {/* Product Image */}
                <div className="w-full h-52 flex justify-center items-center">
                  <Image
                    src={`${getImageUrl}/${product.images?.[0]}`}
                    alt={product.name}
                    width={1200}
                    height={1200}
                    className="object-contain max-h-full"
                  />
                </div>

                {/* Product Info */}
                <div className="px-3 text-wrap -mt-3.5">
                  <h3 className="text-xl font-medium text-gray-800 mb-1.5 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold text-base">
                      ${product.basePrice.toFixed(2)}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ${product.basePrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          ref={navigationPrevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-3 rounded-full shadow-lg z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          ref={navigationNextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-3 rounded-full shadow-lg z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* CSS for RTL styling */}
      <style jsx global>{`
        /* Ensure RTL works properly */
        .product-swiper.swiper-rtl .swiper-wrapper {
          flex-direction: row-reverse;
        }

        /* Custom navigation button styles */
        .product-swiper .swiper-button-prev,
        .product-swiper .swiper-button-next {
          color: #333;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .product-swiper .swiper-button-prev:after,
        .product-swiper .swiper-button-next:after {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default TrendingProduct;
