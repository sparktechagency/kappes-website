// "use client";
// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import Link from "next/link";
// import provideIcon from "@/common/components/provideIcon";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// function BottomNav() {
//   const rotatingWords = ["Province", "Territory", "City"];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const currentPath = usePathname();

//   // Helper function to check if a path is active
//   const isActive = (href) => {
//     if (!currentPath) return false;
//     // Normalize paths to handle trailing slashes
//     const normalizedCurrentPath = currentPath.split("?")[0].replace(/\/$/, "");
//     const normalizedHref = href.replace(/\/$/, "");

//     // For home page, only match exactly
//     if (normalizedHref === "" || normalizedHref === "/") {
//       return normalizedCurrentPath === "" || normalizedCurrentPath === "/";
//     }

//     // For other routes, check if current path starts with the href and either:
//     // 1. They are exactly equal, or
//     // 2. The next character after href in currentPath is "/" (to avoid partial matches)
//     return (
//       normalizedCurrentPath === normalizedHref ||
//       (normalizedCurrentPath.startsWith(normalizedHref) &&
//         (normalizedCurrentPath.charAt(normalizedHref.length) === "/" ||
//           normalizedCurrentPath.charAt(normalizedHref.length) === ""))
//     );
//   };

//   // Helper function to get link classes based on active state
//   const getLinkClasses = (href, baseClasses = "") => {
//     const active = isActive(href);
//     return `${baseClasses} ${
//       active
//         ? "text-red-800 sm:text-yellow-300 font-semibold"
//         : "hover:text-red-800 sm:hover-text-yellow-200"
//     }`;
//   };

//   const links = [
//     { id: 1, link: "Home", href: "/" },
//     { id: 2, link: "Shop", href: "/shop" },
//     { id: 3, link: "About Us", href: "/about-us" },
//     { id: 4, link: "Contact Us", href: "/contact-us" },
//     { id: 5, link: "Become a Seller", href: "/auth/become-seller-login" },
//     {
//       id: 6,
//       link: "More",
//       href: "/",
//       subLinks: [
//         { id: 1, link: "FAQs", href: "/faq" },
//         { id: 2, link: "T&C", href: "/terms-&-condition" },
//         { id: 3, link: "Privacy Policy", href: "/privacy-policy" },
//         { id: 4, link: "About Us", href: "/about-us" },
//       ],
//     },
//     {
//       id: 7,
//       link: "Categories",
//       href: "/",
//       subLinks: [
//         { id: 1, link: "Shop By Province", href: "/shop-by-province" },
//         { id: 2, link: "Shop By Territory", href: "/shop-by-territory" },
//         { id: 3, link: "Shop By Store", href: "/shop-by-store" },
//         { id: 4, link: "Trades & Services", href: "/trades-&-services" },
//         { id: 5, link: "Deals & Offers", href: "/deals-&-offers" },
//       ],
//     },
//   ];

//   // Check if any category is active
//   const isCategoryActive = () => {
//     if (!currentPath) return false;
//     const categoryPaths = [
//       "/shop-by-province",
//       "/shop-by-territory",
//       "/shop-by-store",
//       "/trades-&-services",
//       "/deals-&-offers",
//     ];
//     return categoryPaths.some((path) => isActive(path));
//   };

//   // Check if any "More" item is active
//   const isMoreActive = () => {
//     if (!currentPath) return false;
//     const morePaths = ["/faq", "/terms-&-condition", "/privacy-policy"];
//     return morePaths.some((path) => isActive(path));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
//     }, 1250); // 1s display + 0.5s animation in/out

//     return () => clearInterval(interval);
//   }, []);

//   const containerVariants = {
//     initial: {},
//     animate: {
//       transition: {
//         staggerChildren: 0.25, // delay between each drop
//       },
//     },
//   };

