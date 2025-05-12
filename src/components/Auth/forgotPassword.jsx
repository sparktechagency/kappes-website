"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordForm() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-red-700">
          Forgot Password
        </CardTitle>
        <p className="text-center text-gray-600 text-sm px-6">
          Enter the email associated with your account and we’ll send you OTP to
          reset your password
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

        <Button
          className="w-full bg-red-700 hover:bg-red-800 text-white"
          size="lg"
        >
          Confirm
        </Button>
      </CardContent>
    </Card>
  );
}
