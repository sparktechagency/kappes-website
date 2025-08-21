"use client";
import React, { useEffect, useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
function BottomNav() {
  const rotatingWords = ["Province", "Territory", "City"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPath = usePathname();

  // Helper function to check if a path is active
  const isActive = (href) => {
    if (!currentPath) return false;
    // Normalize paths to handle trailing slashes
    const normalizedCurrentPath = currentPath.split("?")[0].replace(/\/$/, "");
    const normalizedHref = href.replace(/\/$/, "");

    // For home page, only match exactly
    if (normalizedHref === "" || normalizedHref === "/") {
      return normalizedCurrentPath === "" || normalizedCurrentPath === "/";
    }

    // For other routes, check if current path starts with the href and either:
    // 1. They are exactly equal, or
    // 2. The next character after href in currentPath is "/" (to avoid partial matches)
    return (
      normalizedCurrentPath === normalizedHref ||
      (normalizedCurrentPath.startsWith(normalizedHref) &&
        (normalizedCurrentPath.charAt(normalizedHref.length) === "/" ||
          normalizedCurrentPath.charAt(normalizedHref.length) === ""))
    );
  };

  // Helper function to get link classes based on active state
  const getLinkClasses = (href, baseClasses = "") => {
    const active = isActive(href);
    return `${baseClasses} transition-all duration-300 ease-in-out relative ${
      active ? "" : ""
    }`;
  };

  // Custom Link component with hover animation
  const AnimatedLink = ({ href, children, className = "" }) => {
    const active = isActive(href);

    return (
      <Link href={href} className={`${className} relative group`}>
        {children}
        {/* Active state underline */}
        {active && (
          <div className="absolute bottom-[-4px] left-0 h-[2px] bg-white w-full" />
        )}
        {/* Hover state underline */}
        {!active && (
          <div className="absolute bottom-[-4px] left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
        )}
      </Link>
    );
  };

  // Custom Shop Dropdown Button with hover animation
  const ShopDropdownButton = React.forwardRef((props, ref) => {
    const active = isShopActive();

    return (
      <button
        ref={ref}
        {...props}
        className={`bg-transparent px-2 flex gap-2 items-center transition-all duration-300 ease-in-out relative group cursor-pointer text-white ${
          active ? "" : ""
        }`}
      >
        <span>{provideIcon({ name: "shop" })}</span>
        <span>Shop</span>
        {/* Active state underline */}
        {active && (
          <div className="absolute bottom-[-4px] left-0 h-[2px] bg-white w-full" />
        )}
        {/* Hover state underline */}
        {!active && (
          <div className="absolute bottom-[-4px] left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
        )}
      </button>
    );
  });

  ShopDropdownButton.displayName = "ShopDropdownButton";

  // Helper function specifically for drawer menu items
  const getDrawerLinkClasses = (href, baseClasses = "") => {
    const active = isActive(href);
    return `${baseClasses} ${
      active ? "text-red-800 font-semibold" : "hover:text-red-700"
    }`;
  };

  // Helper function for drawer submenu items (More section)
  const getDrawerSubLinkClasses = (href, baseClasses = "") => {
    const active = isActive(href);
    return `${baseClasses} ${
      active ? "text-red-800 font-semibold" : "hover:text-red-700"
    }`;
  };

  const links = [
    { id: 1, link: "Home", href: "/" },
    {
      id: 2,
      link: "Shop",
      href: "/shop",
      subLinks: [
        { id: 1, link: "All Products", href: "/shop" },
        { id: 2, link: "Shop By Province", href: "/shop-by-province" },
        { id: 3, link: "Shop By Territory", href: "/shop-by-territory" },
        { id: 4, link: "Shop By Store", href: "/shop-by-store" },
        { id: 5, link: "Trades & Services", href: "/trades-&-services" },
        { id: 6, link: "Deals & Offers", href: "/deals-&-offers" },
      ],
    },
    { id: 3, link: "About Us", href: "/about-us" },
    { id: 4, link: "Contact Us", href: "/contact-us" },
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
  ];

  // Check if any shop item is active
  const isShopActive = () => {
    if (!currentPath) return false;
    const shopPaths = [
      "/shop",
      "/shop-by-province",
      "/shop-by-territory",
      "/shop-by-store",
    ];
    return shopPaths.some((path) => isActive(path));
  };

  // Check if any "More" item is active
  const isMoreActive = () => {
    if (!currentPath) return false;
    const morePaths = ["/faq", "/terms-&-condition", "/privacy-policy"];
    return morePaths.some((path) => isActive(path));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 1250); // 1s display + 0.5s animation in/out

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.25, // delay between each drop
      },
    },
  };

  // Each word drops in from the top
  const itemVariants = {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300 },
    },
  };
  return (
    <div>
      <div className="flex items-center justify-between w-full py-4 border-b border-gray-300 bg-kappes  lg:px-32 text-white font-comfortaa">
        {/* Mobile Menu Drawer - stays on left */}
        <div className="md:hidden flex items-center">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" className="p-0 h-auto w-auto mt-1">
                {provideIcon({ name: "menu" })}
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-w-full">
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <Link
                  href="/"
                  className={getDrawerLinkClasses("/", "block py-2")}
                >
                  Home
                </Link>

                <Link
                  href="/trades-&-services"
                  className={getDrawerLinkClasses(
                    "/trades-&-services",
                    "block py-2"
                  )}
                >
                  Trades & Services
                </Link>

                {/* Shop Section with Sub-items */}
                <div className="space-y-2">
                  <p
                    className={`font-medium flex gap-2 items-center ${
                      isShopActive() ? "text-red-800" : ""
                    }`}
                  >
                    <span>{provideIcon({ name: "shop" })}</span>
                    <span>Shop</span>
                  </p>
                  <Link
                    href="/shop"
                    className={getDrawerSubLinkClasses(
                      "/shop",
                      "block py-1 pl-4"
                    )}
                  >
                    All Products
                  </Link>
                  <Link
                    href="/shop-by-province"
                    className={getDrawerSubLinkClasses(
                      "/shop-by-province",
                      "block py-1 pl-4"
                    )}
                  >
                    Shop By Province, Territory, City
                  </Link>

                  <Link
                    href="/shop-by-store"
                    className={getDrawerSubLinkClasses(
                      "/shop-by-store",
                      "block py-1 pl-4"
                    )}
                  >
                    Shop By Store
                  </Link>
                </div>

                <Link
                  href="/deals-&-offers"
                  className={getDrawerLinkClasses(
                    "/deals-&-offers",
                    "block py-2"
                  )}
                >
                  Deals & Offers
                </Link>

                <Link
                  href="/auth/become-seller-login"
                  className={getDrawerLinkClasses(
                    "/auth/become-seller-login",
                    "block py-2"
                  )}
                >
                  Become a Seller
                </Link>
                <div className="space-y-2">
                  <p
                    className={`font-medium ${
                      isMoreActive() ? "text-red-800" : ""
                    }`}
                  >
                    More
                  </p>
                  <Link
                    href="/faq"
                    className={getDrawerSubLinkClasses(
                      "/faq",
                      "block py-1 pl-4"
                    )}
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/terms-&-condition"
                    className={getDrawerSubLinkClasses(
                      "/terms-&-condition",
                      "block py-1 pl-4"
                    )}
                  >
                    T&C
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className={getDrawerSubLinkClasses(
                      "/privacy-policy",
                      "block py-1 pl-4"
                    )}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/about-us"
                    className={getDrawerSubLinkClasses(
                      "/about-us",
                      "block py-1 pl-4"
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

        {/* Desktop Navigation - centered */}
        <div className="hidden md:flex items-center flex-1 justify-center space-x-8">
          <AnimatedLink href="/" className={getLinkClasses("/")}>
            Home
          </AnimatedLink>
          <AnimatedLink
            href="/trades-&-services"
            className={getLinkClasses("/trades-&-services")}
          >
            Trades & Services
          </AnimatedLink>

          {/* Shop Dropdown moved to middle */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <ShopDropdownButton />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link
                    href="/shop"
                    className={`flex items-center gap-2 ${
                      isActive("/shop")
                        ? "bg-kappes text-white font-semibold"
                        : ""
                    }`}
                  >
                    {provideIcon({ name: "shop" })} All Products
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/shop-by-province"
                    className={`flex items-center gap-2 ${
                      isActive("/shop-by-province")
                        ? "bg-kappes text-white font-semibold"
                        : ""
                    }`}
                  >
                    {provideIcon({ name: "searchByProvince" })} Shop By{" "}
                    <div className="h-6 overflow-hidden relative w-[90px]">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={rotatingWords[currentIndex]}
                          initial={{ y: -30, opacity: 0 }}
                          animate={{ y: 2, opacity: 1 }}
                          exit={{ y: 30, opacity: 0 }}
                          transition={{
                            duration: 0.25, // fast drop in and out
                            ease: "easeOut",
                          }}
                          className="absolute font-bold"
                        >
                          {rotatingWords[currentIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
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
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <AnimatedLink
            href="/deals-&-offers"
            className={getLinkClasses("/deals-&-offers")}
          >
            Deals & Offers
          </AnimatedLink>

          <AnimatedLink
            href="/auth/become-seller-login"
            className={`font-semibold shadow-none border-none rounded-md flex gap-2 items-center transition-all duration-300 ease-in-out ${
              isActive("/auth/become-seller-login") ? "" : ""
            }`}
          >
            Become a Seller
          </AnimatedLink>
        </div>

        {/* Empty div for layout balance */}
        <div className="w-6 md:w-0"></div>
      </div>
    </div>
  );
}

export default BottomNav;
