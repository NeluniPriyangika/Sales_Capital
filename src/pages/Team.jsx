import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

export default function StratTeam() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Financial Advisor",
      description: "Helping families achieve financial freedom for over 10 years",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-smiling-at-camera-1831-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Investment Specialist",
      description: "Expert in portfolio management and wealth growth strategies",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-smiling-while-working-on-a-laptop-4611-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Tax Expert",
      description: "Specializing in tax optimization and financial planning",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-businesswoman-smiling-at-camera-1872-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Retirement Planner",
      description: "Guiding clients to secure and comfortable retirement",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-smiling-man-working-on-laptop-4623-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop"
    }
  ];

  const currentMember = teamMembers[currentVideoIndex];

  // Auto-play next video when current one ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      if (currentVideoIndex < teamMembers.length - 1) {
        setCurrentVideoIndex(prev => prev + 1);
        setIsPlaying(true);
      } else {
        setCurrentVideoIndex(0);
        setIsPlaying(false);
      }
    };

    video.addEventListener('ended', handleVideoEnd);
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, [currentVideoIndex, teamMembers.length]);

  // Handle play/pause
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(err => console.log('Play error:', err));
    } else {
      video.pause();
    }
  }, [isPlaying, currentVideoIndex]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % teamMembers.length);
    setIsPlaying(true);
  };

  const goToPrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setIsPlaying(true);
  };

  const selectVideo = (index) => {
    setCurrentVideoIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Finances
                <br />
                <span className="text-emerald-100">figured out</span>
                <br />
                for you
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Meet our expert team ready to help you achieve your financial goals with personalized strategies and dedicated support.
              </p>
              <button className="px-6 py-3 text-base font-medium text-gray-900 bg-white border-2 border-gray-900 rounded-full hover:bg-gray-50 transition-colors">
                Get started
              </button>
            </div>

            {/* Right - Full Video Player */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 shadow-2xl">
                {/* Video */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={currentMember.thumbnail}
                  playsInline
                >
                  <source src={currentMember.videoUrl} type="video/mp4" />
                </video>

                {/* Play/Pause Overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center cursor-pointer"
                  onClick={togglePlayPause}
                >
                  {!isPlaying && (
                    <button className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-emerald-600 ml-2" />
                    </button>
                  )}
                </div>

                {/* Member Info at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white font-bold text-2xl mb-1">{currentMember.name}</h3>
                  <p className="text-emerald-300 font-medium text-sm mb-2">{currentMember.role}</p>
                  <p className="text-white/90 text-sm">{currentMember.description}</p>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevVideo();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextVideo();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>

                {/* Video Counter */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    {currentVideoIndex + 1} / {teamMembers.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                {teamMembers.map((member, index) => (
                  <button
                    key={member.id}
                    onClick={() => selectVideo(index)}
                    className={`flex-shrink-0 w-20 h-24 rounded-xl overflow-hidden transition-all ${
                      currentVideoIndex === index 
                        ? 'ring-4 ring-emerald-500 scale-105' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={member.thumbnail}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-200 rounded-full opacity-40 blur-3xl -z-10"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-300 rounded-full opacity-30 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50 to-transparent opacity-30 -z-10"></div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gray-50">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Budgeting</h3>
            <p className="text-sm text-gray-600">Track expenses and optimize spending automatically.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-50">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Investment Goals</h3>
            <p className="text-sm text-gray-600">Build wealth with personalized investment strategies.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-50">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
            <p className="text-sm text-gray-600">Bank-level security protects your financial data.</p>
          </div>
        </div>
      </div>
    </div>
  );
}