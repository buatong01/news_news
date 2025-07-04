import type { Article } from "../HomeService/type";

function useSearchService() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchSearch = async (
    search: string,
    page: number = 1,
    pageSize: number = 20
  ): Promise<{
    articles: Article[];
    totalResults: Number;
    currentPage: number;
    totalPages: number;
  }> => {
    let url = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${search}&language=en&page=${page}&pageSize=${pageSize}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch search results");
      const data = await res.json();

      return {
        articles: data.articles || [],
        totalResults: data.totalResults || 0,
        currentPage: page,
        totalPages: Math.ceil((data.totalResults || 0) / pageSize),
      };
    } catch (error) {
      console.error(error);
      return {
        articles: [],
        totalResults: 0,
        currentPage: 1,
        totalPages: 0,
      };
    }
  };

  return {
    fetchSearch,
  };
}

export default useSearchService;
