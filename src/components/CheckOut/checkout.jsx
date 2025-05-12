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
function Checkout() {
  const checkoutList = [
    {
      id: 1,
      image: "/assets/bag.png",
      productName: "Hiking Traveler Backpack",
      size: "M",
      color: "Yellow",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      id: 2,
      image: "/assets/bag.png",
      productName: "Hiking Traveler Backpack",
      size: "M",
      color: "Yellow",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      id: 3,
      image: "/assets/bag.png",
      productName: "Hiking Traveler Backpack",
      size: "M",
      color: "Yellow",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      id: 4,
      image: "/assets/bag.png",
      productName: "Hiking Traveler Backpack",
      size: "M",
      color: "Yellow",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      id: 5,
      image: "/assets/bag.png",
      productName: "Hiking Traveler Backpack",
      size: "M",
      color: "Yellow",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      id: 6,
      image: "/assets/bag.png",
      productName: "Hiking Traveler Backpack",
      size: "M",
      color: "Yellow",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      id: 7,
      image: "/assets/bag.png",
      productName: "Hiking Traveler Backpack",
      size: "M",
      color: "Yellow",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
  return (
    <div className="w-full md:w-[90%] px-4 py-10 md:px-10 md:py-15 mx-auto">
      {" "}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
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
          {checkoutList.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                <Image
                  src={item.image}
                  alt="Product Image"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {item.productName}
                  </span>
                  <span className="text-xs text-gray-500 ">
                    Size: {item.size} Color: {item.color}
                  </span>
                </div>
              </TableCell>
              <TableCell>{item.paymentMethod}</TableCell>
              <TableCell>
                <ControlButton />
              </TableCell>
              <TableCell className="text-right">{item.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex justify-between mt-5">
        <Link
          href="check-out/billing-procedure"
          className="w-full h-12 bg-kappes hover:bg-[#b01501] flex items-center justify-center cursor-pointer text-white px-4 py-2 rounded-md"
        >
          Proceed to Checkout : ${"2,500.00"}
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
