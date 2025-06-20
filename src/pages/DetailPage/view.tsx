import save from "../../assets/save.png";
import share from "../../assets/share.png";

function DetailView() {
  return (
    <div className="w-full min-h-screen bg-white pt-[45px] sm:pt-[48px] md:pt-[80px] lg:pt-[122px]">
      <div className=" text-black border-t border-black" />

      <div className="px-0 sm:px-8 md:px-16 xl:px-65 py-5 flex flex-col items-center justify-center">
        <h2 className="w-full px-4 sm:px-0 xl:px-20 text-black text-3xl sm:text-4xl font-bold">
          Thai PM faces calls to quit after leaked phone call
        </h2>

        <div className="w-full px-4 sm:px-0 xl:px-20 pt-2.5 text-black text-[12px] flex flex-row items-center justify-between">
          <p>9 hours ago</p>
          <div className="space-x-4 hidden  sm:flex items-center">
            <div className="flex items-center">
              <strong className="cursor-pointer hover:underline">Share</strong>
              <img src={share} alt="share" className="ml-1.5 h-4 w-4" />
            </div>
            <div className="flex items-center">
              <strong className="cursor-pointer hover:underline">Save</strong>
              <img src={save} alt="save" className="ml-1.5 h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-0 xl:px-20 pt-3  text-left flex flex-col">
          <p className="text-black font-sm font-bold">Koh Ewe</p>
          <p className="text-black text-[12px]">BBC News</p>
        </div>

        <div className=" sm:hidden w-full px-4 sm:px-0 xl:px-20 pt-2.5 text-black text-[12px] flex justify-end border-t border-gray-200">
          <div className="flex space-x-4 items-center">
            <div className="flex items-center pb-3">
              <strong className="cursor-pointer text-base hover:underline">
                Share
              </strong>
              <img src={share} alt="share" className="ml-1.5 h-5 w-5" />
            </div>
            <div className="flex items-center pb-3">
              <strong className="cursor-pointer text-base hover:underline">
                Save
              </strong>
              <img src={save} alt="save" className="ml-1.5 h-5 w-5" />
            </div>
          </div>
        </div>

        <img
          className=" w-full pt-4 max-w-5xl lg:max-w-6xl h-auto object-cover"
          src="https://ichef.bbci.co.uk/news/1536/cpsprodpb/4ee7/live/59c52510-4cd6-11f0-a697-11f9d0fc9814.jpg.webp"
          alt="news"
        />

        <p className=" px-4 sm:px-0 xl:px-20 text-black text-base md:text-xl pt-5">
          Thai Prime Minister Paetongtarn Shinawatra's coalition government is
          on the brink of collapse after a phone call between her and former
          Cambodian leader Hun Sen about a festering border dispute was leaked.
        </p>
      </div>

      <div className="w-full px-4 sm:px-4 xl:px-25">
        <div className=" text-black border-t-2 border-black" />
        <h3 className="text-sm md:text-base font-extrabold pt-2 text-black">
          RELATED
        </h3>

        <div className="pt-5 pb-12 gap-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div className="group cursor-pointer">
            <p className="text-black text-base font-semibold group-hover:underline">
              Chinese navy drill near Japan sparks concern and protest
            </p>
            <p className="text-[12px] pt-3.5 text-black">10 hrs ago | World</p>
            <div className="border-b border-gray-200 w-full mt-2 flex sm:hidden"></div>
          </div>
          <div className="group cursor-pointer">
            <p className="text-black text-base font-semibold group-hover:underline">
              Chinese navy drill near Japan sparks concern and protest
            </p>
            <p className="text-[12px] pt-3.5 text-black">10 hrs ago | World</p>
            <div className="border-b border-gray-200 w-full mt-2 flex sm:hidden"></div>
          </div>
          <div className="group cursor-pointer">
            <p className="text-black text-base font-semibold  group-hover:underline">
              Chinese navy drill near Japan sparks concern and protest
            </p>
            <p className="text-[12px] pt-3.5 text-black">10 hrs ago | World</p>
            <div className="border-b border-gray-200 w-full mt-2 flex sm:hidden"></div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-4 xl:px-25">
        <div className=" text-black border-t-2 border-black" />
        <h3 className="text-sm md:text-base font-extrabold pt-2 text-black">
          MORE FROM THE BBC
        </h3>
        <div>
          <div className="grid grid-cols-12 gap-6 pt-5 cursor-pointer group">
            <p className="text-[12px] text-black col-span-2 hidden sm:flex  justify-end items-start ">
              10 hrs ago
            </p>
            <div className=" col-span-8 sm:col-span-6">
              <h3 className="text-black text-[18px] sm:text-xl font-bold group-hover:underline">
                Body of Thai hostage recovered from Gaza, Israel says
              </h3>
              <p className="text-black text-sm">
                Nattapong Pinta was captured alive and was likely killed during
                the first months of captivity, the Israeli military says.
              </p>
            </div>
            <img
              className="w-[300px] h-[168px] object-cover col-span-4"
              src="https://ichef.bbci.co.uk/news/800/cpsprodpb/cd5c/live/cdfad530-4383-11f0-a417-bf17ecbe9808.png.webp"
              alt="news"
            />
            <div className="col-span-12 sm:col-start-3 sm:col-span-10 pb-9">
              <p className="text-[12px] sm:flex hidden text-black">World</p>
              <p className="text-[12px] sm:hidden flex text-black">
                7 hrs ago | World
              </p>
              <div className="border-b border-gray-200 w-full mt-2"></div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 pt-5 cursor-pointer group">
            <p className="text-[12px] text-black col-span-2 hidden sm:flex justify-end items-start ">
              10 hrs ago
            </p>
            <div className="col-span-8 sm:col-span-6">
              <h3 className="text-black text-[18px] sm:text-xl font-bold group-hover:underline">
                Body of Thai hostage recovered from Gaza, Israel says
              </h3>
              <p className="text-black text-sm">
                Nattapong Pinta was captured alive and was likely killed during
                the first months of captivity, the Israeli military says.
              </p>
            </div>
            <img
              className="w-[300px] h-[168px] object-cover col-span-4"
              src="https://ichef.bbci.co.uk/news/800/cpsprodpb/cd5c/live/cdfad530-4383-11f0-a417-bf17ecbe9808.png.webp"
              alt="news"
            />
            <div className="col-span-12 sm:col-start-3 sm:col-span-10 pb-9">
              <p className="text-[12px] sm:flex hidden text-black">World</p>
              <p className="text-[12px] sm:hidden flex text-black">
                7 hrs ago | World
              </p>
              <div className="border-b border-gray-200 w-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailView;
