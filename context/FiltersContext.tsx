import { createContext, useEffect, useState } from "react";
import { FilterParams } from "types/Movie";

const initialValue: FilterParams = {
  genre: "-1",
  year: 2022,
  page: 1,
  sortBy: "popularity.desc",
};

export const FiltersContext = createContext<{
  filters: FilterParams;
  handleSortBy: (sortBy: string) => void;
  handleYear: (year: number) => void;
  handleGenre: (genre: string) => void;
}>({
  filters: initialValue,
  handleSortBy: (sortBy: string) => sortBy,
  handleYear: (year: number) => year,
  handleGenre: (genre: string) => genre,
});

export const FiltersProvider = ({ children }: any) => {
  const [filters, setFilters] = useState<FilterParams>(initialValue);

  const handleGenre = (genre: string) => {
    setFilters({
      ...filters,
      genre,
    });
  };

  const handleYear = (year: number) => {
    setFilters({
      ...filters,
      year,
    });
  };

  const handleSortBy = (sortBy: string) => {
    setFilters({
      ...filters,
      sortBy,
    });
  };

  return (
    <FiltersContext.Provider
      value={{ filters, handleGenre, handleYear, handleSortBy }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
