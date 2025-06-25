import React, { createContext, useContext, useState } from "react";
import type { Article } from "../services/HomeService/type";

type SearchContextType = {
  searchArticles: Article[];
  setSearchArtivles: (seachArticles: Article[]) => void;
};

const SearchContext = createContext<SearchContextType>({
  searchArticles: [],
  setSearchArtivles: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchArticles, setSearchArtivles] = useState<Article[]>([]);

  return (
    <SearchContext.Provider value={{ searchArticles, setSearchArtivles }}>
      {children}
    </SearchContext.Provider>
  );
};
