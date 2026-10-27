import { APP_CONFIG } from '../utils/constants';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>{APP_CONFIG.name}</h3>
            <p>{APP_CONFIG.description}</p>
          </div>

          <div className="footer-links-group">
            <div className="footer-column">
              <h4>Community</h4>
              <ul>
                <li><a href="https://developers.google.com/community/gdg" target="_blank" rel="noreferrer">GDG Global</a></li>
                <li><a href="https://developers.google.com/community/gdg/students" target="_blank" rel="noreferrer">On Campus Chapters</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer">Open Source</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Technology</h4>
              <ul>
                <li><a href="https://react.dev" target="_blank" rel="noreferrer">React 19</a></li>
                <li><a href="https://vite.dev" target="_blank" rel="noreferrer">Vite</a></li>
                <li><a href="https://developers.google.com" target="_blank" rel="noreferrer">Google Cloud & AI</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {CURRENT_YEAR} GDG on Campus. Web Development Selection Project.</p>
          <p>Built with React & Vite • Modular Architecture</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
