"use client";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { TbCircleX } from "react-icons/tb";
import { VscError } from "react-icons/vsc";

function SeeAllCategories() {
  const allCategories = [
    { id: 1, categoryName: "Clothing" },
    { id: 2, categoryName: "Footwear" },
    { id: 3, categoryName: "Food Products" },
    { id: 4, categoryName: "Beauty Products" },
    { id: 5, categoryName: "Self Care" },
    { id: 6, categoryName: "Furniture" },
    { id: 7, categoryName: "Electronics" },
    { id: 8, categoryName: "Books & Media" },
    { id: 9, categoryName: "Wellness" },
    { id: 10, categoryName: "Toys & Games" },
    { id: 11, categoryName: "Pet Supplies" },
    { id: 12, categoryName: "Sports" },
    { id: 13, categoryName: "Outdoors" },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedCategories.length === allCategories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(allCategories.map((cat) => cat.id));
    }
  };

  const isAllSelected = selectedCategories.length === allCategories.length;

  return (
    <div className="p-4 md:px-32">
      <h2 className="my-4 px-3 py-1 border-2   rounded-lg w-fit font-comfortaa font-bold">
        Categories
      </h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge
          className={`flex items-center gap-1 px-3 py-2 cursor-pointer ${
            isAllSelected ? "bg-kappes text-white" : "bg-gray-100 text-gray-600"
          }`}
          onClick={toggleAll}
        >
          <p>All</p>
          {isAllSelected && <TbCircleX className="w-4 h-4" />}
        </Badge>

        {allCategories.map((cat) => {
          const isSelected = selectedCategories.includes(cat.id);
          return (
            <Badge
              key={cat.id}
              className={`flex items-center gap-1 px-3 py-2 transition duration-200 cursor-pointer ${
                isSelected
                  ? "bg-kappes text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => toggleCategory(cat.id)}
            >
              <p>{cat.categoryName}</p>
              {isSelected && <VscError className="w-4 h-4" />}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}

export default SeeAllCategories;
