import type { Article } from "../services/HomeService/types/news";
import { formatPublishedDate } from "../utils/formatedate";
import { useNavigate } from "react-router-dom";

type ImgNewsProps = {
  data: Article;
  index: number;
};

function NewBoxImg({ data, index }: ImgNewsProps) {
  const nevigate = useNavigate();
  if (!data) return null;
  return (
    <div
      onClick={() => nevigate(`/detail/${index}/head`)}
      className="grid grid-cols-5 gap-3.5 mb-3.5 group cursor-pointer "
    >
      <div className="col-span-2 flex flex-col  justify-center text-start">
        <h2 className="text-black group-hover:underline text-xl md:text-2xl xl:text-3xl font-bold pt-2">
          {data.title}
        </h2>

        <p className="text-black text-sm pt-3">{data.description}</p>
        <p className="text-[12px] pt-3.5 text-black">
          {formatPublishedDate(data.publishedAt)}
        </p>
      </div>

      <div className="col-span-3 flex items-center justify-center">
        <img
          className="object-cover"
          src={
            data.urlToImage ??
            "https://i.pinimg.com/736x/94/2d/7b/942d7b770176b84541f4356ec87a0e09.jpg"
          }
          alt="news"
        />
      </div>
    </div>
  );
}

export default NewBoxImg;
