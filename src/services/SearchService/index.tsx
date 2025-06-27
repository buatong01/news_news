import type { Article } from "../HomeService/type";

function useSearchService() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchSearch = async (search: string): Promise<Article[]> => {
    let url = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${search}&language=en`;

    const data = await fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch news");
        return res.json();
      })
      .then((data) => data.articles || [])
      .catch((error) => {
        throw error;
      });
    return data;
  };

  return {
    fetchSearch,
  };
}

export default useSearchService;