//   // Each word drops in from the top
//   const itemVariants = {
//     initial: { opacity: 0, y: -30 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 300 },
//     },
//   };
//   return (
//     <div>
//       <div className="flex items-center justify-between w-full py-4 border-b border-gray-300 bg-kappes  lg:px-32 text-white font-comfortaa">
//         <div className="flex items-center space-x-4">
//           {/* Mobile Menu Drawer */}
//           <div className="md:hidden block ">
//             <Drawer>
//               <DrawerTrigger asChild>
//                 <Button variant="ghost" className="p-0 h-auto w-auto mt-1">
//                   {provideIcon({ name: "menu" })}
//                 </Button>
//               </DrawerTrigger>
//               <DrawerContent className="max-w-full">
//                 <DrawerHeader>
//                   <DrawerTitle>Menu</DrawerTitle>
//                 </DrawerHeader>
//                 <div className="p-4 space-y-4">
//                   <Link
//                     href="/"
//                     className={getLinkClasses(
//                       "/",
//                       "block py-2 hover:text-kappes"
//                     )}
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     href="/shop"
//                     className={getLinkClasses(
//                       "/shop",
//                       "block py-2 hover:text-kappes flex gap-2 items-center "
//                     )}
//                   >
//                     <span className="">{provideIcon({ name: "shop" })}</span>
//                     <span>Shop</span>
//                   </Link>
//                   <Link
//                     href="/about-us"
//                     className={getLinkClasses(
//                       "/about-us",
//                       "block py-2 hover:text-kappes"
//                     )}
//                   >
//                     About Us
//                   </Link>
//                   <Link
//                     href="/contact-us"
//                     className={getLinkClasses(
//                       "/contact-us",
//                       "block py-2 hover:text-kappes"
//                     )}
//                   >
//                     Contact Us
//                   </Link>
//                   <div className="space-y-2">
//                     <p
//                       className={`font-medium ${
//                         isMoreActive() ? "text-yellow-300" : ""
//                       }`}
//                     >
//                       More
//                     </p>
//                     <Link
//                       href="/faq"
//                       className={getLinkClasses(
//                         "/faq",
//                         "block py-1 pl-4 hover:text-kappes "
//                       )}
//                     >
//                       FAQs
//                     </Link>
//                     <Link
//                       href="/terms-&-condition"
//                       className={getLinkClasses(
//                         "/terms-&-condition",
//                         "block py-1 pl-4 hover:text-kappes"
//                       )}
//                     >
//                       T&C
//                     </Link>
//                     <Link
//                       href="/privacy-policy"
//                       className={getLinkClasses(
//                         "/privacy-policy",
//                         "block py-1 pl-4 hover:text-kappes"
//                       )}
//                     >
//                       Privacy Policy
//                     </Link>
//                     <Link
//                       href="/about-us"
//                       className={getLinkClasses(
//                         "/about-us",
//                         "block py-1 pl-4 hover:text-kappes"
//                       )}
//                     >
//                       About Us
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="p-4 border-t">
//                   <DrawerClose asChild>
//                     <Button variant="outline" className="w-full">
//                       Close
//                     </Button>
//                   </DrawerClose>
//                 </div>
//               </DrawerContent>
//             </Drawer>
//           </div>

//           {/* Categories Dropdown - visible on all screens */}
//           <DropdownMenu modal={false}>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 className={`bg-transparent shadow-none border-none px-2  ${
//                   isCategoryActive() ? "text-yellow-300 font-semibold" : ""
//                 }`}
//               >
//                 Categories
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="w-56">
//               <DropdownMenuGroup>
//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/shop-by-province"
//                     className={`flex items-center gap-2 ${
//                       isActive("/shop-by-province")
//                         ? "bg-kappes text-white font-semibold"
//                         : ""
//                     }`}
//                   >
//                     {provideIcon({ name: "searchByProvince" })} Shop By{" "}
//                     <div className="h-6 overflow-hidden relative w-[90px]">
//                       <AnimatePresence mode="wait">
//                         <motion.span
//                           key={rotatingWords[currentIndex]}
//                           initial={{ y: -30, opacity: 0 }}
//                           animate={{ y: 2, opacity: 1 }}
//                           exit={{ y: 30, opacity: 0 }}
//                           transition={{
//                             duration: 0.25, // fast drop in and out
//                             ease: "easeOut",
//                           }}
//                           className="absolute font-bold"
//                         >
//                           {rotatingWords[currentIndex]}
//                         </motion.span>
//                       </AnimatePresence>
//                     </div>
//                   </Link>
//                 </DropdownMenuItem>

