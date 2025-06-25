import { useQuery } from "@tanstack/react-query";
import type { Article } from "../../services/HomeService/type";
import useNavBarService from "../../services/SearchService";
import { useSearchContext } from "../../context/SearchContext";
import { useEffect, useState } from "react";

function useSearchViewModel(searchTopic: string) {
  const { fetchSearch } = useNavBarService();
  const { searchArticles, setSearchArtivles } = useSearchContext();

  const { data, isLoading } = useQuery<Article[]>({
    queryKey: ["everything-news-search", searchTopic],
    queryFn: () => fetchSearch(searchTopic),
    refetchOnWindowFocus: false,
  });

  const [moreInPage, setMoreInPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    if (data && data.length > 0) {
      const sorted = [...data].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
      setSearchArtivles(sorted);
    }
  }, [data, setSearchArtivles]);

  const startIndex = 0 + (moreInPage - 1) * itemsPerPage;
  const currentMoreInArticles = searchArticles.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalMoreInPages =
    searchArticles.length > 0
      ? Math.ceil(searchArticles.length / itemsPerPage)
      : 0;

  return {
    searchNews: searchArticles,
    isLoading,
    currentMoreInArticles,
    totalMoreInPages,
    moreInPage,
    startIndex,
    setMoreInPage,
  };
}

export default useSearchViewModel;
