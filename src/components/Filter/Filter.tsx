"use client";
import { FC, useState } from "react";

export interface FilterOption {
  label: string;
  value: string;
}

interface FilterProps {
  filterType: string;
  options: FilterOption[];
  onFilterChange: (selectedFilter: string | null) => void;
}

const Filter: FC<FilterProps> = ({ filterType, options, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedFilter(value);
    onFilterChange(value);
  };

  return (
    <div>
      <select
        value={selectedFilter || ""}
        onChange={handleFilterChange}
        className="border p-2 ml-2"
      >
        <option value="">Filter by {filterType}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
