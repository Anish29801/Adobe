import './App.css'
import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import Buttons from "./components/Buttons.jsx"
import Footer from "./components/Footer.jsx"
import Cards1 from "./components/Card1.jsx"
import Cards2 from "./components/Card2.jsx"
import Card3 from './components/Card3.jsx'

function App() {

  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Buttons />
      <Cards1 />
      <Cards2 />
      <Card3 />
      <Footer />
    </div>
  )
}

export default App
