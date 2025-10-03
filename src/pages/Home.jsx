import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const FlystudioHomepage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const autoPlayRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const Logo = logo;

  const tabs = [
    { 
      name: 'VIDEO CONTENT CREATING', 
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description: `We offer complete digital marketing solutions tailored to your business goals. From building strategic online campaigns to managing your presence across digital channels, we ensure your brand gets the attention it deserves. Whether it's email marketing, display advertising, or audience targeting, we help you connect with the right people at the right time.`,
      route: '/video-creating'
    },
    { 
      name: 'SOCIAL MEDIA MARKETING', 
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      description: `Harness the power of social media platforms like Facebook, Instagram, LinkedIn, and TikTok to grow your brand and engage your audience. Our team creates compelling content, manages your communities, runs targeted ads, and analyzes performance to keep your social presence strong and effective—turning followers into loyal customers.`,
      route: '/social-media-marketing'
    },
    { 
      name: 'GOOGLE ADVERTISING (PPC)', 
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      description: `Accelerate your business growth with high-performing Google Ads. We craft data-driven Pay-Per-Click campaigns that appear at the top of search results and across Google's vast Display Network. Our PPC experts optimize your ad spend to generate leads, sales, and measurable ROI while tracking every click and conversion.`,
      route: '/google-advertising'
    },
    { 
      name: 'SEO', 
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      description: `Get found online with our professional SEO services. We improve your website's visibility on search engines through keyword research, on-page optimization, technical SEO, and high-quality backlinks. Our goal is to drive consistent, organic traffic and help you rank above competitors in Google and Bing.`,
      route: '/seo-services'
    },
    { 
      name: 'CONTENT DEVELOPMENT', 
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      description: `Power your marketing with impactful content that informs, entertains, and persuades. We develop blogs, website copy, social media posts, scripts, product descriptions, and more—tailored to your brand voice and target audience. Every piece of content is designed to support your SEO, build authority, and spark engagement.`,
      route: '/content-development'
    },
    { 
      name: 'CREATIVE SOLUTIONS', 
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      description: `Bring your ideas to life with our innovative creative services. We provide graphic design, branding, motion graphics, and multimedia solutions that blend strategy and aesthetics. Whether you need a new logo, an engaging video, or a complete brand refresh, we deliver bold, eye-catching work that gets noticed.`,
      route: '/creative-solutions'
    }
  ];

  // Navigation items for dropdown
  const navigationItems = [
      { name: 'Home', route: '/' },
      { name: 'Video Contnet creating', route: '/video-creating' },
      { name: 'Social Media Marketing', route: '/services' },
      { name: 'Google Advertising (PPC)', route: '/portfolio' },
      { name: 'SEO', route: '/contact' },//Website Development and SEO *************************
      { name: 'Content Development', route: '/blog' },//consumer promotion *************************
      { name: 'Creative Solutions', route: '/blog' }

      //viedo,socila media marketing, google, website, creative solution, consumer pro
  ];

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // improved breakpoint: tablets & below = mobile layout
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsNavDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isMobile) {
      autoPlayRef.current = setInterval(() => {
        setIsTransitioning(true);
        setActiveTab(prev => (prev + 1) % tabs.length);
      }, 5000);
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, tabs.length, isMobile]);

  // Handle transition state
  useEffect(() => {
    if (isTransitioning) {
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }
    return () => clearTimeout(transitionTimeoutRef.current);
  }, [isTransitioning]);

  const navigateToPage = (route) => {
    console.log(`Navigating to: ${route}`);
    navigate(route);
    setIsNavDropdownOpen(false); // Close dropdown after navigation
  };

  const handleGetStarted = () => {
    navigateToPage(tabs[activeTab].route);
  };

  const handleTabClick = (index) => {
    if (index === activeTab) return;
    
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setActiveTab(index);
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  const handleManualNavigation = (direction) => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    
    if (direction === 'next') {
      setActiveTab(prev => (prev + 1) % tabs.length);
    } else {
      setActiveTab(prev => (prev - 1 + tabs.length) % tabs.length);
    }
    
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  const handleWheel = (e) => {
    if (isMobile || isTransitioning) return;
    
    e.preventDefault();
    const direction = e.deltaY > 0 ? 'next' : 'prev';
    handleManualNavigation(direction);
  };

  // Hamburger menu component
  const HamburgerMenu = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  /** ---------------- MOBILE/TABLET LAYOUT ---------------- */
  if (isMobile) {
    return (
      <div className="min-h-screen w-full bg-black flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="text-white text-xl font-bold">
            <img src={Logo} alt="Company Logo" className="h-8 sm:h-10 w-auto object-contain" />
          </div>
          <button 
            onClick={() => navigateToPage('/about')}
            className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full"
          >
            About Us
          </button>
          
        </div>

        {/* Video */}
        <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden">
          {tabs.map((tab, index) => (
            <video
              key={index}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === activeTab ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={tab.video} type="video/mp4" />
            </video>
          ))}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Arrows */}
          <button 
            onClick={() => handleManualNavigation('prev')}
            className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            ←
          </button>
          <button 
            onClick={() => handleManualNavigation('next')}
            className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            →
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4 sm:p-6">
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">
            {tabs[activeTab].name}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            {tabs[activeTab].description}
          </p>
          <button 
            onClick={handleGetStarted}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Tabs row */}
        <div className="bg-black/90 p-3 sm:p-4">
          <div className="flex overflow-x-auto space-x-3 sm:space-x-4 pb-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`flex-shrink-0 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium whitespace-nowrap rounded-full transition-all duration-300 ${
                  index === activeTab 
                    ? 'bg-blue-500 text-white scale-105' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center space-x-1 sm:space-x-2 py-3 sm:py-4 bg-black">
          {tabs.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === activeTab ? 'w-6 sm:w-8 bg-blue-500' : 'w-3 sm:w-4 bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  /** ---------------- DESKTOP LAYOUT ---------------- */
  return (
    <div className="h-screen w-full flex overflow-hidden bg-black" onWheel={handleWheel}>
      {/* Left Panel */}
      <div className="w-1/3 xl:w-1/4 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col justify-center items-start px-6 lg:px-12 relative overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-40 md:w-64 h-40 md:h-64 bg-blue-500 rounded-full blur-3xl animate-pulse opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 md:w-48 h-32 md:h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000 opacity-20"></div>
        </div>

        {/* Logo */}
        <div className="absolute top-6 lg:top-8 left-6 lg:left-12">
          <a href="/">
            <img
              src={Logo}
              alt="Company Logo"
              className="h-8 md:h-10 lg:h-12 w-auto object-contain"
            />
          </a>
        </div>


        {/* Navigation Dropdown */}
        <div className="absolute top-6 lg:top-8 right-6 lg:right-12" ref={dropdownRef}>
          <button 
            onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
            className="p-3 text-white hover:text-blue-400 transition-colors backdrop-blur-sm bg-white/10 rounded-lg border border-white/20"
          >
            <HamburgerMenu />
          </button>
          
          {isNavDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700 z-50">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigateToPage(item.route)}
                  className="w-full text-left px-4 py-3 text-white hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg border-b border-gray-700 last:border-b-0"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>        
        
        {/* Text */}
        <div className="relative z-10 max-w-md">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            {tabs[activeTab].name}
          </h1>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-8 leading-relaxed">
            {tabs[activeTab].description}
          </p>
          <button 
            onClick={handleGetStarted}
            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-6 lg:bottom-12 left-6 lg:left-12 flex space-x-2 md:space-x-3">
          {tabs.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${
                index === activeTab ? 'w-8 md:w-12 bg-blue-500' : 'w-4 md:w-6 bg-gray-600 opacity-60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          {tabs.map((tab, index) => (
            <video
              key={index}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-800 ${
                index === activeTab ? 'opacity-100 scale-100' : 'opacity-0 scale-120'
              }`}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={tab.video} type="video/mp4" />
            </video>
          ))}

          {/* Moving light effect during transitions */}
          {isTransitioning && (
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full transform translate-x-full animate-[slideLeft_800ms_ease-in-out] pointer-events-none"></div>
            </div>
          )}          

        </div>

        {/* Custom CSS for sliding animation */}
        <style jsx>{`
          @keyframes slideLeft {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

        {/* Tab Carousel */}
        <div className="absolute bottom-10 left-0 right-0 px-4 sm:px-8">
          <div className="relative h-40 flex justify-center items-center">
            {tabs.map((tab, index) => {
              const isActive = index === activeTab;
              const isPrevious = index === (activeTab - 1 + tabs.length) % tabs.length;
              const isNext = index === (activeTab + 1) % tabs.length;
              
              let transformStyle = '';
              let opacityValue = 0;
              let scaleValue = 0.3;
              let zIndexValue = 0;
              
              if (isActive) {
                transformStyle = 'translateX(-50%) translateY(0)';
                opacityValue = 1;
                scaleValue = isTransitioning ? 1.1 : 1;
                zIndexValue = 10;
              } else if (isPrevious) {
                transformStyle = 'translateX(-200%) translateY(10px)';
                opacityValue = isTransitioning ? 0.7 : 0;
                scaleValue = 0.6;
                zIndexValue = 5;
              } else if (isNext) {
                transformStyle = 'translateX(100%) translateY(10px)';
                opacityValue = isTransitioning ? 0.7 : 0;
                scaleValue = 0.6;
                zIndexValue = 5;
              }
              
              return (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(index)}
                  disabled={isTransitioning}
                  className={`absolute px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg font-semibold 
                    transition-all duration-800 group backdrop-blur-sm border border-white/30 rounded-lg 
                    text-white bg-white/20
                    ${isActive 
                      ? `bg-blue-500 border-blue-600 border-b-[4px] 
                        hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] 
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] 
                        shadow-[0_8px_16px_rgba(0,0,0,0.5)]` 
                      : `shadow-lg shadow-black/20`
                    }`}
                  style={{ 
                    minWidth: '220px',
                    left: '50%',
                    top: '50%',
                    transform: `${transformStyle} scale(${scaleValue})`,
                    opacity: opacityValue,
                    zIndex: zIndexValue,
                    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  <span className="relative z-10 whitespace-nowrap">{tab.name}</span>
                  {isActive && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-600/40 rounded-lg animate-pulse"></div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/25 to-purple-600/25 rounded-xl blur-md"></div>
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/15 to-purple-500/15 rounded-2xl blur-xl"></div>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute bottom-6 left-8 flex space-x-4">
          <button 
            onClick={() => handleManualNavigation('prev')}
            className="p-3 bg-white/15 text-white rounded-full hover:bg-white/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
            disabled={isTransitioning}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => handleManualNavigation('next')}
            className="p-3 bg-white/15 text-white rounded-full hover:bg-white/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
            disabled={isTransitioning}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* About Us */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
          <button 
            onClick={() => navigateToPage('/about')}
            className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all transform hover:scale-105 backdrop-blur-sm text-xs md:text-sm"
          >
            About Us
          </button>
        </div>

        {/* Auto-play badge */}
        {isAutoPlaying && (
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
            <div className="flex items-center space-x-1 sm:space-x-2 text-white/70 text-xs sm:text-sm">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span>Auto-play</span>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 w-full max-w-full h-1 bg-white/10">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-[5000ms] ease-linear"
            style={{ width: isAutoPlaying ? '100%' : '0%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FlystudioHomepage;
