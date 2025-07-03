import NewsBox from "../../components/NewsBox/NewsBox";
import NewsBoxRowTwo from "../../components/NewsBox/NewsBoxRowTwo";
import NewBoxImg from "../../components/NewsBox/NewBoxImg";
import type { Article } from "../../services/HomeService/type";
import useHomeViewModel from "./viewmodel";
import { useNewsContext } from "../../context/newcontext";
import MustRead from "../../components/NewsBox/MustReadBox";
import PaginationView from "../../components/Pagination/view";
import { SkeletonBox } from "../../components/SkeletonBox/view";
// import { useDispatch, useSelector } from "react-redux";
// import type { IStoreType } from "../../store/type";

function HomeView() {
  const { category } = useNewsContext();
  const {
    all_articles,
    isAllLoading,
    isEverythingLoading,
    everything_articles,
  } = useHomeViewModel();

  // const res = useSelector((state: IStoreType) => state.user);

  // console.log("user", res);

  // const dispatch = useDispatch();

  // dispatch({
  //   type: "SET_USER",
  //   payload: {
  //     name: "BT",
  //     email: "A-A",
  //     id: "1234567890",
  //   },
  // });

  if (isAllLoading || isEverythingLoading) {
    return (
      <div className="w-full min-h-screen bg-white pt-[45px] sm:pt-[48px] md:pt-[80px] lg:pt-[122px] px-4 xl:px-25">
        <div className="grid grid-cols-8 sm:grid-cols-12 lg:grid-cols-16 gap-5">
          <div className="hidden sm:block sm:col-span-4 py-5">
            <SkeletonBox height={180} />
            <SkeletonBox height={180} />
          </div>
          <div className="col-span-8 py-5">
            <SkeletonBox height={250} />
          </div>
          <div className="hidden lg:block col-span-4 py-5">
            <SkeletonBox height={120} />
            <SkeletonBox height={120} />
            <SkeletonBox height={120} />
            <SkeletonBox height={120} />
          </div>
        </div>

        <SkeletonBox height={80} />
        <SkeletonBox height={80} />

        <div className="lg:hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-5 pb-5 sm:py-5">
          <SkeletonBox height={120} />
          <SkeletonBox height={120} />
          <SkeletonBox height={120} />
          <SkeletonBox height={120} />
        </div>

        <div className="border-b-2 border-gray-300 w-full pt-8"></div>
        <div className="h-6 bg-gray-300 rounded w-48 mt-2 mb-6"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6">
          <SkeletonBox height={180} />
          <SkeletonBox height={180} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pb-9 mt-8">
          {[...Array(4)].map((i) => (
            <div key={i} className="border-t-2 border-gray-300">
              <div className="h-6 bg-gray-300 rounded w-24 mt-2 mb-4"></div>
              <SkeletonBox height={80} />
              <SkeletonBox height={80} />
              <SkeletonBox height={80} />
              <SkeletonBox height={80} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white pt-[45px] sm:pt-[48px] md:pt-[80px] lg:pt-[122px] px-4  xl:px-25 ">
      {/* box 1 */}
      <div className="grid grid-cols-8 sm:grid-cols-12 lg:grid-cols-16 gap-5">
        <div className="hidden sm:block sm:col-span-4 py-5">
          {all_articles.slice(0, 2).map((articles: Article, index: number) => (
            <NewsBox
              key={articles.title}
              data={articles}
              index={0 + index}
              category="head"
              isShowImg={true}
              isCenter={false}
              isShowDescription={true}
              isLast={index !== 1}
            />
          ))}
        </div>

        <div className="col-span-8 py-5">
          {
            <NewsBox
              data={all_articles[2]}
              index={2}
              category="head"
              isShowImg={true}
              isCenter={true}
              isShowDescription={true}
              isLast={false}
            />
          }
        </div>

        <div className="hidden lg:block col-span-4 py-5">
          {all_articles.slice(3, 7).map((articles: Article, index: number) => (
            <NewsBox
              key={articles.title}
              data={articles}
              index={3 + index}
              category="head"
              isShowImg={false}
              isCenter={false}
              isShowDescription={true}
              isLast={index !== 3}
            />
          ))}
        </div>
      </div>

      {all_articles.slice(0, 2).map((articles: Article, index: number) => (
        <NewsBoxRowTwo key={articles.title} data={articles} index={0 + index} />
      ))}

      <div className="lg:hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-5 pb-5 sm:py-5">
        {all_articles.slice(3, 7).map((articles: Article, index: number) => (
          <NewsBox
            key={articles.title}
            data={articles}
            index={3 + index}
            category="head"
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
        {all_articles.slice(7, 9).map((articles: Article, index: number) => (
          <NewsBox
            key={articles.title}
            data={articles}
            index={7 + index}
            category="head"
            isShowImg={true}
            isCenter={false}
            isShowDescription={true}
            isLast={false}
          />
        ))}
      </div>
      {/* box 2 */}

      {/* อันที่งง ห้ามแตะ  */}
      {category === "general" && (
        <div>
          <div className="border-b-2 border-black w-full pt-8"></div>
          <h2 className="text-black font-extrabold pt-1 ">ALSO IN NEWS &gt;</h2>
          <div className="grid md:grid-cols-10 lg:grid-cols-15 gap-0 sm:gap-5 pt-5">
            <div className=" md:col-span-7 lg:col-span-11 ">
              <div className="hidden md:flex flex-col">
                {all_articles
                  .slice(9, 10)
                  .map((articles: Article, index: number) => (
                    <NewBoxImg data={articles} index={9 + index} />
                  ))}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {all_articles
                    .slice(11, 14)
                    .map((articles: Article, index: number) => (
                      <NewsBox
                        key={articles.title}
                        data={articles}
                        index={11 + index}
                        category="head"
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
                    category="head"
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
                    category="head"
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
                    category="head"
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
                    category="head"
                    isShowImg={true}
                    isCenter={index === 3}
                    isShowDescription={true}
                    isLast={false}
                  />
                ))}
            </div>

            <div className="sm:hidden grid grid-cols-1 ">
              {all_articles
                .slice(10, 14)
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
                      category="head"
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
                    category="head"
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

      {/* โอ้ย */}
      {category === "general" && (
        <MustRead everything_articles={everything_articles} />
      )}

      {/* โอ้ย */}

      {/* แยก category ไรนักหนาวะ */}
      {category === "general" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pb-9 pt-3.5">
          {["trump", "business", "animal", "science"].map((cat) => (
            <div className="border-t-2 border-black" key={cat}>
              <h3 className="text-black font-extrabold pt-1 pb-4">
                {cat.toUpperCase()} &gt;
              </h3>
              {isEverythingLoading
                ? [1, 2, 3, 4].map((i) => <SkeletonBox key={i} height={80} />)
                : everything_articles
                    .filter(
                      (article: Article) =>
                        article.category?.toLowerCase() === cat
                    )

                    .slice(0, 4)
                    .map((articles: Article, index: number) => (
                      <NewsBox
                        key={articles.title}
                        data={articles}
                        index={0 + index}
                        category={articles.category ?? "head"}
                        isShowImg={index === 0}
                        isCenter={false}
                        isShowDescription={index === 0}
                        isLast={index !== 3}
                      />
                    ))}
            </div>
          ))}
        </div>
      )}
      {/* แยก category ไรนักหนาวะ */}

      {/* ปุ่มเลื่อน */}
      {category !== "general" && (
        <>
          <div className="text-black border-t-2 border-black" />
          <h3 className="text-sm md:text-base font-extrabold pt-2 text-black">
            MORE IN {category.toLocaleUpperCase()}
          </h3>
          <PaginationView articles={all_articles} items={4} start={10} />
        </>
      )}

      {/* ปุ่มเลื่อน */}
    </div>
  );
}
export default HomeView;
