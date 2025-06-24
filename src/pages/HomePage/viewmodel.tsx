import { useQuery } from "@tanstack/react-query";
import type { Article } from "../../services/HomeService/types/news";
import useHomeService from "../../services/HomeService/service/service";
import { useNewsContext } from "../../context/newcontext";
import { useEffect, useMemo, useState } from "react";

function useHomeViewModel(category: string) {
  const { fetchNews } = useHomeService();
  const { setArticles } = useNewsContext();
  const [currentPage, setCurrentPage] = useState(1);

  const [moreInPage, setMoreInPage] = useState(1);
  const itemsPerPage = 4;

  const { data: allData = [], isLoading: isAllLoading } = useQuery<Article[]>({
    queryKey: ["top-headlines", category],
    queryFn: () => fetchNews("top-headlines", category),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (allData.length > 0) {
      setArticles(allData);
    }
    console.log(allData.length);
  }, [allData, setArticles]);

  const startIndex = 10 + (moreInPage - 1) * itemsPerPage;
  const currentMoreInArticles = allData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalMoreInPages =
    allData.length > 10 ? Math.ceil((allData.length - 10) / itemsPerPage) : 0;

  //abc

  return {
    all_articles: allData,
    isAllLoading,
    currentPage,
    setMoreInPage,
    currentMoreInArticles,
    totalMoreInPages,
    moreInPage,
    startIndex,
  };
}

export default useHomeViewModel;
