import type { Article } from "../../services/HomeService/type";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useHomeService from "../../services/HomeService";
import { useNewsContext } from "../../context/newcontext";

function usePaginationViewModel(
  articles: Article[],
  items: number,
  start: number
) {
  const { fetchNews } = useHomeService();
  const { category } = useNewsContext();

  const [moreInPage, setMoreInPage] = useState(1);
  const itemsPerPage = items;

  const { data: allArticles, isLoading: isAllLoading } = useQuery<Article[]>({
    queryKey: ["top-headlines", category],
    queryFn: async () => {
      const result = await fetchNews(category);
      return result.articles;
    },
    refetchOnWindowFocus: false,
  });

  const startIndex = start + (moreInPage - 1) * itemsPerPage;
  const currentMoreInArticles = articles.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalMoreInPages =
    articles.length > start
      ? Math.ceil((articles.length - start) / itemsPerPage)
      : 0;

  return {
    setMoreInPage,
    currentMoreInArticles,
    totalMoreInPages,
    moreInPage,
    startIndex,
    allArticles,
    isAllLoading,
  };
}

export default usePaginationViewModel;
