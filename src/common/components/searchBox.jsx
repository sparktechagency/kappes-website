import React from "react";
import { FiSearch } from "react-icons/fi";
function SearchBox({ palceHolder }) {
  console.log("palceHolder", palceHolder);
  return (
    <div className="flex items-center justify-center w-full   sm:px-10 md:px-28 ">
      <input
        type="text"
        placeholder={palceHolder || "Search products"}
        className="w-full px-5 font-light font-sans  sm:max-w-full p-2 h-10 border bg-gray-200 border-gray-300 rounded-l-md focus:outline-none focus:border focus:border-gray-500 "
      />
      <button className="bg-kappes h-10 min-w-16  flex items-center justify-center rounded-r-md ">
        <FiSearch className="text-gray-200" />
      </button>
    </div>
  );
}

export default SearchBox;
