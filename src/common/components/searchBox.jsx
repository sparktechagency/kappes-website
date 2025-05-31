// import Link from "next/link";
// import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";

// function SearchBox({
//   placeholder = "Search products",
//   handleSearch,
//   searchServices = [],
// }) {
//   const [inputValue, setInputValue] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);

//     const filteredSuggestions = searchServices.filter((service) =>
//       service.serviceName.toLowerCase().includes(value.toLowerCase())
//     );
//     setSuggestions(value ? filteredSuggestions : []);
//   };

//   const handleSelectSuggestion = (suggestion) => {
//     setInputValue(suggestion.serviceName);
//     setSuggestions([]);
//     handleSearch?.(suggestion.serviceName);
//   };

//   const onSearchClick = () => {
//     handleSearch?.(inputValue);
//     setSuggestions([]);
//   };

//   return (
//     <div className="relative flex items-center justify-center sm:px-10 md:px-28">
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder={placeholder}
//         className="w-full px-5 font-light font-sans sm:max-w-full p-2 h-10 border bg-gray-200 border-gray-300 rounded-l-md focus:outline-none focus:border focus:border-gray-500"
//       />
//       <button
//         onClick={onSearchClick}
//         className="bg-kappes h-10 w-10 md:min-w-12 lg:min-w-14 flex items-center justify-center rounded-r-md"
//       >
//         <FiSearch className="text-gray-200" />
//       </button>

//       {/* Suggestions dropdown */}
//       {suggestions.length > 0 && (
//         <ul className="absolute top-full mt-1 left-0 right-0 bg-white border border-gray-300 rounded max-w-4xl mx-auto shadow-lg z-10 max-h-48 overflow-y-auto">
//           {suggestions.map((suggestion) => (
//             <Link
//               href={`/trades-&-services/${suggestion.id}`}
//               key={suggestion.id}
//               onClick={() => handleSelectSuggestion(suggestion)}
//             >
//               <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
//                 {suggestion.serviceName}
//               </li>
//             </Link>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default SearchBox;
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
      service.serviceName.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? filteredSuggestions : []);
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion.serviceName);
    setSuggestions([]);
    handleSearch?.(suggestion.serviceName);
  };

  const onSearchClick = () => {
    handleSearch?.(inputValue);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex w-full">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="flex-1 px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-l-md focus:outline-none bg-gray-100 focus:ring-1 focus:ring-gray-500"
        />
        <button
          onClick={onSearchClick}
          className="bg-kappes px-4 sm:px-5 lg:px-6 text-white rounded-r-md flex items-center justify-center"
          aria-label="Search"
        >
          <FiSearch className="text-white text-lg" />
        </button>
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <Link
              href={`/trades-&-services/${suggestion.id}`}
              key={suggestion.id}
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              <li className="px-4 py-2 text-sm sm:text-base cursor-pointer hover:bg-gray-100">
                {suggestion.serviceName}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
