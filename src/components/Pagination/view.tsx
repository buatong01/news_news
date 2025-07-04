import { useLocation } from "react-router-dom";
import usePaginationViewModel from "./viewModel";
import type { Article } from "../../services/HomeService/type";
import NewsBoxRow from "../../components/NewsBox/NewsBoxRow";
import NewsBoxSearch from "../../components/NewsBox/NewsBoxSearch";

type PaginationType = {
  items: number;
};

function PaginationView({ items }: PaginationType) {
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";

  const {
    setMoreInPage,
    currentMoreInArticles,
    totalMoreInPages,
    moreInPage,
    startIndex,
    totalResults,
    isAllLoading,
  } = usePaginationViewModel(items);

  const handleSetPage = (page: number) => {
    setMoreInPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full pt-6 ">
      {isAllLoading && (
        <div className="flex justify-center items-center py-8">
          <div className="text-gray-600">Loading...</div>
        </div>
      )}

      {!isAllLoading && Number(totalResults) > 0 && (
        <div className="text-sm text-gray-600 mb-4">
          Showing {(moreInPage - 1) * items + 1} -{" "}
          {Math.min(moreInPage * items, Number(totalResults))} of{" "}
          {Number(totalResults)} results
        </div>
      )}

      <div>
        {!isAllLoading &&
          currentMoreInArticles.map((article: Article, index: number) =>
            isSearchPage ? (
              <NewsBoxSearch
                key={article.title}
                data={article}
                index={startIndex + index}
              />
            ) : (
              <NewsBoxRow
                key={article.title}
                data={article}
                index={index} // ใช้ index ใน pagination data โดยตรง
                category="pagination" // เปลี่ยนเป็น category pagination
              />
            )
          )}
      </div>

      {/* Pagination */}
      {totalMoreInPages > 0 && (
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 mt-4 mb-4">
          <button
            onClick={() =>
              isSearchPage
                ? handleSetPage(moreInPage - 1)
                : setMoreInPage((prev) => Math.max(prev - 1, 1))
            }
            disabled={moreInPage === 1}
            className="w-8 h-8 sm:w-auto sm:h-auto text-sm sm:text-base px-2 sm:px-4 py-2 bg-gray-100 text-black font-bold "
          >
            &lt;
          </button>

          {[...Array(totalMoreInPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() =>
                isSearchPage ? handleSetPage(idx + 1) : setMoreInPage(idx + 1)
              }
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
              isSearchPage
                ? handleSetPage(moreInPage + 1)
                : setMoreInPage((prev) => Math.min(prev + 1, totalMoreInPages))
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

export default PaginationView;
