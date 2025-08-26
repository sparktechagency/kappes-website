"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function SellerLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Card className="w-full h-full  bg-[#f7e8e5] w-[25rem]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-red-700">
          Welcome to the Canuck Mall
        </CardTitle>
        <p className="text-center text-gray-600 text-sm font-semibold">
          Create a seller account today to be part of Canada's largest growing
          marketplace
        </p>
        <p className="text-center text-gray-600 text-xs text-left ">
          * Already have an account login here then the store owner will be
          redirected to login page.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">
            Email<span className="text-red-600">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            required
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">
            Password<span className="text-red-600">*</span>
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              required
              className="bg-white"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full hover:bg-transparent"
              onClick={togglePasswordVisibility}
            >
              {!showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        <Button
          className="w-full bg-red-700 hover:bg-red-800 text-white"
          size="lg"
        >
          Sign Up
        </Button>

        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500">or</span>
        </div>

        <Button variant="outline" className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <g clipPath="url(#clip0_553_4538)">
              <path
                d="M23.5938 9.91355L13.8044 9.91308C13.3721 9.91308 13.0217 10.2634 13.0217 10.6957V13.823C13.0217 14.2552 13.3721 14.6056 13.8044 14.6056H19.3171C18.7135 16.1722 17.5868 17.4842 16.1493 18.3178L18.5 22.387C22.2707 20.2062 24.5 16.3799 24.5 12.0965C24.5 11.4866 24.455 11.0506 24.3651 10.5597C24.2968 10.1867 23.9729 9.91355 23.5938 9.91355Z"
                fill="#167EE6"
              />
              <path
                d="M12.5 19.3043C9.80218 19.3043 7.44699 17.8303 6.18207 15.6491L2.11304 17.9944C4.18374 21.5833 8.06283 24 12.5 24C14.6768 24 16.7307 23.4139 18.5 22.3926V22.387L16.1494 18.3178C15.0742 18.9414 13.8299 19.3043 12.5 19.3043Z"
                fill="#12B347"
              />
              <path
                d="M18.5 22.3926V22.387L16.1494 18.3178C15.0741 18.9413 13.83 19.3043 12.5 19.3043V24C14.6767 24 16.7308 23.4139 18.5 22.3926Z"
                fill="#0F993E"
              />
              <path
                d="M5.19566 12C5.19566 10.6702 5.55856 9.42609 6.18205 8.35092L2.11302 6.00558C1.08603 7.76934 0.5 9.81769 0.5 12C0.5 14.1823 1.08603 16.2307 2.11302 17.9944L6.18205 15.6491C5.55856 14.5739 5.19566 13.3298 5.19566 12Z"
                fill="#FFD500"
              />
              <path
                d="M12.5 4.69566C14.2593 4.69566 15.8753 5.32078 17.1375 6.36061C17.4488 6.61711 17.9014 6.59859 18.1867 6.31336L20.4024 4.09758C20.7261 3.77395 20.703 3.24422 20.3573 2.94431C18.2425 1.10967 15.491 0 12.5 0C8.06283 0 4.18374 2.41673 2.11304 6.00558L6.18207 8.35092C7.44699 6.16969 9.80218 4.69566 12.5 4.69566Z"
                fill="#FF4B26"
              />
              <path
                d="M17.1374 6.36061C17.4488 6.61711 17.9015 6.59859 18.1866 6.31336L20.4024 4.09758C20.726 3.77395 20.7029 3.24422 20.3573 2.94431C18.2425 1.10963 15.491 0 12.5 0V4.69566C14.2592 4.69566 15.8752 5.32078 17.1374 6.36061Z"
                fill="#D93F21"
              />
            </g>
            <defs>
              <clipPath id="clip0_553_4538">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          Continue with Google
        </Button>
      </CardContent>

      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-600">
          Don’t have a Seller account?{" "}
          <Link
            href="./become-seller-signup"
            className="text-red-700 font-medium hover:underline"
          >
            Create a Seller Account
          </Link>
        </p>
        {/* <p className="text-sm text-gray-600">
          already have an account login here
        </p> */}
      </CardFooter>
    </Card>
  );
}
