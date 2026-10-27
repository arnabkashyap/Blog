import { useTheme } from '../hooks/useTheme';
import { APP_CONFIG } from '../utils/constants';
import './Header.css';

export function Header({ currentView, onNavigate }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          href="#home"
          className="brand-link"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home');
          }}
        >
          <div className="gdg-badge-dots" aria-hidden="true">
            <span className="gdg-dot blue" />
            <span className="gdg-dot red" />
            <span className="gdg-dot yellow" />
            <span className="gdg-dot green" />
          </div>
          <div className="brand-title-group">
            <span className="brand-title">{APP_CONFIG.name}</span>
            <span className="brand-subtitle">On Campus Community</span>
          </div>
        </a>

        <nav aria-label="Main Navigation">
          <ul className="nav-menu">
            <li>
              <button
                type="button"
                className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
                onClick={() => onNavigate && onNavigate('home')}
              >
                Articles
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`nav-link ${currentView === 'about' ? 'active' : ''}`}
                onClick={() => onNavigate && onNavigate('about')}
              >
                About
              </button>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            type="button"
            className="write-action-btn"
            onClick={() => onNavigate && onNavigate('create')}
          >
            + New Post
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
