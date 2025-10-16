import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}

export default App;
