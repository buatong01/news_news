import type { Article } from "../types/news";

function useHomeService() {
  // const API_KEY = "6097fc392c524d8f8e1566a4c18d4ef0";
  const API_KEY = "b7dac6dcef4a49ddad7b283a50d165da";

  const fetchNews = async (categoryOrQuery?: string): Promise<Article[]> => {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=us`;

    // 🟡 ส่งเฉพาะถ้ามี category
    if (categoryOrQuery && categoryOrQuery !== "") {
      url += `&category=${categoryOrQuery}`;
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch news");
    const data = await res.json();
    return data.articles || [];
  };

  const categories = ["business", "animal", "science", "trump"];

  const fetchEverythingNews = async (): Promise<Article[]> => {
    const allResults: Article[] = [];
    for (const category of categories) {
      const url = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${encodeURIComponent(
        category
      )}&language=en`;
      const res = await fetch(url);
      if (!res.ok) continue; // ข้ามถ้า fetch ไม่สำเร็จ
      const data = await res.json();
      const articlesWithCategory = (data.articles || []).map(
        (article: Article) => ({
          ...article,
          category,
        })
      );
      allResults.push(...articlesWithCategory);
    }
    return allResults;
  };

  return {
    fetchNews,
    fetchEverythingNews,
  };
}

export default useHomeService;
