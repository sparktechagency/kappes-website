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
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MdLogout } from "react-icons/md";
import { Button } from "../ui/button";
import { ChevronRight, MapPin, Store, HandCoins, Tag } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { AiOutlineMessage } from "react-icons/ai";
import { BiMessageSquareDots } from "react-icons/bi";
import { openChat } from "@/features/chatSlice";
import useAuth from "@/hooks/useAuth";
import useUser from "@/hooks/useUser";
import { getImageUrl } from "@/redux/baseUrl";
function TopNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const { role, isLoggedIn, logout: handleLogout } = useAuth();
  console.log("isLoggedIn", isLoggedIn);
  const { userImage, userName } = useUser();
  console.log("userImage", userImage);
  console.log("userName", userName);
  const cartItemCount = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  // Get unread message count from Redux
  const { unreadCount, isChatOpen, currentSeller } = useSelector(
    (state) => state.chat
  );

  // Sample seller info - in a real app, this would come from your user/seller data
  const handleOpenChat = () => {
    if (!currentSeller) {
      // Open chat with a default seller or the last contacted seller
      dispatch(
        openChat({
          id: 1,
          name: "Customer Support",
          avatar: "/assets/chat/support-avatar.png",
          isOnline: true,
          lastSeen: "Online",
        })
      );
    }
    setIsDrawerOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex sm:flex-row items-center justify-center sm:justify-between gap-3 lg:px-32">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/assets/topnavimg.png"
          alt="Website Logo"
          width={200}
          height={200}
          className="object-contain hidden sm:block"
        />
        <Image
          src="/assets/footer/footericon.png"
          alt="Website Logo"
          width={100}
          height={100}
          className="object-contain block sm:hidden w-9 h-9 "
        />
      </Link>

      {/* Search box */}
      <div className="md:w-1/2 w-full">
        <SearchBox />
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center gap-4 mt-2 sm:mt-0">
        {/* Messages Icon - Desktop only */}
        <Link href="/chat/454" className="relative hidden sm:block">
          <Button
            onClick={handleOpenChat}
            className="relative flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none bg-white shadow-none w-12 h-12 rounded-full hover:bg-gray-300 cursor-pointer"
          >
            <AiOutlineMessage className="!w-7 !h-7" />

            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </Button>
        </Link>

        {/* Cart Icon - Desktop only */}
        <Link href="/check-out" className="relative hidden sm:block">
          <Button className="text-gray-500 hover:text-gray-700 focus:outline-none bg-white shadow-none w-12 h-12 rounded-full hover:bg-gray-300 cursor-pointer">
            <HiOutlineShoppingCart className="!w-7 !h-7" />
          </Button>
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          )}
        </Link>

        {/* Conditional: Sign In or Avatar */}
        {!isLoggedIn ? (
          <Link
            href="/auth/login"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
          >
            <FaRegUser className="!w-7 !h-7 cursor-pointer " />
            <span className="hidden md:inline">Sign In</span>
          </Link>
        ) : (
          <Drawer
            open={isDrawerOpen}
            onOpenChange={setIsDrawerOpen}
            direction="right"
          >
            <DrawerTrigger asChild>
              <Avatar
                onClick={() => setIsDrawerOpen(true)}
                className="cursor-pointer w-10 h-10 "
              >
                <AvatarImage
                  src={
                    userImage
                      ? `${getImageUrl}/${userImage}`
                      : "/assets/userProfile/profileImage.jpg"
                  }
                  alt={userName || "User"}
                />
                <AvatarFallback>
                  {userName ? userName.charAt(0) : "U"}
                </AvatarFallback>
              </Avatar>
            </DrawerTrigger>
            <DrawerContent className="p-4">
              <VisuallyHidden>
                <DrawerTitle>User Navigation Drawer</DrawerTitle>
              </VisuallyHidden>
              <div className="ml-4 mt-4">
                <Avatar className="w-25 h-25">
                  <Image
                    width={1000}
                    height={1000}
                    alt={userName || "User profile"}
                    src={
                      userImage
                        ? `${getImageUrl}/${userImage}`
                        : "/assets/userProfile/profileImage.jpg"
                    }
                  />
                  <AvatarFallback>
                    {userName ? userName.charAt(0) : "U"}
                  </AvatarFallback>
                </Avatar>
                <h3 className="my-2 text-xl font-comfortaa font-bold">
                  {userName}
                </h3>
                <Link
                  href="/profile/4545"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <Button variant="outline" className="cursor-pointer">
                    View Profile
                  </Button>
                </Link>
              </div>

              {/* Cart icon - Mobile only */}
              <div className="mt-6 px-4 block sm:hidden">
                <Link
                  href="/check-out"
                  className="relative"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <Button className="w-full justify-start gap-3 bg-kappes hover:bg-kappes">
                    <HiOutlineShoppingCart size={20} />
                    <span>Cart</span>
                    {cartItemCount > 0 && (
                      <span className="ml-auto bg-white text-red-700 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {cartItemCount}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>

              {/* Messages - Mobile and Desktop */}
              <div className="mt-6 px-4 block">
                <Link href="/chat/454" className="w-full">
                  <Button
                    className="w-full justify-start gap-3 hover:bg-kappes"
                    onClick={handleOpenChat}
                  >
                    <BiMessageSquareDots size={20} />
                    <span>Messages</span>
                    {unreadCount > 0 && (
                      <span className="ml-auto bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                        {unreadCount > 9 ? "9+" : unreadCount}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>

              {/* Navigation Buttons */}
              <div className="mt-6 space-y-2 px-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <MapPin className="h-4 w-4" />
                  <span>Shop By Province</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <MapPin className="h-4 w-4" />
                  <span>Shop By Territory</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <Store className="h-4 w-4" />
                  <span>Shop By Store</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <HandCoins className="h-4 w-4" />
                  <span>Trades & Services</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <Tag className="h-4 w-4" />
                  <span>Deals & Offers</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </Button>
              </div>

              {/* Logout */}
              <div
                className="mt-6 space-y-2 px-4 h-full flex items-end"
                onClick={() => setIsDrawerOpen(false)}
              >
                {/* <Link href="/auth/login" > */}
                <Button
                  variant="ghost"
                  className="w-fit justify-start gap-2"
                  onClick={handleLogout}
                >
                  <MdLogout
                    size={40}
                    className="w-10 h-10 text-lg font-semibold text-red-800"
                  />
                  <span className="text-lg font-comfortaa font-semibold text-red-800">
                    Log Out
                  </span>
                </Button>
                {/* </Link> */}
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </nav>
  );
}

export default TopNav;
