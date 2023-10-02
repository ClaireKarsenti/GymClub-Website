import { forwardRef, Ref } from 'react';
import BigButton from '../../globals/buttons/BigButton';
import { BlogContent } from 'data/pages/BlogData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const BlogBox = forwardRef(
  (
    { img, title, writeAt, theme, postId }: BlogContent,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <>
        <div ref={ref}>
          <img src={img} alt="blog_img" />
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
            Authoritatively disseminate multimedia-based comprehensive
            connectivity through market-driven methodologies. Continuously
            transform integrated outcomes vis-à-vis multidisciplinary
            manufacturing. Foster thoroughly researched innovation rather than
            focusing on backend supply, as when an unknown printer took a
            galley.
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
