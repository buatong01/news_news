import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useHomeService from "../../services/HomeService";
import { useNewsContext } from "../../context/newcontext";
import { usePaginationContext } from "../../context/PaginationContext";

function usePaginationViewModel(items: number) {
  const { fetchPaginatedNews } = useHomeService();
  const { category } = useNewsContext();
  const { setPaginationArticles } = usePaginationContext();

  const [moreInPage, setMoreInPage] = useState(1);
  const itemsPerPage = items;

  const actualApiPage = moreInPage;

  const { data: paginationData, isLoading: isPaginationLoading } = useQuery({
    queryKey: ["paginated-news", category, actualApiPage, itemsPerPage],
    queryFn: async () => {
      const result = await fetchPaginatedNews(
        category,
        actualApiPage,
        itemsPerPage
      );
      return result;
    },
    refetchOnWindowFocus: false,
  });

  // เก็บข้อมูล pagination ใน context เมื่อได้ข้อมูลใหม่
  useEffect(() => {
    if (paginationData?.articles) {
      setPaginationArticles(paginationData.articles);
    }
  }, [paginationData, setPaginationArticles]);

  const currentMoreInArticles = paginationData?.articles || [];

  const totalMoreInPages = paginationData?.totalPages
    ? Math.max(Number(paginationData.totalPages) - 1, 0)
    : 0;

  const startIndex = (moreInPage - 1) * itemsPerPage;

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
