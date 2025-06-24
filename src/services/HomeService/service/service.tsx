import type { Article } from "../types/news";

function useHomeService() {
  const API_KEY = "6097fc392c524d8f8e1566a4c18d4ef0";

  const fetchNews = async (
    endpoint: "top-headlines" | "everything",
    categoryOrQuery?: string
  ): Promise<Article[]> => {
    let url = `https://newsapi.org/v2/${endpoint}?apiKey=${API_KEY}`;

    if (endpoint === "top-headlines") {
      url += `&country=us`;

      // 🟡 ส่งเฉพาะถ้ามี category
      if (categoryOrQuery && categoryOrQuery !== "all") {
        url += `&category=${categoryOrQuery}`;
      }
    } else if (endpoint === "everything") {
      url += `&q=${categoryOrQuery || "latest"}&sortBy=publishedAt&pageSize=5`;
    }

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch news");
    const data = await res.json();
    return data.articles || [];
  };
  return {
    fetchNews,
  };
}

export default useHomeService;
