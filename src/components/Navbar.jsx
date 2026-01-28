import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.jpeg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/#about', label: 'About' },
    { path: '/directors', label: 'Directors' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`} style={scrolled ? { boxShadow: '0 10px 30px rgba(201, 169, 97, 0.2)' } : {}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-black text-lg group-hover:scale-110 transition-transform duration-300 gold-glow-hover p-0.5"
              style={{
               
              }}
            >
              <img src={logo} alt="DDR Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="hidden sm:block font-display text-xl font-bold text-gold drop-shadow-gold">
              Desi Dance Revolution
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname + location.hash === link.path 
                    ? 'text-gold border-b-2 border-gold-dark drop-shadow-gold'
                    : 'text-white hover:text-gold-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gold-light focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors duration-300 ${
                    location.pathname + location.hash === link.path
                      ? 'text-gold border-l-4 border-gold-dark pl-4 drop-shadow-gold'
                      : 'text-white hover:text-gold-light pl-4'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
