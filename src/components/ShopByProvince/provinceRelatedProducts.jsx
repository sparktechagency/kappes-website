"use client";
import useVirtualizedList from "@/hooks/VirtualizedList";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiFilter } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import product from "../../../Data/product.json";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../features/productSlice";

export default function ProvinceRelatedProducts({
  habdleFilterVisbile,
  filterVisible,
}) {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("featured");

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.product);

  const favoritesMap = favorites.reduce((acc, curr) => {
    acc[curr.id] = true;
    return acc;
  }, {});

  useEffect(() => {
    setProducts(product);
  }, []);

  const getDiscountedPrice = (item) => {
    if (!item.discountPrice[0]) return item.originalPrice;
    const [hasDiscount, discountType, discountValue] = item.discountPrice;
    if (!hasDiscount) return item.originalPrice;
    if (discountType === "percent") {
      return item.originalPrice * (1 - discountValue / 100);
    } else if (discountType === "price") {
      return item.originalPrice - discountValue;
    }
    return item.originalPrice;
  };

  const ITEM_HEIGHT = 300;
  const COLUMN_COUNT = 4;
  const OVERSCAN = 5;

  const { containerRef, visibleItems, totalHeight, offsetY } =
    useVirtualizedList(products, ITEM_HEIGHT, OVERSCAN, COLUMN_COUNT);

  const StarRating = ({ rating }) => (
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

  const toggleFavorite = (productItem, e) => {
    e.stopPropagation();
    e.preventDefault();

    if (favoritesMap[productItem.id]) {
      dispatch(removeFav(productItem.id));
    } else {
      dispatch(addFav({ ...productItem, favourite: true }));
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="sticky top-0 z-10 bg-white flex items-center justify-between p-4 border-b flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={habdleFilterVisbile}
            className={`relative ${filterVisible ? "ring-2 ring-red-400" : ""}`}
          >
            <FiFilter
              className={`${filterVisible ? "text-red-400" : "text-green-400"}`}
            />
            {filterVisible && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></span>
            )}
          </Button>
          <span className="text-sm text-gray-500 hidden sm:inline">
            Filter Products ({products.length} items)
          </span>
        </div>

        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort Options</SelectLabel>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div
        ref={containerRef}
        className="relative overflow-auto w-full"
        style={{ height: "calc(100vh - 73px)", minHeight: "400px" }}
      >
        <div className="relative" style={{ height: `${totalHeight}px` }}>
          <div
            className="absolute left-0 right-0"
            style={{ transform: `translateY(${offsetY}px)` }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
              {visibleItems.map((productItem) => {
                const discountedPrice = getDiscountedPrice(productItem);
                const hasDiscount = productItem.discountPrice[0];

                return (
                  <div key={productItem.id} className="relative">
                    <Card className="border-2 p-0 w-full max-w-xs sm:max-w-sm md:max-w-md border-transparent rounded-lg overflow-hidden transition-all duration-200 hover:border-red-700">
                      <Link
                        href={{
                          pathname: `/product-page/${productItem.id}`,
                          query: {
                            productData: JSON.stringify(productItem),
                          },
                        }}
                      >
                        <div
                          className="cursor-pointer"
                          onClick={() =>
                            console.log("Clicked product:", productItem)
                          }
                        >
                          <div className="relative">
                            <div className="h-48 overflow-hidden relative">
                              <Image
                                src={
                                  productItem.productImage[0] ||
                                  "/assets/bag.png"
                                }
                                alt={productItem.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              />
                            </div>

                            <div className="absolute top-2 left-2 flex flex-col gap-1">
                              {productItem.promoteBadge.includes("new") && (
                                <Badge className="bg-blue-500 hover:bg-blue-600">
                                  New
                                </Badge>
                              )}
                              {productItem.promoteBadge.includes("sale") && (
                                <Badge className="bg-red-500 hover:bg-red-600">
                                  Sale
                                </Badge>
                              )}
                            </div>

                            <button
                              className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-white transition-colors"
                              onClick={(e) => toggleFavorite(productItem, e)}
                              aria-label={
                                favoritesMap[productItem.id]
                                  ? "Remove from favorites"
                                  : "Add to favorites"
                              }
                            >
                              <svg
                                className={`w-6 h-6 ${
                                  favoritesMap[productItem.id]
                                    ? "text-red-500 fill-red-500"
                                    : "text-gray-100"
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

                          <CardContent>
                            <h3 className="font-medium text-lg truncate">
                              {productItem.name}
                            </h3>
                            <div className="flex items-center mt-0">
                              <StarRating rating={productItem.rating} />
                              <span className="text-gray-600 text-sm ml-1">
                                ({productItem.reviews})
                              </span>
                            </div>
                            <div className="mt-0 mb-2.5">
                              {hasDiscount ? (
                                <div className="flex items-center gap-2">
                                  <p className="text-red-600 font-bold">
                                    ${discountedPrice.toFixed(2)}
                                  </p>
                                  <p className="text-gray-500 text-sm line-through">
                                    ${productItem.originalPrice}
                                  </p>
                                </div>
                              ) : (
                                <p className="text-red-600 font-bold">
                                  ${productItem.originalPrice}
                                </p>
                              )}
                            </div>
                          </CardContent>
                        </div>
                      </Link>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
