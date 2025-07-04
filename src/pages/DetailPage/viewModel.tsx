import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useNewsContext } from "../../context/newcontext";
import { useSearchContext } from "../../context/SearchContext";
import { usePaginationContext } from "../../context/PaginationContext";
import type { Article } from "../../services/HomeService/type";

function useDetailViewModel() {
  const { index, category } = useParams();

  const { articles, everythingArticles } = useNewsContext();
  const { searchArticles, searchPaginationArticles } = useSearchContext();
  const { paginationArticles } = usePaginationContext();

  // ไม่มี key id ให้ search ต้อง search index
  const getArticlesByCategory = () => {
    if (category === "head") {
      return articles;
    } else if (category === "search") {
      // ใช้ search pagination articles หากมี ถ้าไม่มีใช้ searchArticles
      return searchPaginationArticles.length > 0
        ? searchPaginationArticles
        : searchArticles;
    } else if (category === "pagination") {
      return paginationArticles;
    } else if (category === "mustread") {
      return [...everythingArticles].sort(
        (a: Article, b: Article) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    } else {
      return everythingArticles
        .filter(
          (article: Article) => article.category?.toLowerCase() === category
        )
        .sort(
          (a: Article, b: Article) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
    }
  };

  const articless = useMemo(getArticlesByCategory, [
    articles,
    everythingArticles,
    searchArticles,
    searchPaginationArticles,
    paginationArticles,
    category,
  ]);

  const article = useMemo(() => {
    if (!articless || !index) return undefined;
    return articless[Number(index)];
  }, [articless, index]);

  return {
    article,
    articless,
  };
}

export default useDetailViewModel;
