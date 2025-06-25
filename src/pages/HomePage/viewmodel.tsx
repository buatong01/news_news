import { useQuery } from "@tanstack/react-query";
import type { Article } from "../../services/HomeService/type";
import useHomeService from "../../services/HomeService";
import { useNewsContext } from "../../context/newcontext";
import { useEffect, useState } from "react";

function useHomeViewModel(category: string) {
  const { fetchNews, fetchEverythingNews } = useHomeService();
  const { setArticles, setEverythingArticles } = useNewsContext();

  const [moreInPage, setMoreInPage] = useState(1);
  const itemsPerPage = 4;

  const { data: allData = [], isLoading: isAllLoading } = useQuery<Article[]>({
    queryKey: ["top-headlines", category],
    queryFn: () => fetchNews(category),
    refetchOnWindowFocus: false,
  });

  const { data: everythingData = [], isLoading: isEverythingLoading } =
    useQuery<Article[]>({
      queryKey: ["everything-news"],
      queryFn: () => fetchEverythingNews(),
      refetchOnWindowFocus: false,
    });

  useEffect(() => {
    if (allData.length > 0) {
      setArticles(allData);
    }
  }, [allData, setArticles]);

  useEffect(() => {
    if (everythingData.length > 0) {
      setEverythingArticles(everythingData);
    }
  }, [everythingData, setEverythingArticles]);

  const startIndex = 10 + (moreInPage - 1) * itemsPerPage;
  const currentMoreInArticles = allData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalMoreInPages =
    allData.length > 10 ? Math.ceil((allData.length - 10) / itemsPerPage) : 0;

  return {
    all_articles: allData,
    isAllLoading,
    setMoreInPage,
    currentMoreInArticles,
    totalMoreInPages,
    moreInPage,
    startIndex,
    everything_articles: everythingData,
    isEverythingLoading,
  };
}

export default useHomeViewModel;
