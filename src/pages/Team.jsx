import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar2';
import { X, Linkedin, Mail } from 'lucide-react';

import team01 from '../assets/videos/Team/Team01.mp4'
import team02 from '../assets/videos/Team/Team02.mp4'
import team03 from '../assets/videos/Team/Team03.mp4'
import team04 from '../assets/videos/Team/Team04.mp4'
const Team = () => {
  const teamMembers = [
    {
      name: "David Thompson",
      role: "Financial Strategist",
      video: team01,
      description: "Expert in personal finance planning with over 10 years of experience helping individuals and families achieve their financial goals.",
      linkedin: "#",
      email: "sarah@salescapital.com"
    },
    {
      name: "Michael Chen",
      role: "Investment Advisor",
      video: team02,
      description: "Specializing in wealth management and portfolio optimization with a focus on sustainable growth strategies.",
      linkedin: "#",
      email: "michael@salescapital.com"
    },
    {
      name: "Emily Rodriguez",
      role: "Tax Consultant",
      video: team03,
      description: "Helping you maximize returns through strategic tax planning and compliance with current regulations.",
      linkedin: "#",
      email: "emily@salescapital.com"
    },
    {
      name: "Sarah Silva",
      role: "Retirement Planner",
      video: team04,
      description: "Securing your future finances with comprehensive retirement planning and wealth preservation strategies.",
      linkedin: "#",
      email: "david@salescapital.com"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const currentMember = teamMembers[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-100 to-pink-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Finances<br />
                figured out<br />
                for you
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-lg">
                Our expert team makes managing your money simple and stress-free
              </p>
            </div>
            
            <button className="bg-purple-600 text-white px-10 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105">
              Get started
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-3 pt-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setFade(false);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setFade(true);
                    }, 300);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-10 bg-black' 
                      : 'w-2.5 bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`View ${teamMembers[index].name}`}
                />
              ))}
            </div>
          </div>
      {/* Right Video - Auto changing */}
          <div className="relative flex justify-center items-center">
            <div className={`transition-opacity duration-500 w-full max-w-2xl ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <video
                  src={currentMember.video}
                  className="w-full h-[500px] md:h-[600px] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What we do
          </h2>
          <p className="text-lg text-gray-700">
            Simple solutions to start your financial journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 space-y-4 hover:shadow-xl transition-all duration-300 border border-purple-200 hover:border-purple-400">
            <h3 className="text-2xl font-bold text-gray-900">
              Financial Planning
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive strategies to help you reach your financial goals and secure your future with confidence.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 space-y-4 hover:shadow-xl transition-all duration-300 border border-pink-200 hover:border-pink-400">
            <h3 className="text-2xl font-bold text-gray-900">
              Investment Management
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Expert guidance to grow your wealth through smart investment strategies tailored to your risk profile.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 space-y-4 hover:shadow-xl transition-all duration-300 border border-violet-200 hover:border-violet-400">
            <h3 className="text-2xl font-bold text-gray-900">
              Tax Optimization
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Maximize your returns with strategic tax planning and consulting services from certified professionals.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 space-y-4 hover:shadow-xl transition-all duration-300 border border-fuchsia-200 hover:border-fuchsia-400">
            <h3 className="text-2xl font-bold text-gray-900">
              Retirement Planning
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Build a secure retirement with personalized plans that ensure financial freedom in your golden years.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-purple-600 text-white px-10 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105">
            Get started
          </button>
        </div>
      </div>
    
    {/* Our Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Guides that help you grow
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Meet the financial advisors behind your success
          </p>
        </div>

        {/* Team Members - Single Row with Alternating Heights */}
        <div className="flex justify-center mb-12 px-4">
          <div className="flex gap-2 items-end">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group cursor-pointer flex flex-col items-center"
                onClick={() => setSelectedMember(member)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ marginBottom: `${index % 2 === 0 ? '30px' : '0px'}` }}
              >
                <div className="relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:rotate-[3deg] group-hover:scale-110 group-hover:z-10 shadow-lg w-64">
                  <video
                    src={member.video}
                    className="w-full h-70 object-cover"
                    muted
                    loop
                    playsInline
                    ref={(el) => {
                      if (el) {
                        if (hoveredIndex === index) {
                          el.play();
                        } else {
                          el.pause();
                          el.currentTime = 0;
                        }
                      }
                    }}
                  />
                  {/* Name and Position Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-bold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-purple-600 text-white px-10 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
            Contact us
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-5" onClick={() => setSelectedMember(null)}>
          <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="grid md:grid-cols-5 gap-0">
                {/* Left - Video */}
                <div className="md:col-span-2 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-8">
                  <video
                    src={selectedMember.video}
                    className="w-full h-full object-cover shadow-xl rounded-lg"
                    controls
                    autoPlay
                    loop
                    muted
                  />
                </div>

                {/* Right - Content */}
                <div className="md:col-span-3 p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedMember.name}
                  </h2>
                  <p className="text-purple-600 font-semibold mb-6">
                    {selectedMember.role}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {selectedMember.description}
                  </p>

                  {/* Contact Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition-colors font-semibold flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Connect with me
                    </button>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-full hover:border-purple-600 hover:text-purple-600 transition-colors font-semibold flex items-center justify-center gap-2">
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                      </button>
                      <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-full hover:border-purple-600 hover:text-purple-600 transition-colors font-semibold">
                        Website
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
  );
};

export default Team;