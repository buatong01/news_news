import save from "../../assets/save.png";
import share from "../../assets/share.png";

function DetailView() {
  return (
    <div className="w-full min-h-screen bg-white pt-[45px] sm:pt-[48px] md:pt-[80px] lg:pt-[122px]">
      <div className=" text-black border-t border-black" />

      <div className="px-0 sm:px-8 md:px-16 lg:px-70 py-5 flex flex-col items-center justify-center">
        <h2 className="w-full px-4 sm:px-0 lg:px-20 text-black text-3xl sm:text-4xl font-bold">
          Thai PM faces calls to quit after leaked phone call
        </h2>

        <div className="w-full px-4 sm:px-0 lg:px-20 pt-2.5 text-black text-[12px] flex flex-row items-center justify-between">
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

        <div className="w-full px-4 sm:px-0 lg:px-20 pt-3 pb-4 text-left flex flex-col">
          <p className="text-black font-sm font-bold">Koh Ewe</p>
          <p className="text-black text-[12px]">BBC News</p>
        </div>

        <div className=" sm:hidden w-full px-4 sm:px-0 lg:px-20 pt-2.5 text-black text-[12px] flex justify-end border-t border-gray-200">
          <div className="flex space-x-4 items-center">
            <div className="flex items-center">
              <strong className="cursor-pointer text-base hover:underline">
                Share
              </strong>
              <img src={share} alt="share" className="ml-1.5 h-5 w-5" />
            </div>
            <div className="flex items-center">
              <strong className="cursor-pointer text-base hover:underline">
                Save
              </strong>
              <img src={save} alt="save" className="ml-1.5 h-5 w-5" />
            </div>
          </div>
        </div>

        <img
          className="pt-7 w-full max-w-5xl h-auto object-cover"
          src="https://ichef.bbci.co.uk/news/1536/cpsprodpb/4ee7/live/59c52510-4cd6-11f0-a697-11f9d0fc9814.jpg.webp"
          alt="news"
        />

        <p className=" px-4 sm:px-0 lg:px-20 text-black text-base md:text-xl pt-5">
          Thai Prime Minister Paetongtarn Shinawatra's coalition government is
          on the brink of collapse after a phone call between her and former
          Cambodian leader Hun Sen about a festering border dispute was leaked.
        </p>
      </div>
    </div>
  );
}

export default DetailView;
