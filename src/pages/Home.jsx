import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Gallery/Gallery';
import Cosplay from '../components/Cosplay/Cosplay';
import Commissions from '../components/Commissions/Commissions';
import About from '../components/About/About';
import Testimonials from '../components/Testimonials/Testimonials';
import CompCard from '../components/CompCard/CompCard';
import ModelShowcaseSection from '../components/ModelShowcaseSection/ModelShowcaseSection';
import Contact from '../components/Contact/Contact';

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Gallery />
      <Cosplay />
      <Commissions />
      <About />
      <Testimonials />
      <CompCard />
      <ModelShowcaseSection />
      <Contact />
    </>
  );
}

export default Home;
