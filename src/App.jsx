import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
//import Navbar from './components/Navbar'
//import HeroSection from './components/HeroSection'
import Home from './pages/Home'
import VideoCreating from './pages/VideoCreating'
import PPCpage from './pages/PPC'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Team from './pages/Team'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-creating" element={<VideoCreating/>} />
        <Route path="/google-advertising" element={<PPCpage/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </Router>
  )
}

export default App
