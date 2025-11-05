import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import PageTransition from './components/PageTransition/PageTransition';
import Home from './pages/Home';
import CompCardPage from './components/CompCardPage/CompCardPage';
import FullGallery from './pages/FullGallery';
import ModelShowcase from './pages/ModelShowcase';
import CosplayPage from './pages/CosplayPage';
import CommissionsPage from './pages/CommissionsPage';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Wrapper component for routes with transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/comp-card" element={<CompCardPage />} />
        <Route path="/full-gallery" element={<FullGallery />} />
        <Route path="/model-showcase" element={<ModelShowcase />} />
        <Route path="/cosplay" element={<CosplayPage />} />
        <Route path="/commissions" element={<CommissionsPage />} />
      </Routes>
    </PageTransition>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <AnimatedRoutes />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
