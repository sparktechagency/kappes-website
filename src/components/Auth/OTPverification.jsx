"use client";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  useResendOtpMutation,
  useVerifyEmailMutation,
} from "@/redux/authApi/authApi";
import useToast from "@/hooks/useShowToast";
import { useSearchParams, useRouter } from "next/navigation";
import VerificationSuccess from "@/common/components/verificationSuccess";
import { Content } from "@/app/auth/forgot-password/verify-otp/page";

export default function OTPverification() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const forgot = searchParams.get("forgot");
  const [countdown, setCountdown] = useState(57);
  const router = useRouter();
  useEffect(() => {
    if (email || forgot) {
      console.log("Query params:", { email, forgot });
    }
  }, [email, forgot]);

  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const [resendOtp, { isLoading: isResendOtpLoading }] = useResendOtpMutation();
  const { showSuccess, showError } = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  // Watch OTP value to enable/disable submit button
  const otpValue = watch("otp");

  // Countdown timer for resend
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 500);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const onSubmit = async (data) => {
    console.log("OTP Value:", data.otp);

    if (!email) {
      showError("Email is required for verification");
      return;
    }

    try {
      const response = await verifyEmail({
        oneTimeCode: Number(data.otp),
        email: email,
      });
      console.log(response);
      if (response.data?.success === true) {
        showSuccess(response.data?.message);

        // Save verifyToken from the correct path in response
        const verifyToken = response.data?.data?.verifyToken;
        if (verifyToken) {
          localStorage.setItem("verifyToken", verifyToken);
          console.log("Verify token saved:", verifyToken);
        }

        if (forgot === "true") {
          router.push("/auth/reset-password");
        } else {
          router.push("/auth/login");
        }
      } else {
        const errorMessage = response.data?.message || "Verification failed";
        showError(errorMessage);
      }
    } catch (error) {
      console.log("Verification error:", error);
      const errorMessage =
        error.data?.message ||
        error.data?.error?.[0]?.message ||
        "Invalid OTP. Please try again.";
      showError(errorMessage);
    }
  };

  const handleResend = async () => {
    console.log("Resend OTP requested");
    setCountdown(57); // Reset countdown

    try {
      const response = await resendOtp({ email: email });
      console.log(response);
      if (response.data?.success === true) {
        showSuccess(response.data?.message);
      } else {
        const errorMessage = response.data?.message || "Failed to resend OTP";
        showError(errorMessage);
      }
    } catch (error) {
      console.log("Resend OTP error:", error);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-red-700">
          Verify OTP
        </CardTitle>
        <p className="text-center text-gray-600 text-sm px-6">
          Enter your OTP which has been sent to your email and completely verify
          your account.
        </p>
      </CardHeader>

      <CardContent className="space-y-4 mx-auto">
        <div className="space-y-4">
          <div className="flex items-center justify-center mx-auto">
            <Controller
              name="otp"
              control={control}
              rules={{
                required: "OTP is required",
                minLength: {
                  value: 4,
                  message: "Please enter complete OTP",
                },
              }}
              render={({ field }) => (
                <InputOTP
                  maxLength={4}
                  value={field.value}
                  onChange={field.onChange}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              )}
            />
          </div>

          {errors.otp && (
            <p className="text-center text-red-500 text-sm">
              {errors.otp.message}
            </p>
          )}

          <p className="text-center text-gray-600 text-sm px-6">
            A code has been sent to your email
          </p>

          {countdown > 0 ? (
            <p className="text-center text-red-700 text-sm font-bold px-6">
              Resend in {formatTime(countdown)}
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="text-center text-red-700 text-sm font-bold px-6 underline hover:text-red-800 w-full bg-transparent border-none cursor-pointer"
            >
              Resend OTP
            </button>
          )}

          <Button
            onClick={handleSubmit(onSubmit)}
            className="w-full bg-red-700 hover:bg-red-800 text-white disabled:opacity-50"
            size="lg"
            disabled={isSubmitting || otpValue?.length < 4}
          >
            {isSubmitting ? "Verifying..." : "Verify"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
