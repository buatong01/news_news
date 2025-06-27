import type { Article } from "./type";

function useHomeService() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchNews = async (categoryOrQuery?: string): Promise<Article[]> => {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=us`;

    if (categoryOrQuery && categoryOrQuery !== "") {
      url += `&category=${categoryOrQuery}`;
    }
    const data = await fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch news");
        return res.json();
      })
      .then((data) => data.articles || [])
      .catch((error) => {
        console.log(error);
        return [];
      });

    return data;
  };

  const fetchEverythingNews = async (
    categories: string
  ): Promise<Article[]> => {
    const url = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${categories}&language=en`;

    const data = await fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch news");
        return res.json();
      })
      .then((data) => data.articles || [])
      .catch((error) => {
        console.log(error);
      });

    return data;
  };

  return {
    fetchNews,
    fetchEverythingNews,
  };
}

export default useHomeService;
