"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useState } from "react";

const orders = Array.from({ length: 10 }).map((_, i) => ({
  id: `#28VR5K59`,
  date: "10 March, 2024",
  items: 2,
  price: "$50",
  status: i === 2 || i === 7 ? "Canceled" : "Delivered",
}));

export default function OrderHistory({ selectedMenu }) {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((order) =>
    order.id.toLowerCase().includes(search.toLowerCase())
  );
  if (selectedMenu !== 2) return null;
  return (
    <div className="p-4 sm:p-6 h-fit bg-white rounded-md shadow-sm w-full overflow-auto z-10">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Order History</h2>

      <div className="flex justify-end mb-3">
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64"
        />
      </div>

      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order No</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total Items</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order, idx) => (
              <TableRow key={idx}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>
                  <span
                    className={`font-medium ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Eye className="w-5 h-5 text-gray-600 cursor-pointer" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-wrap justify-end items-center gap-2 mt-4">
        <Button variant="outline" size="sm">
          Prev
        </Button>
        <Button
          size="sm"
          className="bg-[#AF1500] text-white hover:bg-[#8c1100]"
        >
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}
