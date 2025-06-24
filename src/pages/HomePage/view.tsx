import NewsBox from "../../components/NewsBox";
import NewsBoxRow from "../../components/NewsBoxRow";
import type { Article } from "../../services/HomeService/types/news";
import useHomeViewModel from "./viewmodel";
import { formatPublishedDate } from "../../utils/formatedate";

// Simple Skeleton component
function SkeletonBox({ height = 120 }: { height?: number }) {
  return (
    <div
      className="animate-pulse bg-gray-200 rounded mb-4"
      style={{ height }}
    />
  );
}

function HomeView({ category }: { category: string }) {
  const {
    all_articles,
    isAllLoading,
    setMoreInPage,
    currentMoreInArticles,
    totalMoreInPages,
    moreInPage,
    startIndex,
  } = useHomeViewModel(category);

  return (
    <div className="w-full min-h-screen bg-white pt-[45px] sm:pt-[48px] md:pt-[80px] lg:pt-[122px] px-4  xl:px-25 ">
      {/* box 1 */}
      <div className="grid grid-cols-8 sm:grid-cols-12 lg:grid-cols-16 gap-5">
        <div className="hidden sm:block sm:col-span-4 py-5">
          {isAllLoading
            ? [1, 2].map((i) => <SkeletonBox key={i} height={180} />)
            : all_articles
                .slice(0, 2)
                .map((articles: Article, index: number) => (
                  <NewsBox
                    key={articles.title}
                    data={articles}
                    index={0 + index}
                    isShowImg={true}
                    isCenter={false}
                    isShowDescription={true}
                    isLast={index !== 1}
                  />
                ))}
        </div>

        <div className="col-span-8 py-5">
          {isAllLoading ? (
            <SkeletonBox height={250} />
          ) : (
            <NewsBox
              data={all_articles[2]}
              index={2}
              isShowImg={true}
              isCenter={true}
              isShowDescription={true}
              isLast={false}
            />
          )}
        </div>

        <div className="hidden lg:block col-span-4 py-5">
          {isAllLoading
            ? [1, 2, 3, 4].map((i) => <SkeletonBox key={i} height={120} />)
            : all_articles
                .slice(3, 7)
                .map((articles: Article, index: number) => (
                  <NewsBox
                    key={articles.title}
                    data={articles}
                    index={3 + index}
                    isShowImg={false}
                    isCenter={false}
                    isShowDescription={true}
                    isLast={index !== 3}
                  />
                ))}
        </div>
      </div>

      {isAllLoading
        ? [1, 2].map((i) => <SkeletonBox key={i} height={80} />)
        : all_articles.slice(0, 2).map((articles: Article) => (
            <div
              key={articles.title}
              className="sm:hidden flex flex-col group cursor-pointer pb-5"
            >
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
        {isAllLoading
          ? [1, 2, 3, 4].map((i) => <SkeletonBox key={i} height={120} />)
          : all_articles
              .slice(3, 7)
              .map((articles: Article, index: number) => (
                <NewsBox
                  key={articles.title}
                  data={articles}
                  index={3 + index}
                  isShowImg={false}
                  isCenter={false}
                  isShowDescription={true}
                  isLast={index !== 3}
                />
              ))}
      </div>
      {/* box 1 */}

      {/* box 2 */}
      <div className="border-b-2 border-black w-full pt-8"></div>
      <h2 className="text-black font-extrabold pt-1">WEEKEND READS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6">
        {isAllLoading
          ? [1, 2].map((i) => <SkeletonBox key={i} height={180} />)
          : all_articles
              .slice(7, 9)
              .map((articles: Article, index: number) => (
                <NewsBox
                  key={articles.title}
                  data={articles}
                  index={7 + index}
                  isShowImg={true}
                  isCenter={false}
                  isShowDescription={true}
                  isLast={false}
                />
              ))}
      </div>
      {/* box 2 */}

      {/* ปุ่มเลื่อน */}

      {isAllLoading ? (
        <div></div>
      ) : (
        category !== "" && (
          <div className="w-full pt-6">
            <div className="text-black border-t-2 border-black" />
            <h3 className="text-sm md:text-base font-extrabold pt-2 text-black">
              MORE IN {category.toLocaleUpperCase()}
            </h3>

            <div>
              {currentMoreInArticles.map((article: Article, index: number) => (
                <NewsBoxRow
                  key={article.title}
                  data={article}
                  index={startIndex + index}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalMoreInPages > 0 && (
              <div className="flex justify-center gap-2 mt-4 mb-4">
                <button
                  onClick={() => setMoreInPage((prev) => Math.max(prev - 1, 1))}
                  disabled={moreInPage === 1}
                  className="px-4 py-2 bg-gray-100 text-black font-bold "
                >
                  &lt;
                </button>

                {[...Array(totalMoreInPages)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMoreInPage(idx + 1)}
                    className={`px-4 py-2 ${
                      moreInPage === idx + 1
                        ? "bg-black text-white font-bold"
                        : "bg-gray-100 text-black font-bold"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setMoreInPage((prev) =>
                      Math.min(prev + 1, totalMoreInPages)
                    )
                  }
                  disabled={moreInPage === totalMoreInPages}
                  className="px-4 py-2 bg-gray-100 text-black font-bold "
                >
                  &gt;
                </button>
              </div>
            )}
          </div>
        )
      )}

      {/* ปุ่มเลื่อน */}
    </div>
  );
}
export default HomeView;
