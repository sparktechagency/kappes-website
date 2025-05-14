// import SearchBox from "@/common/components/searchBox";
// import Image from "next/image";
// import React from "react";
// import { HiOutlineShoppingCart } from "react-icons/hi";
// import { FaRegUser } from "react-icons/fa";
// import Link from "next/link";

// function TopNav() {
//   return (
//     <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex  sm:flex-row items-center justify-center sm:justify-between gap-3 lg:px-32">
//       {/* Logo */}
//       <div className="flex-shrink-0">
//         <Image
//           src="/assets/topnavimg.png"
//           alt="Website Logo"
//           width={100}
//           height={100}
//           className="object-contain"
//         />
//       </div>

//       {/* Search box */}
//       <div className="w-full sm:w-auto flex-1">
//         <SearchBox />
//       </div>

//       {/* Right section: icons */}
//       <div className="flex items-center gap-2 mt-2 sm:mt-0">
//         <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
//           <HiOutlineShoppingCart size={24} />
//         </button>

//         <Link
//           href="/cart"
//           className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
//         >
//           <FaRegUser size={20} />
//           <span className="hidden md:inline">Sign In</span>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default TopNav;

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

function TopNav() {
  // Simulated user state (replace with actual auth state)
  const user = { name: "John Doe", image: null }; // null means not logged in

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex sm:flex-row items-center justify-center sm:justify-between gap-3 lg:px-32">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/assets/topnavimg.png"
          alt="Website Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Search box */}
      <div className="w-full sm:w-auto flex-1">
        <SearchBox />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        {/* Cart */}
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <HiOutlineShoppingCart size={24} />
        </button>

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
            <DrawerContent className="p-4">
              <DrawerHeader>
                <DrawerTitle>Account</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 py-2 space-y-2">
                <p className="font-medium">{user.name}</p>
                <button className="text-red-600 text-sm hover:underline">
                  Logout
                </button>
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </nav>
  );
}

export default TopNav;
