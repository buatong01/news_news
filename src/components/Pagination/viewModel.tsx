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
  const { fetchPaginatedNews } = useHomeService();
  const { category } = useNewsContext();

  const [moreInPage, setMoreInPage] = useState(1);
  const itemsPerPage = items;

  const { data: paginationData, isLoading: isPaginationLoading } = useQuery({
    queryKey: ["paginated-news", category, moreInPage, itemsPerPage],
    queryFn: async () => {
      const result = await fetchPaginatedNews(
        category,
        moreInPage,
        itemsPerPage
      );
      return result;
    },
    refetchOnWindowFocus: false,
  });

  const currentMoreInArticles =
    paginationData?.articles ||
    articles.slice(
      start + (moreInPage - 1) * itemsPerPage,
      start + moreInPage * itemsPerPage
    );

  const totalMoreInPages = paginationData?.totalPages
    ? Number(paginationData.totalPages)
    : articles.length > start
    ? Math.ceil((articles.length - start) / itemsPerPage)
    : 0;

  const startIndex = start + (moreInPage - 1) * itemsPerPage;

  return {
    setMoreInPage,
    currentMoreInArticles,
    totalMoreInPages,
    moreInPage,
    startIndex,
    isAllLoading: isPaginationLoading,
    totalResults: paginationData?.totalResults || 0,
    currentPage: paginationData?.currentPage || moreInPage,
  };
}

export default usePaginationViewModel;
