import searchImg from "../../assets/search.png";
import { useSearchContext } from "../../context/SearchContext";
import useSearchViewModel from "../SearchPage/viewModel";

import { useState } from "react";
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
  const { searchTopic, setSearchTopic, searchArticles } = useSearchContext();
  const { isLoading } = useSearchViewModel(searchTopic);

  const [search, setSearch] = useState<string>(searchTopic);

  return (
    <div className="w-full min-h-screen bg-white pt-[45px] sm:pt-[48px] md:pt-[80px] lg:pt-[122px]  px-7 xl:px-35">
      <form
        className="flex flex-row w-full h-[54px] mt-6 mb-15"
        onSubmit={(e) => {
          e.preventDefault();
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
          <PaginationView articles={searchArticles} items={9} start={0} />
        </>
      )}
    </div>
  );
}

export default SearchView;
