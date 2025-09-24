import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Homepage from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <Homepage />
      {/* Add more sections like About, Portfolio etc */}
    </>
  )
}

export default App
