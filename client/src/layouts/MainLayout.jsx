import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './MainLayout.css';

export function MainLayout({ children, currentView, onNavigate }) {
  return (
    <div className="main-layout">
      <Header currentView={currentView} onNavigate={onNavigate} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
