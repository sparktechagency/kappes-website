"use client";
import { useState } from "react";
import { MapPin, Phone, ArrowUpDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const searchResults = [
  {
    id: 1,
    name: "Fresh Painting",
    brandLogo: "/assets/tradesAndServies/freshPaint.png",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 2,
    name: "Fresh Painting",
    brandLogo: "/assets/tradesAndServies/freshPaint.png",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 3,
    name: "Fresh Painting",
    brandLogo: "/assets/tradesAndServies/freshPaint.png",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 4,
    name: "Fresh Painting",
    brandLogo: "/assets/tradesAndServies/freshPaint.png",
    rating: 2,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 5,
    name: "Fresh Painting ",
    brandLogo: "/assets/tradesAndServies/freshPaint.png",
    rating: 0,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 6,
    name: "Fresh Painting",
    brandLogo: "/assets/tradesAndServies/freshPaint.png",
    rating: 4,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 7,
    name: "Fresh Painting",
    brandLogo: "/assets/tradesAndServies/freshPaint.png",
    rating: 2,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 8,
    name: "Fresh Painting",
    brandLogo: "/assets/tradesAndServies/freshPaint.png",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 9,
    name: "Fresh Painting",
    brandLogo: "/assets/tradesAndServies/freshPaint.png",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 10,
    name: "Fresh Painting",
    brandLogo: "/assets/tradesAndServies/freshPaint.png",
    rating: 1,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
];

// Star rating component
function StarRating({ rating }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
    </div>
  );
}

// Business card component
function BusinessCard({ business }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex gap-3">
        <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center overflow-hidden">
          <Image
            src={business.brandLogo}
            alt={business.name}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{business.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            <StarRating rating={business.rating} />
            <span className="text-sm text-gray-500 ml-2">
              ({business.reviews} reviews)
            </span>
          </div>
          <div className="bg-gray-300 inline-block px-2 py-1 rounded-md mt-1">
            <div className="text-sm text-gray-500">{business.service}</div>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>{business.location}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Phone className="h-4 w-4 text-gray-500" />
              <span>{business.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceList() {
  const [searchTerm, setSearchTerm] = useState("Dentist in Toronto");
  const [sortOrder, setSortOrder] = useState("desc"); // "desc" for highest first, "asc" for lowest first

  // Sort the results based on rating
  const sortedResults = [...searchResults].sort((a, b) => {
    if (sortOrder === "desc") {
      return b.rating - a.rating;
    } else {
      return a.rating - b.rating;
    }
  });

  // Toggle sort order
  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
  };

  return (
    <div className="w-full mx-auto px-4 lg:px-32">
      {/* Search header */}

      <div className="flex justify-between mt-4 mb-6">
        <div className="flex-1 text-2xl font-bold">{searchTerm}</div>
        <div className="flex gap-3">
          <button
            onClick={handleSortToggle}
            className="inline-flex items-center px-3 py-2 text-sm border rounded-md hover:bg-gray-50 cursor-pointer"
          >
            <ArrowUpDown className="mr-2 h-4 w-4" />
            Sort by Rating (
            {sortOrder === "desc" ? "High to Low" : "Low to High"})
          </button>
        </div>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {sortedResults.map((business) => (
          <Link
            href={`/trades-&-services/services/${business.id}`}
            key={business.id}
          >
            <BusinessCard business={business} />
          </Link>
        ))}
      </div>
    </div>
  );
}
