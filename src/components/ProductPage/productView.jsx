"use client";
import React, { useState, useEffect } from "react";
import { Heart, Minus, Plus, MessageCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { addCart } from "@/features/cartSlice";
import { openChat } from "@/features/chatSlice";
import provideIcon from "@/common/components/provideIcon";
import Link from "next/link";
import useProductDetails from "@/hooks/useProductDetails";
import { getImageUrl } from "@/redux/baseUrl";

function ProductView() {
  const dispatch = useDispatch();

  // Get chat state from Redux
  const { unreadCount } = useSelector((state) => state.chat);

  // Use our custom hook to get product details
  const { productDetails, isLoading, error } = useProductDetails();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [mainImage, setMainImage] = useState(0);

  // Set initial selections when product data is loaded
  useEffect(() => {
    if (productDetails) {
      console.log("Product details loaded:", productDetails);

      // Check for size variations
      if (productDetails.slugDetails?.size?.length > 0) {
        setSelectedSize(productDetails.slugDetails.size[0].toUpperCase());
      }

      // Check for color variations
      if (productDetails.slugDetails?.color?.length > 0) {
        setSelectedColor(productDetails.slugDetails.color[0]);
      }
    }
  }, [productDetails]);

  const getDiscountedPrice = (item) => {
    if (!item || !item.discountPrice[0]) return item?.originalPrice || 0;
    const [hasDiscount, discountType, discountValue] = item.discountPrice;
    if (!hasDiscount) return item.originalPrice;

    if (discountType === "percent") {
      return item.originalPrice * (1 - discountValue / 100);
    } else if (discountType === "price") {
      return item.originalPrice - discountValue;
    }
    return item.originalPrice;
  };

  const getColorName = (hexColor) => {
    const colorMap = {
      "#f3b000": "yellow",
      "#99a1ae": "gray",
      "#008338": "green",
      "#ea000b": "red",
      "#9f0713": "maroon",
    };
    return colorMap[hexColor] || "gray";
  };

  const getColorClass = (hexColor, isSelected = false) => {
    const colorName = getColorName(hexColor);
    const colorClasses = {
      yellow: "bg-yellow-500",
      gray: "bg-gray-400",
      green: "bg-green-700",
      red: "bg-red-600",
      maroon: "bg-red-800",
    };

    let className = colorClasses[colorName] || "bg-gray-400";
    if (isSelected && colorName === "yellow") {
      className += " border-2 border-black";
    }
    return className;
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (!productDetails) return;

    const cartItem = {
      id: productDetails._id || productDetails.id,
      productName: productDetails.name,
      quantity,
      price: productDetails.basePrice,
      productImage:
        productDetails.images?.[0] || "/assets/productPage/bag1.png",
      size: selectedSize,
      color: selectedColor,
    };

    dispatch(addCart(cartItem));
  };

  const handleOpenChat = () => {
    // Use shop info from product if available
    const sellerInfo = {
      name: productDetails?.shopId?.name || "Shop",
      location: "Canada",
      id: productDetails?.shopId?.id || productDetails?.shopId?._id || "shop",
    };
    dispatch(openChat(sellerInfo));
  };

  if (isLoading || !productDetails) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="text-center py-12">
          <h1 className="text-2xl">Loading product...</h1>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mt-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="text-center py-12">
          <h1 className="text-2xl text-red-600">Error loading product</h1>
          <p className="mt-2">{error.toString()}</p>
        </div>
      </div>
    );
  }

  // Get available product variations from slugDetails
  const productImages = productDetails.images || [
    "/assets/productPage/bag1.png",
  ];

  // Extract size variations if available
  const availableSizes = productDetails.slugDetails?.size
    ? productDetails.slugDetails.size
        .filter((size) => size !== "")
        .map((size) => size.toUpperCase())
    : [];

  // Extract color variations if available
  const availableColors = productDetails.slugDetails?.color || [];

  // Seller info for chat
  const sellerInfo = {
    name: "Peak",
    location: "Canada",
    id: "4545",
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-14">
          {/* Left - Images */}
          <div className="w-full md:w-1/2">
            <div className="relative mb-4 bg-gray-50 rounded-lg overflow-hidden">
              <Image
                width={500}
                height={500}
                src={`${getImageUrl}/${productImages[mainImage]}`}
                alt={productDetails.name}
                className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] object-contain transition-transform duration-300 hover:scale-110"
                priority
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white"
              >
                <Heart
                  fill={productDetails.isFeatured ? "red" : "none"}
                  size={25}
                />
              </Button>
            </div>

            <div className="flex justify-between overflow-x-auto border-2 rounded-2xl p-3 h-30">
              {productImages.slice(0, 4).map((image, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`p-0 rounded-md overflow-hidden h-full ${
                    mainImage === index
                      ? "ring-2 ring-red-600"
                      : "ring-1 ring-gray-200"
                  }`}
                  onClick={() => setMainImage(index)}
                >
                  <Image
                    src={`${getImageUrl}/${image}`}
                    alt={`Thumbnail ${index + 1}`}
                    width={500}
                    height={500}
                    className="w-auto h-full object-cover"
                  />
                </Button>
              ))}
            </div>
          </div>

          {/* Right - Info */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold mb-2 font-comfortaa">
                {productDetails.name}
              </h1>
              <span className="flex items-center gap-2 text-lg font-comfortaa font-bold cursor-pointer">
                {provideIcon({ name: "share" })}Share
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>{productDetails.avg_rating || 0}</span>
              </div>
              <span className="text-gray-500">
                ({productDetails.totalReviews || 0})
              </span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-red-600">
                ${productDetails.basePrice?.toFixed(2)}
              </span>
              {productDetails.product_variant_Details?.[0]?.variantPrice >
                productDetails.basePrice && (
                <span className="text-gray-500 line-through">
                  $
                  {productDetails.product_variant_Details[0].variantPrice.toFixed(
                    2
                  )}
                </span>
              )}
            </div>

            {availableSizes.length > 0 && (
              <div className="mb-6">
                <p className="font-semibold mb-2">Size:</p>
                <div className="flex gap-2">
                  {availableSizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      className={`w-10 h-10 p-0 ${
                        selectedSize === size
                          ? "bg-red-700 hover:bg-red-800"
                          : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {availableColors.length > 0 && (
              <div className="mb-6">
                <p className="font-semibold mb-2">Color:</p>
                <div className="flex gap-2">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full ${getColorClass(
                        color,
                        selectedColor === color
                      )} ${
                        selectedColor === color
                          ? "ring-2 ring-offset-2 ring-black"
                          : ""
                      }`}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <p className="font-semibold mb-2">Quantity:</p>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-r-none h-8 w-8"
                  onClick={decreaseQuantity}
                >
                  <Minus size={16} />
                </Button>
                <div className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300">
                  {quantity}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-l-none h-8 w-8"
                  onClick={increaseQuantity}
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button className="flex-1 bg-red-700 hover:bg-red-800">
                Buy Now
              </Button>
            </div>

            <div className="mb-6">
              <div className="flex items-start gap-2 mb-2">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">Category:</span>{" "}
                  {productDetails.categoryId?.name || "Uncategorized"}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-bold">Tags:</span>
                  {productDetails.tags?.map((tag, index) => (
                    <Badge key={index} variant="outline" className="ml-1 mr-1">
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </Badge>
                  )) || "No tags"}
                </div>
              </div>
              {productDetails.brandId && (
                <div className="flex items-start gap-2 mt-2">
                  <span className="font-bold">•</span>
                  <div>
                    <span className="font-bold">Brand:</span>{" "}
                    {productDetails.brandId.name}
                  </div>
                </div>
              )}
            </div>

            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-800 text-white p-2 rounded-full">
                      <span className="text-xs">
                        {productDetails.shopId?.name
                          ?.substring(0, 2)
                          .toUpperCase() || "SH"}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold">
                        {productDetails.shopId?.name || "Shop"}
                      </p>
                      <p className="text-sm text-gray-500">Canada</p>
                    </div>
                  </div>
                  <Link
                    href={`/store/${
                      productDetails.shopId?._id ||
                      productDetails.shopId?.id ||
                      "shop"
                    }`}
                  >
                    <Button size="sm" className="bg-red-700 hover:bg-red-800">
                      Visit Store
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <Button
                variant="outline"
                className="w-full border-red-700 text-red-700 hover:bg-red-50"
                onClick={handleOpenChat}
              >
                <MessageCircle size={20} className="mr-2" />
                <span>Send Message to Seller</span>
              </Button>

              {/* Show notification dot if there are unread messages */}
              {unreadCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductView;
