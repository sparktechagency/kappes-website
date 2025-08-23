"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewAndFeedback from "./reviewAndFeedback";
import useProductDetails from "@/hooks/useProductDetails";

function DescriptionReview() {
  const { productDetails, isLoading } = useProductDetails();

  return (
    <div className="px-4 lg:px-32">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-red-700">
          <TabsTrigger
            value="description"
            className="data-[state=active]:text-black data-[state=inactive]:text-white"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="review"
            className="data-[state=active]:text-black data-[state=inactive]:text-white"
          >
            Review ({productDetails?.totalReviews || 0})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <ProductDescription
            description={productDetails?.description}
            isLoading={isLoading}
          />
        </TabsContent>
        <TabsContent value="review">
          <ReviewAndFeedback />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default DescriptionReview;

const ProductDescription = ({ description, isLoading }) => {
  if (isLoading) {
    return (
      <div className="p-4 w-full">
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-4 w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-2/3"></div>
      </div>
    );
  }

  return (
    <div className="p-4 w-full">
      <h2 className="text-lg font-semibold">Product Description</h2>
      <div className="mt-2 text-gray-700">
        {description ? (
          <>
            <p>{description}</p>

            <div className="mt-4">
              <h3 className="font-medium mb-2">Features:</h3>
              <ul className="list-disc list-inside">
                <li>High quality materials</li>
                <li>Carefully crafted design</li>
                <li>Long-lasting durability</li>
              </ul>
            </div>
          </>
        ) : (
          <p>No description available for this product.</p>
        )}
      </div>
    </div>
  );
};
