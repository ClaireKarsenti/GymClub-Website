import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from 'state/authSlice';

interface Post {
  _id: string;
  postId: string;
  imgPost?: string;
  imgRecentPost?: string;
  title: string;
  writeAt: string;
  theme: string;
  content: string;
  details?: string;
  createdAt: string;
  updatedAt: string;
}

class Posts {
  _token: string;
  _isLoading: boolean;
  _posts: Post[];

  constructor(token: string) {
    this._token = token;
    this._isLoading = true;
    this._posts = [];
  }

  fetchData = async () => {
    try {
      const response = await fetch(
        'https://gymate-clairekarsenti.onrender.com/posts',
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${this._token}` },
        }
      );
      const data = await response.json();
      this._posts = data;
      this._isLoading = false;
    } catch (error) {
      console.error('Error fetching posts:', error);
      this._isLoading = false;
    }
  };

  useGetPosts = () => {
    const dispatch = useDispatch();
    const token = useSelector((state: any) => state.token);

    const [state, setState] = useState({
      isLoading: this._isLoading,
      posts: this._posts,
    });

    useEffect(() => {
      const fetchDataAndDispatch = async () => {
        await this.fetchData();
        dispatch(setPosts(this._posts));
        setState({ isLoading: this._isLoading, posts: this._posts });
        console.log('posts:', this._posts);
      };

      fetchDataAndDispatch();
    }, [token, dispatch]);

    return state;
  };
}

export default Posts;
