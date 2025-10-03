import React, { useState, useEffect } from 'react';
import { Facebook, Youtube, Linkedin, Instagram, Menu, X, Play } from 'lucide-react';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';
import logo from '../assets/logo.png';

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioImages = [
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&q=80",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
  ];

  return (
    <div>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between items-center">
            {/* Left: Social Icons */}
            <div className="flex space-x-4 text-white">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook className="w-5 h-5 hover:text-purple-400 transition-colors" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <Youtube className="w-5 h-5 hover:text-purple-400 transition-colors" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
                <FaWhatsapp className="w-5 h-5 hover:text-purple-400 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5 hover:text-purple-400 transition-colors" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                <FaTiktok className="w-5 h-5 hover:text-purple-400 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="w-5 h-5 hover:text-purple-400 transition-colors" />
              </a>
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/"><img src={logo} alt="Sales Capital Logo" className="h-10 md:h-12" /></a>
            </div>

            {/* Right: Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-white">
              <a href="/" className="hover:text-purple-400 transition-colors">HOME</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">ABOUT</a>
              <a href="#services" className="hover:text-purple-400 transition-colors">SERVICES</a>
              <a href="/portfolio" className="hover:text-purple-400 transition-colors">PORTFOLIO</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">CONTACT</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 text-sm font-medium text-center text-white">
              <a href="#home" className="block hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>HOME</a>
              <a href="#about" className="block hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
              <a href="#services" className="block hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
              <a href="#portfolio" className="block hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</a>
              <a href="#contact" className="block hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
            </div>
          )}
        </div>
      </nav>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 sm:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              SEE RESULTS,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-700">SEE REINVENTIONS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {portfolioImages.map((img, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <Play className="w-12 h-12 mb-2" />
                    <p className="font-bold">Project {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
