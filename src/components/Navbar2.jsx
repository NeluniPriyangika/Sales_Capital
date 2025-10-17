import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Facebook, Youtube, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-sm text-white"
            : "bg-black text-white md:rounded-4xl md:mt-2 md:ml-10 md:mr-10"
        }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between items-center">
            {/* Left: Social Icons - Desktop Only */}
            <div className="hidden md:flex space-x-4 text-white">
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
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex-1 flex justify-center md:flex-none py-4 md:py-2">
              <button onClick={() => navigate('/')} className="cursor-pointer">
                <img src={logo} alt="Sales Capital Logo" className="h-10 md:h-12" />
              </button>
            </div>

            {/* Right: Desktop Menu */}
            <div className="hidden md:flex space-x-10 text-sm font-medium tracking-wide text-white">
              <button onClick={() => navigate('/')} className="hover:text-purple-400 transition-colors">
                HOME
              </button>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center hover:text-purple-400 transition-colors py-6">
                  SERVICES
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {servicesOpen && (
                  <div className="text-white absolute top-full -left-6 mt-0 w-56 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl py-2 border border-purple-500/20">
                    <a href="/video-creating" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                      Video Content creating
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                      Social Media Marketing
                    </a>
                    <a href="/google-advertising" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                      Google Advertising (PPC)
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                      SEO
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                      Content Development
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                      Creative Solutions
                    </a>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="flex items-center hover:text-purple-400 transition-colors py-6">
                  ABOUT
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {aboutOpen && (
                  <div className="text-white absolute top-full -left-6 mt-0 w-48 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl py-2 border border-purple-500/20">
                    <a href="/about" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                      Who We Are ?
                    </a>
                    <a href="/team" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                      Our Team
                    </a>
                  </div>
                )}
              </div>
              
              <a href="/contact-us" className="hover:text-purple-400 transition-colors py-6">
                CONTACT
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed w-full bg-black z-30 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="h-full overflow-y-auto px-6 py-8">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-8 mb-8 pb-8 border-b border-purple-500/20">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
              <Facebook className="w-7 h-7 text-white hover:text-purple-400 transition-colors" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
              <Youtube className="w-7 h-7 text-white hover:text-purple-400 transition-colors" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
              <FaWhatsapp className="w-7 h-7 text-white hover:text-purple-400 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
              <Linkedin className="w-7 h-7 text-white hover:text-purple-400 transition-colors" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
              <FaTiktok className="w-7 h-7 text-white hover:text-purple-400 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
              <Instagram className="w-7 h-7 text-white hover:text-purple-400 transition-colors" />
            </a>
          </div>

          {/* Menu Items */}
          <div className="space-y-1 text-white">
            <button
              onClick={() => {
                navigate('/');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-4 text-lg font-medium hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
            >
              HOME
            </button>
            
            {/* Mobile Services Dropdown */}
            <div className="overflow-hidden rounded-lg">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full px-4 py-4 text-lg font-medium hover:text-purple-400 hover:bg-purple-500/10 transition-all"
              >
                SERVICES
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="bg-purple-500/5 py-2">
                  <a
                    href="/video-creating"
                    className="block px-8 py-3 text-base hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Video Content creating
                  </a>
                  <a
                    href="#"
                    className="block px-8 py-3 text-base hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Social Media Marketing
                  </a>
                  <a
                    href="/google-advertising"
                    className="block px-8 py-3 text-base hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Google Advertising (PPC)
                  </a>
                  <a
                    href="#"
                    className="block px-8 py-3 text-base hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SEO
                  </a>
                  <a
                    href="#"
                    className="block px-8 py-3 text-base hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Content Development
                  </a>
                  <a
                    href="#"
                    className="block px-8 py-3 text-base hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Creative Solutions
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile About Dropdown */}
            <div className="overflow-hidden rounded-lg">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex items-center justify-between w-full px-4 py-4 text-lg font-medium hover:text-purple-400 hover:bg-purple-500/10 transition-all"
              >
                ABOUT
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="bg-purple-500/5 py-2">
                  <a
                    href="/about"
                    className="block px-8 py-3 text-base hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Who We Are ?
                  </a>
                  <a
                    href="/team"
                    className="block px-8 py-3 text-base hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Team
                  </a>
                </div>
              </div>
            </div>
            
            <a
              href="/contact-us"
              className="block w-full text-left px-4 py-4 text-lg font-medium hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;