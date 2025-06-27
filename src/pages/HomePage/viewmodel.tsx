import { useQuery } from "@tanstack/react-query";
import type { Article } from "../../services/HomeService/type";
import useHomeService from "../../services/HomeService";
import { useNewsContext } from "../../context/newcontext";
import { useEffect } from "react";

function useHomeViewModel(category: string) {
  const { fetchNews, fetchEverythingNews: fetchEverythingNewsService } =
    useHomeService();
  const { setArticles, setEverythingArticles } = useNewsContext();

  const categories = ["business", "animal", "science", "trump"];

  const fetchAllCategories = async (): Promise<Article[]> => {
    const results = await Promise.all(
      categories.map(async (cat) => {
        const articles = await fetchEverythingNewsService(cat);
        return articles.map((article) => ({
          ...article,
          category: cat,
        }));
      })
    );
    const data = results.flat();
    return [...data].sort(
      (a: Article, b: Article) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  };

  const { data: allData = [], isLoading: isAllLoading } = useQuery<Article[]>({
    queryKey: ["top-headlines", category],
    queryFn: () => fetchNews(category),
    refetchOnWindowFocus: false,
  });

  const { data: everythingData = [], isLoading: isEverythingLoading } =
    useQuery<Article[]>({
      queryKey: ["everything-news", categories],
      queryFn: fetchAllCategories,
      refetchOnWindowFocus: false,
    });

  useEffect(() => {
    if (allData.length > 0) {
      setArticles(allData);
    }
  }, [allData, setArticles]);

  useEffect(() => {
    if (everythingData.length > 0) {
      // const sortedEverythingData = [...everythingData].sort(
      //   (a: Article, b: Article) =>
      //     new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      // );
      setEverythingArticles(everythingData);
    }
  }, [everythingData, setEverythingArticles]);

  return {
    all_articles: allData,
    isAllLoading,

    everything_articles: everythingData,
    isEverythingLoading,
  };
}

export default useHomeViewModel;
