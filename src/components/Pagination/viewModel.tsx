import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useHomeService from "../../services/HomeService";
import { useNewsContext } from "../../context/newcontext";

function usePaginationViewModel(items: number) {
  const { fetchPaginatedNews } = useHomeService();
  const { category } = useNewsContext();

  const [moreInPage, setMoreInPage] = useState(1);
  const itemsPerPage = items;

  // เริ่มจาก API page 2 เมื่อ UI page = 1
  const actualApiPage = moreInPage + 1;

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

  const currentMoreInArticles = paginationData?.articles || [];

  const totalMoreInPages = paginationData?.totalPages
    ? Math.max(Number(paginationData.totalPages) - 1, 0)
    : 0;

  const startIndex = (actualApiPage - 1) * itemsPerPage;

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
