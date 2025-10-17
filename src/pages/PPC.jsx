import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar2';

export default function PPCpage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const videoRef = useRef(null);
  const autoPlayRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const slides = [
    {
      id: 1,
      badge: "Instant Visibility ",
      title: "Reach customers exactly when they search for your product.",
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1400&h=700&fit=crop"
    },
    {
      id: 2,
      badge: "Highly Targeted ",
      title: "Focus by location, interest, or intent for better ROI.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1400&h=700&fit=crop"
    },
    {
      id: 3,
      badge: "Measurable Results ",
      title: "Every click and conversion tracked in real time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=700&fit=crop"
    },
    {
      id: 4,
      badge: "Budget Control ",
      title: "Spend only on what drives value.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&h=700&fit=crop"
    },
    {
      id: 5,
      badge: "Scalable Growth ",
      title: "Expand campaigns as your business grows.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&h=700&fit=crop"
    }
  ];

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setTransitioning(false), 700);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setTransitioning(false), 700);
  };

  const goToSlide = (index) => {
    if (transitioning || index === currentSlide) return;
    setTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setTransitioning(false), 700);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, slides.length]);

  return (
    <>
      {/* Navigation */}
      <Navbar/>
      
      <div className="min-h-screen bg-white pt-16">
        
        {/* Hero Section */}
        <div>
          {/* Video Player - Mobile Optimized */}
          <div className="sticky top-20 mb-8 lg:mb-16 px-4 lg:px-40">
            <div className="relative rounded-2xl lg:rounded-4xl overflow-hidden shadow-xl">
              {/* Video Container */}
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop
                  playsInline
                  autoPlay
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                </video>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  {/* Bottom Controls */}
                  <div className="absolute bottom-3 left-4 lg:bottom-12 lg:left-10 flex items-center gap-2 lg:gap-3">
                    <button
                      onClick={togglePlay}
                      className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause size={16} className="lg:w-5 lg:h-5" fill="white" /> : <Play size={16} className="lg:w-5 lg:h-5 ml-0.5" fill="white" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX size={16} className="lg:w-5 lg:h-5" /> : <Volume2 size={16} className="lg:w-5 lg:h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-gray-100 z-20 py-8 lg:py-10 px-4 lg:px-60 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-40 items-start">
            {/* Left Side - Title */}
            <div>
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900">
                Expert Google Ads That Deliver Real ROI
              </h1>
            </div>
            
            {/* Right Side - Description */}
            <div>
              <p className="text-base lg:text-xl text-gray-600 leading-relaxed">
                Right hand side lets ad Google search, display and video logo
              </p>
            </div>
          </div>

          {/* 3-Panel Image Slider - Mobile Optimized */}
          <section className="relative bg-gray-100 w-full overflow-hidden py-0 mb-6 lg:mb-0 lg:py-10">
            <div className="max-w-8xl">
              
              {/* Navigation Arrows - Mobile Optimized */}
              <div className="flex justify-end px-4 lg:mr-50 gap-2 lg:gap-3 mb-4">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-gray-400 bg-white hover:bg-purple-400 hover:border-purple-400 transition-all flex items-center justify-center group shadow-md"
                  disabled={transitioning}
                >
                  <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-black" />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-gray-400 bg-white hover:bg-purple-400 hover:border-purple-400 transition-all flex items-center justify-center group shadow-md"
                  disabled={transitioning}
                >
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-black" />
                </button>
              </div>
              
              <div className="relative h-[300px] md:h-[500px] lg:h-[600px]">
                {/* Slider Container */}
                <div className="flex justify-center items-end h-full gap-2 md:gap-4 lg:gap-10 px-4">
                  
                  {/* Left Image (Partial View) - Hidden on mobile */}
                  <div className={`hidden md:block w-1/4 h-2/4 rounded-br-full rounded-tr-full relative overflow-hidden transition-all duration-700 ease-in-out ${
                    transitioning ? 'opacity-50' : 'opacity-70'
                  } hover:opacity-90 cursor-pointer`}
                  onClick={prevSlide}>
                    <img 
                      src={slides[(currentSlide - 1 + slides.length) % slides.length].image}
                      alt="Previous slide"
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>

                  {/* Center Image (Full View) - Mobile Optimized */}
                  <div className={`w-full md:w-full h-full relative overflow-hidden rounded-full transition-all duration-700 ease-in-out ${
                    transitioning ? 'opacity-80 scale-98' : 'opacity-100'
                  } shadow-2xl`}>
                    <img 
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                    
                    {/* Content Overlay - Mobile Optimized */}
                    <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center p-4 md:p-8 lg:p-12">
                      <div className="mb-3 lg:mb-6">
                        <span className="inline-block px-4 py-1 lg:px-6 lg:py-1.5 bg-white text-black text-xs md:text-sm lg:text-lg font-medium rounded-full">
                          {slides[currentSlide].badge}
                        </span>
                      </div>
                      <h2 className="text-base md:text-xl lg:text-2xl px-4 py-1 lg:px-5 lg:py-1.5 bg-white hover:bg-purple-300 text-black font-semibold mb-2 lg:mb-4 rounded-full leading-tight max-w-[90%]">
                        {slides[currentSlide].title}
                      </h2>
                    </div>
                  </div>

                  {/* Right Image (Partial View) - Hidden on mobile */}
                  <div className={`hidden md:block w-1/4 h-2/4 rounded-bl-full rounded-tl-full relative overflow-hidden transition-all duration-700 ease-in-out ${
                    transitioning ? 'opacity-50' : 'opacity-70'
                  } hover:opacity-90 cursor-pointer`}
                  onClick={nextSlide}>
                    <img 
                      src={slides[(currentSlide + 1) % slides.length].image}
                      alt="Next slide"
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                </div>
              </div>

              {/* Progress Indicator and Controls - Mobile Optimized */}
              <div className="flex justify-center items-center mt-6 lg:mt-12 gap-4 lg:gap-6">
                {/* Progress Dots */}
                <div className="flex space-x-1.5 lg:space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      disabled={transitioning}
                      className={`h-2 lg:h-2.5 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'w-8 lg:w-12 bg-purple-500' 
                          : 'w-2 lg:w-2.5 bg-gray-400 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Auto-play Toggle */}
                <button
                  onClick={toggleAutoPlay}
                  className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                    autoPlay 
                      ? 'border-gray-400 bg-white text-gray-600' 
                      : 'border-purple-500 bg-purple-50 text-purple-600'
                  } hover:scale-105`}
                  aria-label={autoPlay ? 'Disable autoplay' : 'Enable autoplay'}
                  title={autoPlay ? 'Disable autoplay' : 'Enable autoplay'}
                >
                  {autoPlay ? <Pause size={14} className="lg:w-[18px] lg:h-[18px]" /> : <Play size={14} className="lg:w-[18px] lg:h-[18px]" fill="currentColor" />}
                </button>
              </div>
            </div>
          </section>
        </div>
        
        {/* Business and Government Solutions - Mobile Optimized */}
        <section className="sticky top-18 bg-purple-200 px-4 lg:px-60 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Small Badge */}
            <div className="mb-2">
              <span className="inline-flex items-center gap-2 text-xs lg:text-sm font-medium text-gray-700">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                BUSINESS AND GOVERNMENT SOLUTIONS
              </span>
            </div>

            {/* Main Heading - Mobile Optimized */}
            <h2 className="text-3xl lg:text-7xl xl:text-8xl font-bold leading-tight text-gray-900 mb-3 lg:mb-4">
              Together the<br />
              possibilities are<br />
              priceless
            </h2>

            {/* Subheading */}
            <p className="text-base lg:text-2xl text-gray-600 font-light max-w-2xl">
              Innovative Solutions to Maximise your Business Growth
            </p>
          </div>
        </section>

        {/* Services Section - Mobile Optimized */}
        <section className="relative bg-white z-20 px-4 lg:px-20 py-12 lg:py-16 overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Row 1 - Mobile Stacked */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-24">
              
              {/* Left Column - Pill Card */}
              <div className="flex justify-center">
                <div className="w-full max-w-[320px] lg:max-w-[480px] group cursor-pointer relative">
                  <div className="relative h-[500px] lg:h-[750px] rounded-full group-hover:rounded-[8rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=800&fit=crop"
                      alt="Insights & Intelligence"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Arrow Circle */}
                  <div className="absolute bottom-45 lg:bottom-56 right-6 lg:right-8 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white group-hover:bg-purple-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg z-20">
                    <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-gray-900" />
                  </div>
                  
                  {/* Content Below */}
                  <div className="mt-4 lg:mt-6">
                    <div className="mb-2">
                      <span className="relative inline-flex items-center gap-2 text-sm lg:text-base font-semibold tracking-wider text-purple-500">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        SERVICES
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 group-hover:underline group-hover:decoration-purple-500">
                      Certified Google Ads Specialists 
                    </h3>
                    <p className="text-base lg:text-lg mt-2 lg:mt-3 text-gray-900">
                      Every campaign managed by certified professionals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Overlapping Circles */}
              <div className="flex justify-center items-start relative">
                <div className="relative w-[280px] lg:w-[420px]">
                  
                  {/* Main Circle Card */}
                  <div className="group cursor-pointer relative z-10">
                    <div className="relative w-full aspect-square rounded-full group-hover:rounded-[10rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
                      <img 
                        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=600&fit=crop"
                        alt="Cybersecurity & Fraud Prevention"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Arrow */}
                    <div className="absolute bottom-40 lg:bottom-46 right-8 lg:right-12 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white group-hover:bg-purple-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg z-20">
                      <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-gray-900" />
                    </div>
                    
                    {/* Content Below */}
                    <div className="mt-4 lg:mt-6">
                      <div className="mb-2">
                        <span className="inline-flex items-center gap-2 text-sm lg:text-base font-semibold tracking-wider text-purple-500">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                          SERVICES
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 group-hover:underline group-hover:decoration-purple-500">
                        Performance-Driven Approach 
                      </h3>
                      <p className="text-base lg:text-lg mt-2 lg:mt-3 text-gray-900">
                        We optimize daily to maximize conversions.
                      </p>
                    </div>
                  </div>

                  {/* Empty Circle Outline Behind - Hidden on mobile */}
                  <div className="hidden lg:block absolute -top-8 -right-50 w-full aspect-square rounded-full border-2 border-purple-300 z-0"></div>
                </div>
              </div>
            </div>

            {/* Row 2 - Mobile Stacked */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              
              {/* Left Column - Two Circles Stacked */}
              <div className="flex flex-col items-center justify-center gap-8 lg:gap-12">
                
                {/* Circle Card 1 */}
                <div className="w-[280px] lg:w-[420px] group cursor-pointer relative">
                  <div className="relative w-full aspect-square rounded-full group-hover:rounded-[10rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop"
                      alt="Digital Marketing"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Arrow */}
                  <div className="absolute bottom-28 lg:bottom-40 right-8 lg:right-12 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white group-hover:bg-purple-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg z-20">
                    <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-gray-900" />
                  </div>
                  
                  {/* Content Below */}
                  <div className="mt-4 lg:mt-6">
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-2 text-sm lg:text-base font-semibold tracking-wider text-purple-500">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        SERVICES
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 group-hover:underline group-hover:decoration-purple-500">
                      Transparent Reporting 
                    </h3>
                    <p className="text-base lg:text-lg mt-2 lg:mt-3 text-gray-900">
                      Clear insights with zero guesswork.
                    </p>
                  </div>
                </div>

                {/* Circle Card 2 */}
                <div className="w-[280px] lg:w-[420px] group cursor-pointer relative">
                  {/* Empty Circle Outline Behind - Hidden on mobile */}
                  <div className="hidden lg:block absolute -top-6 -left-60 w-110 h-110 aspect-square rounded-full border-2 border-purple-300 z-0"></div>

                  <div className="relative w-full aspect-square rounded-full group-hover:rounded-[10rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop"
                      alt="Strategic Consulting"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Arrow */}
                  <div className="absolute bottom-36 lg:bottom-40 right-8 lg:right-12 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white group-hover:bg-purple-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg z-20">
                    <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-gray-900" />
                  </div>
                  
                  {/* Content Below */}
                  <div className="mt-4 lg:mt-6">
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-2 text-sm lg:text-base font-semibold tracking-wider text-purple-500">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        SERVICES
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 group-hover:underline group-hover:decoration-purple-500">
                      Customized Strategies
                    </h3>
                    <p className="text-base lg:text-lg mt-2 lg:mt-3 text-gray-900">
                      No templates — every business gets a unique plan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Tall Pill Card */}
              <div className="flex justify-center">
                <div className="w-full max-w-[320px] lg:max-w-[530px] group cursor-pointer relative">
                  {/* Empty Circle Outline Behind Pill Shape - Hidden on mobile */}
                  <div className="hidden lg:block absolute -top-80 -left-30 w-125 h-235 rounded-full border-2 border-purple-300 z-0"></div>
                  
                  <div className="relative h-[500px] lg:h-[850px] rounded-full group-hover:rounded-[10rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=900&fit=crop"
                      alt="Business Analytics"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-36 lg:bottom-54 right-6 lg:right-8 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white group-hover:bg-purple-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg z-20">
                    <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-gray-900" />
                  </div>

                  {/* Content Below */}
                  <div className="mt-4 lg:mt-6">
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-2 text-sm lg:text-base font-semibold tracking-wider text-purple-500">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        SERVICES
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 group-hover:underline group-hover:decoration-purple-500">
                      Full Funnel Expertise 
                    </h3>
                    <p className="text-base lg:text-lg mt-2 lg:mt-3 text-gray-900">
                      From ad creation to landing page optimization, we handle it all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan and Solutions Section - Mobile Optimized */}
        <section className="relative bg-white z-10 py-8 lg:py-10 px-4 sm:px-6 lg:px-20 overflow-hidden">
          <div className="relative max-w-7xl mx-auto">
            {/* Main Card Container */}
            <div className="bg-gradient-to-br from-green-500 via-blue-400 to-purple-300 rounded-[40px] lg:rounded-[80px] shadow-2xl p-6 lg:p-16 relative overflow-hidden">
              
              {/* Header Section */}
              <div className="relative z-10 mb-12 lg:mb-16">
                <div className="mb-3 lg:mb-4">
                  <span className="inline-flex items-center gap-2 text-xs lg:text-sm font-bold tracking-wide text-black uppercase">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    PLAN AND SOLUTIONS
                  </span>
                </div>
                
                <h2 className="text-3xl lg:text-8xl font-bold text-gray-900 mb-4 lg:mb-6 tracking-wide leading-tight">
                  Let's Get Your  <br />
                  Ads Working <br />
                  Smarter.
                </h2>
                
                <p className="text-gray-800 text-sm lg:text-lg mb-6 lg:mb-8 max-w-xl">
                  The benefits, services, rewards and spending power that meet you where you live — and where you're going.
                </p>
                
                <button className="px-5 py-2.5 lg:px-6 lg:py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                  Learn more
                </button>
              </div>

              {/* Card 1 - Credit Card */}
              <div className="mb-6 lg:mb-8 relative z-10">
                <div className="relative bg-gray-50 rounded-[30px] lg:rounded-full border-1 border-purple-400 overflow-hidden transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[300px] lg:min-h-[400px]">
                    
                    {/* Left Side - Text */}
                    <div className="p-6 lg:p-24 order-2 lg:order-1">
                      <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                        Find the Perfect Plan for Your Business
                      </h3>
                      <button className="px-5 py-2 lg:px-6 lg:py-2.5 border-2 border-gray-900 text-gray-900 rounded-full text-sm font-medium hover:bg-purple-900 hover:text-white transition-colors">
                        Learn more
                      </button>
                    </div>
                    
                    {/* Right Side - Image with Gradient Background */}
                    <div className="relative h-full min-h-[200px] lg:min-h-[400px] flex items-center justify-center p-6 lg:p-10 order-1 lg:order-2">
                      <div className="relative w-full max-w-lg rounded-full overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop"
                          alt="Credit card"
                          className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Pay Your Way */}
              <div className="relative z-10">
                <div className="relative bg-gray-50 rounded-[30px] lg:rounded-full border-1 border-purple-400 overflow-hidden transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[300px] lg:min-h-[400px]">
                    
                    {/* Left Side - Image */}
                    <div className="relative h-full min-h-[200px] lg:min-h-[400px] flex items-center justify-center p-6 lg:p-10">
                      <div className="relative w-full max-w-lg rounded-full overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop"
                          alt="Happy person"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    {/* Right Side - Text */}
                    <div className="p-6 lg:p-24">
                      <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
                        Ready to Scale with Google Ads?
                      </h3>
                      <p className="text-gray-600 text-sm lg:text-base mb-4 lg:mb-6">
                        Contact us to get a customized solution
                      </p>
                      <button className="px-5 py-2 lg:px-6 lg:py-2.5 border-2 border-gray-900 text-gray-900 rounded-full text-sm font-medium hover:bg-purple-900 hover:text-white transition-colors">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Stack Digital Concierge Section - Mobile Optimized */}
        <section className="relative z-20 py-12 lg:py-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-purple-300 to-purple-400">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-7xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Your Full Stack Digital<br />
                Concierge For Growth
              </h2>
              
              <p className="text-gray-600 text-base lg:text-xl max-w-3xl mx-auto">
                From PPC to social media, SEO, and content. Explore our complete suite of digital marketing services designed to scale your brand.
              </p>
            </div>

            {/* Services Grid - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              
              {/* Service Card 1 */}
              <a href="/video-creating" className="group block">
                <div className="relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-400 h-full">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-purple-600 transition-colors">
                      Video Content Creating
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base flex-grow">
                      Engaging video content that captures attention and drives conversions across all platforms.
                    </p>
                    <div className="mt-4 lg:mt-6 flex items-center text-purple-600 text-sm lg:text-base font-semibold group-hover:translate-x-2 transition-transform">
                      Learn more <ChevronRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Service Card 2 */}
              <a href="#" className="group block">
                <div className="relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-400 h-full">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-purple-600 transition-colors">
                      Social Media Marketing
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base flex-grow">
                      Strategic social campaigns that build communities and amplify your brand voice.
                    </p>
                    <div className="mt-4 lg:mt-6 flex items-center text-purple-600 text-sm lg:text-base font-semibold group-hover:translate-x-2 transition-transform">
                      Learn more <ChevronRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Service Card 3 */}
              <a href="/google-advertising" className="group block">
                <div className="relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-400 h-full">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-purple-600 transition-colors">
                      Google Advertising (PPC)
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base flex-grow">
                      Data-driven PPC campaigns that maximize ROI and reach your ideal customers.
                    </p>
                    <div className="mt-4 lg:mt-6 flex items-center text-purple-600 text-sm lg:text-base font-semibold group-hover:translate-x-2 transition-transform">
                      Learn more <ChevronRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Service Card 4 */}
              <a href="#" className="group block">
                <div className="relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-400 h-full">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-purple-600 transition-colors">
                      SEO
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base flex-grow">
                      Comprehensive SEO strategies that improve rankings and drive organic traffic.
                    </p>
                    <div className="mt-4 lg:mt-6 flex items-center text-purple-600 text-sm lg:text-base font-semibold group-hover:translate-x-2 transition-transform">
                      Learn more <ChevronRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Service Card 5 */}
              <a href="#" className="group block">
                <div className="relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-400 h-full">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-purple-600 transition-colors">
                      Content Development
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base flex-grow">
                      Compelling content that tells your story and connects with your audience.
                    </p>
                    <div className="mt-4 lg:mt-6 flex items-center text-purple-600 text-sm lg:text-base font-semibold group-hover:translate-x-2 transition-transform">
                      Learn more <ChevronRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Service Card 6 */}
              <a href="#" className="group block">
                <div className="relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-400 h-full">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-purple-600 transition-colors">
                      Creative Solutions
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base flex-grow">
                      Innovative design and creative services that make your brand unforgettable.
                    </p>
                    <div className="mt-4 lg:mt-6 flex items-center text-purple-600 text-sm lg:text-base font-semibold group-hover:translate-x-2 transition-transform">
                      Learn more <ChevronRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12 lg:mt-16">
              <a 
                href="/" 
                className="inline-flex items-center gap-2 lg:gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-purple-600 text-white rounded-full text-base lg:text-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore All Services
                <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer - Mobile Optimized */}
        <footer className="bg-gray-900 py-6 lg:py-12 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 text-xs lg:text-base">© 2025 Sales Capital. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-4 lg:mt-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-xs lg:text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-xs lg:text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-xs lg:text-sm">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}