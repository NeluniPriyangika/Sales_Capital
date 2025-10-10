import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Facebook, Youtube, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
         <nav
           className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
             scrolled
               ? "bg-black/95 backdrop-blur-sm pt-7 pb-7 py-4 text-white"
               : "bg-transparent py-6"
           }`}>
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
             <div className="relative flex justify-between items-center">
               {/* Left: Social Icons */}
               <div className="flex space-x-4 text-white">
                 <a href="https://facebook.com" target="_blank" rel="noreferrer">
                   <Facebook className="w-5 h-5 hover:text-purple-400 transition-colors" />
                 </a>
                 <a href="https://youtube.com" target="_blank" rel="noreferrer">
                   <Youtube className="w-5 h-5 hover:text-purple-400 transition-colors" />
                 </a>
                 <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
                   <FaWhatsapp className="w-5 h-5 hover:text-purple-400 transition-colors" />
                 </a>
                 <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                   <Linkedin className="w-5 h-5 hover:text-purple-400 transition-colors" />
                 </a>
                 <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                   <FaTiktok className="w-5 h-5 hover:text-purple-400 transition-colors" />
                 </a>
                 <a href="https://instagram.com" target="_blank" rel="noreferrer">
                   <Instagram className="w-5 h-5 hover:text-purple-400 transition-colors" />
                 </a>
               </div>
   
               {/* Center: Logo - Absolutely positioned to center on page */}
               <div className="absolute left-1/2 transform -translate-x-1/2">
                   <button onClick={() => navigate('/')} className="cursor-pointer">
                       <img src={logo} alt="Sales Capital Logo" className="h-10 md:h-12" />
                   </button>
               </div>
   
               {/* Right: Desktop Menu */}
               <div className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
                 <button onClick={() => navigate('/')} className="hover:text-purple-400 transition-colors">
                   HOME
                 </button>
                 
                 {/* Services Dropdown */}
                 <div 
                   className="relative"
                   onMouseEnter={() => setServicesOpen(true)}
                   onMouseLeave={() => setServicesOpen(false)}
                 >
                   <button className="flex items-center hover:text-purple-400 transition-colors">
                     SERVICES
                     <ChevronDown className="w-4 h-4 ml-1" />
                   </button>
                   {servicesOpen && (
                     <div className="text-white absolute top-full left-0 mt-1 w-56 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl py-2 border border-purple-500/20">
                       <a href="/video-creating" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                         Video Content creating
                       </a>
                       <a href="#" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                         Social Media Marketing
                       </a>
                       <a href="#" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                         Google Advertising (PPC)
                       </a>
                       <a href="#" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                         SEO
                       </a>
                       <a href="#" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                         Content Development
                       </a>
                       <a href="#" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                         Creative Solutions
                       </a>
                     </div>
                   )}
                 </div>
   
                 {/* About Dropdown */}
                 <div 
                   className="relative"
                   onMouseEnter={() => setAboutOpen(true)}
                   onMouseLeave={() => setAboutOpen(false)}
                 >
                   <button className="flex items-center hover:text-purple-400 transition-colors">
                     ABOUT
                     <ChevronDown className="w-4 h-4 ml-1" />
                   </button>
                   {aboutOpen && (
                     <div className="text-white absolute top-full left-0 mt-1 w-48 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl py-2 border border-purple-500/20">
                       <a href="/about" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                         Who We Are ?
                       </a>
                       <a href="/team" className="block px-4 py-2 hover:bg-purple-500/20 hover:text-purple-400 transition-colors">
                         Our Team
                       </a>
                     </div>
                   )}
                 </div>
                 
                 <a href="/contact-us" className="hover:text-purple-400 transition-colors">
                   CONTACT
                 </a>
               </div>
   
               {/* Mobile Menu Button */}
               <button
                 className="md:hidden"
                 onClick={() => setIsMenuOpen(!isMenuOpen)}
               >
                 {isMenuOpen ? (
                   <X className="w-6 h-6" />
                 ) : (
                   <Menu className="w-6 h-6" />
                 )}
               </button>
             </div>
   
             {/* Mobile Menu */}
             {isMenuOpen && (
               <div className="md:hidden mt-4 pb-4 space-y-3 text-sm font-medium text-center">
                 <button
                   onClick={() => {
                     navigate('/');
                     setIsMenuOpen(false);
                   }}
                   className="block hover:text-purple-400 transition-colors w-full text-left"
                 >
                   HOME
                 </button>
                 
                 {/* Mobile Services Dropdown */}
                 <div>
                   <button
                     onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                     className="flex items-center justify-between hover:text-purple-400 transition-colors w-full text-left"
                   >
                     SERVICES
                     <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                   </button>
                   {mobileServicesOpen && (
                     <div className="pl-4 space-y-2 mt-2">
                       <a
                         href="#"
                         className="block hover:text-purple-400 transition-colors py-1 text-left"
                         onClick={() => setIsMenuOpen(false)}
                       >
                         Video Content creating
                       </a>
                       <a
                         href="#video-creation"
                         className="block hover:text-purple-400 transition-colors py-1 text-left"
                         onClick={() => setIsMenuOpen(false)}
                       >
                         Social Media Marketing
                       </a>
                       <a
                         href="#social-media"
                         className="block hover:text-purple-400 transition-colors py-1 text-left"
                         onClick={() => setIsMenuOpen(false)}
                       >
                         Google Advertising (PPC)
                       </a>
                       <a
                         href="#social-media"
                         className="block hover:text-purple-400 transition-colors py-1 text-left"
                         onClick={() => setIsMenuOpen(false)}
                       >
                         SEO
                       </a>
                       <a
                         href="#social-media"
                         className="block hover:text-purple-400 transition-colors py-1 text-left"
                         onClick={() => setIsMenuOpen(false)}
                       >
                         Content Development
                       </a>
                       <a
                         href="#social-media"
                         className="block hover:text-purple-400 transition-colors py-1 text-left"
                         onClick={() => setIsMenuOpen(false)}
                       >
                         Creative Solutions
                       </a>
                     </div>
                   )}
                 </div>
   
                 {/* Mobile About Dropdown */}
                 <div>
                   <button
                     onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                     className="flex items-center justify-between hover:text-purple-400 transition-colors w-full text-left"
                   >
                     ABOUT
                     <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                   </button>
                   {mobileAboutOpen && (
                     <div className="pl-4 space-y-2 mt-2">
                       <a
                         href="#who-we-are"
                         className="block hover:text-purple-400 transition-colors py-1 text-left"
                         onClick={() => setIsMenuOpen(false)}
                       >
                         Who We Are ?
                       </a>
                       <a
                         href="#our-team"
                         className="block hover:text-purple-400 transition-colors py-1 text-left"
                         onClick={() => setIsMenuOpen(false)}
                       >
                         Our Team
                       </a>
                     </div>
                   )}
                 </div>
                 
                 <a
                   href="/contact-us"
                   className="block hover:text-purple-400 transition-colors"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   CONTACT
                 </a>
               </div>
             )}
           </div>
         </nav>
  );
};

export default Navbar;