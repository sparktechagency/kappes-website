"use client";
import useVirtualizedList from "@/hooks/VirtualizedList";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiFilter } from "react-icons/fi";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";

export default function ShopProductList({
  habdleFilterVisbile,
  filterVisible,
}) {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});

  // Generate 1000 backpack products
  useEffect(() => {
    const generateProducts = () => {
      const newProducts = [];
      for (let i = 0; i < 1000; i++) {
        newProducts.push({
          id: i,
          name: "Adventure Ready Backpack",
          price: 89.99,
          reviews: 320,
          rating: 5,
        });
      }
      setProducts(newProducts);
    };

    generateProducts();
  }, []);

  // Set up virtualization
  const ITEM_HEIGHT = 300; // Height of each card
  const COLUMN_COUNT = 4; // Number of columns
  const OVERSCAN = 5; // Number of extra rows to render

  const {
    containerRef,
    visibleItems,
    totalHeight,
    offsetY,
    startIndex,
    columnCount,
  } = useVirtualizedList(products, ITEM_HEIGHT, OVERSCAN, COLUMN_COUNT);

  // Render star rating
  const StarRating = ({ rating }) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-col w-full">
      {/* Head component fixed at top */}
      <div className="flex items-start justify-between p-4 mb-2">
        <Button onClick={habdleFilterVisbile}>
          <FiFilter
            className={`${filterVisible ? "text-red-400" : "text-green-400"}`}
          />
        </Button>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Virtualized product list */}
      <div
        ref={containerRef}
        className="relative overflow-auto w-full"
        style={{ height: "calc(100vh - 60px)" }} // Adjusted height to account for header
      >
        {/* Container that creates space for all items */}
        <div className="relative" style={{ height: `${totalHeight}px` }}>
          {/* Only render visible items */}
          <div
            className="absolute left-0 right-0"
            style={{ transform: `translateY(${offsetY}px)` }}
          >
            <div className="grid grid-cols-4 gap-4 p-4">
              {visibleItems.map((product) => (
                <div
                  key={product.id}
                  className="border-2 border-transparent rounded-lg p-4 flex flex-col bg-white shadow-sm hover:border-2 hover:border-red-700"
                >
                  <div className="relative">
                    <div className="h-48 mb-4 rounded-md overflow-hidden">
                      <Image
                        src="/assets/bag.png"
                        alt="Adventure Ready Backpack"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <button
                      className="absolute top-2 right-2 p-1"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <svg
                        className={`w-6 h-6 ${
                          favorites[product.id]
                            ? "text-red-500 fill-red-500"
                            : "text-gray-400"
                        }`}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <div className="flex items-center mt-1">
                    <StarRating rating={product.rating} />
                    <span className="text-gray-600 text-sm ml-1">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-red-600 font-bold mt-1">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
