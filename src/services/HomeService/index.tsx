import type { Article } from "./type";

function useHomeService() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchNews = async (
    categoryOrQuery?: string
  ): Promise<{ articles: Article[]; totalResults: Number }> => {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=us&pageSize=100&page=1`;

    if (categoryOrQuery && categoryOrQuery !== "") {
      url += `&category=${categoryOrQuery}`;
    }

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch news");
      const data = await res.json();

      return {
        articles: data.articles || [],
        totalResults: data.totalResults || 0,
      };
    } catch (error) {
      console.error(error);
      return {
        articles: [],
        totalResults: 0,
      };
    }
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

  const fetchPaginatedNews = async (
    categoryOrQuery?: string,
    page: number = 1,
    pageSize: number = 20
  ): Promise<{
    articles: Article[];
    totalResults: Number;
    currentPage: number;
    totalPages: number;
  }> => {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=us&page=${page}&pageSize=${pageSize}`;

    if (categoryOrQuery && categoryOrQuery !== "") {
      url += `&category=${categoryOrQuery}`;
    }

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch news");
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
    fetchNews,
    fetchEverythingNews,
    fetchPaginatedNews,
  };
}

export default useHomeService;
