import { useBlog } from 'utils/controllers/BlogController';
import Posts from 'hooks/useGetPosts';
import BlogBox from 'components/partials/BlogBox/BlogBox';
import Footer from 'components/structure/Footer/Footer';
import { categories, tags } from 'data/pages/BlogData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

function Blog() {
  const {
    controller,
    state,
    filteredBlogContent,
    filteredByCategory,
    filteredByTag,
    articleRefs,
    recentPostRefs,
  } = useBlog();

  const token = state.token;
  const postService = new Posts(token);
  const { isLoading, posts } = postService.useGetPosts();

  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Blog
          </h1>
        </div>
        {isLoading ? (
          <div className="loader flex justify-center items-center m-auto mt-[5rem]"></div>
        ) : (
          <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
            <div className="flex flex-col gap-28">
              {filteredByCategory.length === 0 || filteredByTag.length === 0 ? (
                <p className="text-[18px] text-black font-bold mb-5">
                  We are sorry, there is no article in this category for now.
                </p>
              ) : (
                filteredByCategory.map((blog: any, index: any) => (
                  <BlogBox
                    key={index}
                    postId={blog.postId}
                    imgPost={`https://gymate-clairekarsenti.onrender.com/assets/${blog.imgPost}`}
                    title={blog.title}
                    writeAt={blog.writeAt}
                    theme={blog.theme}
                    content={blog.content}
                    ref={(el) => (articleRefs.current[index] = el)}
                  />
                ))
              )}
            </div>

            <div>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="border-solid border-[1px] text-[#444] text-[16px] font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
                  type="search"
                  placeholder="Search..."
                  value={state.searchQuery}
                  onChange={controller.handleSearch}
                ></input>
                <button type="submit">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="bg-[#ff0336] text-white text-[23px] h-[24px] w-[24px] rounded-br-xl rounded-tr-xl p-[18px]"
                  />
                </button>
              </form>

              <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
                <p className="text-[18px] text-black font-bold mb-5">
                  Categories
                </p>
                <span className="w-[40px] h-[3.5px] bg-[#ff0336]"></span>
                <ul className="text-[16px] text-[#7e7e7e] font-medium mt-10">
                  <li
                    className={`cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200 ${
                      state.selectedCategory === 'All'
                        ? 'font-bold text-[#ff0336]'
                        : ''
                    }`}
                    onClick={() => controller.handleCategoryClick('All')}
                  >
                    <p>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-[13px] mr-5"
                      />
                      All
                    </p>
                    <span>({filteredBlogContent.length})</span>
                  </li>
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200 ${
                        state.selectedCategory === category
                          ? 'font-bold text-[#ff0336]'
                          : ''
                      }`}
                      onClick={() => controller.handleCategoryClick(category)}
                    >
                      <p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-[13px] mr-5"
                        />
                        {category}
                      </p>
                      <span>
                        (
                        {
                          filteredBlogContent.filter(
                            (blog: any) => blog.theme === category
                          ).length
                        }
                        )
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
                <p className="text-[18px] text-black font-bold mb-5">
                  Recent Posts
                </p>
                <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
                <div className="flex flex-col gap-7">
                  {posts.map((post: any, index: any) => (
                    <div key={index} className="flex gap-8">
                      <img
                        src={`https://gymate-clairekarsenti.onrender.com/assets/${
                          post.imgRecentPost ? post.imgRecentPost : post.imgPost
                        }`}
                        alt="recent_img"
                        className="w-[10rem]"
                      />
                      <div className="flex flex-col gap-4 justify-center">
                        <p className="text-[14px] text-[#646464] font-medium">
                          {post.writeAt}, {new Date().getFullYear()}
                        </p>
                        <p
                          className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold"
                          onClick={() =>
                            controller.scrollToArticle(
                              index,
                              recentPostRefs,
                              articleRefs
                            )
                          }
                        >
                          {post.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
                <p className="text-[18px] text-black font-bold mb-5">
                  Popular Tags
                </p>
                <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
                <div className="flex gap-3 text-[16px] text-[#646464] font-medium flex-wrap">
                  {tags.map((tag, index) => (
                    <p
                      key={index}
                      className={`bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer ${
                        state.selectedTag === tag ? 'font-bold' : ''
                      }`}
                      onClick={() => controller.handleTagClick(tag)}
                    >
                      #{tag}
                    </p>
                  ))}
                </div>
              </div>

              <div className="blog-banner w-full h-[56rem] relative">
                <p className="absolute text-[34px] font-bold uppercase top-16 left-10 z-[2]">
                  gymat
                </p>
                <span className="banner-shape top-14 left-0 z-[1] bg-white absolute w-[18rem] h-[60px]"></span>
                <div className="text-white flex flex-col absolute top-[10rem] left-10">
                  <p className="text-[64px] font-bold">34%</p>
                  <p className="text-[20px] font-bold -mt-[10px]">
                    Flat Discount
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </section>
    </>
  );
}

export default Blog;
