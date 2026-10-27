import { formatDate } from '../utils/dateFormatter';
import { INITIAL_FEATURED_POSTS } from '../utils/constants';
import './PostDetailPage.css';

export function PostDetailPage({ postId, onBack }) {
  const post =
    INITIAL_FEATURED_POSTS.find((p) => p.id === postId) || INITIAL_FEATURED_POSTS[0];

  return (
    <article className="post-detail-page">
      <button type="button" className="back-btn" onClick={onBack}>
        ← Back to all articles
      </button>

      <header className="detail-header">
        <span className="detail-category-badge">{post.category}</span>
        <h1 className="detail-title">{post.title}</h1>

        <div className="detail-meta-bar">
          <div className="detail-author-box">
            {post.author?.avatar && (
              <img
                src={post.author.avatar}
                alt=""
                className="detail-author-avatar"
                width="40"
                height="40"
              />
            )}
            <div className="detail-author-meta">
              <span className="detail-author-name">{post.author?.name}</span>
              <span className="detail-author-role">{post.author?.role}</span>
            </div>
          </div>

          <div className="detail-info-group">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <section className="detail-content">
        <p>{post.excerpt}</p>

        <div className="detail-placeholder-box">
          <p>
            <strong>Post Content Architecture:</strong> This article detail view is mounted via the clean <code>pages/PostDetailPage.jsx</code> module.
            Once the backend API is connected in the next phase, <code>postService.getPostById(id)</code> and <code>usePosts()</code> will populate dynamic markdown or rich text content here.
          </p>
        </div>
      </section>
    </article>
  );
}

export default PostDetailPage;
