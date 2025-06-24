import { useQuery } from "@tanstack/react-query";
import type { Article } from "../../services/HomeService/types/news";
import useHomeService from "../../services/HomeService/service/service";
import { useNewsContext } from "../../context/newcontext";
import { useEffect } from "react";

function useHomeViewModel(category: string) {
  const { fetchNews } = useHomeService();
  const { setArticles } = useNewsContext();

  const { data: allData = [], isLoading: isAllLoading } = useQuery<Article[]>({
    queryKey: ["top-headlines", category],
    queryFn: () => fetchNews("top-headlines", category),
  });

  useEffect(() => {
    if (allData.length > 0) {
      setArticles(allData);
    }
    console.log(allData.length);
  }, [allData, setArticles]);

  return {
    all_articles: allData,
    isAllLoading,
  };
}

export default useHomeViewModel;
