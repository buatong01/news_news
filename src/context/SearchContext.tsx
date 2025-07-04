import React, { createContext, useContext, useState } from "react";
import type { Article } from "../services/HomeService/type";

type SearchContextType = {
  searchArticles: Article[];
  setSearchArtivles: (searchArticles: Article[]) => void;

  searchTopic: string;
  setSearchTopic: (search: string) => void;

  // Search Pagination
  searchPaginationArticles: Article[];
  setSearchPaginationArticles: (articles: Article[]) => void;

  searchCurrentPage: number;
  setSearchCurrentPage: (page: number) => void;

  searchTotalPages: number;
  setSearchTotalPages: (pages: number) => void;

  searchTotalResults: number;
  setSearchTotalResults: (results: number) => void;
};

const SearchContext = createContext<SearchContextType>({
  searchArticles: [],
  setSearchArtivles: () => {},

  searchTopic: "",
  setSearchTopic: () => {},

  // Search Pagination
  searchPaginationArticles: [],
  setSearchPaginationArticles: () => {},

  searchCurrentPage: 1,
  setSearchCurrentPage: () => {},

  searchTotalPages: 0,
  setSearchTotalPages: () => {},

  searchTotalResults: 0,
  setSearchTotalResults: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchArticles, setSearchArtivles] = useState<Article[]>([]);
  const [searchTopic, setSearchTopic] = useState<string>("");

  // Search Pagination states
  const [searchPaginationArticles, setSearchPaginationArticles] = useState<
    Article[]
  >([]);
  const [searchCurrentPage, setSearchCurrentPage] = useState<number>(1);
  const [searchTotalPages, setSearchTotalPages] = useState<number>(0);
  const [searchTotalResults, setSearchTotalResults] = useState<number>(0);

  return (
    <SearchContext.Provider
      value={{
        searchArticles,
        setSearchArtivles,

        searchTopic,
        setSearchTopic,

        // Search Pagination
        searchPaginationArticles,
        setSearchPaginationArticles,

        searchCurrentPage,
        setSearchCurrentPage,

        searchTotalPages,
        setSearchTotalPages,

        searchTotalResults,
        setSearchTotalResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
