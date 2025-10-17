import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import CompCard from './components/CompCard/CompCard';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Testimonials />
      <CompCard />
      <Contact />
    </div>
  );
}

export default App;
