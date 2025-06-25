import { useRef } from "react";
import type { Article } from "../services/HomeService/types/news";
import NewsBox from "./NewsBox";

function MustRead({ everything_articles }: { everything_articles: Article[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const sortedArticles = everything_articles
    .sort(
      (a: Article, b: Article) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(15, 25); // เลือกแค่ 10 ข่าว

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth; // ความกว้าง container
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-6">
      <div className="text-black border-t-2 border-black" />
      <div className="flex items-center justify-between pt-2">
        <h3 className="text-sm md:text-base font-extrabold text-black">
          MUST READ &gt;
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="px-4 py-2 bg-white text-black font-bold"
          >
            &lt;
          </button>
          <button
            onClick={() => scroll("right")}
            className="px-4 py-2 bg-white text-black font-bold"
          >
            &gt;
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4"
      >
        {sortedArticles.map((article: Article, index: number) => (
          <div
            key={article.title}
            className="flex-shrink-0 snap-start w-[95%] sm:w-[48%] md:w-[30%]"
          >
            <NewsBox
              data={article}
              index={index}
              category={article.category ?? "head"}
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
