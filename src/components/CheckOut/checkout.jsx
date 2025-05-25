"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ControlButton from "@/common/components/controlButton";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSelector } from "react-redux";

function Checkout() {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart);

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    return total + itemPrice * item.quantity;
  }, 0);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="w-full md:w-[90%] px-4 py-10 md:px-10 md:py-15 mx-auto">
      <Table>
        <TableCaption>
          {cartItems.length > 0
            ? "Your shopping cart items"
            : "Your cart is empty"}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Sub Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              const itemPrice = parseFloat(item.price) || 0;
              const subTotal = itemPrice * item.quantity;

              return (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    <Image
                      src={item.productImage || "/assets/bag.png"}
                      alt={item.name || "Product Image"}
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {item.name || item.productName || "Product Name"}
                      </span>
                      <span className="text-xs text-gray-500">
                        {item.size && `Size: ${item.size} `}
                        {item.color && `Color: ${item.color}`}
                        {item.description &&
                          !item.size &&
                          !item.color &&
                          item.description}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{formatCurrency(itemPrice)}</TableCell>
                  <TableCell>
                    <ControlButton itemId={item.id} />
                  </TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(subTotal)}
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                Your cart is empty.
                <Link href="/" className="text-blue-500 hover:underline ml-1">
                  Continue shopping
                </Link>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        {cartItems.length > 0 && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} className="font-semibold">
                Total
              </TableCell>
              <TableCell className="text-right font-semibold">
                {formatCurrency(totalAmount)}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>

      {cartItems.length > 0 && (
        <div className="flex justify-between mt-5">
          <Link
            href="check-out/billing-procedure"
            className="w-full h-12 bg-kappes hover:bg-[#b01501] flex items-center justify-center cursor-pointer text-white px-4 py-2 rounded-md transition-colors"
          >
            Proceed to Checkout: {formatCurrency(totalAmount)}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
