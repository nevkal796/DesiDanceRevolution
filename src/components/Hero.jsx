import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpeg'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        {/* Gold shimmer gradient background */}
        <div
          className="absolute inset-0 bg-gold-shimmer opacity-10 animate-gold-shimmer"
          style={{ backgroundSize: '200% 200%' }}
        />

        <div className="absolute inset-0 opacity-40">
          {/* Gold particles/sparkles with new colors */}
          <div className="absolute top-[8%] left-[12%] w-2 h-2 bg-gold rounded-full animate-sparkle"></div>
          <div className="absolute top-[15%] right-[18%] w-3 h-3 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute bottom-[22%] left-[25%] w-1.5 h-1.5 bg-gold-rose rounded-full animate-sparkle" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-[35%] right-[8%] w-2 h-2 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute bottom-[45%] right-[35%] w-4 h-4 bg-gold rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[52%] left-[42%] w-2 h-2 bg-gold-dark rounded-full animate-sparkle" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute top-[18%] right-[45%] w-3 h-3 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute bottom-[12%] left-[55%] w-2 h-2 bg-gold rounded-full animate-sparkle" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute top-[65%] right-[22%] w-1.5 h-1.5 bg-gold-rose rounded-full animate-sparkle" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute bottom-[8%] left-[8%] w-3 h-3 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '2.1s' }}></div>
          <div className="absolute top-[42%] left-[68%] w-2 h-2 bg-gold rounded-full animate-sparkle" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute bottom-[55%] right-[62%] w-4 h-4 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '1.6s' }}></div>
          <div className="absolute top-[28%] left-[15%] w-2 h-2 bg-gold-dark rounded-full animate-sparkle" style={{ animationDelay: '1.1s' }}></div>
          <div className="absolute bottom-[32%] right-[12%] w-1.5 h-1.5 bg-gold-rose rounded-full animate-sparkle" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-[72%] left-[78%] w-3 h-3 bg-gold rounded-full animate-sparkle" style={{ animationDelay: '1.9s' }}></div>
          <div className="absolute bottom-[18%] right-[48%] w-2 h-2 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-[5%] left-[88%] w-2 h-2 bg-gold rounded-full animate-sparkle" style={{ animationDelay: '1.3s' }}></div>
          <div className="absolute bottom-[62%] left-[32%] w-4 h-4 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '0.1s' }}></div>
          <div className="absolute top-[88%] right-[28%] w-1.5 h-1.5 bg-gold-dark rounded-full animate-sparkle" style={{ animationDelay: '2.3s' }}></div>
          <div className="absolute bottom-[75%] left-[5%] w-3 h-3 bg-gold-rose rounded-full animate-sparkle" style={{ animationDelay: '1.7s' }}></div>
          <div className="absolute top-[48%] right-[78%] w-2 h-2 bg-gold rounded-full animate-sparkle" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute bottom-[38%] left-[62%] w-2 h-2 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-[92%] left-[45%] w-3 h-3 bg-gold rounded-full animate-sparkle" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute bottom-[5%] right-[85%] w-2 h-2 bg-gold-dark rounded-full animate-sparkle" style={{ animationDelay: '2.0s' }}></div>
          <div className="absolute top-[58%] left-[22%] w-1.5 h-1.5 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute bottom-[48%] right-[5%] w-4 h-4 bg-gold-rose rounded-full animate-sparkle" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-[12%] left-[72%] w-2 h-2 bg-gold rounded-full animate-sparkle" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute bottom-[85%] right-[52%] w-3 h-3 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[78%] left-[95%] w-2 h-2 bg-gold-dark rounded-full animate-sparkle" style={{ animationDelay: '2.2s' }}></div>
          <div className="absolute bottom-[28%] left-[48%] w-1.5 h-1.5 bg-gold rounded-full animate-sparkle" style={{ animationDelay: '0.6s' }}></div>
        </div>

        {/* Subtle pattern overlay with new gold color */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #C9A961 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-slide-up">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center shadow-2xl animate-fade-in p-1">
            <img src={logo} alt="DDR Logo" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-2xl md:text-7xl lg:text-7xl font-display font-black text-gold mb-4 animate-fade-in drop-shadow-gold" style={{ animationDelay: '0.2s' }}>
          DESI DANCE
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-display font-black text-gold-light mb-6 animate-fade-in drop-shadow-gold" style={{ animationDelay: '0.4s' }}>
          REVOLUTION
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 font-light animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Houston's Premier Bollywood Dance Team
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Link
            to="/gallery"
            className="px-8 py-4 border-2 border-gold-dark text-gold font-bold rounded-lg hover:bg-gradient-to-r hover:from-gold-dark hover:to-gold-dark hover:text-gold-light hover:border-gold-light transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(232,212,160,0.9)] hover:drop-shadow-[0_0_10px_rgba(232,212,160,0.8)] text-lg"          >
            Watch Us Perform
          </Link>
        </div>
      </div>

     
    </section>
  )
}

export default Hero
