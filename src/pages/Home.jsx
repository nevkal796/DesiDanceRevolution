import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import team1 from '../assets/images/teampic1.JPG'
import team2 from '../assets/images/teampic2.JPG'
import team3 from '../assets/images/teampic3.JPG'
const Home = () => {
  return (
    <div>
      <Hero />

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
        {/* Decorative border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-dark via-gold via-gold-light to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold text-center mb-16 drop-shadow-gold">
            Meet The Team
          </h2>
          {/* Split Layout: Text Left, Collage Right */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Text Content - Left Side */}
            <div className="pl-16 flex-1 lg:max-w-2xl space-y-3 text-gray-300 text-lg leading-relaxed order-2 lg:order-1 lg:ml-12">
              <p className="animate-fade-in">
                Desi Dance Revolution is a Bollywood dance team dedicated to celebrating the rich cultural heritage of Indian dance. We bring together passionate dancers who share a love for the dynamic, expressive, and celebratory art form that is Bollywood dance.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Our mission is to spread joy, energy, and cultural appreciation through our performances. We combine traditional Indian dance movements with modern choreography, creating a  fusion that brings communities together.
              </p>
            </div>
            {/* Image Collage - Right Side */}
            <div className="flex-1 lg:flex-none lg:w-[600px] order-1 lg:order-2">
              {/* Mobile / Tablet: stacked images */}
              <div className="flex flex-col items-center gap-6 lg:hidden">
                <div className="w-full max-w-[280px] rounded-lg overflow-hidden border-4 border-gold shadow-[0_0_25px_rgba(232,212,160,0.5)]">
                  <img src={team3} alt="Team Photo 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-full max-w-[260px] rounded-lg overflow-hidden border-3 border-gold-light shadow-[0_0_20px_rgba(232,212,160,0.4)]">
                  <img src={team2} alt="Team Photo 2" className="w-full h-full object-cover" />
                </div>
                <div className="w-full max-w-[240px] rounded-lg overflow-hidden border-3 border-gold-dark shadow-[0_0_18px_rgba(232,212,160,0.35)]">
                  <img src={team1} alt="Team Photo 3" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Desktop: revert to previous collage layout */}
              <div className="hidden lg:block flex-1 lg:flex-none lg:w-[600px] relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] lg:block mx-auto lg:mx-0 w-full max-w-full lg:max-w-none">
                {/* Image 1 */}
                <div
                  className="absolute top-0 sm:top-0 md:top-0 lg:bottom-30 right-0 sm:right-0 md:right-0 lg:right-10 left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 w-[280px] h-[350px] md:w-[320px] md:h-[400px] lg:w-[400px] lg:h-[500px] rounded-lg overflow-hidden group cursor-pointer transition-all duration-500 ease-out animate-fade-in"
                  style={{ transform: 'rotate(-2deg)', zIndex: 10, animationDelay: '0.1s' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotate(-3deg) scale(1.05) translateY(-10px)'
                    e.currentTarget.style.boxShadow = '0 0 50px rgba(232, 212, 160, 0.8), 0 20px 60px rgba(201, 169, 97, 0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotate(-2deg) scale(1) translateY(0)'
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(232, 212, 160, 0.6), 0 15px 50px rgba(201, 169, 97, 0.4)'
                  }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center text-black font-bold text-xl border-6 border-gold rounded-lg relative"
                    style={{
                      background: 'linear-gradient(135deg, #C9A961 0%, #E8D4A0 50%, #A08748 100%)',
                      boxShadow: '0 0 40px rgba(232, 212, 160, 0.6), 0 15px 50px rgba(201, 169, 97, 0.4)',
                      borderWidth: '6px',
                    }}
                  >
                    <img src={team3} alt="team1pic" className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gold-light rounded-full animate-sparkle"></div>
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-light opacity-30"></div>
                  </div>
                </div>

                {/* Image 2 */}
                <div
                  className=" absolute top-[0px] left-1/2 sm:top-[0px] sm:left-auto sm:right-[80px] md:top-[0] md:right-[50px] lg:top-[342px] lg:right-[720px] -translate-x-1/2 sm:translate-x-0 w-[220px] h-[280px] md:w-[250px] md:h-[320px] lg:w-[340px] lg:h-[420px] rounded-lg overflow-hidden group cursor-pointer transition-all duration-500 ease-out animate-fade-in"
                  style={{ transform: 'rotate(5deg)', zIndex: 30, animationDelay: '0.3s' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotate(7deg) scale(1.05) translateY(-8px)'
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(232, 212, 160, 0.7), 0 15px 50px rgba(201, 169, 97, 0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotate(6deg) scale(1) translateY(0)'
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(232, 212, 160, 0.5), 0 10px 40px rgba(201, 169, 97, 0.3)'
                  }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center text-black font-bold text-lg border-4 border-gold-light rounded-lg relative"
                    style={{
                      background: 'linear-gradient(135deg, #C9A961 0%, #E8D4A0 50%, #A08748 100%)',
                      boxShadow: '0 0 30px rgba(232, 212, 160, 0.5), 0 10px 40px rgba(201, 169, 97, 0.3)',
                      borderWidth: '4px',
                    }}
                  >
                    <img src={team2} alt="team2pic" className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-3 left-3 w-1 h-1 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                </div>

                {/* Image 3 */}
                <div
                  className="absolute top-[520px] left-1/2 sm:top-[250px] sm:left-auto sm:right-[10px] md:top-[320px] md:right-[15px] lg:top-[380px] lg:right-[380px] -translate-x-1/2 sm:translate-x-0 w-[200px] h-[250px] md:w-[230px] md:h-[290px] lg:w-[320px] lg:h-[370px] rounded-lg overflow-hidden group cursor-pointer transition-all duration-500 ease-out animate-fade-in"
                  style={{ transform: 'rotate(-3deg)', zIndex: 35, animationDelay: '0.5s' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotate(-4deg) scale(1.05) translateY(-6px)'
                    e.currentTarget.style.boxShadow = '0 0 35px rgba(232, 212, 160, 0.6), 0 12px 45px rgba(201, 169, 97, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotate(-4deg) scale(1) translateY(0)'
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(232, 212, 160, 0.4), 0 8px 35px rgba(201, 169, 97, 0.3)'
                  }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center text-black font-bold text-base border-3 border-gold-dark rounded-lg relative"
                    style={{
                      background: 'linear-gradient(135deg, #C9A961 0%, #E8D4A0 50%, #A08748 100%)',
                      boxShadow: '0 0 25px rgba(232, 212, 160, 0.4), 0 8px 35px rgba(201, 169, 97, 0.3)',
                      borderWidth: '3px',
                    }}
                  >
                    <img src={team1} alt="team3pic" className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 w-1 h-1 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '0.8s' }}></div>
                  </div>
                </div>

                {/* Decorative connecting line (subtle) - Hidden on mobile */}
                <svg className="hidden md:block absolute top-[150px] right-[150px] md:top-[180px] md:right-[180px] lg:top-[200px] lg:right-[200px] w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] pointer-events-none opacity-20" style={{ zIndex: 15 }}>
                  <path d="M 0 0 Q 50 35 100 100" stroke="#E8D4A0" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-dark via-gold via-gold-light to-transparent"></div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black/95">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold text-center mb-16 drop-shadow-gold">
            Explore
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Directors Card */}
            <Link
              to="/directors"
              className="flexgroup relative bg-black border-2 border-gold-dark rounded-lg p-8 hover:border-gold-light transition-all duration-300 transform hover:scale-105"
              style={{ boxShadow: '0 0 30px rgba(232, 212, 160, 0.4)' }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">👥</div>
                <h3 className="text-3xl font-display font-bold text-gold mb-4 drop-shadow-gold">
                  Our Directors
                </h3>
                <p className="text-gray-300 mb-6">
                  Meet the talented directors who lead and inspire our dance team with their vision and expertise.
                </p>
              </div>
            </Link>

            {/* Gallery Card */}
            <Link
              to="/gallery"
              className="flex group relative bg-black border-2 border-gold-dark rounded-lg p-8 hover:border-gold-light transition-all duration-300 transform hover:scale-105"
              style={{ boxShadow: '0 0 30px rgba(232, 212, 160, 0.4)' }}
            >
              <div className="text-center ">
                <div className="  text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📸</div>
                <h3 className=" text-3xl font-display font-bold text-gold mb-4 drop-shadow-gold">
                   Gallery
                </h3>
                <p className="text-gray-300 mb-6">
                  Browse through our stunning performances, rehearsals, and special events.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gold-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold mb-8 drop-shadow-gold">
          Your Event, Our Moves
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in booking us for an event? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://linktr.ee/DesiDanceRevolution?utm_source=linktree_profile_share<sid=2eb5e92a-ebd3-4da5-a0f9-3c21c821df9f"
              className="px-8 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              style={{ boxShadow: '0 0 20px rgba(201, 169, 97, 0.6)' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(201, 169, 97, 0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(201, 169, 97, 0.6)'}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
