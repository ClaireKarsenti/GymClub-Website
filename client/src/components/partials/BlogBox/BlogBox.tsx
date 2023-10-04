import { forwardRef, Ref } from 'react';
import BigButton from '../../globals/buttons/BigButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

export type BlogBoxType = {
  imgPost: string;
  title: string;
  writeAt: string;
  theme: string;
  postId: string;
  content: string;
};

const BlogBox = forwardRef(
  (
    { imgPost, title, writeAt, theme, postId, content }: BlogBoxType,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <>
        <div ref={ref}>
          <img src={imgPost} alt="blog_img" />
          <p className="font-medium text-[14px] text-[#646464] pt-8 pb-4">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="text-[#ff0336] text-[16px]"
            />
            &nbsp; By <b>Admin</b> | {writeAt}, {new Date().getFullYear()} |{' '}
            {theme}
          </p>
          <h2 className="text-[3rem] font-bold mb-6">{title}</h2>
          <p className="font-medium text-[16px] text-[#646464] mb-24">
            {content}
          </p>
          <BigButton
            color={`!text-white`}
            bg={`bg-[#ff0336]`}
            text="Read this post"
            cN="pricing-cta blog-cta"
            goTo={`/blog/${postId}`}
          />
        </div>
      </>
    );
  }
);

export default BlogBox;
