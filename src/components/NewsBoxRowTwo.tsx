import { formatPublishedDate } from "../utils/formatedate";
import { useNavigate } from "react-router-dom";
import type { Article } from "../services/HomeService/types/news";

type ImgNewsProps = {
  data: Article;
  index: number;
};

function NewsBoxRowTwo({ data, index }: ImgNewsProps) {
  if (!data) return null;
  const nevigate = useNavigate();

  return (
    <div
      onClick={() => nevigate(`/detail/${index}`)}
      className="sm:hidden flex flex-col group cursor-pointer pb-5"
    >
      <div className="flex justify-center items-start ">
        <img
          className="object-cover h-[80px] pr-3"
          src={data.urlToImage ?? undefined}
          alt="news"
        />
        <div className="flex flex-col justify-start">
          <h2 className="text-black group-hover:underline text-base font-bold">
            {data.title}
          </h2>
          <p className="text-[12px] pt-3.5 text-black">
            {formatPublishedDate(data.publishedAt)}
          </p>
        </div>
      </div>
      <div className="border-b border-gray-200 w-full pt-2 mb-4"></div>
    </div>
  );
}

export default NewsBoxRowTwo;
