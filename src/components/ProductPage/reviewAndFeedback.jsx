"use client";
import React, { useEffect, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import Image from "next/image";
import useProductReviews from "@/hooks/useProductReviews";
import { getImageUrl } from "@/redux/baseUrl";

function ReviewAndFeedback() {
  const { reviews, isLoading, error } = useProductReviews();

  // Calculate review summary from actual reviews
  const reviewSummary = useMemo(() => {
    if (!reviews || reviews.length === 0) {
      return {
        average: 0,
        total: 0,
        distribution: [
          { stars: 5, count: 0 },
          { stars: 4, count: 0 },
          { stars: 3, count: 0 },
          { stars: 2, count: 0 },
          { stars: 1, count: 0 },
        ],
      };
    }

    // Calculate average rating
    const total = reviews.length;
    const sumRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
    const average = total > 0 ? sumRatings / total : 0;

    // Calculate distribution
    const distribution = [
      { stars: 5, count: 0 },
      { stars: 4, count: 0 },
      { stars: 3, count: 0 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ];

    reviews.forEach((review) => {
      const rating = Math.round(review.rating);
      const index = 5 - rating;
      if (index >= 0 && index < 5) {
        distribution[index].count++;
      }
    });

    return {
      average: parseFloat(average.toFixed(1)),
      total,
      distribution,
    };
  }, [reviews]);

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <p className="text-red-600 mb-4">Failed to load reviews</p>
            <p className="text-gray-500 text-sm">{error.toString()}</p>
          </div>
        </div>
      </div>
    );
  }

  // No reviews state
  if (!reviews || reviews.length === 0) {
    return (
      <div className="w-full mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <p className="text-gray-500">
              No reviews available for this product
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Be the first to leave a review!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Rating Summary */}
        <div className="col-span-1">
          <div className="flex flex-col items-start">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold">
                {reviewSummary.average}
              </span>
              <span className="text-xl text-gray-500 ml-1">/5</span>
            </div>

            <div className="flex text-yellow-400 my-2">
              <StarRating rating={Math.round(reviewSummary.average)} />
            </div>

            <div className="text-sm text-gray-500 mb-4">
              {reviewSummary.total} Reviews
            </div>

            {/* Rating Distribution */}
            <div className="w-full space-y-2">
              {reviewSummary.distribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <span className="w-3">{item.stars}</span>
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Progress
                    value={(item.count / (reviewSummary.total || 1)) * 100}
                    className="h-2 flex-1 inset-shadow-sm inset-shadow-white"
                  />
                  <span className="text-sm text-gray-500 w-8">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          {reviews.map((review) => (
            <Card key={review._id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className="font-medium">
                      {review.customer?.full_name || "Anonymous"}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDate(review.createdAt)}
                  </div>
                </div>

                <div className="flex mb-3">
                  <StarRating rating={review.rating} />
                </div>

                <p className="text-gray-700 mb-4">{review.comment}</p>

                {review.images && review.images.length > 0 && (
                  <div className="flex gap-2 mt-3">
                    {review.images.map((image, index) => (
                      <div
                        key={index}
                        className="w-16 h-16 rounded overflow-hidden border border-gray-200"
                      >
                        <Image
                          src={`${getImageUrl}${image}`}
                          alt={`Review image ${index + 1}`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewAndFeedback;
