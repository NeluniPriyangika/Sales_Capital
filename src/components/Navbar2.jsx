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

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com" },
    { icon: Youtube, url: "https://youtube.com" },
    { icon: FaWhatsapp, url: "https://wa.me/1234567890" },
    { icon: Linkedin, url: "https://linkedin.com" },
    { icon: FaTiktok, url: "https://tiktok.com" },
    { icon: Instagram, url: "https://instagram.com" }
  ];

  const serviceItems = [
    "Video Content creating",
    "Social Media Marketing",
    "Google Advertising (PPC)",
    "SEO",
    "Content Development",
    "Creative Solutions"
  ];

  const aboutItems = [
    { label: "Who We Are ?", href: "#who-we-are" },
    { label: "Our Team", href: "/team" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-sm pt-7 pb-7 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center">
          {/* Left: Social Icons */}
          <div className="flex space-x-4 text-white">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <button onClick={() => navigate('/')} className="cursor-pointer">
              <img src={logo} alt="Sales Capital Logo" className="h-10 md:h-12" />
            </button>
          </div>

          {/* Right: Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
            <button
              onClick={() => navigate('/')}
              className="hover:text-purple-400 transition-colors"
            >
              HOME
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center hover:text-purple-400 transition-colors">
                SERVICES
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl py-2 border border-purple-500/20">
                  {serviceItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="flex items-center hover:text-purple-400 transition-colors">
                ABOUT
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl py-2 border border-purple-500/20">
                  {aboutItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#contact" className="hover:text-purple-400 transition-colors">
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 text-sm font-medium text-center">
            <button
              onClick={() => {
                navigate('/');
                setIsMenuOpen(false);
              }}
              className="block hover:text-purple-400 transition-colors w-full text-left"
            >
              HOME
            </button>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between hover:text-purple-400 transition-colors w-full text-left"
              >
                SERVICES
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {serviceItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block hover:text-purple-400 transition-colors py-1 text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex items-center justify-between hover:text-purple-400 transition-colors w-full text-left"
              >
                ABOUT
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileAboutOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileAboutOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {aboutItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block hover:text-purple-400 transition-colors py-1 text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="block hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;