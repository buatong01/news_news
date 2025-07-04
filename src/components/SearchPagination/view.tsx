import useSearchPaginationViewModel from "./viewModel";
import type { Article } from "../../services/HomeService/type";
import NewsBoxSearch from "../../components/NewsBox/NewsBoxSearch";

type SearchPaginationType = {
  items: number;
};

function SearchPaginationView({ items }: SearchPaginationType) {
  const {
    currentSearchArticles,
    totalPages,
    totalResults,
    currentPage,
    setCurrentPage,
    isLoading,
  } = useSearchPaginationViewModel(items);

  const handleSetPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-gray-600">Loading search results...</div>
      </div>
    );
  }

  if (!currentSearchArticles.length) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-600">No search results found</div>
      </div>
    );
  }

  return (
    <div className="w-full pt-6">
      {/* Results info */}
      <div className="text-sm text-gray-600 mb-4">
        Showing {(currentPage - 1) * items + 1} -{" "}
        {Math.min(currentPage * items, Number(totalResults))} of{" "}
        {Number(totalResults)} results
      </div>

      {/* Search Results */}
      <div>
        {currentSearchArticles.map((article: Article, index: number) => (
          <NewsBoxSearch
            key={article.title}
            data={article}
            index={index} // Use direct index for search pagination
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 mt-4 mb-4">
          <button
            onClick={() => handleSetPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-8 h-8 sm:w-auto sm:h-auto text-sm sm:text-base px-2 sm:px-4 py-2 bg-gray-100 text-black font-bold disabled:opacity-50"
          >
            &lt;
          </button>

          {[...Array(Math.min(totalPages, 10))].map((_, idx) => {
            const pageNumber = idx + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handleSetPage(pageNumber)}
                className={`w-8 h-8 sm:w-auto sm:h-auto text-sm sm:text-base px-2 sm:px-4 py-2 ${
                  currentPage === pageNumber
                    ? "bg-black text-white font-bold"
                    : "bg-gray-100 text-black font-bold"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            onClick={() => handleSetPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 sm:w-auto sm:h-auto text-sm sm:text-base px-2 sm:px-4 py-2 bg-gray-100 text-black font-bold disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchPaginationView;
