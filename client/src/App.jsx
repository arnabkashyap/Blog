import { useState } from 'react';
import ThemeProvider from './context/ThemeContext.jsx';
import MainLayout from './layouts/MainLayout';
import { HomePage, PostDetailPage, CreatePostPage } from './pages';
import './App.css';

export function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (postId) => {
    setSelectedPostId(postId);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
    if (view === 'home') {
      setSelectedPostId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <MainLayout currentView={currentView} onNavigate={handleNavigate}>
        <div className="app-view-container">
          {currentView === 'home' && (
            <HomePage
              onSelectPost={handleSelectPost}
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'detail' && (
            <PostDetailPage
              postId={selectedPostId}
              onBack={() => handleNavigate('home')}
            />
          )}

          {currentView === 'create' && (
            <CreatePostPage
              onCancel={() => handleNavigate('home')}
              onSubmitSuccess={() => {
                handleNavigate('home');
              }}
            />
          )}
        </div>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
