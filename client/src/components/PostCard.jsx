import { formatDate } from '../utils/dateFormatter';
import './PostCard.css';

export function PostCard({ post, onSelect }) {
  if (!post) return null;

  const {
    id,
    title,
    excerpt,
    coverImage,
    author,
    createdAt,
    publishedAt,
  } = post;

  const date = publishedAt || createdAt;
  const authorName = author?.name || 'Community Contributor';
  const avatar = author?.avatarUrl || author?.avatar;

  const handleOpen = () => onSelect?.(id);

  return (
    <article
      className="post-card"
      onClick={handleOpen}
      tabIndex={0}
      role="button"
      onKeyDown={(event) => {
        if ((event.key === 'Enter' || event.key === ' ') && onSelect) {
          event.preventDefault();
          handleOpen();
        }
      }}
      aria-label={`Read article: ${title}`}
    >
      {coverImage ? (
        <div className="post-card-cover">
          <img src={coverImage} alt="" loading="lazy" />
        </div>
      ) : (
        <div className="post-card-cover post-card-cover-placeholder">
          <span aria-hidden="true">✦</span>
          <span>COMMUNITY STORIES</span>
        </div>
      )}

      <div className="post-card-body">
        <div className="post-card-header">
          <span className="post-category-badge">ARTICLE</span>
          {date && (
            <time className="post-date-top" dateTime={date}>
              {formatDate(date)}
            </time>
          )}
        </div>

        <h3 className="post-card-title">{title}</h3>

        <p className="post-card-excerpt">
          {excerpt || 'Open this article to explore the full story.'}
        </p>

        <div className="post-card-read-link">
          Read article <span aria-hidden="true">↗</span>
        </div>
      </div>

      <div className="post-card-footer">
        <div className="post-author-group">
          {avatar ? (
            <img
              src={avatar}
              alt=""
              className="post-author-avatar"
              width="38"
              height="38"
              loading="lazy"
            />
          ) : (
            <div className="post-author-avatar post-author-avatar-placeholder">
              {authorName.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="post-author-meta">
            <span className="post-author-name">{authorName}</span>
            <span className="post-author-role">Article author</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
