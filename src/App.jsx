import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import CompCard from './components/CompCard/CompCard';
import Contact from './components/Contact/Contact';
import CompCardPage from './components/CompCardPage/CompCardPage';

function App() {
  const [showCompCard, setShowCompCard] = useState(false);

  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Testimonials />
      <CompCard onOpenCompCard={() => setShowCompCard(true)} />
      <Contact />

      {showCompCard && <CompCardPage onClose={() => setShowCompCard(false)} />}
    </div>
  );
}

export default App;
