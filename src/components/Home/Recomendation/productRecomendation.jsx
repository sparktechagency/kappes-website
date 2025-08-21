"use client";
import React, { useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
import { Card } from "@/components/ui/card";
import Image from "next/image";
// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import useRecommendedProducts from "@/hooks/useRecommendedProducts";
import { incrementViewCount } from "@/features/productSlice/productsSlice";
import { useDispatch } from "react-redux";
import { getImageUrl } from "@/redux/baseUrl";
import provideIcon from "@/common/components/provideIcon";
import { addFav, removeFav, isFav } from "@/features/productSlice";
import { useRouter } from "next/navigation";

const ProductRecomendation = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { recommendedProducts, isLoading, error, hasProducts } =
    useRecommendedProducts();

  // Handle product click/view
  const handleProductView = (productId) => {
    dispatch(incrementViewCount(productId));
    router.push(`/product-page/${productId}`);
  };

  const handleHeartClick = (productId) => {
    if (isFav(productId)) {
      dispatch(removeFav(productId));
    } else {
      dispatch(addFav(productId));
    }
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="w-full px-4 py-16 lg:px-32">
        <div className="flex items-center justify-between pb-6">
          <h2 className="text-3xl font-extrabold font-comfortaa">
            Recommended for you
          </h2>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="w-full px-4 py-16 lg:px-32">
        <div className="flex items-center justify-between pb-6">
          <h2 className="text-3xl font-extrabold font-comfortaa">
            Recommended for you
          </h2>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <p className="text-red-600 mb-4">
              Failed to load recommended products
            </p>
            <p className="text-gray-500 text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Show empty state
  if (!hasProducts) {
    return (
      <div className="w-full px-4 py-16 lg:px-32">
        <div className="flex items-center justify-between pb-6">
          <h2 className="text-3xl font-extrabold font-comfortaa">
            Recommended for you
          </h2>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <p className="text-gray-500">No recommended products available</p>
            <p className="text-xs text-gray-400 mt-2">
              Array length: {recommendedProducts?.length || 0}
            </p>
            <p className="text-xs text-gray-400">
              Check console for debug info
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-16 lg:px-32">
      {/* Header */}
      <div className="flex items-center justify-between pb-6">
        <h2 className="text-3xl font-extrabold font-comfortaa">
          Recommended for you
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
            delay: 3000,
            disableOnInteraction: true,
            reverseDirection: true,
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
          {recommendedProducts.map((product) => (
            <SwiperSlide key={product._id || product.id}>
              <Card
                className="relative bg-white rounded-xl shadow-sm p-0 overflow-hidden h-80 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleProductView(product._id)}
              >
                {/* Heart Icon */}
                <div
                  className="absolute top-3 right-3 text-red-500 text-xl cursor-pointer hover:scale-110 transition-transform z-10"
                  onClick={() => handleHeartClick(product._id)}
                >
                  {isFav(product._id)
                    ? provideIcon({ name: "heart_black" })
                    : provideIcon({ name: "heart" })}
                </div>

                {/* Product Image */}
                <div className="w-full h-52 flex justify-center items-center">
                  <Image
                    src={`${getImageUrl}/${product.images?.[0]}`}
                    alt={product.name || "Product"}
                    width={1200}
                    height={1200}
                    className="object-contain max-h-full"
                    // onError={(e) => {
                    //   e.target.src = "/assets/recomendationProduct/bag.png";
                    // }}
                  />
                </div>

                {/* Product Info */}
                <div className="px-3 text-wrap -mt-3.5">
                  <h3 className="text-xl font-medium text-gray-800 mb-1.5 line-clamp-2">
                    {product.name || "Product Name"}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold text-base">
                      ${(product.basePrice || 0).toFixed(2)}
                    </span>
                    {product.product_variant_Details?.[0]?.variantPrice &&
                      product.product_variant_Details[0].variantPrice >
                        product.basePrice && (
                        <span className="text-gray-400 line-through text-sm">
                          $
                          {product.product_variant_Details[0].variantPrice.toFixed(
                            2
                          )}
                        </span>
                      )}
                  </div>
                  {/* Rating and additional info */}
                  <div className="flex items-center gap-2 mt-1">
                    {product.avg_rating > 0 && (
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">
                          {product.avg_rating.toFixed(1)}
                        </span>
                      </div>
                    )}
                    {product.totalReviews > 0 && (
                      <span className="text-xs text-gray-500">
                        ({product.totalReviews} reviews)
                      </span>
                    )}
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

export default ProductRecomendation;
