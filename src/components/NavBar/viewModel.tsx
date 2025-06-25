import { useQuery } from "@tanstack/react-query";
import type { Article } from "../../services/HomeService/type";
import useNavBarService from "../../services/NavBarService";
import { useSearchContext } from "../../context/SearchContext";
import { useEffect } from "react";

function useNavBarViewModel(search: string) {
  const { fetchSearch } = useNavBarService();
  const { setSearchArtivles } = useSearchContext();

  const { data, isLoading } = useQuery<Article[]>({
    queryKey: ["everything-news-search", search],
    queryFn: () => fetchSearch(search),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data && data.length > 0) {
      setSearchArtivles(data);
    }
  }, [data, setSearchArtivles]);

  return {
    searchNews: data,
    isLoading,
  };
}

export default useNavBarViewModel;
