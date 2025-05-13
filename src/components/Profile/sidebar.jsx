"use client";
import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { Separator } from "../ui/separator";
const Sidebar = () => {
  const menuItem = [
    {
      id: 1,
      icon: (
        <HiOutlineUser
          size={25}
          className="text-[#AF1500] group-hover:text-white"
        />
      ),
      label: "My Profile",
    },
    {
      id: 2,
      icon: (
        <LuShoppingCart
          size={24}
          className="text-[#AF1500] group-hover:text-white"
        />
      ),
      label: "Order History",
    },
    {
      id: 3,
      icon: (
        <LuHeart size={24} className="text-[#AF1500] group-hover:text-white" />
      ),
      label: "Wishlist",
    },
    {
      id: 4,
      icon: (
        <FiLock size={24} className="text-[#AF1500] group-hover:text-white" />
      ),
      label: "Change Password",
    },
    {
      id: 5,
      icon: (
        <FiLogOut size={24} className="text-[#AF1500] group-hover:text-white" />
      ),
      label: "Logout",
    },
  ];

  return (
    <div className="bg-white w-52 h-[30rem] flex flex-col items-center justify-center rounded-lg border shadow-sm">
      <div className="flex flex-col items-center pt-4 py-4">
        <Image
          src="/assets/userProfile/profileImage.jpg"
          width={100}
          height={100}
          priority
          alt="user image"
          className="w-16 h-16 rounded-full object-cover ring-2 ring-[#AF1500]"
        />
        <div className="mt-2 text-center">
          <p className="font-medium text-sm">Jack Taylor</p>
          <p className="text-xs text-gray-500">demo@example.com</p>
        </div>
      </div>
      <hr />
      <div className="mt-4 px-2">
        <ul className="space-y-2">
          {menuItem.map((item) => (
            <li key={item.id}>
              <Link
                href="#"
                className="flex items-center gap-2 p-2 rounded-md group hover:bg-[#AF1500] transition-colors duration-200"
              >
                <span className="group-hover:text-white">{item.icon}</span>
                <span className="text-sm text-[#AF1500] group-hover:text-white">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
