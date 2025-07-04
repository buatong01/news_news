import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Article } from "../services/HomeService/type";

interface PaginationContextType {
  paginationArticles: Article[];
  setPaginationArticles: (articles: Article[]) => void;
}

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined
);

interface PaginationProviderProps {
  children: ReactNode;
}

export function PaginationProvider({ children }: PaginationProviderProps) {
  const [paginationArticles, setPaginationArticles] = useState<Article[]>([]);

  const value: PaginationContextType = {
    paginationArticles,
    setPaginationArticles,
  };

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
}

export function usePaginationContext() {
  const context = useContext(PaginationContext);
  if (context === undefined) {
    throw new Error(
      "usePaginationContext must be used within a PaginationProvider"
    );
  }
  return context;
}
