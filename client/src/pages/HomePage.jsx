import { useState, useEffect, useMemo } from 'react';
import HeroBanner from '../components/HeroBanner.jsx';
import PostCard from '../components/PostCard.jsx';
import { BLOG_CATEGORIES } from '../utils/constants';
import { usePosts } from '../hooks/usePosts';
import './HomePage.css';

export function HomePage({ onSelectPost, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { posts, loading, error, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return posts.filter((post) => {
      const title = post.title || '';
      const excerpt = post.excerpt || '';
      const matchesSearch =
        title.toLowerCase().includes(query) ||
        excerpt.toLowerCase().includes(query);

      // Category filtering will be enabled after category is added to the database.
      return matchesSearch;
    });
  }, [posts, searchQuery]);

  const handleExploreScroll = () => {
    document.getElementById('articles-section')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="home-page">
      <HeroBanner
        onExplore={handleExploreScroll}
        onCreateClick={() => onNavigate && onNavigate('create')}
      />

      <div className="home-container" id="articles-section">
        <div className="feed-controls">
          <div className="category-pills" role="tablist" aria-label="Filter posts by category">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-box">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search articles"
            />
          </div>
        </div>

        {loading ? (
          <div className="no-posts-state">
            <h4>Loading articles...</h4>
            <p>Fetching published posts from the database.</p>
          </div>
        ) : error ? (
          <div className="no-posts-state">
            <h4>Unable to load articles</h4>
            <p>{error}</p>
            <button type="button" onClick={() => fetchPosts()}>
              Try again
            </button>
          </div>
        ) : filteredPosts.length > 0 ? (
          <section className="posts-grid" aria-label="Latest articles">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onSelect={(id) => onSelectPost && onSelectPost(id)}
              />
            ))}
          </section>
        ) : (
          <div className="no-posts-state">
            <h4>No published articles yet</h4>
            <p>
              {searchQuery
                ? 'Try adjusting your search query.'
                : 'Published articles will appear here once they are added.'}
            </p>
          </div>
        )}

        <section className="architecture-banner" aria-labelledby="arch-title">
          <div className="architecture-header">
            <h3 id="arch-title">Frontend Architecture Overview</h3>
            <span className="arch-status-badge">Phase 1 Complete</span>
          </div>
          <div className="architecture-grid">
            <div className="arch-card">
              <div className="arch-card-title">components/</div>
              <p className="arch-card-desc">Reusable, accessible UI components (Header, Footer, HeroBanner, PostCard).</p>
            </div>
            <div className="arch-card">
              <div className="arch-card-title">pages/</div>
              <p className="arch-card-desc">Dedicated views for Home, Article Detail, and Post Creation.</p>
            </div>
            <div className="arch-card">
              <div className="arch-card-title">layouts/</div>
              <p className="arch-card-desc">Shared layout wrappers maintaining persistent navigation and structure.</p>
            </div>
            <div className="arch-card">
              <div className="arch-card-title">context/ & hooks/</div>
              <p className="arch-card-desc">Theme management and post lifecycle management.</p>
            </div>
            <div className="arch-card">
              <div className="arch-card-title">services/</div>
              <p className="arch-card-desc">API client and postService connected to backend endpoints.</p>
            </div>
            <div className="arch-card">
              <div className="arch-card-title">utils/ & assets/</div>
              <p className="arch-card-desc">Date formatters, application constants, and static assets.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
