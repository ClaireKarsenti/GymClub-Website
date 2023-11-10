import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { scrollMedium } from 'utils/helpers/scrollTopHelper';
import StateController from './StateController';
import Posts from 'hooks/useGetPosts';

export type BlogState = {
  token: string;
  searchQuery: string;
  selectedCategory: string;
  selectedTag: string;
};

interface BlogControllerProps {
  stateController: StateController<BlogState>;
}

export class BlogController {
  private _stateController: StateController<BlogState>;

  constructor({ stateController }: BlogControllerProps) {
    this._stateController = stateController;
  }

  get state() {
    return this._stateController.getState();
  }

  updateState(newState: Partial<BlogState>) {
    this._stateController.updateState(newState);
  }

  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.updateState({
      searchQuery: e.target.value,
      selectedCategory: 'All',
      selectedTag: '',
    });
  };

  handleCategoryClick = (category: string) => {
    this.updateState({
      selectedCategory: category,
      selectedTag: '',
    });
    scrollMedium();
  };

  handleTagClick = (tag: string) => {
    this.updateState({
      selectedCategory: tag,
      selectedTag: tag,
    });
    scrollMedium();
  };

  scrollToArticle = (
    index: number,
    recentPostRefs: React.MutableRefObject<Array<HTMLElement | null>>,
    articleRefs: React.MutableRefObject<Array<HTMLElement | null>>
  ) => {
    if (recentPostRefs.current[index]) {
      recentPostRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.updateState({
        selectedCategory: 'All',
        selectedTag: '',
      });
      if (articleRefs.current[index]) {
        articleRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
}

export const useBlog = () => {
  const [state, setState] = useState<BlogState>({
    token: useSelector((state: any) => state.token),
    searchQuery: '',
    selectedCategory: 'All',
    selectedTag: '',
  });

  const stateController = new StateController<BlogState>({
    state,
    setState,
  });

  const controller = new BlogController({ stateController });

  const postService = new Posts(state.token);
  const { posts } = postService.useGetPosts();

  const filteredBlogContent = posts.filter((blog: any) =>
    blog.title
      .toLowerCase()
      .includes(controller.state.searchQuery.toLowerCase())
  );

  const selectedCategory = controller.state.selectedCategory;
  const selectedTag = controller.state.selectedTag;

  const filteredByCategory =
    selectedCategory === 'All'
      ? filteredBlogContent
      : filteredBlogContent.filter(
          (blog: any) => blog.theme === selectedCategory
        );

  const filteredByTag =
    selectedTag !== ''
      ? filteredByCategory.filter((blog: any) => blog.theme === selectedTag)
      : filteredByCategory;

  const recentPostRefs = useRef<Array<HTMLElement | null>>([]);
  const articleRefs = useRef<Array<HTMLElement | null>>([]);

  return {
    controller,
    filteredBlogContent,
    selectedCategory,
    selectedTag,
    filteredByCategory,
    filteredByTag,
    articleRefs,
    recentPostRefs,
  };
};
