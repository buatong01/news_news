import save from "../../assets/save.png";
import share from "../../assets/share.png";
import { useParams } from "react-router-dom";
import { useNewsContext } from "../../context/newcontext";
import { useMemo } from "react";
import { formatPublishedDate } from "../../utils/formatedate";
import type { Article } from "../../services/HomeService/type";
import NewsBoxRow from "../../components/NewsBox/NewsBoxRow";
import NewsBox from "../../components/NewsBox/NewsBox";
// import "react-loading-skeleton/dist/skeleton.css";
// import Skeleton from "react-loading-skeleton";

function DetailView() {
  const { index, category } = useParams();
  const { articles, everythingArticles } = useNewsContext();

  const article = useMemo(() => {
    if (!articles || !index) return undefined;

    if (category === "head") {
      return articles[Number(index)];
    } else {
      const result = everythingArticles
        .filter(
          (article: Article) => article.category?.toLowerCase() === category
        )
        .sort(
          (a: Article, b: Article) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
      return result[Number(index)];
    }
  }, [articles, everythingArticles, category, index]);

  //abc

  // if (!articles) {
  //   return (
  //     <div className="w-full min-h-screen bg-white pt-[80px] px-4 sm:px-8 md:px-16">
  //       <Skeleton height={40} width={`80%`} />
  //       <Skeleton height={20} width={`60%`} style={{ marginTop: "10px" }} />
  //       <Skeleton height={20} width={`30%`} style={{ marginTop: "10px" }} />
  //       <Skeleton height={300} style={{ marginTop: "20px" }} />
  //       <Skeleton count={5} style={{ marginTop: "20px" }} />
  //     </div>
  //   );
  // }

  if (!article) return null;

  const formatDate = formatPublishedDate(article?.publishedAt ?? "");

  return (
    <div className="w-full min-h-screen bg-white pt-[45px] sm:pt-[48px] md:pt-[80px] lg:pt-[122px]">
      <div className=" text-black border-t border-black" />

      <div className="px-0 sm:px-8 md:px-16 xl:px-65 py-5 flex flex-col items-center justify-center">
        <h2 className="w-full px-4 sm:px-0 xl:px-20 text-black text-3xl sm:text-4xl font-bold">
          {article.title}
        </h2>

        <div className="w-full px-4 sm:px-0 xl:px-20 pt-2.5 text-black text-[12px] flex flex-row items-center justify-between">
          <p>{formatDate}</p>
          <div className="space-x-4 hidden  sm:flex items-center">
            <div className="flex items-center">
              <strong className="cursor-pointer hover:underline">Share</strong>
              <img src={share} alt="share" className="ml-1.5 h-4 w-4" />
            </div>
            <div className="flex items-center">
              <strong className="cursor-pointer hover:underline">Save</strong>
              <img src={save} alt="save" className="ml-1.5 h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-0 xl:px-20 pt-3  text-left flex flex-col">
          <p className="text-black font-sm font-bold">
            {article.author ?? "No Author"}
          </p>
          <p className="text-black text-[12px]">{article.source.name}</p>
        </div>

        <div className=" sm:hidden w-full px-4 sm:px-0 xl:px-20 pt-2.5 text-black text-[12px] flex justify-end border-t border-gray-200">
          <div className="flex space-x-4 items-center">
            <div className="flex items-center pb-3">
              <strong className="cursor-pointer text-base hover:underline">
                Share
              </strong>
              <img src={share} alt="share" className="ml-1.5 h-5 w-5" />
            </div>
            <div className="flex items-center pb-3">
              <strong className="cursor-pointer text-base hover:underline">
                Save
              </strong>
              <img src={save} alt="save" className="ml-1.5 h-5 w-5" />
            </div>
          </div>
        </div>

        <img
          className=" w-full pt-4 max-w-5xl lg:max-w-6xl h-auto object-cover"
          src={
            article.urlToImage ??
            "https://i.pinimg.com/736x/13/ab/78/13ab78cf52f96093563fbdfe21b72e47.jpg"
          }
          alt="news"
        />

        <p className=" px-4 sm:px-0 xl:px-20 text-black text-base md:text-xl pt-5">
          {article.content ?? "no content"}
        </p>
      </div>

      <div className="w-full px-4 sm:px-4 xl:px-25">
        <div className=" text-black border-t-2 border-black" />
        <h3 className="text-sm md:text-base font-extrabold pt-2 text-black">
          RELATED
        </h3>

        <div className="pt-5 pb-12 gap-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {category === "head"
            ? articles
                .slice(7, 10)
                .map((articles: Article, index: number) => (
                  <NewsBox
                    data={articles}
                    index={7 + index}
                    category="head"
                    isShowImg={false}
                    isCenter={false}
                    isShowDescription={false}
                    isLast={false}
                  />
                ))
            : everythingArticles
                .filter((article: Article) => article.category === category)
                .sort(
                  (a: Article, b: Article) =>
                    new Date(b.publishedAt).getTime() -
                    new Date(a.publishedAt).getTime()
                )
                .slice(7, 10)
                .map((articles: Article, index: number) => (
                  <NewsBox
                    data={articles}
                    index={7 + index}
                    category={category ?? "head"}
                    isShowImg={false}
                    isCenter={false}
                    isShowDescription={false}
                    isLast={false}
                  />
                ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-4 xl:px-25">
        <div className=" text-black border-t-2 border-black" />
        <h3 className="text-sm md:text-base font-extrabold pt-2 text-black">
          MORE FROM THE BBC
        </h3>
        <div>
          {category === "head"
            ? articles
                .slice(10, 14)
                .map((articles: Article, index: number) => (
                  <NewsBoxRow
                    data={articles}
                    index={10 + index}
                    category="head"
                  />
                ))
            : everythingArticles
                .filter((article: Article) => article.category === category)
                .sort(
                  (a: Article, b: Article) =>
                    new Date(b.publishedAt).getTime() -
                    new Date(a.publishedAt).getTime()
                )
                .slice(10, 14)
                .map((articles: Article, index: number) => (
                  <NewsBoxRow
                    data={articles}
                    index={10 + index}
                    category={category ?? "head"}
                  />
                ))}
        </div>
      </div>
    </div>
  );
}

export default DetailView;
