import searchImg from "../../assets/search.png";
import X from "../../assets/x.png";
import { useSearchContext } from "../../context/SearchContext";
import useSearchViewModel from "../SearchPage/viewModel";
import NewsBoxSearch from "../../components/NewsBox/NewsBoxSearch";
import type { Article } from "../../services/HomeService/type";
import { useState } from "react";

function SkeletonBox({ height = 120 }: { height?: number }) {
  return (
    <div
      className="animate-pulse bg-gray-200 rounded mb-4"
      style={{ height }}
    />
  );
}

function SearchView() {
  const { searchTopic, setSearchTopic, setIsDrawerOpen } = useSearchContext();
  const {
    isLoading,
    setMoreInPage,
    currentMoreInArticles,
    totalMoreInPages,
    moreInPage,
    startIndex,
  } = useSearchViewModel(searchTopic);

  const [search, setSearch] = useState<string>(searchTopic);

  const handleSetPage = (page: number) => {
    setMoreInPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-white pt-[45px] sm:pt-[48px] md:pt-[80px] lg:pt-[122px]  px-7 xl:px-35">
      <form
        className="flex flex-row w-full h-[54px] mt-6 mb-15"
        onSubmit={(e) => {
          e.preventDefault();
          setIsDrawerOpen(false);
          setSearchTopic(search);
        }}
      >
        <input
          type="text"
          className="border border-black w-full h-full text-black bg-white placeholder-gray-700 px-2"
          placeholder="Search news,topics and more"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="bg-black px-3.5">
          <img
            src={searchImg}
            alt="search"
            className=" object-cover h-7 w-7 filter invert "
          />
        </button>
      </form>

      {isLoading ? (
        <>
          {[...Array(5)].map((_, idx) => (
            <SkeletonBox key={idx} />
          ))}
        </>
      ) : (
        <>
          {currentMoreInArticles.map((articles: Article, index: number) => (
            <NewsBoxSearch
              key={articles.title}
              data={articles}
              index={startIndex + index}
            />
          ))}
        </>
      )}

      {totalMoreInPages > 0 && (
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 mt-4 mb-4">
          <button
            onClick={() => handleSetPage(Math.max(moreInPage - 1, 1))}
            disabled={moreInPage === 1}
            className="w-8 h-8 sm:w-auto sm:h-auto text-sm sm:text-base px-2 sm:px-4 py-2 bg-gray-100 text-black font-bold rounded"
          >
            &lt;
          </button>

          {[...Array(totalMoreInPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSetPage(idx + 1)}
              className={`w-8 h-8 sm:w-auto sm:h-auto text-sm sm:text-base px-2 sm:px-4 py-2  ${
                moreInPage === idx + 1
                  ? "bg-black text-white font-bold"
                  : "bg-gray-100 text-black font-bold"
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() =>
              handleSetPage(Math.min(moreInPage + 1, totalMoreInPages))
            }
            disabled={moreInPage === totalMoreInPages}
            className="w-8 h-8 sm:w-auto sm:h-auto text-sm sm:text-base px-2 sm:px-4 py-2 bg-gray-100 text-black font-bold "
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchView;
