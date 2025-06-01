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
import { Checkbox } from "../ui/checkbox";
import provideIcon from "@/common/components/provideIcon";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Card className="w-full max-w-sm mx-auto ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-red-700 font-comfortaa">
          Welcome Back
        </CardTitle>
        <p className="text-center text-gray-600 text-sm px-6">
          Log in to continue shopping and enjoy personalized offers
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
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
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
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              className=" data-[state=checked]:bg-red-700 data-[state=checked]:border-none"
            />
            <label
              htmlFor="terms"
              className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>

          <Link
            href="/auth/forgot-password"
            className="text-sm font-medium text-red-700"
          >
            Forgot Password?
          </Link>
        </div>

        <Link href="/">
          <Button
            className="w-full bg-red-700 hover:bg-red-800 text-white cursor-pointer"
            size="lg"
          >
            Sign In
          </Button>
        </Link>

        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500">or</span>
        </div>

        <Button variant="outline" className="w-full cursor-pointer">
          {provideIcon({ name: "google" })}
          Continue with Google
        </Button>
      </CardContent>

      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-red-700 font-medium hover:underline cursor-pointer"
          >
            Create Account
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
