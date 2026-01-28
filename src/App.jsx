import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Directors from './pages/Directors'
import Gallery from './pages/Gallery'

// Component to handle smooth scrolling for anchor links
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function PageSlider() {
  const location = useLocation()

  return (
    <div key={location.pathname} className="page-slide">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <main className="flex-grow">
          <PageSlider />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
