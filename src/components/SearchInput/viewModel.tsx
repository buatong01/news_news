import { useQuery } from "@tanstack/react-query";
import type { Article } from "../../services/HomeService/type";
import useNavBarService from "../../services/SearchService";
import { useSearchContext } from "../../context/SearchContext";
import { useEffect } from "react";

function useSearchViewModel() {
  const { fetchSearch } = useNavBarService();
  const { searchTopic, searchArticles, setSearchArtivles } = useSearchContext();

  const { data, isLoading, refetch, isFetching } = useQuery<Article[]>({
    queryKey: ["everything-news-search"],
    queryFn: async () => {
      const data = await fetchSearch(searchTopic);
      let sorted: Article[] = [];
      if (data && data.length > 0) {
        sorted = [...data].sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
      }
      return sorted;
    },
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
