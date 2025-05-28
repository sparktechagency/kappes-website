import Link from "next/link";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function SearchBox({
  placeholder = "Search products",
  handleSearch,
  searchServices = [],
}) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredSuggestions = searchServices.filter((service) =>
      service.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? filteredSuggestions : []);
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    handleSearch?.(suggestion);
  };

  const onSearchClick = () => {
    handleSearch?.(inputValue);
    setSuggestions([]);
  };

  return (
    <div className="relative  flex items-center justify-center   sm:px-10 md:px-28">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full px-5 font-light font-sans sm:max-w-full p-2 h-10 border bg-gray-200 border-gray-300 rounded-l-md focus:outline-none focus:border focus:border-gray-500"
      />
      <button
        onClick={onSearchClick}
        className="bg-kappes h-10 min-w-16 flex items-center justify-center rounded-r-md"
      >
        <FiSearch className="text-gray-200" />
      </button>

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <ul className="absolute top-full mt-1 left-0 right-0 bg-white border border-gray-300 rounded max-w-4xl mx-auto  shadow-lg z-10 max-h-48 overflow-y-auto">
          {suggestions.map((suggestion, idx) => (
            <Link href={`/${suggestion}`} key={idx}>
              <li
                key={idx}
                onClick={() => handleSelectSuggestion(suggestion)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {suggestion}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
