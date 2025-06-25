import type { Article } from "../services/HomeService/types/news";
import { formatPublishedDate } from "../utils/formatedate";
import { useNavigate } from "react-router-dom";

type ImgNewsProps = {
  data: Article;
  index: number;
  category: string;
};

function NewsBoxRow({ data, index, category }: ImgNewsProps) {
  if (!data) return null;

  const nevigate = useNavigate();
  return (
    <div
      onClick={() => nevigate(`/detail/${index}/${category}`)}
      className="grid grid-cols-12 gap-6 pt-5 cursor-pointer group"
    >
      <p className="text-[12px] text-black col-span-2 hidden sm:flex  justify-end items-start ">
        {formatPublishedDate(data.publishedAt)}
      </p>
      <div className=" col-span-8 sm:col-span-6">
        <h3 className="text-black text-[18px] sm:text-xl font-bold group-hover:underline">
          {data.title}
        </h3>
        <p className="text-black text-sm">{data.description}</p>
      </div>
      <img
        className="w-[300px] h-[168px] object-cover col-span-4"
        src={
          data.urlToImage ??
          "https://i.pinimg.com/736x/94/2d/7b/942d7b770176b84541f4356ec87a0e09.jpg"
        }
        alt="news"
      />
      <div className="col-span-12 sm:col-start-3 sm:col-span-10 pb-9">
        <p className="text-[12px] sm:flex hidden text-black">
          {category === "head" ? "" : category}
        </p>
        <p className="text-[12px] sm:hidden flex text-black">
          {formatPublishedDate(data.publishedAt)}
          {category === "head" ? "" : "|" + category}
        </p>
        <div className="border-b border-gray-200 w-full mt-2"></div>
      </div>
    </div>
  );
}

export default NewsBoxRow;
