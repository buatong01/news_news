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
      onClick={() => nevigate(`/detail/${index}/search`)}
      className="w-full max-w-full flex flex-col group cursor-pointer pb-5"
    >
      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4 py-3.5">
        {/* รูปภาพ: เต็มความกว้างบนมือถือ, อยู่ซ้ายบน sm ขึ้นไป */}
        <div className="w-full sm:col-span-3 flex items-center justify-center mb-3 sm:mb-0">
          <img
            className="object-cover w-full h-[180px] sm:h-[150px] sm:w-auto rounded"
            src={
              data.urlToImage ??
              "https://i.pinimg.com/736x/c4/74/fc/c474fc3afd5bddbba025449218550f39.jpg"
            }
            alt="news"
          />
        </div>

        {/* ข้อความ: อยู่ล่างบนมือถือ, อยู่ขวาบน sm ขึ้นไป */}
        <div className="w-full sm:col-span-9 pl-0 sm:pl-6">
          <p className="text-[16px] sm:text-[18px] text-gray-700">
            {data.source.name}
          </p>
          <h2 className="text-black group-hover:underline text-lg sm:text-2xl font-bold">
            {data.title}
          </h2>
          <p className="text-black text-sm pt-2.5 line-clamp-3">
            {data.description}
          </p>
          <p className="text-[12px] text-black pt-3.5">
            {formatPublishedDate(data.publishedAt)}
          </p>
        </div>
      </div>
      <div className="border-b border-gray-200 w-full"></div>
    </div>
  );
}

export default NewsBoxSearch;
