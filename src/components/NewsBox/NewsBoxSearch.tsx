import { useNavigate } from "react-router-dom";
import type { Article } from "../../services/HomeService/type";
import { formatPublishedDate } from "../../utils/formatedate";

type ImgNewsProps = {
  data: Article;
  index: number;
};

function NewsBoxSearch({ data, index }: ImgNewsProps) {
  if (!data) return null;
  const nevigate = useNavigate();

  return (
    <div
      onClick={() => nevigate(`/detail/${index}/head`)}
      className="flex flex-col group cursor-pointer pb-5  "
    >
      <div className="grid grid-cols-12 py-3.5 ">
        <div className="col-span-3 flex items-center justify-center">
          <img
            className="object-cover h-[150px] "
            src={
              data.urlToImage ??
              "https://i.pinimg.com/736x/c4/74/fc/c474fc3afd5bddbba025449218550f39.jpg"
            }
            alt="news"
          />
        </div>

        <div className="col-span-9 pl-15">
          <p className="text-[18px]  text-gray-700">{data.source.name}</p>
          <h2 className="text-black group-hover:underline text-2xl font-bold">
            {data.title}
          </h2>
          <p className="text-black text-sm pt-2.5">{data.description}</p>
          <p className="text-[12px]  text-black pt-3.5">
            {formatPublishedDate(data.publishedAt)}
          </p>
        </div>
      </div>
      <div className="border-b border-gray-200 w-full "></div>
    </div>
  );
}

export default NewsBoxSearch;
