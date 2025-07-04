// import searchImg from "../../assets/search.png";
import { useSearchContext } from "../../context/SearchContext";
import useSearchViewModel from "../../components/SearchInput/viewModel";
import SearchInput from "../../components/SearchInput/view";
// import { useState } from "react";
import PaginationView from "../../components/Pagination/view";

function SkeletonBox({ height = 120 }: { height?: number }) {
  return (
    <div
      className="animate-pulse bg-gray-200 rounded mb-4"
      style={{ height }}
    />
  );
}

function SearchView() {
  const { searchArticles } = useSearchContext();
  const { isLoading, isFetching } = useSearchViewModel();

  return (
    <div className="w-full min-h-screen bg-white pt-[45px] sm:pt-[48px] md:pt-[80px] lg:pt-[122px]  px-7 xl:px-35">
      <div className="pt-10 h-[102px]">
        <SearchInput onclose={() => {}} />
      </div>

      {isLoading || isFetching ? (
        <div className="pt-10">
          {[...Array(5)].map((_, idx) => (
            <SkeletonBox key={idx} />
          ))}
        </div>
      ) : (
        <>
          {/* <PaginationView articles={searchArticles} items={9} start={0} /> */}
        </>
      )}
    </div>
  );
}

export default SearchView;
