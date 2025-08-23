import { useEffect, useState } from "react";
import { useGetReviewByProductIdQuery } from "@/redux/productApi/productApi";
import useProductDetails from "./useProductDetails";

const useProductReviews = () => {
  const { productDetails, productId } = useProductDetails();
  const [reviews, setReviews] = useState([]);
  const [reviewStats, setReviewStats] = useState({
    totalReviews: 0,
    averageRating: 0,
  });

  // Fetch reviews using the product ID
  const {
    data: reviewData,
    isLoading,
    error,
    refetch,
  } = useGetReviewByProductIdQuery(productId, {
    skip: !productId,
  });

  // Process review data when it arrives
  useEffect(() => {
    if (reviewData?.data?.result) {
      console.log("Review data received:", reviewData);

      const reviewResults = reviewData.data.result;
      setReviews(reviewResults);

      // Calculate stats
      if (reviewResults.length > 0) {
        const totalReviews = reviewResults.length;
        const sumRatings = reviewResults.reduce(
          (sum, review) => sum + review.rating,
          0
        );
        const averageRating = sumRatings / totalReviews;

        setReviewStats({
          totalReviews,
          averageRating,
        });
      }
    }
  }, [reviewData]);

  return {
    reviews,
    reviewStats,
    isLoading,
    error,
    refetch,
    productId,
  };
};

export default useProductReviews;
