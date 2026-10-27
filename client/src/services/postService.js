import { apiRequest } from './api';

/**
 * Service methods for Blog Post CRUD operations.
 * Prepared for future backend API integration.
 */
export const postService = {
  /**
   * Fetches all published posts.
   * @param {Object} [params] - Optional query parameters (e.g. category, search)
   * @returns {Promise<Array>}
   */
  async getAllPosts(params = {}) {
    const query = new URLSearchParams(params).toString();
    const endpoint = query ? `/posts?${query}` : '/posts';
    return apiRequest(endpoint, { method: 'GET' });
  },

  /**
   * Fetches a single post by ID.
   * @param {string} id
   * @returns {Promise<Object>}
   */
  async getPostById(id) {
    return apiRequest(`/posts/${id}`, { method: 'GET' });
  },

  /**
   * Creates a new post.
   * @param {Object} postData
   * @returns {Promise<Object>}
   */
  async createPost(postData) {
    return apiRequest('/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  },

  /**
   * Updates an existing post.
   * @param {string} id
   * @param {Object} postData
   * @returns {Promise<Object>}
   */
  async updatePost(id, postData) {
    return apiRequest(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
  },

  /**
   * Deletes a post by ID.
   * @param {string} id
   * @returns {Promise<null>}
   */
  async deletePost(id) {
    return apiRequest(`/posts/${id}`, {
      method: 'DELETE',
    });
  },
};

export default postService;
