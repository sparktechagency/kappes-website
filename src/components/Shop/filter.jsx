"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCategory,
  setPriceRange,
  setLocation,
  resetFilters,
} from "@/features/filterSlice";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

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

const territoryList = ["Yukon", "Northwest Territories", "Nunavut"];
const provinceList = [
  "British Columbia",
  "Alberta",
  "Manitoba",
  "Saskatchewan",
  "Ontario",
  "Quebec",
  "New Brunswick",
  "Nova Scotia",
  "Prince Edward Island",
  "Newfoundland",
];
const cityList = ["city1", "city2", "city3", "city4"];

function MultiSelect({ label, options, selected, setSelected }) {
  const toggleOption = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start bg-white text-left"
        >
          {selected.length > 0 ? selected.join(", ") : `Select ${label}`}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-h-60 overflow-y-auto">
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`${label}-${option}`}
                checked={selected.includes(option)}
                onCheckedChange={() => toggleOption(option)}
                className="data-[state=checked]:bg-red-700 data-[state=checked]:border-none"
              />
              <label
                htmlFor={`${label}-${option}`}
                className="text-sm font-medium leading-none"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function FilterContent() {
  const dispatch = useDispatch();
  const { selectedCategory, priceRangeLow, priceRangeHigh, location } =
    useSelector((state) => state.filter);

  const [checkedCategories, setCheckedCategories] = useState(selectedCategory);
  const [priceRange, setPriceRangeState] = useState([
    priceRangeLow,
    priceRangeHigh,
  ]);
  const [territory, setTerritory] = useState(location.territory || []);
  const [province, setProvince] = useState(location.province || []);
  const [city, setCity] = useState(location.city || []);

  useEffect(() => {
    dispatch(setPriceRange({ low: priceRange[0], high: priceRange[1] }));
  }, [priceRange]);

  useEffect(() => {
    dispatch(setSelectedCategory(checkedCategories));
  }, [checkedCategories]);

  useEffect(() => {
    dispatch(setLocation({ territory, province, city }));
  }, [territory, province, city]);

  const handleCategoryChange = (category) => {
    setCheckedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleReset = () => {
    setCheckedCategories([]);
    setPriceRangeState([0, 500]);
    setTerritory([]);
    setProvince([]);
    setCity([]);
    dispatch(resetFilters());
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Filter</h2>
        <Button
          variant="outline"
          onClick={handleReset}
          className="bg-gray-100 hover:bg-gray-200 rounded-full px-6"
        >
          Reset
        </Button>
      </div>
      <ScrollArea className="h-screen w-full mt-2 pr-4 flex flex-col gap-4">
        {/* Category Section */}
        <div className="h-full flex flex-col gap-4">
          <Card className="border shadow-sm">
            <CardContent className="pt-4">
              <Label className="text-base font-medium">Category</Label>
              <ScrollArea className="h-64 w-full mt-2 pr-4">
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        className="data-[state=checked]:bg-red-700 data-[state=checked]:border-none"
                        id={`category-${category}`}
                        checked={checkedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="text-sm font-medium leading-none"
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
                onValueChange={setPriceRangeState}
                min={0}
                max={500}
                step={10}
                minStepsBetweenThumbs={1}
                className="w-full "
              />
            </CardContent>
          </Card>

          {/* Location Section */}
          <Card className="border shadow-sm">
            <CardContent className="pt-4 space-y-3">
              <Label className="text-base font-medium">Location</Label>

              <MultiSelect
                label="Territory"
                options={territoryList}
                selected={territory}
                setSelected={setTerritory}
              />

              <MultiSelect
                label="Province"
                options={provinceList}
                selected={province}
                setSelected={setProvince}
              />

              <MultiSelect
                label="City"
                options={cityList}
                selected={city}
                setSelected={setCity}
              />
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}

function Filter({ filterVisible = true }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // Auto-open drawer on mobile when filterVisible becomes true
    const isMobile = window.innerWidth < 1024;
    if (isMobile && filterVisible) {
      setDrawerOpen(true);
    } else if (!filterVisible) {
      setDrawerOpen(false);
    }
  }, [filterVisible]);

  return (
    <>
      {/* Desktop View */}
      {filterVisible && (
        <div className="hidden lg:block w-60">
          <FilterContent />
        </div>
      )}

      {/* Mobile and Tablet View - Drawer only */}
      <div className="lg:hidden ">
        <Drawer direction="left" open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <div style={{ display: "none" }} />
          </DrawerTrigger>

          <DrawerContent className="h-full w-80 fixed inset-y-0 left-0 mt-0 rounded-none">
            <div className="p-4 overflow-y-auto max-h-full ">
              <FilterContent />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export default Filter;
