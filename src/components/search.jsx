import { useState, useContext, useEffect } from "react";

export const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    const newSearch = e.target.value.toLowerCase();
    onSearch(newSearch);
    setSearch(newSearch);
    console.log(search);
  }

  return (
    <div className="w-[60%] sm:w-[60%]">
      <input
        placeholder="Search for an image"
        className="bg-transparent border rounded-lg p-2 w-[100%] focus:outline-none focus:border-gray-400 text-sm sm:text-base"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};
