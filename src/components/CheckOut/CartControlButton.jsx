"use client";
import { LucideCircleMinus, LucideCirclePlus, Trash2 } from "lucide-react";
import React from "react";
import { useCart } from "@/hooks/useCart";

function CartControlButton({ itemId, currentQuantity = 1 }) {
  const { updateQuantity, updateCart } = useCart();

  const handleIncrement = () => {
    const newQuantity = currentQuantity + 1;
    updateQuantity(itemId, newQuantity);
  };

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleRemove = async () => {
    try {
      // Call API to remove item from cart
      await updateCart({
        data: {
          items: [{ productId: itemId, quantity: 0 }], // Setting quantity to 0 removes the item
        },
      }).unwrap();
      console.log("Item removed successfully");
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-between w-20 border bg-white p-1 rounded-md text-base font-medium">
        <LucideCircleMinus
          size={20}
          className="hover:text-red-700 cursor-pointer"
          onClick={handleDecrement}
        />
        {currentQuantity}
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

export default CartControlButton;
