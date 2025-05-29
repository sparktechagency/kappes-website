"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalQuantity,
} from "../../../features/cartSlice"; // Update with your actual path
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function OrderSummary() {
  const [promoCode, setPromoCode] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  // Selectors
  const cartItems = useSelector(selectCartItems);

  // Calculate totals from cart
  const itemCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingFee = itemCost > 0 ? 29.0 : 0.0; // free shipping if no items
  const discount = promoCode === "SAVE5" ? 5.0 : 0.0;
  const total = itemCost + shippingFee - discount;

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-red-700 font-bold">
          Your Order Summary
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Promo Code Section */}
        <div className="flex space-x-2">
          <Input
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-grow"
          />
          <Button variant="destructive" className="bg-red-700 hover:bg-red-800">
            Apply
          </Button>
        </div>

        {/* Cost Breakdown */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Item Cost</span>
                <span>${itemCost.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>${shippingFee.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}

              <div className="border-t pt-4 flex justify-between font-medium">
                <span>Total</span>
                <span className="text-red-700 font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms Agreement */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={isAgreed}
            onCheckedChange={(checked) => setIsAgreed(checked === true)}
          />
          <label htmlFor="terms" className="text-sm">
            I have read and agree to the website{" "}
            <a href="#" className="text-blue-800 font-medium">
              terms and conditions
            </a>
            <span className="text-red-600">*</span>
          </label>
        </div>
      </CardContent>

      <CardFooter>
        <Link href="billing-procedure/order-place-success" className="w-full">
          <Button
            className="w-full bg-red-700 hover:bg-red-800"
            size="lg"
            disabled={!isAgreed || cartItems.length === 0}
          >
            Place Order
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
