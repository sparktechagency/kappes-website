import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewAndFeedback from "./reviewAndFeedback";
function DescriptionReview() {
  return (
    <div>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="review">Review (320)</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <ProductDescription />
        </TabsContent>
        <TabsContent value="review">
          <ReviewAndFeedback />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default DescriptionReview;

const ProductDescription = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Product Description</h2>
      <p className="mt-2 text-gray-700">
        Premium graphic tee featuring original artwork on 100% organic cotton.
        Pre-shrunk fabric with reinforced stitching for durability.
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>100% organic cotton</li>
        <li>Screen-printed design</li>
        <li>Made in Canada</li>
      </ul>
    </div>
  );
};
