import React, { createContext, useContext, useState } from "react";
import type { Article } from "../services/HomeService/types/news";

type NewsContextType = {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
};

const NewsContext = createContext<NewsContextType>({
  articles: [],
  setArticles: () => {},
});

export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  return (
    <NewsContext.Provider value={{ articles, setArticles }}>
      {children}
    </NewsContext.Provider>
  );
};
