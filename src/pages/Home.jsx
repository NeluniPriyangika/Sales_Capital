import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo.png'

const FlystudioHomepage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [continuousOffset, setContinuousOffset] = useState(0);
  const scrollRef = useRef(null);
  //const intervalRef = useRef(null);
  //const loopIntervalRef = useRef(null);
  
  const tabWidth = 300; // Width per tab for smooth scrolling calculations

  const tabs = [
    { 
      name: 'DIGITAL MARKETING', 
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description: 'Creative digital studio specializing in innovative web experiences DM'
    },
    { 
      name: 'SOCIAL MEDIA MARKETING', 
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      description: 'Visual effects and motion graphics that bring stories to life SMM'
    },
    { 
      name: 'GOOGLE ADVERTISING (PPC)', 
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      description: '2D and 3D animation services for films and commercials'
    },
    { 
      name: 'SEO', 
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      description: 'Brand identity and user experience design solutions'
    },
    { 
      name: 'CONTENT DEVELOPMENT', 
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      description: 'Interactive installations and immersive digital experiences'
    },
    { 
        name: 'CREATIVE SOLUTIONS', 
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        description: 'Interactive installations and immersive digital experiences'
    }
  ];

  /*// Continuous loop scrolling effect
  useEffect(() => {
    loopIntervalRef.current = setInterval(() => {
      setContinuousOffset(prev => prev - 1); // Continuous right-to-left movement
    }, 50); // Smooth 50ms intervals for fluid animation

    return () => clearInterval(loopIntervalRef.current);
  }, []);

  // Auto-scroll functionality for tab changes
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveTab(prev => {
          const newTab = (prev + 1) % tabs.length;
          setScrollOffset(newTab * -tabWidth);
          return newTab;
        });
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, tabs.length]);*/

  // Handle wheel scroll for navigation
  const handleWheel = (e) => {
    e.preventDefault();
    setIsAutoPlaying(false);
    
    let newTab;
    if (e.deltaY > 0) {
      // Scroll down - next tab
      newTab = (activeTab + 1) % tabs.length;
    } else {
      // Scroll up - previous tab
      newTab = (activeTab - 1 + tabs.length) % tabs.length;
    }
    
    setActiveTab(newTab);
    setScrollOffset(newTab * -tabWidth);
    
    // Resume auto-play after 3 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    setScrollOffset(index * -tabWidth);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <div className="h-screen w-full flex overflow-hidden bg-black" onWheel={handleWheel}>
      {/* Left Side - Dark Panel */}
      <div className="w-2/5 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col justify-center items-start px-12 relative">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Company Logo - Replace with your actual logo */}
          <div className="ml-10 mt-8">
            {/* Option 1: Image Logo - Uncomment and add your logo path */}
            <img 
              src={Logo} 
              alt="Company Logo" 
              className="h-15 w-auto object-contain"
            />
            
            
            
            {/* Option 3: Text + Logo combination */}
            {/* <div className="flex items-center space-x-4">
              <img 
                src="/path/to/your/logo.png" 
                alt="Logo" 
                className="h-20 w-20 object-contain"
              />
              <h1 className="text-6xl font-bold text-white leading-tight">
                YOUR<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  COMPANY
                </span>
              </h1>
            </div> */}
          </div>
        </div>
        
        
        <div className="relative z-10">
          
          <div className="text-gray-300 text-lg mb-12 max-w-md leading-relaxed">
            {tabs[activeTab].description}
          </div>
          <button className="px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
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
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20"></div>

        {/* Horizontal Navigation Tabs */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-6xl">
            {/* Navigation container with continuous horizontal scroll animation */}
            <div 
              ref={scrollRef}
              className="flex space-x-8 px-8 transition-transform duration-1000 ease-out"
              style={{ 
                transform: `translateX(${scrollOffset + continuousOffset}px)` 
              }}
            >
              {/* Render multiple copies of tabs for seamless infinite loop */}
              {Array.from({ length: 4 }, (_, copyIndex) => 
                tabs.map((tab, tabIndex) => {
                  const actualIndex = tabIndex;
                  const isActive = actualIndex === activeTab;
                  const uniqueKey = `${tab.name}-${copyIndex}-${tabIndex}`;
                  
                  return (
                    <button
                      key={uniqueKey}
                      onClick={() => handleTabClick(actualIndex)}
                      className={`
                        relative px-8 py-4 text-4xl font-bold transition-all duration-500 whitespace-nowrap flex-shrink-0
                        ${isActive 
                          ? 'text-white scale-125 transform' 
                          : 'text-white/60 hover:text-white/80 hover:scale-110'
                        }
                      `}
                      style={{ minWidth: `${tabWidth}px` }}
                    >
                      {tab.name}
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </button>
                  );
                })
              )}
            </div>
            
            {/* Active tab underline - moves opposite direction with continuous loop */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-full flex justify-center">
              <div 
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: '80px',
                  transform: `translateX(${(scrollOffset - continuousOffset) / 4}px)` // Opposite direction, slower movement
                }}
              ></div>
            </div>

            {/* Loop reset logic - invisible but maintains seamless scrolling */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                transform: continuousOffset <= -(tabWidth * tabs.length) ? (() => {
                  // Reset continuous offset when one full cycle is complete
                  setTimeout(() => setContinuousOffset(0), 0);
                  return 'translateX(0px)';
                })() : 'translateX(0px)'
              }}
            />
          </div>
        </div>

        <div className="absolute top-8 right-8">
          <button href="/about" className="px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
            About Us
          </button>
        </div>


        {/* Navigation hint */}
        <div className="absolute bottom-8 right-8 text-white/60 text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Scroll to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlystudioHomepage;