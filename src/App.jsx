import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CompCardPage from './components/CompCardPage/CompCardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comp-card" element={<CompCardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
