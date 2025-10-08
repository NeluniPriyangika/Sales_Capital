import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
//import Navbar from './components/Navbar'
//import HeroSection from './components/HeroSection'
import Home from './pages/Home'
import VideoCreating from './pages/VideoCreating'
import Portfolio from './pages/Portfolio'
import Team from './pages/Team'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-creating" element={<VideoCreating/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/team" element={<Team/>} />
      </Routes>
    </Router>
  )
}

export default App
