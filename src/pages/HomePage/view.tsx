import NewsBox from "../../components/NewsBox";
import type { Article } from "../../services/HomeService/types/news";
import useHomeViewModel from "./viewmodel";
import { formatPublishedDate } from "../../utils/formatedate";

function HomeView({ category }: { category: string }) {
  const { all_articles, isAllLoading } = useHomeViewModel(category);
  return (
    <div className="w-full min-h-screen bg-white pt-[45px] sm:pt-[48px] md:pt-[80px] lg:pt-[122px] px-4  xl:px-25 ">
      {/* box 1 */}
      <div className="grid grid-cols-8 sm:grid-cols-12 lg:grid-cols-16 gap-5">
        <div className="hidden sm:block sm:col-span-4 py-5">
          {all_articles.slice(0, 2).map((articles: Article, index: number) => (
            <NewsBox
              data={articles}
              index={0 + index}
              isShowImg={true}
              isCenter={false}
              isLast={index !== 1}
            />
          ))}
        </div>

        <div className="col-span-8 py-5">
          <NewsBox
            data={all_articles[2]}
            index={2}
            isShowImg={true}
            isCenter={true}
            isLast={false}
          />
        </div>

        <div className="hidden lg:block col-span-4 py-5">
          {all_articles.slice(3, 7).map((articles: Article, index: number) => (
            <NewsBox
              data={articles}
              index={3 + index}
              isShowImg={false}
              isCenter={false}
              isLast={index !== 3}
            />
          ))}
        </div>
      </div>

      {all_articles.slice(0, 2).map((articles: Article) => (
        <div className="sm:hidden flex flex-col group cursor-pointer pb-5">
          <div className="flex justify-center items-start ">
            <img
              className="object-cover h-[80px] pr-3"
              src={articles.urlToImage ?? undefined}
              alt="news"
            />
            <div className="flex flex-col justify-start">
              <h2 className="text-black group-hover:underline text-base font-bold">
                {articles.title}
              </h2>
              <p className="text-[12px] pt-3.5 text-black">
                {formatPublishedDate(articles.publishedAt)}
              </p>
            </div>
          </div>
          <div className="border-b border-gray-200 w-full pt-2 mb-4"></div>
        </div>
      ))}

      <div className="lg:hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-5 pb-5 sm:py-5">
        {all_articles.slice(3, 7).map((articles: Article, index: number) => (
          <NewsBox
            data={articles}
            index={3 + index}
            isShowImg={false}
            isCenter={false}
            isLast={index !== 3}
          />
        ))}
      </div>
      {/* box 1 */}

      {/* box 2 */}
      <div className="border-b-2 border-black w-full pt-8"></div>
      <h2 className="text-black font-extrabold pt-1">WEEKEND READS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6">
        {all_articles.slice(7, 9).map((articles: Article, index: number) => (
          <NewsBox
            data={articles}
            index={7 + index}
            isShowImg={true}
            isCenter={false}
            isLast={false}
          />
        ))}
        \
      </div>
      {/* box 2 */}
    </div>
  );
}
export default HomeView;
