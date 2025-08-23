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

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../features/productSlice";
import { useGetShopProductsQuery } from "@/redux/productApi/productApi";
import { getImageUrl } from "@/redux/baseUrl";

export default function ShopProductList({
  habdleFilterVisbile,
  filterVisible,
}) {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("featured");
  const { data, isLoading, error } = useGetShopProductsQuery();

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.product);

  const favoritesMap = favorites.reduce((acc, curr) => {
    acc[curr.id] = true;
    return acc;
  }, {});

  useEffect(() => {
    // Set products from API response when data is available
    if (data?.data?.result) {
      setProducts(data.data.result);
    }
  }, [data]);

  // Get lowest price from product variants or base price
  const getProductPrice = (product) => {
    if (!product) return 0;

    // If product has variants, find the lowest price
    if (
      product.product_variant_Details &&
      product.product_variant_Details.length > 0
    ) {
      const variantPrices = product.product_variant_Details.map(
        (variant) => variant.variantPrice
      );
      return Math.min(...variantPrices, product.basePrice);
    }

    // Otherwise return base price
    return product.basePrice;
  };

  // Check if product has a discounted price
  const hasDiscountedPrice = (product) => {
    if (!product || !product.product_variant_Details) return false;

    // Check if any variant price is less than base price
    return product.product_variant_Details.some(
      (variant) => variant.variantPrice < product.basePrice
    );
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

  const toggleFavorite = (product, e) => {
    e.stopPropagation();
    e.preventDefault();

    const productId = product._id || product.id;

    if (favoritesMap[productId]) {
      dispatch(removeFav(productId));
    } else {
      dispatch(
        addFav({
          ...product,
          id: productId,
          favourite: true,
        })
      );
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

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <p className="text-red-600 mb-4">Failed to load products</p>
            <p className="text-gray-500 text-sm">{error.toString()}</p>
          </div>
        </div>
      ) : products.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <p className="text-gray-500">No products available</p>
          </div>
        </div>
      ) : (
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
                {visibleItems.map((product) => {
                  const productPrice = getProductPrice(product);
                  const hasDiscount = hasDiscountedPrice(product);
                  const basePrice = product.basePrice;

                  return (
                    <div key={product._id} className="relative">
                      <Card className="border-2 p-0 w-full max-w-xs sm:max-w-sm md:max-w-md border-transparent rounded-lg overflow-hidden transition-all duration-200 hover:border-red-700">
                        <Link href={`/product-page/${product._id}`}>
                          <div className="cursor-pointer">
                            <div className="relative">
                              <div className="h-48 overflow-hidden relative">
                                {product.images && product.images.length > 0 ? (
                                  <Image
                                    src={`${getImageUrl}/${product.images[0]}`}
                                    alt={product.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                    <span className="text-gray-400">
                                      No image
                                    </span>
                                  </div>
                                )}
                              </div>

                              <div className="absolute top-2 left-2 flex flex-col gap-1">
                                {product.isRecommended && (
                                  <Badge className="bg-blue-500 hover:bg-blue-600">
                                    Recommended
                                  </Badge>
                                )}
                                {product.isFeatured && (
                                  <Badge className="bg-purple-500 hover:bg-purple-600">
                                    Featured
                                  </Badge>
                                )}
                                {hasDiscount && (
                                  <Badge className="bg-red-500 hover:bg-red-600">
                                    Sale
                                  </Badge>
                                )}
                              </div>

                              <button
                                className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-white transition-colors"
                                onClick={(e) => toggleFavorite(product, e)}
                                aria-label={
                                  favoritesMap[product._id]
                                    ? "Remove from favorites"
                                    : "Add to favorites"
                                }
                              >
                                <svg
                                  className={`w-6 h-6 ${
                                    favoritesMap[product._id]
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
                              <h3 className="font-medium text-lg truncate font-comfortaa my-1">
                                {product.name}
                              </h3>
                              <div className="flex items-center mt-0">
                                <div className="flex text-yellow-400">
                                  {[...Array(5)].map((_, i) => (
                                    <svg
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < Math.round(product.avg_rating || 0)
                                          ? "text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="text-gray-600 text-sm ml-1">
                                  ({product.totalReviews || 0})
                                </span>
                              </div>
                              <div className="mt-0 mb-2.5">
                                {hasDiscount ? (
                                  <div className="flex items-center gap-2">
                                    <p className="text-red-600 font-bold">
                                      ${productPrice.toFixed(2)}
                                    </p>
                                    <p className="text-gray-500 text-sm line-through">
                                      ${basePrice.toFixed(2)}
                                    </p>
                                  </div>
                                ) : (
                                  <p className="text-red-600 font-bold">
                                    ${basePrice.toFixed(2)}
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
      )}
    </div>
  );
}
