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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    controller.updateState({
      searchQuery: e.target.value,
      selectedCategory: 'All',
      selectedTag: '',
    });
  };

  const filteredBlogContent = posts.filter((blog: any) =>
    blog.title
      .toLowerCase()
      .includes(controller.state.searchQuery.toLowerCase())
  );

  const handleCategoryClick = (category: string) => {
    controller.updateState({
      selectedCategory: category,
      selectedTag: '',
    });
    scrollMedium();
  };

  const selectedCategory = controller.state.selectedCategory;
  const selectedTag = controller.state.selectedTag;

  const filteredByCategory =
    selectedCategory === 'All'
      ? filteredBlogContent
      : filteredBlogContent.filter(
          (blog: any) => blog.theme === selectedCategory
        );

  const handleTagClick = (tag: string) => {
    controller.updateState({
      selectedCategory: tag,
      selectedTag: tag,
    });
    scrollMedium();
  };

  const filteredByTag =
    selectedTag !== ''
      ? filteredByCategory.filter((blog: any) => blog.theme === selectedTag)
      : filteredByCategory;

  const recentPostRefs = useRef<Array<HTMLElement | null>>([]);
  const selectedRecentPostIndex = useRef<number | null>(null);
  const articleRefs = useRef<Array<HTMLElement | null>>([]);

  const scrollToArticle = (index: number) => {
    selectedRecentPostIndex.current = index;
    if (recentPostRefs.current[index]) {
      recentPostRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    } else {
      controller.updateState({
        selectedCategory: 'All',
        selectedTag: '',
      });
      if (articleRefs.current[index]) {
        articleRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return {
    controller,
    handleSearch,
    handleCategoryClick,
    filteredBlogContent,
    selectedCategory,
    selectedTag,
    filteredByCategory,
    filteredByTag,
    scrollToArticle,
    handleTagClick,
    articleRefs,
  };
};
