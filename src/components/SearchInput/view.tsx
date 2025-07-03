import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import searchImg from "../../assets/search.png";
import { useSearchContext } from "../../context/SearchContext";
import useSearchViewModel from "./viewModel";
// import { useNewsContext } from "../../context/newcontext";

type DrawerType = {
  onclose: () => void;
};

function SearchInput({ onclose }: DrawerType) {
  const nevigate = useNavigate();
  const { searchTopic, setSearchTopic } = useSearchContext();
  const { refetch } = useSearchViewModel();
  //   const { category, setCategory } = useNewsContext();
  // const [search, setSearch] = useState<string>("");
  //   const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDebouncedSearch(search);
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, [search]);

  // useEffect(() => {
  //   if (debouncedSearch.trim() && debouncedSearch !== "") {
  //     setSearchTopic(debouncedSearch);
  //   }
  // }, [debouncedSearch, setSearchTopic]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTopic.trim()) {
      nevigate(`/search`);
      refetch();
      onclose();
      // setSearchTopic(search);
    }
  };
  return (
    <form className="flex flex-row w-full h-full" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        className="border border-black w-full h-full text-black bg-white placeholder-gray-700 px-2"
        placeholder="Search news,topics and more"
        value={searchTopic}
        onChange={(e) => setSearchTopic(e.target.value)}
      />
      <button type="submit" className="bg-black px-3.5">
        <img
          src={searchImg}
          alt="search"
          className=" object-cover h-7 w-7 filter invert "
        />
      </button>
    </form>
  );
}

export default SearchInput;
