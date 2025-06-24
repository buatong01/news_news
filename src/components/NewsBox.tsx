import type { Article } from "../services/HomeService/types/news";
import { formatPublishedDate } from "../utils/formatedate";
import { useNavigate } from "react-router-dom";

type ImgNewsProps = {
  data: Article;
  index: number;
  isShowImg: boolean;
  isCenter: boolean;
  isLast?: boolean;
};

function NewsBox({ data, index, isShowImg, isCenter, isLast }: ImgNewsProps) {
  const nevigate = useNavigate();
  if (!data) return null;
  const formatDate = formatPublishedDate(data.publishedAt);
  return (
    <div
      onClick={() => nevigate(`/detail/${index}`)}
      className="group cursor-pointer "
    >
      {isShowImg && (
        <img
          className=" object-cover"
          src={
            data.urlToImage ??
            "https://i.pinimg.com/736x/94/2d/7b/942d7b770176b84541f4356ec87a0e09.jpg"
          }
          alt="news"
        />
      )}
      <h2
        className={`text-black group-hover:underline  ${
          isCenter ? "text-3xl" : "text-base"
        } font-bold pt-2`}
      >
        {data.title}
      </h2>
      <p className="text-black text-sm pt-3">{data.description}</p>
      <p className="text-[12px] pt-3.5 text-black">{formatDate}</p>

      {isLast && (
        <div className="border-b border-gray-200 w-full pt-2 mb-4"></div>
      )}
    </div>
  );
}

export default NewsBox;
