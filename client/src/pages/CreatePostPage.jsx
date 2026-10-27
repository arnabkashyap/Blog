import { useState } from 'react';
import { BLOG_CATEGORIES } from '../utils/constants';
import './CreatePostPage.css';

export function CreatePostPage({ onCancel, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    category: BLOG_CATEGORIES[1] || 'Web Development',
    excerpt: '',
    content: '',
  });

  const categories = BLOG_CATEGORIES.filter((c) => c !== 'All');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmitSuccess) {
      onSubmitSuccess(formData);
    }
  };

  return (
    <div className="create-post-page">
      <div className="create-form-header">
        <h1>Create New Article</h1>
        <p>Draft your technical article, tutorial, or campus engineering update.</p>
      </div>

      <div className="info-banner" role="note">
        <strong>Architecture Notice:</strong> Frontend form wired for future backend submission via <code>services/postService.js</code>. No mock backend or fake auth is running.
      </div>

      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title">Article Title</label>
          <input
            id="post-title"
            name="title"
            type="text"
            className="form-input"
            placeholder="e.g. Building Scalable Web Apps with React 19"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-category">Category</label>
          <select
            id="post-category"
            name="category"
            className="form-select"
            value={formData.category}
            onChange={handleChange}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="post-excerpt">Short Summary / Excerpt</label>
          <input
            id="post-excerpt"
            name="excerpt"
            type="text"
            className="form-input"
            placeholder="Brief 1-2 sentence overview for the article card"
            value={formData.excerpt}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-content">Article Content (Markdown supported)</label>
          <textarea
            id="post-content"
            name="content"
            className="form-textarea"
            placeholder="Write your article content here..."
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePostPage;
