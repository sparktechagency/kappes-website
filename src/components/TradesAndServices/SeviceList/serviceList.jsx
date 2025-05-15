"use client";
import { useState } from "react";
import { Search, MapPin, Phone, ArrowUpDown, Filter } from "lucide-react";

// Sample data
const searchResults = [
  {
    id: 1,
    name: "Fresh Painting",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 2,
    name: "Fresh Painting",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 3,
    name: "Fresh Painting",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 4,
    name: "Fresh Painting",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 5,
    name: "Fresh Painting",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 6,
    name: "Fresh Painting",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 7,
    name: "Fresh Painting",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 8,
    name: "Fresh Painting",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 9,
    name: "Fresh Painting",
    rating: 5,
    reviews: 320,
    service: "Home Service",
    location: "Edmonton, Alberta, Canada",
    phone: "1-(780) 555-1234",
  },
  {
    id: 10,
    name: "Fresh Painting",
    rating: 5,
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
        <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center">
          <svg
            className="h-8 w-8 text-blue-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{business.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            <StarRating rating={business.rating} />
            <span className="text-sm text-gray-500 ml-2">
              ({business.reviews} reviews)
            </span>
          </div>
          <div className="text-sm text-gray-500 my-1">{business.service}</div>
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

  return (
    <div className="w-full  mx-auto px-4 py-6">
      {/* Search header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{searchTerm}</h1>

        <div className="flex justify-between mt-4">
          <div className="flex-1"></div>
          <div className="flex gap-3">
            <button className="inline-flex items-center px-3 py-2 text-sm border rounded-md hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </button>
            <button className="inline-flex items-center px-3 py-2 text-sm border rounded-md hover:bg-gray-50">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Sort
            </button>
          </div>
        </div>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
}
