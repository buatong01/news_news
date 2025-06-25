import React, { createContext, useContext, useState } from "react";
import type { Article } from "../services/HomeService/type";

type SearchContextType = {
  searchArticles: Article[];
  setSearchArtivles: (searchArticles: Article[]) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  searchTopic: string;
  setSearchTopic: (search: string) => void;
};

const SearchContext = createContext<SearchContextType>({
  searchArticles: [],
  setSearchArtivles: () => {},
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
  searchTopic: "",
  setSearchTopic: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchArticles, setSearchArtivles] = useState<Article[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTopic, setSearchTopic] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{
        searchArticles,
        setSearchArtivles,
        isDrawerOpen,
        setIsDrawerOpen,
        searchTopic,
        setSearchTopic,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
