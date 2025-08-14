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
import { useRegisterMutation } from "@/redux/authApi/authApi";
import provideIcon from "@/common/components/provideIcon";
import { useForm } from "react-hook-form";
import useToast from "@/hooks/useShowToast";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerUser, { isLoading }] = useRegisterMutation();
  const { showSuccess, showError } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange", // This enables real-time validation
  });

  const onSubmit = async (data) => {
    // Trim all string values in the form data
    const trimmedData = Object.keys(data).reduce((acc, key) => {
      acc[key] = typeof data[key] === "string" ? data[key].trim() : data[key];
      return acc;
    }, {});
    reset();

    const registerData = {
      full_name: trimmedData.fullName,
      email: trimmedData.email,
      phone: trimmedData.phone,
      password: trimmedData.password,
      confirm_password: trimmedData.confirmPassword,
    };
    try {
      const response = await registerUser(registerData).unwrap();
      console.log("Registration response:", response);

      if (response?.success) {
        showSuccess("Registration Successful!", {
          description: response?.message,
        });
        // Reset form after successful registration
        reset();
        router.push(`/auth/user-verification?email=${data.email}`);
        // Reset password visibility states
        setShowPassword(false);
        setShowConfirmPassword(false);
      } else {
        showError("Registration Failed", {
          description:
            response?.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      console.log("Registration error:", {
        status: err?.status,
        data: err?.data,
        message: err?.message,
      });

      const errorMessage =
        err?.data?.message ||
        err?.message ||
        "An error occurred during registration. Please try again.";

      showError("Registration Failed", {
        description: errorMessage,
      });
    }
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <Card className="w-full max-w-md mx-auto my-4">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-red-700">
          Create Your Account
        </CardTitle>
        <p className="text-center text-gray-600 text-sm px-6">
          Join us to explore top Canadian-made products, exclusive deals, and
          great rewards
        </p>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">
              Full Name<span className="text-red-600">*</span>
            </Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full name is required",
                setValueAs: (value) => value.trim(),
              })}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email<span className="text-red-600">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email is required",
                setValueAs: (value) => value.trim(),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone<span className="text-red-600">*</span>
            </Label>
            <div className="flex">
              <div className="inline-flex items-center justify-center rounded-l-md border border-r-0 border-input bg-background px-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <img
                    src="/api/placeholder/24/24"
                    alt="CA flag"
                    className="w-4 h-4 rounded-sm"
                  />
                  +1
                </span>
              </div>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="rounded-l-none"
                {...register("phone", { required: "Phone number is required" })}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">
              Password<span className="text-red-600">*</span>
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  setValueAs: (value) => value.trim(),
                })}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              Confirm Password<span className="text-red-600">*</span>
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) => {
                    const trimmedValue = value.trim();
                    const trimmedPassword = password?.trim();
                    if (!trimmedValue) return "Please confirm your password";
                    if (trimmedValue !== trimmedPassword)
                      return "Passwords do not match";
                    return true;
                  },
                  setValueAs: (value) => value.trim(),
                })}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {!showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white cursor-pointer"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </Button>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500">or</span>
          </div>

          {/* Google Sign In */}
          <Button variant="outline" className="w-full cursor-pointer">
            {provideIcon({ name: "google" })}
            Continue with Google
          </Button>
        </CardContent>
      </form>

      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-red-700 font-medium hover:underline cursor-pointer"
          >
            Sign In
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
