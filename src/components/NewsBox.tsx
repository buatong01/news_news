import type { Article } from "../services/HomeService/types/news";
import { formatPublishedDate } from "../utils/formatedate";
import { useNavigate } from "react-router-dom";

type ImgNewsProps = {
  data: Article;
  index: number;
  category: string;
  isShowImg: boolean;
  isCenter: boolean;
  isLast?: boolean;
  isShowDescription: boolean;
};

function NewsBox({
  data,
  index,
  category,
  isShowImg,
  isCenter,
  isLast,
  isShowDescription,
}: ImgNewsProps) {
  const nevigate = useNavigate();
  if (!data) return null;
  const formatDate = formatPublishedDate(data.publishedAt);
  return (
    <div
      onClick={() => nevigate(`/detail/${index}/${category}`)}
      className="group cursor-pointer"
    >
      {isShowImg && (
        <div className="flex justify-center">
          <img
            className="object-cover"
            src={
              data.urlToImage ??
              "https://i.pinimg.com/736x/94/2d/7b/942d7b770176b84541f4356ec87a0e09.jpg"
            }
            alt="news"
          />
        </div>
      )}
      <h2
        className={`text-black group-hover:underline  ${
          isCenter ? "text-3xl" : "text-base"
        } font-bold pt-2`}
      >
        {data.title}
      </h2>
      {isShowDescription && (
        <p className="text-black text-sm pt-3">{data.description}</p>
      )}
      <p className="text-[12px] pt-3.5 text-black">
        {formatDate} {category === "head" ? "" : "| " + category}
      </p>

      {isLast && (
        <div className="border-b border-gray-200 w-full pt-2 mb-4"></div>
      )}
    </div>
  );
}

export default NewsBox;
