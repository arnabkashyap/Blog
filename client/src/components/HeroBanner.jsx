import heroImg from '../assets/hero.png';
import { APP_CONFIG } from '../utils/constants';
import './HeroBanner.css';

export function HeroBanner({ onExplore, onCreateClick }) {
  return (
    <section className="hero-banner" aria-labelledby="hero-heading">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-pill">
            <span className="hero-pill-sparkle" aria-hidden="true">✦</span>
            <span>GDG on Campus • Web Dev Co-Lead Edition</span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            Where student builders share <span className="hero-title-highlight">deep tech stories</span>
          </h1>

          <p className="hero-description">
            {APP_CONFIG.description}
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="hero-btn-primary"
              onClick={onExplore}
            >
              Explore Articles
            </button>
            <button
              type="button"
              className="hero-btn-secondary"
              onClick={onCreateClick}
            >
              Share Your Story
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-glow-card">
            <img
              src={heroImg}
              alt="GDG Hero Illustration"
              className="hero-main-image"
              width="170"
              height="179"
            />
            <span className="hero-badge-tag">React 19 • Modular Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
