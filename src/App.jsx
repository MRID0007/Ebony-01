import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CompCardPage from './components/CompCardPage/CompCardPage';
import FullGallery from './pages/FullGallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comp-card" element={<CompCardPage />} />
        <Route path="/full-gallery" element={<FullGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
