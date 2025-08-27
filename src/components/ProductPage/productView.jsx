"use client";
import React, { useEffect } from "react";
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
import useProductVariantSelection from "@/hooks/useProductVariantSelection";
import useProductSlug from "@/hooks/useProductSlug";
import { getImageUrl } from "@/redux/baseUrl";
import ProductSpecs from "./ProductSpecs";
import { isProductInStock } from "@/utils/productUtils";
import { useRouter } from "next/navigation";

function ProductView() {
  const dispatch = useDispatch();
  const router = useRouter();
  // Get chat state from Redux
  const { unreadCount } = useSelector((state) => state.chat);

  // Use our custom hooks to get product details
  const { productDetails, isLoading, error } = useProductDetails();

  // Use variant selection hook
  const {
    // State setters
    setSelectedColor,
    setSelectedStorage,
    setSelectedRam,
    setSelectedSize,
    setMainImage,
    setQuantity,

    // State values
    selectedColor,
    selectedStorage,
    selectedRam,
    selectedSize,
    selectedVariant,
    mainImage,
    quantity,

    // Derived values
    availableVariants,
    availableSizesForColor,
    productImages,
    pricing,
    stockStatus,

    // Methods
    initializeVariantSelection,
    updateSelectedVariant,
    updateSizeForColor,
  } = useProductVariantSelection(productDetails);

  // Use product slug hook
  const { slugDetails, isValidVariantSlug, isVariantAvailable } =
    useProductSlug(productDetails, selectedVariant);

  // Initialize variant selection when product details load
  useEffect(() => {
    if (productDetails) {
      initializeVariantSelection();
    }
  }, [productDetails, initializeVariantSelection]);

  // Update selected variant when specifications change
  useEffect(() => {
    updateSelectedVariant();
  }, [
    selectedColor,
    selectedStorage,
    selectedRam,
    selectedSize,
    updateSelectedVariant,
  ]);

  // Update size when color changes
  useEffect(() => {
    updateSizeForColor();
  }, [selectedColor, updateSizeForColor]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    if (!productDetails) return;

    const cartItem = {
      id: productDetails._id || productDetails.id,
      productName: productDetails.name,
      quantity,
      price: selectedVariant
        ? selectedVariant.variantPrice
        : productDetails.basePrice,
      productImage: productImages[0] || "/assets/productPage/bag1.png",
      variantId: selectedVariant?.variantId?._id,
      variantSpecs: selectedVariant
        ? {
            color: selectedVariant.variantId.color?.name,
            storage: selectedVariant.variantId.storage,
            ram: selectedVariant.variantId.ram,
            size: selectedVariant.variantId.size,
          }
        : {},
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
                ${pricing.currentPrice.toFixed(2)}
              </span>
              {pricing.hasDiscount && (
                <span className="text-gray-500 line-through">
                  ${pricing.originalPrice.toFixed(2)}
                </span>
              )}
              {pricing.hasDiscount && (
                <Badge variant="destructive" className="text-xs">
                  -{pricing.discountPercentage}%
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <p className="text-sm text-gray-600">{stockStatus}</p>
            </div>

            {/* Variant Availability Warning */}
            {(!isValidVariantSlug || !isVariantAvailable) && (
              <div
                className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4"
                role="alert"
              >
                <p className="font-bold">Variant Unavailable</p>
                <p>
                  {!isValidVariantSlug &&
                    "This product variant configuration is not valid. "}
                  {!isVariantAvailable &&
                    "This variant is currently out of stock. "}
                  Please select a different variant or check back later.
                </p>
              </div>
            )}

            {/* Color Selection */}
            {availableVariants.color && availableVariants.color.length > 0 && (
              <div className="mb-6">
                <p className="font-semibold mb-2">Color:</p>
                <div className="flex gap-2">
                  {availableVariants.color.map((color) => (
                    <button
                      key={color.code}
                      className={`w-8 h-8 rounded-full ${
                        selectedColor === color.code.replace("#", "")
                          ? "ring-2 ring-offset-2 ring-black"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedColor(color.code.replace("#", ""))
                      }
                      style={{ backgroundColor: color.code }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Storage Selection */}
            {availableVariants.storage &&
              availableVariants.storage.length > 0 && (
                <div className="mb-6">
                  <p className="font-semibold mb-2">Storage:</p>
                  <div className="flex gap-2">
                    {availableVariants.storage.map((storage) => (
                      <Button
                        key={storage}
                        variant={
                          selectedStorage === storage ? "default" : "outline"
                        }
                        className={`${
                          selectedStorage === storage
                            ? "bg-red-700 hover:bg-red-800"
                            : ""
                        }`}
                        onClick={() => setSelectedStorage(storage)}
                      >
                        {storage}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

            {/* RAM Selection */}
            {availableVariants.ram && availableVariants.ram.length > 0 && (
              <div className="mb-6">
                <p className="font-semibold mb-2">RAM:</p>
                <div className="flex gap-2">
                  {availableVariants.ram.map((ram) => (
                    <Button
                      key={ram}
                      variant={selectedRam === ram ? "default" : "outline"}
                      className={`${
                        selectedRam === ram ? "bg-red-700 hover:bg-red-800" : ""
                      }`}
                      onClick={() => setSelectedRam(ram)}
                    >
                      {ram}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {selectedColor && availableVariants.size && (
              <div className="mb-6">
                <p className="font-semibold mb-2">Size:</p>
                <div className="flex gap-2">
                  {availableSizesForColor.map((size) => (
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
                disabled={!isProductInStock(productDetails, selectedVariant)}
              >
                Add to Cart
              </Button>
              <Button
                className="flex-1 bg-red-700 hover:bg-red-800"
                disabled={!isProductInStock(productDetails, selectedVariant)}
                onClick={() => {
                  router.push("/check-out/billing-procedure");
                }}
              >
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

            {/* Product Specifications */}
            <ProductSpecs
              productDetails={productDetails}
              selectedVariant={selectedVariant}
            />

            <Card className="mb-6 mt-6">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
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
