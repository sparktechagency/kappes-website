"use client";

import SearchBox from "@/common/components/searchBox";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "../ui/button";
import { ChevronRight, MapPin, Store, HandCoins, Tag } from "lucide-react";
function TopNav() {
  // Simulated user state (replace with actual auth state)
  const user = { name: "John Doe", image: null }; // null means not logged in

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex sm:flex-row items-center justify-center sm:justify-between gap-3 lg:px-32">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/assets/topnavimg.png"
          alt="Website Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </Link>

      {/* Search box */}
      <div className="w-full sm:w-auto flex-1">
        <SearchBox />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        {/* Cart */}
        <Link href="/check-out">
          <Button className="text-gray-500 hover:text-gray-700 focus:outline-none bg-white shadow-none w-10 h-10 rounded-full hover:bg-gray-300 cursor-pointer">
            <HiOutlineShoppingCart size={24} />
          </Button>
        </Link>

        {/* Conditional: Sign In or Avatar */}
        {!user ? (
          <Link
            href="/login"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
          >
            <FaRegUser size={20} />
            <span className="hidden md:inline">Sign In</span>
          </Link>
        ) : (
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <button>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user.image || "/default-avatar.png"}
                    alt={user.name}
                  />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
              </button>
            </DrawerTrigger>
            <DrawerContent className="p-4 ">
              <div className="ml-4 mt-4">
                <Avatar className="w-25 h-25 ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="profile img"
                    src="/assets/userProfile/profileImage.jpg"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3 className="my-2 text-xl font-comfortaa font-bold">
                  Sarah Jones
                </h3>
                <Button variant="outline" className="">
                  View Profile
                </Button>
              </div>

              <div className="mt-6 space-y-2 px-4 bg-red-400">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Shop By Province</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>

                <Button variant="ghost" className="w-full justify-start gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Shop By Territory</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>

                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Store className="h-4 w-4" />
                  <span>Shop By Store</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>

                <Button variant="ghost" className="w-full justify-start gap-2">
                  <HandCoins className="h-4 w-4" />
                  <span>Trades & Services</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>

                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Tag className="h-4 w-4" />
                  <span>Deals & Offers</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </nav>
  );
}

export default TopNav;
