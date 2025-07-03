import { useNavigate } from "react-router-dom";
// import {  useEffect } from "react";
// import searchImg from "../../assets/search.png";
// import { useSearchContext } from "../../context/SearchContext";
import { useNewsContext } from "../../context/newcontext";
import SearchInput from "../SearchInput/view";

type DrawerType = {
  onclose: () => void;
};

function Drawer({ onclose }: DrawerType) {
  const nevigate = useNavigate();
  // const { searchTopic } = useSearchContext();
  const { category, setCategory } = useNewsContext();
  // const [search, setSearch] = useState<string>("");
  // const [debouncedSearch, setDebouncedSearch] = useState<string>("");

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

  // const handleSearchSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (searchTopic.trim()) {
  //     nevigate(`/search`);
  //     onclose();
  //     // setSearchTopic(search);
  //   }
  // };

  return (
    <>
      <div
        onClick={onclose}
        className="fixed inset-0 top-11 sm:top-12 md:top-20  bg-black opacity-20 z-40"
      ></div>
      <div className="fixed left-0 top-11 sm:top-12 md:top-20  h-full w-full sm:w-[320px] bg-white flex justify-start z-50">
        <div className="flex flex-col w-full ">
          <div className="bg-gray-200 w-full h-[60px] px-2 py-2 flex flex-row ">
            {/* <form
              className="flex flex-row w-full h-full"
              onSubmit={handleSearchSubmit}
            >
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
            </form> */}
            <SearchInput onclose={onclose} />
          </div>

          <div className="flex flex-col justify-start w-full h-[304px]">
            {[
              { label: "Home", value: "general" }, // general
              { label: "Business", value: "business" },
              { label: "Entertainment", value: "entertainment" },
              { label: "Health", value: "health" },
              { label: "Science", value: "science" },
              { label: "Sports", value: "sports" },
              { label: "Technology", value: "technology" },
            ].map(({ label, value }) => (
              <button
                key={value}
                className={`text-black text-base font-bold h-full px-5 text-start border-b border-b-gray-200 ${
                  category === value ? "border-l-8 pt-0.5" : ""
                }`}
                onClick={() => {
                  nevigate("/");
                  setCategory(value);
                  onclose();
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
