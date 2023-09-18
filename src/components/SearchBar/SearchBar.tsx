"use client";
import { FC, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center">
      <input
        className="border p-2 mr-2"
        type="text"
        placeholder="Enter your search query"
        value={query}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 text-white p-2"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
