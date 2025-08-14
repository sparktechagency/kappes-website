"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useResetPasswordMutation } from "@/redux/authApi/authApi";
import { useForm } from "react-hook-form";
import useToast from "@/hooks/useShowToast";
import { useRouter } from "next/navigation";
import ResetSuccess from "./resetSuccess";

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const { showSuccess: showToastSuccess, showError } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const password = watch("password");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (data) => {
    console.log("Reset password data:", data);

    const verifyToken = localStorage.getItem("verifyToken");
    console.log("Verify token from localStorage:", verifyToken);

    if (!verifyToken) {
      showError("Please verify your email first");
      router.push("/auth/forgot-password");
      return;
    }

    try {
      // Trim the token to ensure no whitespace
      const cleanToken = verifyToken.trim();
      console.log("Clean token being sent:", cleanToken);

      const response = await resetPassword({
        newPassword: data.password,
        confirmPassword: data.confirmPassword,
        verifyToken: cleanToken,
      });
      console.log("Reset password response:", response);

      if (response?.data?.success) {
        showToastSuccess(
          response?.data?.message || "Password reset successful"
        );

        // Clear the verify token after successful reset
        localStorage.removeItem("verifyToken");

        setShowSuccess(true);
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      } else {
        const errorMessage =
          response?.error?.data?.error?.[0]?.message ||
          response?.error?.data?.message ||
          "Failed to reset password";
        showError(errorMessage);
      }
    } catch (error) {
      console.error("Reset password error:", error);
      showError("An unexpected error occurred. Please try again.");
    }
  };

  if (showSuccess) {
    return <ResetSuccess />;
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-red-700">
          Reset Password
        </CardTitle>
        <p className="text-center text-gray-600 text-sm px-6">
          Please set a new password to secure your account and regain access
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message:
                      "Password must contain at least one letter and one number",
                  },
                })}
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
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              Confirm Password<span className="text-red-600">*</span>
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your new password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={toggleConfirmPasswordVisibility}
              >
                {!showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "Resetting..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
