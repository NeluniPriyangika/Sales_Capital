import React, { useState } from 'react';
import { Phone, MapPin, Mail, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar2';

const WhoWeAre = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const brands = [
    { name: "TechCorp", logo: "https://via.placeholder.com/150x80?text=TechCorp" },
    { name: "FinanceHub", logo: "https://via.placeholder.com/150x80?text=FinanceHub" },
    { name: "GlobalTrade", logo: "https://via.placeholder.com/150x80?text=GlobalTrade" },
    { name: "InvestPro", logo: "https://via.placeholder.com/150x80?text=InvestPro" },
    { name: "WealthMax", logo: "https://via.placeholder.com/150x80?text=WealthMax" },
    { name: "CapitalGrow", logo: "https://via.placeholder.com/150x80?text=CapitalGrow" },
  ];

  const testimonials = [
    {
      name: "John Anderson",
      company: "Tech Innovations Ltd",
      rating: 5,
      text: "Sales Capital transformed our financial strategy completely. Their expertise and personalized approach helped us achieve growth beyond our expectations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      name: "Sarah Mitchell",
      company: "Retail Solutions Inc",
      rating: 5,
      text: "Outstanding service and professional guidance. The team at Sales Capital made complex financial planning simple and accessible for our business.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop"
    },
    {
      name: "David Chen",
      company: "Global Ventures",
      rating: 5,
      text: "Working with Sales Capital has been a game-changer. Their strategic insights and dedication to our success is truly remarkable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-100 to-pink-50">
      <Navbar />

      {/* Hero Section - Who We Are */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We are a dedicated team of financial experts committed to empowering businesses and individuals 
            to achieve their financial goals. With years of experience and a passion for excellence, 
            we provide comprehensive financial solutions tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
            <p className="text-gray-700 font-semibold">Years Experience</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
            <p className="text-gray-700 font-semibold">Happy Clients</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
            <p className="text-gray-700 font-semibold">Success Rate</p>
          </div>
        </div>
      </div>

      {/* Brands We Serve */}
      <div className="bg-white/40 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Brands We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img src={brand.logo} alt={brand.name} className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Clients Say */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          What Clients Say
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </p>

                {/* Client Info */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-purple-600 font-semibold">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'w-10 bg-purple-600' 
                    : 'w-2.5 bg-gray-400 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Get In Touch */}
      <div className="bg-white/40 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700">Mobile: +94 727 467 468</p>
                    <p className="text-gray-700">Land Line: +94 115 467 468</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700">21, Seibel Avenue, Colombo 05</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">milinda@salescapital.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 hover:shadow-xl transition-all duration-300">
              <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798654842515!2d79.86182507475629!3d6.914681593089998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259692f3f4a89%3A0x6e8e3a8f4c8e4e4e!2sColombo%2005%2C%20Colombo!5e0!3m2!1sen!2slk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sales Capital Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default WhoWeAre;