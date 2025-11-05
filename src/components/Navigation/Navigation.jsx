import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', route: '/' },
    { name: 'Portfolio', href: '#portfolio', route: '/' },
    { name: 'Cosplay', href: '/cosplay', route: '/cosplay' },
    { name: 'Commissions', href: '/commissions', route: '/commissions' },
    { name: 'About', href: '#about', route: '/' },
    { name: 'Contact', href: '#contact', route: '/' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleNavClick = (e, link) => {
    if (link.route === '/cosplay' || link.route === '/commissions') {
      setIsOpen(false);
      return; // Let Link handle the navigation
    }

    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = '/' + link.href;
    } else {
      scrollToSection(e, link.href);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-light tracking-widest" role="banner">
            PORTFOLIO
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8" role="menubar">
            {navLinks.map((link) => (
              link.route === '/cosplay' || link.route === '/commissions' ? (
                <Link
                  key={link.name}
                  to={link.route}
                  className="text-white hover:text-gray-300 transition-colors duration-300 text-sm tracking-wider focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black px-2 py-1"
                  style={{ minHeight: '44px', minWidth: '44px' }}
                  role="menuitem"
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-white hover:text-gray-300 transition-colors duration-300 text-sm tracking-wider focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black px-2 py-1"
                  style={{ minHeight: '44px', minWidth: '44px' }}
                  role="menuitem"
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-64 mt-4' : 'max-h-0'
          }`}
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              link.route === '/cosplay' || link.route === '/commissions' ? (
                <Link
                  key={link.name}
                  to={link.route}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 transition-colors duration-300 text-sm tracking-wider focus:outline-none focus:ring-2 focus:ring-white px-2 py-2"
                  style={{ minHeight: '44px' }}
                  role="menuitem"
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-white hover:text-gray-300 transition-colors duration-300 text-sm tracking-wider focus:outline-none focus:ring-2 focus:ring-white px-2 py-2"
                  style={{ minHeight: '44px' }}
                  role="menuitem"
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
