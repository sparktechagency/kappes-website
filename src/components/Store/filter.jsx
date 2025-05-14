"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "../ui/separator";

function Filter({ filterVisible = 1 }) {
  // Categories list based on the image
  const categories = [
    "Clothing",
    "Footwear",
    "Food Products",
    "Beauty Products",
    "Self Care",
    "Furniture",
    "Electronics",
    "Books & Media",
    "Wellness",
    "Toys & Games",
    "Pet Supplies",
    "Sports",
  ];

  // Price range state
  const [priceRange, setPriceRange] = useState([50, 200]);

  return (
    <>
      {filterVisible && (
        <div className="w-60 max-w-md space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Filter</h2>
            <Button
              variant="outline"
              className="bg-gray-100 hover:bg-gray-200 rounded-full px-6"
            >
              Reset
            </Button>
          </div>

          {/* Category Section */}
          <Card className="border shadow-sm">
            <CardContent className="pt-4">
              <Label className="text-base font-medium">Category</Label>

              <ScrollArea className="h-64 w-full mt-2 pr-4">
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category}`} />
                      <label
                        htmlFor={`category-${category}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Price Range Section */}
          <Card className="border shadow-sm">
            <CardContent className="pt-4 pb-6">
              <Label className="text-base font-medium">Price Range</Label>
              <div className="mt-2 mb-4">
                <div className="text-red-600 font-medium">
                  ${priceRange[0]} - ${priceRange[1]}
                </div>
              </div>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={0}
                max={500}
                step={10}
                minStepsBetweenThumbs={1}
                className="w-full"
                thumbClassName="bg-red-600 border-red-600"
                trackClassName="bg-red-600"
              />
            </CardContent>
          </Card>

          {/* Location Section */}
          <Card className="border shadow-sm">
            <CardContent className="pt-4 space-y-3">
              <Label className="text-base font-medium">Location</Label>

              <Select>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select Territory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="territory1">Territory 1</SelectItem>
                  <SelectItem value="territory2">Territory 2</SelectItem>
                  <SelectItem value="territory3">Territory 3</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select Province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="province1">Province 1</SelectItem>
                  <SelectItem value="province2">Province 2</SelectItem>
                  <SelectItem value="province3">Province 3</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city1">City 1</SelectItem>
                  <SelectItem value="city2">City 2</SelectItem>
                  <SelectItem value="city3">City 3</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}

export default Filter;
