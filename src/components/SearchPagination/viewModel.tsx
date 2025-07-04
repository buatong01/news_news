import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useSearchService from "../../services/SearchService";
import { useSearchContext } from "../../context/SearchContext";

function useSearchPaginationViewModel(items: number) {
  const { fetchSearch } = useSearchService();
  const {
    searchTopic,
    setSearchPaginationArticles,
    setSearchCurrentPage,
    setSearchTotalPages,
    setSearchTotalResults,
  } = useSearchContext();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = items;

  const { data: searchPaginationData, isLoading: isSearchPaginationLoading } =
    useQuery({
      queryKey: ["search-pagination", searchTopic, currentPage, itemsPerPage],
      queryFn: async () => {
        if (!searchTopic.trim()) return null;
        const result = await fetchSearch(
          searchTopic,
          currentPage,
          itemsPerPage
        );
        return result;
      },
      enabled: !!searchTopic.trim(), // Only run query if searchTopic exists
      refetchOnWindowFocus: false,
    });

  // เก็บข้อมูล search pagination ใน context เมื่อได้ข้อมูลใหม่
  useEffect(() => {
    if (searchPaginationData) {
      setSearchPaginationArticles(searchPaginationData.articles || []);
      setSearchCurrentPage(searchPaginationData.currentPage);
      setSearchTotalPages(searchPaginationData.totalPages);
      setSearchTotalResults(Number(searchPaginationData.totalResults));
    }
  }, [
    searchPaginationData,
    setSearchPaginationArticles,
    setSearchCurrentPage,
    setSearchTotalPages,
    setSearchTotalResults,
  ]);

  const currentSearchArticles = searchPaginationData?.articles || [];
  const totalPages = searchPaginationData?.totalPages || 0;
  const totalResults = searchPaginationData?.totalResults || 0;

  return {
    currentSearchArticles,
    totalPages,
    totalResults,
    currentPage,
    setCurrentPage,
    isLoading: isSearchPaginationLoading,
  };
}

export default useSearchPaginationViewModel;
