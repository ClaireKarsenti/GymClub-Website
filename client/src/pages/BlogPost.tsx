import { useParams } from 'react-router-dom';
import { blogContent } from 'data/pages/BlogData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import BigButton from 'components/globals/buttons/BigButton';
import Footer from 'components/structure/Footer/Footer';

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
      <div className="text-center mt-16">
        <h2 className="text-[3rem] font-bold">{article.title}</h2>
      </div>
      <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
        <div>
          <p className="font-medium text-[14px] text-[#646464] pb-4 ">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="text-[#ff0336] text-[16px]"
            />
            &nbsp; By <b>Admin</b> | {article.writeAt},{' '}
            {new Date().getFullYear()} | {article.theme}
          </p>
          <img src={article.imgPost} alt={article.title} />
        </div>
        <div>
          <p className="font-medium text-[16px] text-[#646464] mb-10">
            {article.content}
          </p>
          <p className="font-medium text-[16px] text-[#646464] mb-24">
            {article.details}
          </p>
          <BigButton
            color={`!text-white`}
            bg={`bg-[#ff0336]`}
            text="go back to blog"
            cN="pricing-cta blog-cta"
            goTo="/blog"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default BlogPost;
