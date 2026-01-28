const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'YouTube', icon: '▶️', url: '#' },
    { name: 'Facebook', icon: '👥', url: '#' },
  ]

  return (
    <footer className="bg-black border-t border-gold-dark/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-black"
                style={{
                  background: 'linear-gradient(135deg, #C9A961 0%, #E8D4A0 50%, #A08748 100%)'
                }}
              >
                DDR
              </div>
              <span className="font-display text-lg font-bold text-gold drop-shadow-gold">
                Desi Dance Revolution
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Bringing Bollywood dance to life with passion, precision, and celebration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-gold font-bold mb-4 drop-shadow-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-gold-light transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/directors" className="text-gray-400 hover:text-gold-light transition-colors text-sm">
                  Directors
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-gold-light transition-colors text-sm">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-display text-gold font-bold mb-4 drop-shadow-gold">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-gold-dark/30 rounded-full flex items-center justify-center text-gold-light hover:bg-gold-gradient hover:text-black transition-all duration-300"
                  style={{ boxShadow: '0 0 15px rgba(232, 212, 160, 0.3)' }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 25px rgba(232, 212, 160, 0.6)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 15px rgba(232, 212, 160, 0.3)'}
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Email: desidancerevolution@gmail.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gold-dark/30 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Desi Dance Revolution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
