import type { Article } from "../../services/HomeService/type";
import { useState } from "react";

function usePaginationViewModel(
  articles: Article[],
  items: number,
  start: number
) {
  const [moreInPage, setMoreInPage] = useState(1);
  const itemsPerPage = items;

  const startIndex = start + (moreInPage - 1) * itemsPerPage;
  const currentMoreInArticles = articles.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalMoreInPages =
    articles.length > start
      ? Math.ceil((articles.length - start) / itemsPerPage)
      : 0;

  return {
    setMoreInPage,
    currentMoreInArticles,
    totalMoreInPages,
    moreInPage,
    startIndex,
  };
}

export default usePaginationViewModel;
