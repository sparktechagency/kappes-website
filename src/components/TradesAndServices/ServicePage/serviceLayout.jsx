"use client";
import FrontCover from "@/common/components/frontCover";
import React from "react";
import ServicePromotion from "./servicePromotion";
import RightAside from "./rightAside";
import useService from "@/hooks/useService";
import { Star } from "lucide-react";

// Shadcn-style StarRating component
function StarRating({ rating, className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${
            index < Math.round(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-300 text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function ServiceLayout() {
  const { selectedService, isLoading, error } = useService();

  // If loading or no service found
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading service details...</p>
      </div>
    );
  }

  if (error || !selectedService) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <p>{error ? `Error: ${error}` : "Service not found"}</p>
      </div>
    );
  }

  // Destructure service details with fallbacks
  const {
    banner = "/assets/tradesAndServies/servicePromo.png",
    logo = "/assets/logo.png",
    name = "Service Name",
    totalReviews = 0,
    description = "No description available",
    avg_rating = 0,
  } = selectedService;

  return (
    <div className="px-4 lg:px-32">
      <FrontCover
        coverPhoto={banner}
        logo={logo}
        name={name}
        totalReviews={totalReviews}
        description={description}
        rating={<StarRating rating={avg_rating} className="mt-2" />}
      />
      <div className="flex flex-col md:flex md:flex-row md:gap-10 lg:gap-5 lg:px-0 md:justify-between justify-between">
        <ServicePromotion />
        <RightAside />
      </div>
    </div>
  );
}

export default ServiceLayout;
