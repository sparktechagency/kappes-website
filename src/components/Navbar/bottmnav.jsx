"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import provideIcon from "@/common/components/provideIcon";
import { usePathname } from "next/navigation";

function BottomNav() {
  const currentPath = usePathname();

  // Helper function to check if a path is active
  const isActive = (href) => {
    if (!currentPath) return false;
    // Normalize paths to handle trailing slashes
    const normalizedCurrentPath = currentPath.split("?")[0].replace(/\/$/, "");
    const normalizedHref = href.replace(/\/$/, "");
    // Exact match for home page, partial match for other routes
    return (
      normalizedCurrentPath === normalizedHref ||
      (normalizedHref !== "/" &&
        normalizedCurrentPath.startsWith(normalizedHref))
    );
  };

  // Helper function to get link classes based on active state
  const getLinkClasses = (href, baseClasses = "") => {
    const active = isActive(href);
    return `${baseClasses} ${
      active ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"
    }`;
  };

  const links = [
    { id: 1, link: "Home", href: "/" },
    { id: 2, link: "Shop", href: "/shop" },
    { id: 3, link: "About Us", href: "/about-us" },
    { id: 4, link: "Contact Us", href: "/contact" },
    { id: 5, link: "Become a Seller", href: "/auth/become-seller-login" },
    {
      id: 6,
      link: "More",
      href: "/",
      subLinks: [
        { id: 1, link: "FAQs", href: "/faq" },
        { id: 2, link: "T&C", href: "/terms-&-condition" },
        { id: 3, link: "Privacy Policy", href: "/privacy-policy" },
        { id: 4, link: "About Us", href: "/about-us" },
      ],
    },
    {
      id: 7,
      link: "Categories",
      href: "/",
      subLinks: [
        { id: 1, link: "Shop By Province", href: "/shop-by-province" },
        { id: 2, link: "Shop By Territory", href: "/shop-by-territory" },
        { id: 3, link: "Shop By Store", href: "/shop-by-store" },
        { id: 4, link: "Trades & Services", href: "/trades-&-services" },
        { id: 5, link: "Deals & Offers", href: "/deals-&-offers" },
      ],
    },
  ];

  // Check if any category is active
  const isCategoryActive = () => {
    if (!currentPath) return false;
    const categoryPaths = [
      "/shop-by-province",
      "/shop-by-territory",
      "/shop-by-store",
      "/trades-&-services",
      "/deals-&-offers",
    ];
    return categoryPaths.some((path) => isActive(path));
  };

  // Check if any "More" item is active
  const isMoreActive = () => {
    if (!currentPath) return false;
    const morePaths = ["/faq", "/terms-&-condition", "/privacy-policy"];
    return morePaths.some((path) => isActive(path));
  };

  return (
    <div>
      <div className="flex items-center justify-between w-full py-4 border-b border-gray-300 bg-kappes lg:px-32 text-white font-comfortaa">
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Drawer */}
          <div className="md:hidden block">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto w-auto">
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
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-w-xs">
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <div className="p-4 space-y-4">
                  <Link
                    href="/"
                    className={getLinkClasses(
                      "/",
                      "block py-2 hover:text-kappes"
                    )}
                  >
                    Home
                  </Link>
                  <Link
                    href="/shop"
                    className={getLinkClasses(
                      "/shop",
                      "block py-2 hover:text-kappes flex gap-2 items-center"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.5002 11.034V16.6673H18.3335V18.334H1.66683V16.6673H2.50016V11.034C1.97794 10.6895 1.56961 10.2395 1.27516 9.68398C0.980718 9.12843 0.833496 8.53954 0.833496 7.91732C0.833496 7.21732 1.01127 6.57843 1.36683 6.00065L3.61683 2.08398C3.69461 1.95065 3.79739 1.84787 3.92516 1.77565C4.05294 1.70343 4.19461 1.66732 4.35016 1.66732H15.6668C15.8113 1.66732 15.9474 1.70343 16.0752 1.77565C16.2029 1.84787 16.3057 1.95065 16.3835 2.08398L18.6335 5.98398C18.9668 6.55065 19.1446 7.15621 19.1668 7.80065C19.1891 8.4451 19.0529 9.05343 18.7585 9.62565C18.4641 10.1979 18.0446 10.6673 17.5002 11.034ZM15.8335 11.6507C15.2557 11.7062 14.6918 11.6368 14.1418 11.4423C13.5918 11.2479 13.1168 10.9395 12.7168 10.5173C12.3613 10.884 11.9474 11.1673 11.4752 11.3673C11.0029 11.5673 10.5113 11.6673 10.0002 11.6673C9.48905 11.6673 8.99739 11.5673 8.52516 11.3673C8.05294 11.1673 7.64461 10.884 7.30016 10.5173C6.88905 10.9395 6.4085 11.2507 5.8585 11.4507C5.3085 11.6507 4.74461 11.7173 4.16683 11.6507V16.6673H15.8335V11.6507ZM4.81683 3.33398L2.80016 6.85065C2.58905 7.35065 2.58072 7.85621 2.77516 8.36732C2.96961 8.87843 3.31127 9.25343 3.80016 9.49232C4.28905 9.73121 4.79461 9.77565 5.31683 9.62565C5.83905 9.47565 6.23905 9.16176 6.51683 8.68398C6.60572 8.46176 6.75572 8.30898 6.96683 8.22565C7.17794 8.14232 7.39183 8.14232 7.6085 8.22565C7.82516 8.30898 7.97794 8.46176 8.06683 8.68398C8.22239 9.08398 8.47794 9.40343 8.8335 9.64232C9.18905 9.88121 9.57794 10.0007 10.0002 10.0007C10.4224 10.0007 10.8113 9.88121 11.1668 9.64232C11.5224 9.40343 11.7779 9.08398 11.9335 8.68398C12.0224 8.46176 12.1724 8.30898 12.3835 8.22565C12.5946 8.14232 12.8085 8.14232 13.0252 8.22565C13.2418 8.30898 13.3946 8.46176 13.4835 8.68398C13.6279 9.05065 13.8585 9.35065 14.1752 9.58398C14.4918 9.81732 14.8446 9.95065 15.2335 9.98398C15.6224 10.0173 15.9918 9.9451 16.3418 9.76732C16.6918 9.58954 16.9696 9.33676 17.1752 9.00898C17.3807 8.68121 17.4863 8.3201 17.4918 7.92565C17.4974 7.53121 17.4002 7.16732 17.2002 6.83398L15.1835 3.33398H4.8335H4.81683Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>Shop</span>
                  </Link>
                  <Link
                    href="/about-us"
                    className={getLinkClasses(
                      "/about-us",
                      "block py-2 hover:text-kappes"
                    )}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className={getLinkClasses(
                      "/contact",
                      "block py-2 hover:text-kappes"
                    )}
                  >
                    Contact Us
                  </Link>
                  <div className="space-y-2">
                    <p
                      className={`font-medium ${
                        isMoreActive() ? "text-yellow-300" : ""
                      }`}
                    >
                      More
                    </p>
                    <Link
                      href="/faq"
                      className={getLinkClasses(
                        "/faq",
                        "block py-1 pl-4 hover:text-kappes "
                      )}
                    >
                      FAQs
                    </Link>
                    <Link
                      href="/terms-&-condition"
                      className={getLinkClasses(
                        "/terms-&-condition",
                        "block py-1 pl-4 hover:text-kappes"
                      )}
                    >
                      T&C
                    </Link>
                    <Link
                      href="/privacy-policy"
                      className={getLinkClasses(
                        "/privacy-policy",
                        "block py-1 pl-4 hover:text-kappes"
                      )}
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/about-us"
                      className={getLinkClasses(
                        "/about-us",
                        "block py-1 pl-4 hover:text-kappes"
                      )}
                    >
                      About Us
                    </Link>
                  </div>
                </div>
                <div className="p-4 border-t">
                  <DrawerClose asChild>
                    <Button variant="outline" className="w-full">
                      Close
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Categories Dropdown - visible on all screens */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                className={`bg-transparent shadow-none border-none px-2 ${
                  isCategoryActive() ? "text-yellow-300 font-semibold" : ""
                }`}
              >
                Categories
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link
                    href="/shop-by-province"
                    className={`flex items-center gap-2 ${
                      isActive("/shop-by-province")
                        ? "bg-kappes text-white font-semibold"
                        : ""
                    }`}
                  >
                    {provideIcon({ name: "searchByProvince" })} Shop By Province
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/shop-by-territory"
                    className={`flex items-center gap-2 ${
                      isActive("/shop-by-territory")
                        ? "bg-kappes text-white font-semibold"
                        : ""
                    }`}
                  >
                    {provideIcon({ name: "searchByTerritory" })} Shop By
                    Territory
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/shop-by-store"
                    className={`flex items-center gap-2 ${
                      isActive("/shop-by-store")
                        ? "bg-kappes text-white font-semibold"
                        : ""
                    }`}
                  >
                    {provideIcon({ name: "shopByStore" })} Shop By Store
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/trades-&-services"
                    className={`flex items-center gap-2 ${
                      isActive("/trades-&-services")
                        ? "bg-kappes text-whitefont-semibold"
                        : ""
                    }`}
                  >
                    {provideIcon({ name: "tradesAndService" })} Trades &
                    Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/deals-&-offers"
                    className={`flex items-center gap-2 ${
                      isActive("/deals-&-offers")
                        ? "bg-kappes text-white font-semibold"
                        : ""
                    }`}
                  >
                    {provideIcon({ name: "dealsAndOffer" })} Deals & Offers
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="md:flex items-center gap-4 hidden">
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>
          <Link
            href="/shop"
            className={getLinkClasses(
              "/shop",
              "hover:text-yellow-200 flex gap-2 items-center"
            )}
          >
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
            <span>Shop</span>
          </Link>
          <Link href="/about-us" className={getLinkClasses("/about-us")}>
            About Us
          </Link>
          <Link href="/contact-us" className={getLinkClasses("/contact")}>
            Contact Us
          </Link>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                className={`bg-transparent shadow-none border-none px-2 ${
                  isMoreActive() ? "text-yellow-300 font-semibold" : ""
                }`}
              >
                More
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link
                    href="/faq"
                    className={
                      isActive("/faq")
                        ? "bg-kappes text-white font-semibold"
                        : ""
                    }
                  >
                    FAQs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/terms-&-condition"
                    className={
                      isActive("/terms-&-condition")
                        ? "bg-kappes text-white font-semibold"
                        : ""
                    }
                  >
                    T&C
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/privacy-policy"
                    className={
                      isActive("/privacy-policy")
                        ? "bg-kappes text-white font-semibold"
                        : ""
                    }
                  >
                    Privacy Policy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/about-us"
                    className={
                      isActive("/about-us")
                        ? "bg-kappes text-white font-semibold"
                        : ""
                    }
                  >
                    About Us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Become a Seller - visible on all screens */}
        <div className="flex items-center space-x-4">
          <Link
            href="/auth/become-seller-login"
            className={getLinkClasses(
              "/auth/become-seller-login",
              "hover:text-yellow-200"
            )}
          >
            Become a Seller
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
