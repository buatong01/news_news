import type { Article } from "./type";

function useHomeService() {
  // const API_KEY = "6097fc392c524d8f8e1566a4c18d4ef0";
  // const API_KEY = "b7dac6dcef4a49ddad7b283a50d165da";
  const API_KEY = "99a8a8aca96044c784e8dd929ac8b372";

  const categories = ["business", "animal", "science", "trump"];

  const fetchNews = async (categoryOrQuery?: string): Promise<Article[]> => {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=us`;

    if (categoryOrQuery && categoryOrQuery !== "") {
      url += `&category=${categoryOrQuery}`;
    }
    return fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch news");
        return res.json();
      })
      .then((data) => data.articles || [])
      .catch((error) => {
        throw error;
      });
  };

  const fetchEverythingNews = async (): Promise<Article[]> => {
    const allResults: Article[] = [];
    let promise = Promise.resolve();

    categories.forEach((category) => {
      promise = promise.then(() => {
        const url = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${encodeURIComponent(
          category
        )}&language=en`;
        return fetch(url)
          .then((res) => {
            if (!res.ok) return null;
            return res.json();
          })
          .then((data) => {
            if (!data || !data.articles) return;
            const articlesWithCategory = data.articles.map(
              (article: Article) => ({
                ...article,
                category,
              })
            );
            allResults.push(...articlesWithCategory);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });

    return promise.then(() => allResults);
  };

  return {
    fetchNews,
    fetchEverythingNews,
  };
}

export default useHomeService;
