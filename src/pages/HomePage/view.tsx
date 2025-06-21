import NewsBox from "../../components/NewsBox";
function HomeView() {
  return (
    <div className="w-full min-h-screen bg-white pt-[45px] sm:pt-[48px] md:pt-[80px] lg:pt-[122px] px-4  xl:px-25 ">
      {/* box 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-16 gap-5">
        <div className="hidden sm:block sm:col-span-4 py-5">
          <NewsBox isShowImg={true} isBigText={false} isShowUnderLine={true} />
          <NewsBox isShowImg={true} isBigText={false} isShowUnderLine={false} />
        </div>

        <div className="col-span-8 py-5">
          <NewsBox isShowImg={true} isBigText={true} isShowUnderLine={false} />
        </div>

        <div className="hidden lg:block col-span-4 py-5">
          <NewsBox isShowImg={false} isBigText={false} isShowUnderLine={true} />
          <NewsBox isShowImg={false} isBigText={false} isShowUnderLine={true} />
          <NewsBox isShowImg={false} isBigText={false} isShowUnderLine={true} />
          <NewsBox
            isShowImg={false}
            isBigText={false}
            isShowUnderLine={false}
          />
        </div>
      </div>

      <div className="lg:hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-5 py-5">
        <NewsBox isShowImg={false} isBigText={false} isShowUnderLine={true} />
        <NewsBox isShowImg={false} isBigText={false} isShowUnderLine={true} />
        <NewsBox isShowImg={false} isBigText={false} isShowUnderLine={true} />
        <NewsBox isShowImg={false} isBigText={false} isShowUnderLine={true} />
      </div>
      {/* box 1 */}

      {/* box 2 */}
      <div className="border-b-2 border-black w-full pt-8"></div>
      <h2 className="text-black font-extrabold pt-1">WEEKEND READS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6">
        <NewsBox isShowImg={true} isBigText={false} isShowUnderLine={false} />
        <NewsBox isShowImg={true} isBigText={false} isShowUnderLine={false} />
      </div>
      {/* box 2 */}
    </div>
  );
}
export default HomeView;
