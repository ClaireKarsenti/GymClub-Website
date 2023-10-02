import { useParams } from 'react-router-dom';
import { blogContent } from 'data/pages/BlogData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import BigButton from 'components/globals/buttons/BigButton';

function BlogPost() {
  const { postId } = useParams();

  if (!postId) {
    return (
      <div>
        <p>The post you are looking for was not found.</p>
      </div>
    );
  }

  const article = blogContent.find((blog) => blog.postId === postId);

  if (!article) {
    return (
      <div>
        <p>The post you are looking for was not found.</p>
      </div>
    );
  }

  return (
    <section>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Post
        </h1>
      </div>
      <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
        <div className="text-center md:text-left">
          {' '}
          {/* Center title on mobile, align left on larger screens */}
          <h2 className="text-[3rem] font-bold mb-6">{article.title}</h2>
        </div>
        <div>
          <p className="font-medium text-[14px] text-[#646464] pt-8 pb-4">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="text-[#ff0336] text-[16px]"
            />
            &nbsp; By <b>Admin</b> | {article.writeAt},{' '}
            {new Date().getFullYear()} | {article.theme}
          </p>
          <img src={article.img} alt={article.title} />
        </div>

        <p className="font-medium text-[16px] text-[#646464] mb-24">
          Authoritatively disseminate multimedia-based comprehensive
          connectivity through market-driven methodologies. Continuously
          transform integrated outcomes vis-à-vis multidisciplinary
          manufacturing. Foster thoroughly researched innovation rather than
          focusing on backend supply, as when an unknown printer took a galley.
        </p>
        <BigButton
          color={`!text-white`}
          bg={`bg-[#ff0336]`}
          text="Back to blog"
          cN="pricing-cta blog-cta"
          goTo="/blog"
        />
      </div>
    </section>
  );
}

export default BlogPost;
