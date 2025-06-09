import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo.png';

const FlystudioHomepage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  
  const tabWidth = 300;
  const scrollSpeed = 1;

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

  // Continuous loop scrolling effect (disabled on mobile)
  useEffect(() => {
    if (isMobile) return;
    
    const animate = () => {
      setScrollOffset(prev => {
        if (prev <= -tabWidth * tabs.length) {
          return prev + (tabWidth * tabs.length);
        }
        return prev - scrollSpeed;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    
    if (isAutoPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoPlaying, tabs.length, isMobile]);

  // Update active tab based on scroll position
  useEffect(() => {
    if (!isMobile) {
      const activeIndex = Math.floor(Math.abs(scrollOffset) / tabWidth % tabs.length);
      setActiveTab(activeIndex);
    }
  }, [scrollOffset, tabs.length, isMobile]);

  // Navigation functions
  const navigateToPage = (route) => {
    // In a real app, you'd use React Router or Next.js router
    console.log(`Navigating to: ${route}`);
    // For demo purposes, we'll show an alert
    alert(`This would navigate to: ${route}`);
    // window.location.href = route; // Uncomment for actual navigation
  };

  const handleGetStarted = () => {
    navigateToPage(tabs[activeTab].route);
  };

  const handleTabClick = (index) => {
    if (isMobile) {
      setActiveTab(index);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 3000);
    } else {
      let scrollDistance;
      if (index > activeTab) {
        scrollDistance = index - activeTab;
      } else {
        scrollDistance = (tabs.length - activeTab) + index;
      }
      
      setScrollOffset(prev => prev - (scrollDistance * tabWidth));
      setActiveTab(index);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 3000);
    }
  };

  const handleWheel = (e) => {
    if (isMobile) return;
    
    e.preventDefault();
    setIsAutoPlaying(false);
    
    let newTab;
    if (e.deltaY > 0) {
      newTab = (activeTab + 1) % tabs.length;
    } else {
      newTab = (activeTab - 1 + tabs.length) % tabs.length;
    }
    
    setScrollOffset(newTab * -tabWidth);
    setActiveTab(newTab);
    
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextTab = () => {
    const newTab = (activeTab + 1) % tabs.length;
    setActiveTab(newTab);
  };

  const prevTab = () => {
    const newTab = (activeTab - 1 + tabs.length) % tabs.length;
    setActiveTab(newTab);
  };

  if (isMobile) {
    return (
      <div className="min-h-screen w-full bg-black flex flex-col">
        {/* Mobile Header */}
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="text-white text-xl font-bold">FlyStudio</div>
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
            onClick={prevTab}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            ←
          </button>
          <button 
            onClick={nextTab}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            →
          </button>
        </div>

        {/* Mobile Content */}
        <div className="flex-1 bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
          <h2 className="text-white text-2xl font-bold mb-4">{tabs[activeTab].name}</h2>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
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
                    ? 'bg-blue-500 text-white' 
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
      {/* Left Side - Dark Panel */}
      <div className="w-2/5 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col justify-center items-start px-12 relative">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="ml-10 mt-8">
            <img 
                src={Logo} 
                alt="Company Logo" 
                className="h-15 w-auto object-contain"
              />
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="text-gray-300 text-lg mb-12 max-w-md leading-relaxed">
            {tabs[activeTab].description}
          </div>
          <button 
            onClick={handleGetStarted}
            className="px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-12 left-12 flex space-x-2">
          {tabs.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === activeTab ? 'w-12 bg-blue-500' : 'w-6 bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Video Background */}
      <div className="w-4/5 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
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
        </div>

        {/* Video overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40"></div>

        {/* Horizontal Navigation Tabs */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-full">
            <div 
              ref={scrollRef}
              className="flex space-x-40 px-40 transition-transform duration-100 ease-linear"
              style={{ 
                transform: `translateX(${scrollOffset}px)` 
              }}
            >
              {[...tabs, ...tabs, ...tabs].map((tab, index) => {
                const actualIndex = index % tabs.length;
                const isActive = actualIndex === activeTab;
                
                return (
                  <button
                    key={`${tab.name}-${index}`}
                    onClick={() => navigateToPage(tab.route)}
                    className={`
                      relative px-4 py-4 text-2xl font-bold transition-all duration-500 whitespace-nowrap flex-shrink-0
                      ${isActive 
                        ? 'text-white scale-170 transform' 
                        : 'text-white/60 hover:text-white/80 hover:scale-150'
                      }
                    `}
                    style={{ minWidth: `${tabWidth}px` }}
                  >
                    {tab.name}
                    
                    <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute top-8 right-8">
          <button 
            onClick={() => navigateToPage('/about')}
            className="px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            About Us
          </button>
        </div>

        {/* Navigation hint */}
        <div className="absolute bottom-8 right-8 text-white/60 text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
            </svg>
            <span>Scroll to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlystudioHomepage;