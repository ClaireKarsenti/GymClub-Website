import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setPosts } from 'state/authSlice';

export const useGetPosts = (token: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const posts = useSelector((state: any) =>
    Array.isArray(state.posts) ? state.posts : []
  );
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://gymate-clairekarsenti.onrender.com/posts',
          {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return { isLoading, posts };
};
