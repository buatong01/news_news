import React, { createContext, useContext, useState } from "react";
import type { Article } from "../services/HomeService/type";

type NewsContextType = {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
  everythingArticles: Article[];
  setEverythingArticles: (articles: Article[]) => void;
  category: string;
  setCategory: (cat: string) => void;
};

const NewsContext = createContext<NewsContextType>({
  articles: [],
  setArticles: () => {},
  everythingArticles: [],
  setEverythingArticles: () => {},
  category: "",
  setCategory: () => {},
});

export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [everythingArticles, setEverythingArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState("");

  return (
    <NewsContext.Provider
      value={{
        articles,
        setArticles,
        everythingArticles,
        setEverythingArticles,
        category,
        setCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
