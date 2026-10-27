import { useState, useCallback } from 'react';
import { postService } from '../services/postService';

/**
 * Custom hook for post data lifecycle and loading/error states.
 * Ready for future backend integration.
 */
export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const data = await postService.getAllPosts(params);
      setPosts(data || []);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching posts');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    posts,
    setPosts,
    loading,
    error,
    fetchPosts,
  };
}

export default usePosts;
