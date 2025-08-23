"use client";
import React from "react";
import { Card } from "@/components/ui/card";

// This component displays product specifications based on available data in slugDetails
const ProductSpecs = ({ productDetails }) => {
  if (!productDetails?.slugDetails) {
    return null;
  }

  const slugDetails = productDetails.slugDetails;

  // Format the spec values for display
  const formatSpecValue = (key, value) => {
    // Format colors as color swatches with hex values
    if (key === "color") {
      return (
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full border border-gray-300"
            style={{ backgroundColor: `#${value}` }}
          />
          <span>#{value}</span>
        </div>
      );
    }

    // Format storage and RAM values
    if (key === "storage" || key === "ram") {
      return value.toUpperCase();
    }

    // Format network type (2g, 3g, 4g, 5g, etc.)
    if (key === "network_type") {
      return value.toUpperCase();
    }

    // Format operating systems with capitalized first letter
    if (key === "operating_system") {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    // Format sizes properly
    if (key === "size") {
      return value.toUpperCase();
    }

    // Default formatting (capitalize first letter)
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  // Human-readable labels for each spec type
  const specLabels = {
    color: "Color",
    size: "Size",
    storage: "Storage",
    ram: "RAM",
    network_type: "Network",
    operating_system: "OS",
    weight: "Weight",
    material: "Material",
    dimensions: "Dimensions",
    resolution: "Resolution",
  };

  // Filter out category and subcategory from specs display
  const displayableSpecs = Object.entries(slugDetails).filter(
    ([key]) => !["categoryId", "subCategoryId"].includes(key)
  );

  if (displayableSpecs.length === 0) {
    return null;
  }

  return (
    <Card className="p-4 mt-6">
      <h3 className="font-bold text-lg mb-4">Specifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayableSpecs.map(([key, values]) => (
          <div key={key} className="flex gap-2">
            <span className="font-medium min-w-[100px]">
              {specLabels[key] ||
                key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ")}
              :
            </span>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(values) &&
                values.map((value, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 rounded text-sm"
                  >
                    {formatSpecValue(key, value)}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProductSpecs;
