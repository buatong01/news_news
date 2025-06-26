import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useNewsContext } from "../../context/newcontext";
import { useSearchContext } from "../../context/SearchContext";
import type { Article } from "../../services/HomeService/type";

function useDetailViewModel() {
  const { index, category } = useParams();

  const { articles, everythingArticles } = useNewsContext();
  const { searchArticles } = useSearchContext();

  // ไม่มี key id ให้ search ต้อง search index
  const article = useMemo(() => {
    if (!articles || !index) return undefined;

    if (category === "head") {
      return articles[Number(index)];
    } else if (category === "search") {
      return searchArticles[Number(index)];
    } else if (category === "mustread") {
      const result = everythingArticles.sort(
        (a: Article, b: Article) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
      return result[Number(index)];
    } else {
      const result = everythingArticles
        .filter(
          (article: Article) => article.category?.toLowerCase() === category
        )
        .sort(
          (a: Article, b: Article) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
      return result[Number(index)];
    }
  }, [articles, everythingArticles, category, index]);

  const articless = useMemo(() => {
    if (!articles || !index) return undefined;

    if (category === "head") {
      return articles;
    } else if (category === "search") {
      return searchArticles;
    } else if (category === "mustread") {
      const result = everythingArticles.sort(
        (a: Article, b: Article) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
      return result;
    } else {
      const result = everythingArticles
        .filter(
          (article: Article) => article.category?.toLowerCase() === category
        )
        .sort(
          (a: Article, b: Article) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
      return result;
    }
  }, [articles, everythingArticles, category, index]);

  return {
    article,
    articless,
  };
}

export default useDetailViewModel;
