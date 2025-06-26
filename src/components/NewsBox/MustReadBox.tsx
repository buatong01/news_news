import { useState, useEffect } from "react";
import NewsBox from "./NewsBox";
import type { Article } from "../../services/HomeService/type";

function MustRead({ everything_articles }: { everything_articles: Article[] }) {
  const getItemsPerPage = () => {
    if (window.innerWidth >= 1280) return 4; // xl
    if (window.innerWidth >= 1024) return 4; // lg
    if (window.innerWidth >= 768) return 3; // md
    if (window.innerWidth >= 640) return 2; // sm
    return 2; // xs
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortedArticles = everything_articles
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(15, 25);

  const totalPages = Math.ceil(sortedArticles.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const startIdx = currentPage * itemsPerPage;
  const currentArticles = sortedArticles.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  return (
    <div className="my-6">
      <div className="text-black border-t-2 border-black" />
      <div className="flex items-center justify-between pt-2">
        <h3 className="text-sm md:text-base font-extrabold text-black">
          MUST READ &gt;
        </h3>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-white text-black font-bold"
            disabled={currentPage === 0}
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-white text-black font-bold"
            disabled={currentPage === totalPages - 1}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="flex gap-4 py-4 justify-center">
        {currentArticles.map((article, index) => (
          <div key={article.title} className="w-full max-w-xs">
            <NewsBox
              data={article}
              index={15 + index}
              category={"mustread"}
              isShowImg={true}
              isCenter={false}
              isShowDescription={true}
              isLast={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MustRead;
