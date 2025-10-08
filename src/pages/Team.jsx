import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar2';

const StratTeam = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Financial Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop",
      description: "Expert in personal finance planning"
    },
    {
      name: "Michael Chen",
      role: "Investment Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
      description: "Specializing in wealth management"
    },
    {
      name: "Emily Rodriguez",
      role: "Tax Consultant",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop",
      description: "Helping you maximize returns"
    },
    {
      name: "David Thompson",
      role: "Retirement Planner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
      description: "Securing your future finances"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
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
              <p className="text-xl md:text-2xl text-gray-600 max-w-lg">
                Our expert team makes managing your money simple and stress-free
              </p>
            </div>
            
            <button className="bg-emerald-600 text-white px-10 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105">
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
                      ? 'w-10 bg-emerald-600' 
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View ${teamMembers[index].name}`}
                />
              ))}
            </div>
          </div>

          {/* Right Image - Auto changing */}
          <div className="relative flex justify-center items-center">
            <div className={`transition-opacity duration-500 w-full max-w-lg ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 md:p-8">
                  <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">
                    {currentMember.name}
                  </h2>
                  <p className="text-white/95 text-base md:text-lg font-medium">
                    {currentMember.role}
                  </p>
                  <p className="text-white/80 text-sm md:text-base mt-2">
                    {currentMember.description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-200 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-teal-200 rounded-full opacity-40 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Meet Our Full Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setFade(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 300);
              }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-lg font-bold">{member.name}</h3>
                  <p className="text-white/90 text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StratTeam;