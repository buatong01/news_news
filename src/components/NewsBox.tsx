type ImgNewsProps = {
  isShowImg: boolean;
  isBigText: boolean;
  isShowUnderLine: boolean;
};

function NewsBox({ isShowImg, isBigText, isShowUnderLine }: ImgNewsProps) {
  return (
    <div className="group cursor-pointer">
      {isShowImg && (
        <img
          className=" object-cover"
          src="https://ichef.bbci.co.uk/news/800/cpsprodpb/ce8d/live/59e737a0-4e79-11f0-b0f7-e3a4fb1ebd88.jpg.webp"
          alt="news"
        />
      )}
      <h2
        className={`text-black group-hover:underline  ${
          isBigText ? "text-3xl" : "text-base"
        } font-bold pt-2`}
      >
        Tulsi Gabbard now says Iran could produce nuclear weapon 'within weeks'
      </h2>
      <p className="text-black text-sm pt-3">
        This comes after US President Donald Trump said she was "wrong" for
        saying Iran was not building nuclear weapons.
      </p>
      <p className="text-[12px] pt-3.5 text-black">10 hrs ago | World</p>
      {isShowUnderLine && (
        <div className="border-b border-gray-200 w-full pt-2 mb-4"></div>
      )}
    </div>
  );
}

export default NewsBox;
