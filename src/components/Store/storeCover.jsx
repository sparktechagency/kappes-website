"use client";
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const StoreCover = () => {
  const [following, setFollowing] = useState(false);

  return (
    <div className="w-full  mx-auto overflow-hidden">
      {/* Banner Image */}
      <div className="relative h-40 md:h-52 lg:h-64 w-full bg-gray-200 overflow-hidden">
        <Image
          src="/assets/storeFront/storeCover3.png"
          width={5000}
          height={5000}
          alt="Mountain landscape with fog"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6">
        {/* Profile Avatar */}
        <div className="relative -mt-16 md:-mt-20 flex-shrink-0 mb-4 md:mb-0">
          {/* <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white bg-white"> */}
          <div className="flex items-center justify-center h-full w-full  text-white">
            <Image
              src="/assets/storeFront/storeLogo1.png"
              width={1000}
              height={1000}
              alt="storeLogo"
              className="w-24 h-24 border-2 rounded-lg"
            />
          </div>
          {/* </Avatar> */}
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-4 md:ml-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Peak</h2>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-1">
                  (320 reviews)
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">1k Followers</p>
            </div>

            <div className="flex gap-2 mt-2 md:mt-0">
              <Link href="/chat/454">
                <Button
                  variant="outline"
                  className="flex-1 md:flex-none bg-green-500 hover:bg-green-600 text-white border-none"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message
                </Button>
              </Link>

              <Button
                variant={following ? "outline" : "default"}
                className={`flex-1 md:flex-none ${
                  following ? "border-gray-300" : ""
                }`}
                onClick={() => setFollowing(!following)}
              >
                {following ? "Following" : "Follow"}
              </Button>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-medium mb-2">About us</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Peak Apparel offers stylish, high-quality t-shirts that blend
              comfort and urban fashion. Perfect for everyday wear, our designs
              help you express your unique personality and stay ahead of the
              trend. Each shirt is made with premium fabrics that offer a
              perfect balance of softness and durability, ensuring you look good
              and feel great all day long.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCover;
