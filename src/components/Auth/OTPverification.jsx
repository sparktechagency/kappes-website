"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
export default function OTPverification() {
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

      <CardContent className="space-y-4 mx-auto ">
        <div className="flex items-center justify-center mx-auto ">
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <p className="text-center text-gray-600 text-sm px-6">
          A code has been sent to your email
        </p>
        <p className="text-center text-red-700 text-sm font-bold px-6">
          {" "}
          Resend in 00:57
        </p>
        <Button
          className="w-full bg-red-700 hover:bg-red-800 text-white"
          size="lg"
        >
          Verify
        </Button>
      </CardContent>
    </Card>
  );
}
