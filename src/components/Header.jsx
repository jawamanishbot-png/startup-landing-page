import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AF</span>
              </div>
              <span className="text-xl font-bold text-secondary-900">AgentFactory</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-secondary-600 hover:text-primary-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-secondary-600 hover:text-primary-600 transition-colors">
              How It Works
            </a>
            <a href="#contact" className="text-secondary-600 hover:text-primary-600 transition-colors">
              Contact
            </a>
            <button className="btn-primary">
              Get Started Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-secondary-600 hover:text-primary-600 focus:outline-none focus:text-primary-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a
                href="#features"
                className="block px-3 py-2 text-secondary-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-secondary-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-secondary-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="btn-primary w-full">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;