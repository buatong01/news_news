import type { Article } from "../HomeService/type";

function useSearchService() {
  // const API_KEY = "6097fc392c524d8f8e1566a4c18d4ef0";
  // const API_KEY = "b7dac6dcef4a49ddad7b283a50d165da";
  const API_KEY = "99a8a8aca96044c784e8dd929ac8b372";

  const fetchSearch = async (search: string): Promise<Article[]> => {
    let url = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${search}&language=en`;

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

  return {
    fetchSearch,
  };
}

export default useSearchService;
