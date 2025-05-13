"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi";
import { LuShoppingCart, LuHeart } from "react-icons/lu";
import { FiLock, FiLogOut } from "react-icons/fi";

const Sidebar = ({ setSelectedMenu, selectedMenu }) => {
  const menuItem = [
    {
      id: 1,
      icon: <HiOutlineUser size={25} />,
      label: "My Profile",
    },
    {
      id: 2,
      icon: <LuShoppingCart size={24} />,
      label: "Order History",
    },
    {
      id: 3,
      icon: <LuHeart size={24} />,
      label: "Wishlist",
    },
    {
      id: 4,
      icon: <FiLock size={24} />,
      label: "Change Password",
    },
    {
      id: 5,
      icon: <FiLogOut size={24} />,
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
      <div className="mt-4 px-2">
        <ul className="space-y-2">
          {menuItem.map((item) => (
            <li key={item.id} onClick={() => setSelectedMenu(item.id)}>
              <Link
                href="#"
                className={`flex items-center gap-2 p-2 rounded-md group transition-colors duration-200   ${
                  selectedMenu === item.id
                    ? "bg-[#AF1500]"
                    : "hover:bg-[#AF1500] "
                }`}
              >
                <span
                  className={`${
                    selectedMenu === item.id ? "text-white" : "text-[#AF1500]"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-sm ${
                    selectedMenu === item.id ? "text-white" : "text-[#AF1500]"
                  }`}
                >
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
