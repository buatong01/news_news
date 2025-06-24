import NewsBox from "../../components/NewsBox";
import NewsBoxRow from "../../components/NewsBoxRow";
import NewsBoxRowTwo from "../../components/NewsBoxRowTwo";
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

  //abc

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
        : all_articles
            .slice(0, 2)
            .map((articles: Article, index: number) => (
              <NewsBoxRowTwo
                key={articles.title}
                data={articles}
                index={0 + index}
              />
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

      {/* อันที่งง ห้ามแตะ  */}
      {category === "" && (
        <div>
          <div className="border-b-2 border-black w-full pt-8"></div>
          <h2 className="text-black font-extrabold pt-1 ">ALSO IN NEWS &gt;</h2>
          <div className="grid md:grid-cols-10 lg:grid-cols-15 gap-0 sm:gap-5 pt-5">
            <div className=" md:col-span-7 lg:col-span-11 ">
              <div className="hidden md:flex flex-col">
                {all_articles
                  .slice(9, 10)
                  .map((articles: Article, index: number) => (
                    <div className="grid grid-cols-5 gap-3.5 mb-3.5 group cursor-pointer ">
                      <div className="col-span-2 flex flex-col  justify-center text-start">
                        <h2 className="text-black group-hover:underline text-xl md:text-2xl xl:text-3xl font-bold pt-2">
                          {articles.title}
                        </h2>

                        <p className="text-black text-sm pt-3">
                          {articles.description}
                        </p>
                        <p className="text-[12px] pt-3.5 text-black">
                          {formatPublishedDate(articles.publishedAt)}
                        </p>
                      </div>

                      <div className="col-span-3 flex items-center justify-center">
                        <img
                          className="object-cover"
                          src={
                            articles.urlToImage ??
                            "https://i.pinimg.com/736x/94/2d/7b/942d7b770176b84541f4356ec87a0e09.jpg"
                          }
                          alt="news"
                        />
                      </div>
                    </div>
                  ))}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {all_articles
                    .slice(11, 14)
                    .map((articles: Article, index: number) => (
                      <NewsBox
                        key={articles.title}
                        data={articles}
                        index={11 + index}
                        isShowImg={true}
                        isCenter={false}
                        isShowDescription={true}
                        isLast={false}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="md:hidden flex">
              {all_articles
                .slice(9, 10)
                .map((articles: Article, index: number) => (
                  <NewsBox
                    key={articles.title}
                    data={articles}
                    index={9 + index}
                    isShowImg={index === 0}
                    isCenter={true}
                    isShowDescription={true}
                    isLast={true}
                  />
                ))}
            </div>
            <div className="hidden md:block md:col-span-3 lg:col-span-4 ">
              {all_articles
                .slice(10, 11)
                .map((articles: Article, index: number) => (
                  <NewsBox
                    key={articles.title}
                    data={articles}
                    index={10 + index}
                    isShowImg={true}
                    isCenter={false}
                    isShowDescription={true}
                    isLast={true}
                  />
                ))}
              {all_articles
                .slice(14, 16)
                .map((articles: Article, index: number) => (
                  <NewsBox
                    key={articles.title}
                    data={articles}
                    index={14 + index}
                    isShowImg={false}
                    isCenter={false}
                    isShowDescription={true}
                    isLast={true}
                  />
                ))}
            </div>
            <div className=" md:hidden sm:grid hidden grid-cols-1 sm:grid-cols-2 gap-3.5">
              {all_articles
                .slice(10, 13)
                .map((articles: Article, index: number) => (
                  <NewsBox
                    key={articles.title}
                    data={articles}
                    index={10 + index}
                    isShowImg={true}
                    isCenter={index === 3}
                    isShowDescription={true}
                    isLast={false}
                  />
                ))}
            </div>
            //////
            <div className=" sm:hidden grid grid-cols-1 ">
              {all_articles
                .slice(10, 13)
                .map((articles: Article, index: number) => (
                  <NewsBoxRowTwo
                    key={articles.title}
                    data={articles}
                    index={0 + index}
                  />
                ))}
            </div>
            <div className="md:hidden grid grid-cols-1  gap-3.5">
              <div className="sm:flex hidden">
                {all_articles
                  .slice(13, 14)
                  .map((articles: Article, index: number) => (
                    <NewsBox
                      key={articles.title}
                      data={articles}
                      index={13 + index}
                      isShowImg={true}
                      isCenter={true}
                      isShowDescription={true}
                      isLast={false}
                    />
                  ))}
              </div>

              {all_articles
                .slice(14, 16)
                .map((articles: Article, index: number) => (
                  <NewsBox
                    key={articles.title}
                    data={articles}
                    index={14 + index}
                    isShowImg={false}
                    isCenter={false}
                    isShowDescription={true}
                    isLast={false}
                  />
                ))}
            </div>
          </div>
        </div>
      )}

      {/* อันที่งง ฟ้ามแตะ */}

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
