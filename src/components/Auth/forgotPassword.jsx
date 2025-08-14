"use client";

import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { useForgotPasswordMutation } from "@/redux/authApi/authApi";
import useToast from "@/hooks/useShowToast";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const { showSuccess, showError } = useToast();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // Trim the email to remove accidental spaces
      const trimmedEmail = data.email.trim();

      console.log("Forgot password request for:", trimmedEmail);

      const response = await forgotPassword({ email: trimmedEmail });
      console.log("Forgot password response:", response);

      if (response?.data?.success) {
        showSuccess(response?.data?.message || "Email sent successfully");
        reset();
        router.push(
          `/auth/forgot-password/verify-otp?email=${trimmedEmail}&forgot=true`
        );
      } else {
        const errorMessage =
          response?.error?.data?.message ||
          response?.error?.data?.error?.[0]?.message ||
          "Failed to send reset email";
        showError(errorMessage);
        reset();
      }
    } catch (error) {
      console.error("Error sending reset email:", error);
      showError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-red-700">
          Forgot Password
        </CardTitle>
        <p className="text-center text-gray-600 text-sm px-6">
          Enter the email associated with your account and we'll send you OTP to
          reset your password
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
                setValueAs: (value) => value.trim(), // Automatically trim on form submission
              })}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Confirm"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
