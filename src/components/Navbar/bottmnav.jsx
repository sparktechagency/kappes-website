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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 12H20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6H20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 18H20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Categories</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#" className="hover:text-kappes flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.5002 11.034V16.6673H18.3335V18.334H1.66683V16.6673H2.50016V11.034C1.97794 10.6895 1.56961 10.2395 1.27516 9.68398C0.980718 9.12843 0.833496 8.53954 0.833496 7.91732C0.833496 7.21732 1.01127 6.57843 1.36683 6.00065L3.61683 2.08398C3.69461 1.95065 3.79739 1.84787 3.92516 1.77565C4.05294 1.70343 4.19461 1.66732 4.35016 1.66732H15.6668C15.8113 1.66732 15.9474 1.70343 16.0752 1.77565C16.2029 1.84787 16.3057 1.95065 16.3835 2.08398L18.6335 5.98398C18.9668 6.55065 19.1446 7.15621 19.1668 7.80065C19.1891 8.4451 19.0529 9.05343 18.7585 9.62565C18.4641 10.1979 18.0446 10.6673 17.5002 11.034ZM15.8335 11.6507C15.2557 11.7062 14.6918 11.6368 14.1418 11.4423C13.5918 11.2479 13.1168 10.9395 12.7168 10.5173C12.3613 10.884 11.9474 11.1673 11.4752 11.3673C11.0029 11.5673 10.5113 11.6673 10.0002 11.6673C9.48905 11.6673 8.99739 11.5673 8.52516 11.3673C8.05294 11.1673 7.64461 10.884 7.30016 10.5173C6.88905 10.9395 6.4085 11.2507 5.8585 11.4507C5.3085 11.6507 4.74461 11.7173 4.16683 11.6507V16.6673H15.8335V11.6507ZM4.81683 3.33398L2.80016 6.85065C2.58905 7.35065 2.58072 7.85621 2.77516 8.36732C2.96961 8.87843 3.31127 9.25343 3.80016 9.49232C4.28905 9.73121 4.79461 9.77565 5.31683 9.62565C5.83905 9.47565 6.23905 9.16176 6.51683 8.68398C6.60572 8.46176 6.75572 8.30898 6.96683 8.22565C7.17794 8.14232 7.39183 8.14232 7.6085 8.22565C7.82516 8.30898 7.97794 8.46176 8.06683 8.68398C8.22239 9.08398 8.47794 9.40343 8.8335 9.64232C9.18905 9.88121 9.57794 10.0007 10.0002 10.0007C10.4224 10.0007 10.8113 9.88121 11.1668 9.64232C11.5224 9.40343 11.7779 9.08398 11.9335 8.68398C12.0224 8.46176 12.1724 8.30898 12.3835 8.22565C12.5946 8.14232 12.8085 8.14232 13.0252 8.22565C13.2418 8.30898 13.3946 8.46176 13.4835 8.68398C13.6279 9.05065 13.8585 9.35065 14.1752 9.58398C14.4918 9.81732 14.8446 9.95065 15.2335 9.98398C15.6224 10.0173 15.9918 9.9451 16.3418 9.76732C16.6918 9.58954 16.9696 9.33676 17.1752 9.00898C17.3807 8.68121 17.4863 8.3201 17.4918 7.92565C17.4974 7.53121 17.4002 7.16732 17.2002 6.83398L15.1835 3.33398H4.8335H4.81683Z"
                fill="white"
              />
            </svg>
            <span>Shops</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/auth/become-seller-login"
            className=" hover:text-kappes "
          >
            Become a Seller
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-transparent shadow-none border-none px-2">
                More
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/faq">FAQs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/terms-&-condition">T&C</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about-us">About Us</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
