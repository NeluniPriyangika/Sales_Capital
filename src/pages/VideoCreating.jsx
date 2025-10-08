import React, { useState, useEffect } from 'react';
import { Play, Heart, Video, Briefcase, X} from 'lucide-react';
import HeroVideo from '../assets/videos/video crating hero.mp4'
import phone1 from '../assets/images/Frame1.avif'
import phone2 from '../assets/images/Frame2.avif'
import phone3 from '../assets/images/Frame3.avif'
import Aboutvideo from '../assets/videos/about.mp4'
import Contactbg from '../assets/images/bg4.jpg'

import Navbar from '../components/Navbar2';

const CreativeAgencyPortfolio = () => {

  const [scrollProgress, setScrollProgress] = useState(0);
  
  const services = [
    {
      icon: <Play className="w-12 h-12" />,
      title: "TELEVISION COMMERCIAL",
      description: "High-quality TV ads that capture attention, build brand recognition, and connect with a wide audience to drive measurable impact."
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "SOCIAL MEDIA REELS",
      description: "Engaging short-form videos designed to boost visibility, spark conversations, and grow your brand on platforms like Instagram, Facebook, and TikTok."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "PRODUCT VIDEOS",
      description: "Creative and informative videos that showcase your product's features, benefits, and real-life use cases—turning viewers into buyers."
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "CORPORATE VIDEO",
      description: "Professional storytelling that highlights your company's values, culture, and achievements, helping build trust and credibility with clients and partners."
    }
  ];

  const portfolioImages = [
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&q=80",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
  ];

  const phoneContents = [
    {
      id: 1,
      image: phone2,
      username: "SORU",
      gradient: "from-blue-600 to-purple-600",
      position: 'center',
      showAt: 8
    },
    {
      id: 2,
      image: phone1,
      username: "RAYLUX",
      gradient: "from-pink-500 to-orange-500",
      position: 'left',
      showAt: 20
    },
    {
      id: 3,
      image: phone3,
      username: "MANAGE",
      gradient: "from-orange-600 to-red-600",
      position: 'right',
      showAt: 32
    }
  ];

  return (
    <div className="bg-black text-white">
      <Navbar/>

      {/* Hero Section - Sticky/Fixed */}
      <section
        id="home"
        className="h-screen flex items-center justify-center overflow-hidden sticky top-0"
        >
        {/* Background Video */}
        <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wider text-gray-300">
                    YOUR BRAND'S STORY, AMPLIFIED.
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                    WE DON'T JUST MANAGE FEEDS, WE CRAFT<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-700">
                        OBSESSIONS.
                    </span>
                </h1>
            </div>
        </div>
      </section>

      {/* Phone Display Section */}
      <section className="min-h-[300vh] sticky top-0">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
       
          <div className="relative w-full h-full flex items-center justify-center">
            {phoneContents.map((phone, index) => {
              // Phone appears when scroll reaches showAt and STAYS visible
              const isVisible = scrollProgress >= phone.showAt;
              
              // Get position based on phone.position property
              const getTransform = () => {
                if (phone.position === 'center') return 'translateX(-50%)';
                if (phone.position === 'left') return 'translateX(calc(-100% - 300px))';
                return 'translateX(calc(20% + 300px))'; // right
              };
              
              return (
                <div
                  key={phone.id}
                  className={`absolute left-1/2 w-[280px] h-[580px] sm:w-[320px] sm:h-[650px] transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{
                    transform: isVisible 
                      ? `${getTransform()} translateY(0)`
                      : `${getTransform()} translateY(100px) scale(0.8)`,
                    zIndex: 10 + index
                  }}
                >
                  {/* Phone frame */}
                  <div className={`relative w-full h-full bg-gradient-to-br ${phone.gradient} rounded-[3rem] shadow-2xl p-3`}>
                    {/* Screen */}
                    <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                      {/* Status bar */}
                      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-20 flex items-center justify-between px-6">
                        <span className="text-white text-xs font-medium">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <img 
                        src={phone.image} 
                        alt={phone.username}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay with username */}
                      <div className="absolute top-14 left-4 flex items-center gap-2 z-20">
                        <div className="w-8 h-8 bg-white rounded-full border-2 border-white"></div>
                        <span className="text-white font-semibold text-sm drop-shadow-lg">{phone.username}</span>
                        <X className="w-5 h-5 text-white ml-auto mr-4" />
                      </div>

                      {/* Bottom action bar */}
                      <div className="absolute bottom-6 left-4 right-4 z-20">
                        <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between">
                          <span className="text-white text-sm font-medium">Send Message</span>
                          <div className="flex gap-3">
                            <Heart className="w-5 h-5 text-white" />
                            <Play className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* The "cut-out" text */}
        <div className="relative z-10 text-center">
          <h1
            className="
              text-[200px] sm:text-4xl md:text-[200px]
              font-bold
              text-transparent
              bg-clip-text
              bg-fixed
              bg-cover
              bg-center
              "
            style={{
              backgroundImage: `url(${Contactbg})`,
            }}
          >
            SALES CAPITAL
          </h1>
        </div>
      </section>

      {/* About Section - Sticky/Fixed with BG Video */}
      <section
        id="about"
        className="min-h-screen flex items-center z-10 sticky top-0"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Aboutvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              SEEKING POWERFUL STORYTELLING?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-700">
                WE'RE THE BEST CHOICE.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white leading-relaxed max-w-2xl mx-auto">
              We are a creative powerhouse dedicated to transforming brands through
              compelling visual narratives. Our team combines cutting-edge technology
              with artistic vision to deliver content that resonates, engages, and
              drives results. Every project is an opportunity to push boundaries and
              redefine what's possible.
            </p>
          </div>
        </div>
      </section>


      {/* Scrollable Content Wrapper - This will scroll over the sticky sections */}
      <div className="relative z-20 bg-black">
        
        {/* Services Section */}
        <section id="services" className="py-20 sm:py-32 bg-black sticky top-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                WHERE CREATIVITY<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-700">MEETS STRATEGY</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-3 tracking-wide">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 sm:py-32 bg-gradient-to-b from-black to-gray-900 sticky">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
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

        {/* Contact/CTA Section */}
        <section id="contact" className="py-10 sm:py-12 bg-black sticky">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-[200px] font-bold">
              SALES CAPITAL
            </h1>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="py-20 sm:py-32 bg-black sticky">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
              READY TO<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-700">AMPLIFY YOUR STORY?</span>
            </h2>
            <button className="bg-gradient-to-r from-purple-500 to-purple-200 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              LET'S TALK
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-8 sm:py-12 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">© 2025 Sales Capital. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CreativeAgencyPortfolio;