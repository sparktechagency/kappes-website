// import SearchBox from "@/common/components/searchBox";
// import Image from "next/image";
// import React from "react";
// import { HiOutlineShoppingCart } from "react-icons/hi";
// import { FaRegUser } from "react-icons/fa";
// import Link from "next/link";

// function TopNav() {
//   return (
//     <nav className="bg-white h-16 gap-2 border border-gray-200 dark:bg-gray-900 flex items-center justify-between px-2 py-3.5 sm:px-6">
//       <Image
//         src="/assets/topnavimg.png"
//         alt="Website Logo"
//         width={100}
//         height={100}
//       />
//       <div className="flex-1">
//         <SearchBox />
//       </div>

//       <div className="flex items-center justify-center gap-2 border h-10 w-16 md:w-32  flex-initial">
//         <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
//           <HiOutlineShoppingCart size={25} />
//         </button>
//         <Link href="/cart" className="flex items-center gap-2">
//           <FaRegUser />
//           <p className="hidden md:visible">Sign In</p>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default TopNav;

import SearchBox from "@/common/components/searchBox";
import Image from "next/image";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

function TopNav() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex  sm:flex-row items-center justify-center sm:justify-between gap-3 lg:px-32">
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

      {/* Right section: icons */}
      <div className="flex items-center gap-2 mt-2 sm:mt-0">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <HiOutlineShoppingCart size={24} />
        </button>

        <Link
          href="/cart"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
        >
          <FaRegUser size={20} />
          <span className="hidden md:inline">Sign In</span>
        </Link>
      </div>
    </nav>
  );
}

export default TopNav;
