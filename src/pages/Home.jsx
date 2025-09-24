import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png'

const FlystudioHomepage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  
  const Logo = logo;

  const tabs = [
    { 
      name: 'DIGITAL MARKETING', 
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description: `We offer complete digital marketing solutions tailored to your business goals. From building strategic online campaigns to managing your presence across digital channels, we ensure your brand gets the attention it deserves. Whether it's email marketing, display advertising, or audience targeting, we help you connect with the right people at the right time.`,
      route: '/digital-marketing'
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

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play functionality - changes tab every 30 seconds
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

  // Navigation functions
  const navigateToPage = (route) => {
    console.log(`Navigating to: ${route}`);
    alert(`This would navigate to: ${route}`);
  };

  const handleGetStarted = () => {
    navigateToPage(tabs[activeTab].route);
  };

  const handleTabClick = (index) => {
    if (index === activeTab) return;
    
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setActiveTab(index);
    
    // Resume autoplay after 20 seconds of manual interaction
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
    
    // Resume autoplay after 20 seconds
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  const handleWheel = (e) => {
    if (isMobile || isTransitioning) return;
    
    e.preventDefault();
    const direction = e.deltaY > 0 ? 'next' : 'prev';
    handleManualNavigation(direction);
  };

  if (isMobile) {
    return (
      <div className="min-h-screen w-full bg-black flex flex-col">
        {/* Mobile Header */}
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="text-white text-xl font-bold">
            <img 
              src={Logo} 
              alt="Company Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <button 
            onClick={() => navigateToPage('/about')}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full"
          >
            About Us
          </button>
        </div>

        {/* Mobile Video Section */}
        <div className="relative h-64 overflow-hidden">
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
          
          {/* Mobile Navigation Arrows */}
          <button 
            onClick={() => handleManualNavigation('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            ←
          </button>
          <button 
            onClick={() => handleManualNavigation('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            →
          </button>
        </div>

        {/* Mobile Content */}
        <div className="flex-1 bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
          <h2 className="text-white text-2xl font-bold mb-4 transform transition-all duration-800">
            {tabs[activeTab].name}
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-6 transform transition-all duration-800">
            {tabs[activeTab].description}
          </p>
          <button 
            onClick={handleGetStarted}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Tab Navigation */}
        <div className="bg-black/90 p-4">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`flex-shrink-0 px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-all duration-300 ${
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

        {/* Mobile Progress Indicator */}
        <div className="flex justify-center space-x-2 py-4 bg-black">
          {tabs.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === activeTab ? 'w-8 bg-blue-500' : 'w-4 bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="h-screen w-full flex overflow-hidden bg-black" onWheel={handleWheel}>
      {/* Left Side - Content Panel (Connected to slider) */}
      <div className="w-1/4 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col justify-center items-start px-15 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000 opacity-20"></div>
        </div>

        {/* Logo */}
        <div className="absolute top-8 left-12">
          <img 
            src={Logo} 
            alt="Company Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>
        
        {/* Content that slides with tabs */}
        <div className="relative z-10 transform transition-all duration-800 ease-in-out">
          <h1 className="text-white text-4xl font-bold mb-8 transform transition-all duration-800">
            {tabs[activeTab].name}
          </h1>
          <div className="text-gray-300 text-lg mb-12 max-w-md leading-relaxed transform transition-all duration-800">
            {tabs[activeTab].description}
          </div>
          <button 
            onClick={handleGetStarted}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            Get Started
          </button>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-12 left-12 flex space-x-3">
          {tabs.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`h-2 rounded-full transition-all duration-500 hover:opacity-100 focus:outline-none ${
                index === activeTab ? 'w-12 bg-blue-500' : 'w-6 bg-gray-600 opacity-60 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Manual navigation controls - moved to left side only 
        <div className="absolute bottom-12 right-12 flex space-x-4">
          <button 
            onClick={() => handleManualNavigation('prev')}
            className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            disabled={isTransitioning}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => handleManualNavigation('next')}
            className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            disabled={isTransitioning}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>*/}
      </div>

      {/* Right Side - Video Background with Horizontal Tab Slider */}
      <div className="w-3/4 relative overflow-hidden">
        {/* Video Background - Contained within right side */}
        <div className="absolute inset-0 w-full h-full">
          {tabs.map((tab, index) => (
            <video
              key={index}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-800 ${
                index === activeTab ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={tab.video} type="video/mp4" />
            </video>
          ))}
        </div>

        {/* Video overlay - constrained to right side */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

        {/* Horizontal Tab Carousel - Single tab with slide + zoom animations */}
        <div className="absolute bottom-10 left-0 right-0 px-8 overflow-hidden">
          <div className="relative h-50 flex justify-center items-center">
            {tabs.map((tab, index) => {
              const isActive = index === activeTab;
              const isPrevious = index === (activeTab - 1 + tabs.length) % tabs.length;
              const isNext = index === (activeTab + 1) % tabs.length;
              
              let transformStyle = '';
              let opacityValue = 0;
              let scaleValue = 0.3;
              let zIndexValue = 0;
              
              if (isActive) {
                // Current active tab - center position, full scale
                transformStyle = 'translateX(-50%) translateY(0)';
                opacityValue = 1;
                scaleValue = isTransitioning ? 1.1 : 1;
                zIndexValue = 10;
              } else if (isPrevious) {
                // Previous tab - sliding out to left
                transformStyle = 'translateX(-200%) translateY(10px)';
                opacityValue = isTransitioning ? 0.7 : 0;
                scaleValue = 0.6;
                zIndexValue = 5;
              } else if (isNext) {
                // Next tab - coming in from right
                transformStyle = 'translateX(100%) translateY(10px)';
                opacityValue = isTransitioning ? 0.7 : 0;
                scaleValue = 0.6;
                zIndexValue = 5;
              } else {
                // Other tabs - hidden
                transformStyle = 'translateX(-50%) translateY(20px)';
                opacityValue = 0;
                scaleValue = 0.3;
                zIndexValue = 0;
              }
              
              return (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(index)}
                  disabled={isTransitioning}
                  className={`
                    absolute px-8 py-4 text-lg font-semibold transition-all duration-800 
                    group focus:outline-none backdrop-blur-sm border border-white/30 rounded-lg
                    text-white bg-white/20 shadow-2xl
                    ${isActive ? 'shadow-blue-500/40' : 'shadow-black/20'}
                  `}
                  style={{ 
                    minWidth: '300px',
                    left: '50%',
                    top: '50%',
                    transform: `${transformStyle} scale(${scaleValue})`,
                    opacity: opacityValue,
                    zIndex: zIndexValue,
                    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  <span className="relative z-10 whitespace-nowrap block">{tab.name}</span>
                  
                  {/* Active glow effects - only for active tab */}
                  {isActive && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-600/40 rounded-lg animate-pulse"></div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/25 to-purple-600/25 rounded-xl blur-md"></div>
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/15 to-purple-500/15 rounded-2xl blur-xl"></div>
                    </>
                  )}
                  
                  {/* Subtle glow for transitioning tabs */}
                  {(isPrevious || isNext) && isTransitioning && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg"></div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Navigation Controls */}
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

        {/* About Us Button - Top right, within right side bounds */}
        <div className="absolute top-8 right-8">
          <button 
            onClick={() => navigateToPage('/about')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 backdrop-blur-sm"
          >
            About Us
          </button>
        </div>

        {/* Navigation hint - Bottom right 
        <div className="absolute bottom-6 right-8 text-white/70 text-sm backdrop-blur-sm bg-black/20 px-3 py-2 rounded-lg">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
            </svg>
            <span>Auto-slides every 30s</span>
          </div>
        </div>*/}

        {/* Auto-play indicator - Top left of right side */}
        {isAutoPlaying && (
          <div className="absolute top-8 left-8">
            <div className="flex items-center space-x-2 text-white/70 text-sm backdrop-blur-sm bg-black/20 px-3 py-2 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Auto-playing</span>
            </div>
          </div>
        )}

        {/* Progress bar for current slide */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
            style={{
              width: isAutoPlaying ? '100%' : '0%',
              animation: isAutoPlaying ? 'progress 30s linear infinite' : 'none'
            }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </div>
  );
};

export default FlystudioHomepage;