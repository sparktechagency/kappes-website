"use client";
import { LucideCircleMinus, LucideCirclePlus, Trash2 } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "@/features/cartSlice"; // Update path to your actual cart slice

function ControlButton({ itemId }) {
  const dispatch = useDispatch();

  // Get the specific item from cart
  const item = useSelector((state) =>
    state.cart.find((cartItem) => cartItem.id === itemId)
  );

  const handleIncrement = () => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecrement = () => {
    if (item && item.quantity > 1) {
      dispatch(decreaseQuantity(itemId));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(itemId));
  };

  if (!item) return null;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-between w-20 border bg-white p-1 rounded-md text-base font-medium">
        <LucideCircleMinus
          size={20}
          className="hover:text-red-700 cursor-pointer"
          onClick={handleDecrement}
        />
        {item.quantity}
        <LucideCirclePlus
          size={20}
          className="hover:text-green-700 cursor-pointer"
          onClick={handleIncrement}
        />
      </div>
      <Trash2
        size={20}
        className="hover:text-red-700 cursor-pointer text-gray-500"
        onClick={handleRemove}
      />
    </div>
  );
}

export default ControlButton;
