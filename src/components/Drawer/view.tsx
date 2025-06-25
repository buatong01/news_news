import { useNavigate } from "react-router-dom";
import search from "../../assets/search.png";

type DrawerType = {
  onclose: () => void;
  categorySelected: string;
  onCategoryChange: (category: string) => void;
};

function Drawer({ onclose, categorySelected, onCategoryChange }: DrawerType) {
  const nevigate = useNavigate();

  return (
    <>
      <div
        onClick={onclose}
        className="fixed inset-0 bg-black opacity-50 z-40"
      ></div>
      <div className="fixed left-0  h-full w-[320px] bg-white flex justify-start z-50">
        <div className="flex flex-col w-full">
          <div className="bg-gray-200 w-full h-[60px] px-2 py-2 flex flex-row">
            <input
              type="text"
              className="border border-black w-full h-full text-black bg-white placeholder-gray-700 px-2"
              placeholder="Search news,topics and more"
            />
            <button className="bg-black px-3.5">
              <img
                src={search}
                alt="search"
                className=" object-cover h-7 w-7 filter invert "
              />
            </button>
          </div>

          <div className="flex flex-col justify-start w-full h-[304px]">
            {[
              { label: "Home", value: "" }, // general
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
                  categorySelected === value ? "border-l-8 pt-0.5" : ""
                }`}
                onClick={() => {
                  nevigate("/");
                  onCategoryChange(value);
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
