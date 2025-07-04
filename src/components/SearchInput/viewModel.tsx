import { useQuery } from "@tanstack/react-query";
import type { Article } from "../../services/HomeService/type";
import useNavBarService from "../../services/SearchService";
import { useSearchContext } from "../../context/SearchContext";
import { useEffect } from "react";

function useSearchViewModel() {
  const { fetchSearch } = useNavBarService();
  const { searchTopic, searchArticles, setSearchArtivles } = useSearchContext();

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["everything-news-search", searchTopic],
    queryFn: async () => {
      if (!searchTopic.trim()) return [];

      const result = await fetchSearch(searchTopic);
      let sorted: Article[] = [];
      if (result && result.articles && result.articles.length > 0) {
        sorted = [...result.articles].sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
      }
      return sorted;
    },
    enabled: !!searchTopic.trim(), // Only run when searchTopic exists
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data && data.length > 0) {
      setSearchArtivles(data);
    }
  }, [data, setSearchArtivles]);

  return {
    searchNews: searchArticles,
    isLoading,
    refetch,
    isFetching,
  };
}

export default useSearchViewModel;
