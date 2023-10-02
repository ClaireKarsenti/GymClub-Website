import { useState, useRef } from 'react';
import BlogBox from 'components/partials/BlogBox/BlogBox';
import Footer from 'components/structure/Footer/Footer';
import { blogContent, categories, tags } from 'data/pages/BlogData';
import { scrollMedium } from 'utils/helpers/scrollTopHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');
  const recentPostRefs = useRef<Array<HTMLElement | null>>([]);
  const selectedRecentPostIndex = useRef<number | null>(null);
  const articleRefs = useRef<Array<HTMLElement | null>>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSelectedCategory('All');
    setSelectedTag('');
  };

  const filteredBlogContent = blogContent.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedTag('');
    scrollMedium();
  };

  const filteredByCategory =
    selectedCategory === 'All'
      ? filteredBlogContent
      : filteredBlogContent.filter((blog) => blog.theme === selectedCategory);

  const handleTagClick = (tag: string) => {
    setSelectedCategory(tag);
    setSelectedTag(tag);
    scrollMedium();
  };

  const filteredByTag =
    selectedTag !== ''
      ? filteredByCategory.filter((blog) => blog.theme === selectedTag)
      : filteredByCategory;

  const scrollToArticle = (index: number) => {
    selectedRecentPostIndex.current = index;
    if (recentPostRefs.current[index]) {
      recentPostRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedCategory('All');
      if (articleRefs.current[index]) {
        articleRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Blog
          </h1>
        </div>
        <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
          <div className="flex flex-col gap-28">
            {filteredByCategory.length === 0 || filteredByTag.length === 0 ? (
              <p className="text-[18px] text-black font-bold mb-5">
                We are sorry, there is no article in this category for now.
              </p>
            ) : (
              filteredByCategory.map((blog, index) => (
                <BlogBox
                  key={index}
                  postId={blog.postId}
                  imgPost={blog.imgPost}
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
                value={searchQuery}
                onChange={handleSearch}
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
                    selectedCategory === 'All' ? 'font-bold text-[#ff0336]' : ''
                  }`}
                  onClick={() => handleCategoryClick('All')}
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
                      selectedCategory === category
                        ? 'font-bold text-[#ff0336]'
                        : ''
                    }`}
                    onClick={() => handleCategoryClick(category)}
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
                          (blog) => blog.theme === category
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
                {blogContent.map((post, index) => (
                  <div key={index} className="flex gap-8">
                    <img
                      src={
                        post.imgRecentPost ? post.imgRecentPost : post.imgPost
                      }
                      alt="recent_img"
                      className="w-[10rem]"
                    />
                    <div className="flex flex-col gap-4 justify-center">
                      <p className="text-[14px] text-[#646464] font-medium">
                        {post.writeAt}, {new Date().getFullYear()}
                      </p>
                      <p
                        className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold"
                        onClick={() => scrollToArticle(index)}
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
                      selectedTag === tag ? 'font-bold' : ''
                    }`}
                    onClick={() => handleTagClick(tag)}
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
        <Footer />
      </section>
    </>
  );
}

export default Blog;
