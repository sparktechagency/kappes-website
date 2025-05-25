"use server";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import Image from "next/image";

function ReviewAndFeedback() {
  // Review data
  const reviewSummary = {
    average: 4.9,
    total: 320,
    distribution: [
      { stars: 5, count: 150 },
      { stars: 4, count: 150 },
      { stars: 3, count: 20 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ],
  };

  const reviews = [
    {
      id: 1,
      author: "Randy Orton",
      date: "2 Feb 2025",
      rating: 4,
      content:
        "I took this bag on my recent vacation, and I couldn't be happier with it! It's sturdy, yet lightweight, and has enough compartments to keep all my belongings organized. The material feels high-quality, and it's comfortable to carry, even when it's fully packed. The size is perfect for both carry-on and checked luggage. It also holds up well in different weather conditions. Definitely a must-have for frequent travelers!",
      images: ["/assets/productPage/bag2.png", "/assets/productPage/bag3.png"],
    },
    {
      id: 2,
      author: "Randy Orton",
      date: "2 Feb 2025",
      rating: 5,
      content:
        "I bought this bag for my trip, and it worked perfectly! It's durable, spacious, and easy to carry. The compartments keep everything organized, and the straps are comfortable. Perfect for both short and long trips. Highly recommend!",
      images: ["/assets/productPage/bag3.png", "/assets/productPage/bag4.png"],
    },
    {
      id: 3,
      author: "Randy Orton",
      date: "2 Feb 2025",
      rating: 4,
      content:
        "I bought this bag for my trip, and it worked perfectly! It's durable, spacious, and easy to carry. The compartments keep everything organized, and the straps are comfortable. Perfect for both short and long trips. Highly recommend!",
      images: ["/assets/productPage/bag2.png", "/assets/productPage/bag3.png"],
    },
    {
      id: 4,
      author: "Randy Orton",
      date: "2 Feb 2025",
      rating: 4,
      content:
        "I bought this bag for my trip, and it worked perfectly! It's durable, spacious, and easy to carry. The compartments keep everything organized, and the straps are comfortable. Perfect for both short and long trips. Highly recommend!",
      images: ["/assets/productPage/bag2.png", "/assets/productPage/bag3.png"],
    },
  ];

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
                    value={(item.count / reviewSummary.total) * 100}
                    className="h-2 flex-1"
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
            <Card key={review.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className="font-medium">{review.author}</div>
                  </div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>

                <div className="flex mb-3">
                  <StarRating rating={review.rating} />
                </div>

                <p className="text-gray-700 mb-4">{review.content}</p>

                {review.images && review.images.length > 0 && (
                  <div className="flex gap-2 mt-3">
                    {review.images.map((image, index) => (
                      <div
                        key={index}
                        className="w-16 h-16 rounded overflow-hidden border border-gray-200"
                      >
                        <Image
                          src={image}
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
