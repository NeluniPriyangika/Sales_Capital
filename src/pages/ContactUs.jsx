import React, { useState } from 'react';
import Navbar from '../components/Navbar2';
import { Phone, MapPin, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-100 to-pink-50">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Let's bring your digital marketing vision to life. Get in touch with our creative team today.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="bg-purple-100 rounded-full p-4 w-fit mb-4">
              <Phone className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-700 text-sm mb-1">Mobile</p>
            <p className="text-purple-600 font-semibold mb-2">+94 727 467 468</p>
            <p className="text-gray-700 text-sm mb-1">Land Line</p>
            <p className="text-purple-600 font-semibold">+94 115 467 468</p>
          </div>

          {/* Email */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="bg-pink-100 rounded-full p-4 w-fit mb-4">
              <Mail className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-700 text-sm mb-1">General Inquiries</p>
            <p className="text-pink-600 font-semibold break-all">milinda@salescapital.com</p>
          </div>

          {/* Address */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="bg-violet-100 rounded-full p-4 w-fit mb-4">
              <MapPin className="w-6 h-6 text-violet-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-700 text-sm mb-1">Our Office</p>
            <p className="text-violet-600 font-semibold">21, Seibel Avenue,<br />Colombo 05</p>
          </div>

          {/* Hours */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="bg-fuchsia-100 rounded-full p-4 w-fit mb-4">
              <Clock className="w-6 h-6 text-fuchsia-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Working Hours</h3>
            <p className="text-gray-700 text-sm mb-1">Monday - Friday</p>
            <p className="text-fuchsia-600 font-semibold mb-2">9:00 AM - 6:00 PM</p>
            <p className="text-gray-700 text-sm mb-1">Saturday</p>
            <p className="text-fuchsia-600 font-semibold">9:00 AM - 1:00 PM</p>
          </div>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-700 mb-8">
              Fill out the details below and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-300 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-300 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-300 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="+94 XXX XXX XXX"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your project..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-purple-600 text-white py-4 rounded-full hover:bg-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-4 shadow-xl">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798654842515!2d79.86182507475629!3d6.914681593089998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259692f3f4a89%3A0x6e8e3a8f4c8e4e4e!2sColombo%2005%2C%20Colombo!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '600px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sales Capital Location"
              ></iframe>
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

export default ContactUs;