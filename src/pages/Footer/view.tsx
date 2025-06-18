function FooterView() {
  return (
    <div className="bg-white w-screen ">
      <div className="border-y border-gray-900 h-auto px-4 py-4 pt-4 pb-12 ">
        <div className="flex gap-2.5">
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

        <div className="flex flex-col sm:flex-row flex-wrap space-x-5 ">
          <div className="text-black text-sm font-semibold pt-5">Home</div>
          <div className="text-black text-sm font-semibold pt-5">Home</div>
          <div className="text-black text-sm font-semibold pt-5">Home</div>
        </div>

        <div className="h-[44px] w-[204px] bg-gray-200 flex justify-center items-center mt-6.5 mb-4.5">
          <div className="text-black text-sm font-semibold">
            BBC in other languages
          </div>
        </div>

        <div className="border-y-[0.5px] border-gray-200 mb-4"></div>

        <div className="text-black font-semibold text-base">Follow BBC on:</div>
      </div>
    </div>
  );
}

export default FooterView;
