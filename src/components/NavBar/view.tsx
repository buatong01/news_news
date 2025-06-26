import search from "../../assets/search.png";
import menu from "../../assets/menu.png";
import avatar from "../../assets/avatar.png";
import x from "../../assets/x.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Darwer from "../Drawer/view";
import { useNewsContext } from "../../context/newcontext";

function NavBarView() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { category, setCategory } = useNewsContext();
  const nevigate = useNavigate();

  return (
    <div className="bg-white w-screen fixed top-0 left-0 z-50">
      <div className="border-b border-gray-200 relative md:h-[80px] lg:h-[80px] sm:h-[48px]">
        <div className="flex items-center justify-between px-4 py-3 h-full ">
          {/* search menu */}
          {isDrawerOpen ? (
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="relative flex flex-row items-cente"
            >
              <img src={x} alt="x" className="h-5 w-5 sm:h-6 sm:w-6  " />
            </button>
          ) : (
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative flex flex-row items-cente"
            >
              <img
                src={menu}
                alt="menu"
                className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 z-10"
              />
              <img
                src={search}
                alt="search"
                className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 absolute left-[14px] sm:left-[16px] md:left-[18px] bg-white rounded-full z-20"
              />
            </button>
          )}

          <div className="flex flex-row items-center gap-3">
            <div className="hidden sm:flex gap-3">
              <button className="bg-black text-white font-bold px-4 py-2 ml-2">
                Register
              </button>
              <button className="bg-white text-black font-bold px-4 py-2">
                Sign in
              </button>
            </div>

            {isMenuOpen ? (
              <div></div>
            ) : (
              <div className="sm:hidden cursor-pointer">
                <img
                  src={avatar}
                  alt="avatar"
                  onClick={() => {
                    setIsMenuOpen(true);
                  }}
                  className="h-5 w-5 "
                />
              </div>
            )}
          </div>
        </div>
        {/* bbc icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2.5">
          <div className="text-white font-bold bg-black px-2 lg:text-4xl md:text-3xl sm:text-2xl">
            B
          </div>
          <div className="text-white font-bold bg-black px-2 lg:text-4xl md:text-3xl sm:text-2xl">
            B
          </div>
          <div className="text-white font-bold bg-black px-2 lg:text-4xl md:text-3xl sm:text-2xl">
            C
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 h-[42px] items-center justify-center hidden lg:flex ">
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
            className={`text-black text-sm font-semibold h-full px-2.5 capitalize ${
              category === value ? "border-b-3 pt-0.5" : ""
            }`}
            onClick={() => {
              nevigate(value === "general" ? "/" : `/${value}`);
              setCategory(value);
              setIsDrawerOpen(false);
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {isMenuOpen && (
        <div className="z-50 bg-black sm:hidden pb-2">
          <div className="h-[42px] border-b  border-white mx-4">
            <div className="flex justify-start items-center h-full">
              <button className="text-white h-full px-2 text-base font-bold">
                Sign in
              </button>
            </div>
          </div>
          <button className="h-[40px] w-[90px] flex items-center justify-center text-sm font-bold text-black bg-white rounded-[1px] mx-auto mt-2 mb-0">
            Register
          </button>
        </div>
      )}

      {isDrawerOpen && <Darwer onclose={() => setIsDrawerOpen(false)} />}

      {isMenuOpen && (
        <div
          onClick={() => {
            setIsMenuOpen(false);
          }}
          className="sm:hidden cursor-pointer absolute right-0 top-0 bg-black  py-4 px-4 z-50"
        >
          <img src={x} alt="x-cross" className="h-5 w-5 filter invert" />
        </div>
      )}
    </div>
  );
}

export default NavBarView;
