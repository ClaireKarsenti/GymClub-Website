import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Posts from 'hooks/useGetPosts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import BigButton from 'components/globals/buttons/BigButton';
import Footer from 'components/structure/Footer/Footer';

const Post = () => {
  const token = useSelector((state: any) => state.token);
  const postService = new Posts(token);
  const { isLoading, posts } = postService.useGetPosts();
  const { postId } = useParams();
  const post = posts?.find((blog: any) => blog.postId === postId);

  return (
    <section>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Post
        </h1>
      </div>
      {isLoading ? (
        <div className="loader flex justify-center items-center m-auto mt-[5rem]"></div>
      ) : !postId || !post ? (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium text-[2rem] text-[#646464] mt-9 text-center">
            The post you are looking for was not found.
          </p>
          <BigButton
            color="text-white"
            bg="bg-[#ff0336]"
            text="go back to blog"
            cN="pricing-cta blog-cta"
            goTo="/blog"
          />
        </div>
      ) : (
        <>
          <div className="text-center mt-16">
            <h2 className="text-[3rem] font-bold">{post.title}</h2>
          </div>
          <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
            <div>
              <p className="font-medium text-[14px] text-[#646464] pb-4">
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  className="text-[#ff0336] text-[16px]"
                />
                &nbsp; By <b>Admin</b> | {post.writeAt},{' '}
                {new Date().getFullYear()} | {post.theme}
              </p>
              <img
                src={`https://gymate-clairekarsenti.onrender.com/assets/${post.imgPost}`}
                alt={post.title}
              />
            </div>
            <div>
              <p className="font-medium text-[16px] text-[#646464] mb-10">
                {post.content}
              </p>
              <p className="font-medium text-[16px] text-[#646464] mb-24">
                {post.details}
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
        </>
      )}
      <Footer />
    </section>
  );
};

export default Post;
