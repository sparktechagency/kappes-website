"use client";
import React, { useState } from "react";
import { Heart, Minus, Plus, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function ProductView() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("yellow");
  const [mainImage, setMainImage] = useState(0);

  const productImages = [
    "/assets/productPage/bag1.png",
    "/assets/productPage/bag2.png",
    "/assets/productPage/bag3.png",
    "/assets/productPage/bag4.png",
    "/assets/productPage/bag11.png",
  ];

  const colors = [
    { name: "yellow", class: "bg-yellow-500 border-2 border-black" },
    { name: "gray", class: "bg-gray-400" },
    { name: "green", class: "bg-green-700" },
    { name: "red", class: "bg-red-600" },
    { name: "maroon", class: "bg-red-800" },
  ];

  const sizes = ["S", "M", "L", "XL"];

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Product Images */}
        <div className="w-full md:w-1/2">
          <div className="relative mb-4 bg-gray-50 rounded-lg overflow-hidden">
            <Image
              width={500}
              height={500}
              src={productImages[mainImage]}
              alt="Hiking Traveler Backpack"
              className="w-full h-auto object-contain"
              priority
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-red-500 hover:bg-transparent"
            >
              <Heart fill="red" size={24} />
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto">
            {[0, 1, 2, 3].map((index) => (
              <Button
                key={index}
                variant="ghost"
                className={`p-0 rounded-md overflow-hidden ${
                  mainImage === index
                    ? "ring-2 ring-red-600"
                    : "ring-1 ring-gray-200"
                }`}
                onClick={() => setMainImage(index)}
              >
                <Image
                  src={productImages[index + 1]}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"
                />
              </Button>
            ))}
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">Hiking Traveler Backpack</h1>

          {/* Ratings */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              <span>★</span>
              <span>4.9</span>
            </div>
            <span className="text-gray-500">(320)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold text-red-600">$149.99</span>
            <span className="text-gray-500 line-through">$159.99</span>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Size:</p>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  className={`w-10 h-10 p-0 ${
                    selectedSize === size ? "bg-red-700 hover:bg-red-800" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Color:</p>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full ${color.class} ${
                    selectedColor === color.name
                      ? "ring-2 ring-offset-2 ring-black"
                      : ""
                  }`}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
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

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <Button variant="outline" className="flex-1">
              Add to Cart
            </Button>
            <Button className="flex-1 bg-red-700 hover:bg-red-800">
              Buy Now
            </Button>
          </div>

          {/* Product Info */}
          <div className="mb-6">
            <div className="flex items-start gap-2 mb-2">
              <span className="font-bold">•</span>
              <div>
                <span className="font-bold">Category:</span> Outdoor
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <div>
                <span className="font-bold">Tags:</span>
                <Badge variant="outline" className="ml-1 mr-1">
                  Bag
                </Badge>
                <Badge variant="outline" className="mr-1">
                  Outdoor
                </Badge>
                <Badge variant="outline">Travel</Badge>
              </div>
            </div>
          </div>

          {/* Seller Info */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-800 text-white p-2 rounded-full">
                    <span className="text-xs">PEAK</span>
                  </div>
                  <div>
                    <p className="font-bold">Peak</p>
                    <p className="text-sm text-gray-500">Canada</p>
                  </div>
                </div>
                <Button size="sm" className="bg-red-700 hover:bg-red-800">
                  Visit Store
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Message Seller */}
          <Button
            variant="outline"
            className="w-full border-red-700 text-red-700 hover:bg-red-50"
          >
            <MessageCircle size={20} className="mr-2" />
            <span>Send Message to Seller</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
