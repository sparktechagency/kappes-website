import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
// import { HiMenu } from "react-icons/hi";

function BottomNav() {
  return (
    <div>
      <div className="flex items-center justify-between w-full py-4  border-b border-gray-300 bg-kappes lg:px-32 text-white">
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-transparent shadow-none border-none px-2">
                <img
                  src="/assets/menu.svg"
                  alt="Menu Icon"
                  className="w-5 h-5 mr-1"
                />
                <span>Categories</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#" className="hover:text-kappes flex items-center">
            <img src="/assets/shop.svg" alt="Logo" className="w-5 h-5 mr-2" />
            <span>Shops</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className=" hover:text-kappes ">
            Become a Seller
          </Link>
          <Link href="#" className=" hover:text-kappes">
            More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