//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/shop-by-store"
//                     className={`flex items-center gap-2 ${
//                       isActive("/shop-by-store")
//                         ? "bg-kappes text-white font-semibold"
//                         : ""
//                     }`}
//                   >
//                     {provideIcon({ name: "shopByStore" })} Shop By Store
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/trades-&-services"
//                     className={`flex items-center gap-2 ${
//                       isActive("/trades-&-services")
//                         ? "bg-kappes text-white font-semibold"
//                         : ""
//                     }`}
//                   >
//                     {provideIcon({ name: "tradesAndService" })} Trades &
//                     Services
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/deals-&-offers"
//                     className={`flex items-center gap-2 ${
//                       isActive("/deals-&-offers")
//                         ? "bg-kappes text-white font-semibold"
//                         : ""
//                     }`}
//                   >
//                     {provideIcon({ name: "dealsAndOffer" })} Deals & Offers
//                   </Link>
//                 </DropdownMenuItem>
//               </DropdownMenuGroup>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>

//         {/* Desktop Navigation - hidden on mobile */}
//         <div className="md:flex items-center gap-4 hidden">
//           <Link href="/" className={getLinkClasses("/")}>
//             Home
//           </Link>
//           <Link
//             href="/shop"
//             className={getLinkClasses(
//               "/shop",
//               "hover:text-yellow-200 flex gap-2 items-center"
//             )}
//           >
//             <span>{provideIcon({ name: "shop" })}</span>
//             <span>Shop</span>
//           </Link>
//           <Link href="/about-us" className={getLinkClasses("/about-us")}>
//             About Us
//           </Link>
//           <Link href="/contact-us" className={getLinkClasses("/contact-us")}>
//             Contact Us
//           </Link>
//           <DropdownMenu modal={false}>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 className={`bg-transparent shadow-none border-none px-2 ${
//                   isMoreActive() ? "text-yellow-300 font-semibold" : ""
//                 }`}
//               >
//                 More
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="w-44">
//               <DropdownMenuGroup>
//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/faq"
//                     className={
//                       isActive("/faq")
//                         ? "bg-kappes text-white font-semibold"
//                         : ""
//                     }
//                   >
//                     FAQs
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/terms-&-condition"
//                     className={
//                       isActive("/terms-&-condition")
//                         ? "bg-kappes text-white font-semibold"
//                         : ""
//                     }
//                   >
//                     T&C
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/privacy-policy"
//                     className={
//                       isActive("/privacy-policy")
//                         ? "bg-kappes text-white font-semibold"
//                         : ""
//                     }
//                   >
//                     Privacy Policy
//                   </Link>
//                 </DropdownMenuItem>
//               </DropdownMenuGroup>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>

//         {/* Become a Seller - visible on all screens */}
//         <div className="flex items-center space-x-4 ">
//           <Link
//             href="/auth/become-seller-login"
//             className={getLinkClasses(
//               "/auth/become-seller-login",
//               "hover:text-yellow-200"
//             )}
//           >
//             Become a Seller
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BottomNav;

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
    return `${baseClasses} ${
      active ? "text-yellow-200  font-semibold" : "hover:text-yellow-200"
    }`;
  };

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
    { id: 2, link: "Shop", href: "/shop" },
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
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Drawer */}
          <div className="md:hidden block ">
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
                    href="/shop"
                    className={getDrawerLinkClasses(
                      "/shop",
                      "block py-2 flex gap-2 items-center"
                    )}
                  >
                    <span className="">{provideIcon({ name: "shop" })}</span>
                    <span>Shop</span>
                  </Link>
                  <Link
                    href="/about-us"
                    className={getDrawerLinkClasses("/about-us", "block py-2")}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className={getDrawerLinkClasses(
                      "/contact-us",
                      "block py-2"
                    )}
                  >
                    Contact Us
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

          {/* Categories Dropdown - visible on all screens */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                className={`bg-transparent shadow-none border-none px-2  ${
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
                <DropdownMenuItem asChild>
                  <Link
                    href="/trades-&-services"
                    className={`flex items-center gap-2 ${
                      isActive("/trades-&-services")
                        ? "bg-kappes text-white font-semibold"
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
            <span>{provideIcon({ name: "shop" })}</span>
            <span>Shop</span>
          </Link>
          <Link href="/about-us" className={getLinkClasses("/about-us")}>
            About Us
          </Link>
          <Link href="/contact-us" className={getLinkClasses("/contact-us")}>
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
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Become a Seller - visible on all screens */}
        <div className="flex items-center space-x-4 ">
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
