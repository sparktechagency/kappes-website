"use client";
import { LucideCircleMinus, LucideCirclePlus } from "lucide-react";
import React, { useState } from "react";

function ControlButton() {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <div className="flex items-center justify-between w-20 border bg-white p-1 rounded-md text-base font-medium">
      <LucideCircleMinus
        size={20}
        className="hover:text-red-700"
        onClick={handleDecrement}
      />
      {value}
      <LucideCirclePlus
        size={20}
        className="hover:text-green-700"
        onClick={handleIncrement}
      />
    </div>
  );
}

export default ControlButton;
