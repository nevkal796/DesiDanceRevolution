import { useState } from 'react'
import togetherdirector from '../assets/images/directorstogether.png'
import aaronsanders from '../assets/images/boydirector.png'
import shineldunha from '../assets/images/girldirector.png'

const Directors = () => {
  const [activeTab, setActiveTab] = useState(1) // Start with middle tab (Both Directors)

  return (
    <div className="min-h-screen bg-black pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-gold text-center mb-4 drop-shadow-gold">
          Our Directors
        </h1>
        <p className="text-xl text-gray-400 text-center mb-12">
          Meet the talented leaders who guide Desi Dance Revolution
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-black/50 p-1 rounded-t-lg border-b-2 border-gold-dark">
            {/* Left Tab */}
            <button
              onClick={() => setActiveTab(0)}
              className={`px-6 py-3 rounded-t-lg font-medium transition-all duration-300 ${
                activeTab === 0
                  ? 'bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black border-2 border-gold-light border-b-0 shadow-[0_0_20px_rgba(201,169,97,0.6)]'
                  : 'border-2 border-gold-dark text-gold bg-transparent hover:border-gold hover:text-gold-light'
              }`}
              aria-label="View Director 1"
            >
              Aaron Sanders
            </button>

            {/* Middle Tab */}
            <button
              onClick={() => setActiveTab(1)}
              className={`px-6 py-3 rounded-t-lg font-medium transition-all duration-300 flex items-center justify-center ${
              activeTab === 1
              ? 'bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black border-2 border-gold-light border-b-0 shadow-[0_0_20px_rgba(201,169,97,0.6)]'
              : 'border-2 border-gold-dark text-gold bg-transparent hover:border-gold hover:text-gold-light'
              }`}
              aria-label="View Both Directors"
              >
             <svg 
                className={`w-6 h-6 ${activeTab === 1 ? 'text-black' : 'text-gold'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
                >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
             </svg>
           </button>

            {/* Right Tab */}
            <button
              onClick={() => setActiveTab(2)}
              className={`px-6 py-3 rounded-t-lg font-medium transition-all duration-300 ${
                activeTab === 2
                  ? 'bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black border-2 border-gold-light border-b-0 shadow-[0_0_20px_rgba(201,169,97,0.6)]'
                  : 'border-2 border-gold-dark text-gold bg-transparent hover:border-gold hover:text-gold-light'
              }`}
              aria-label="View Director 2"
            >
              Shinel Dcunha
            </button>
          </div>
        </div>

        {/* Panels (no internal slider; tabs just switch content) */}
        <div className="w-full pb-12">
          {/* Panel 1 - Aaron */}
          {activeTab === 0 && (
          <div className="animate-fade-in">
            <div className="px-4">
              <div className="bg-gradient-to-br from-black to-gray-900 border-2 border-gold-dark rounded-lg p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_0_30px_rgba(201,169,97,0.3)] relative">
                {/* Decorative sparkle dots */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-gold-light rounded-full animate-sparkle"></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-6 left-6 w-1 h-1 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                  {/* Text Container - Left (55%) */}
                  <div className="flex-1 order-2 lg:order-1 lg:max-w-[600px] animate-fade-in">
                    {/* Gold accent line above name */}
                    <div className="w-20 h-0.5 bg-gold-light mb-6"></div>
                    
                    {/* Director Name */}
                    <h2 
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-4 drop-shadow-gold"
                      style={{
                        background: 'linear-gradient(135deg, #E8D4A0 0%, #C9A961 50%, #E8D4A0 100%)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: '0 0 30px rgba(232, 212, 160, 0.5)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Aaron Sanders
                    </h2>
                    
                    {/* Role/Title */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gold mb-8 sm:mb-10 font-medium italic" style={{ letterSpacing: '0.01em' }}>
                      Artistic Director & Co-Founder
                    </p>
                    
                    {/* Bio Text */}
                    <div className="space-y-5 sm:space-y-6 text-gray-200 text-base sm:text-lg leading-[1.75] sm:leading-[1.8] max-w-[650px]">
                      <p>
                        With over 10 years of experience in dance and teaching, he brings a distinctive style and presence to every performance. From weddings and music videos to high profile events — including a performance in front of the President - he has taken the stage in a wide range of settings.
                      </p>
                      <p>
                        In pursuit of bringing his own creative ideas to life, he partnered with his longtime collaborator, Shinel Dunha. Together, they're working to push boundaries and introduce a fresh perspective to the dance scene - a movement they call the Desi Dance Revolution.
                      </p>
                    </div>
                  </div>

                  {/* Image Container - Right (40%) */}
                  <div className="flex-shrink-0 order-1 lg:order-2 w-full lg:w-auto flex justify-center lg:justify-end mb-8 lg:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div
                      className="group relative w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[380px] h-[400px] sm:h-[450px] lg:h-[480px] rounded-lg overflow-hidden transition-all duration-500 ease-out lg:[transform:rotate(2deg)]"
                      style={{
                        boxShadow: '0 0 40px rgba(232, 212, 160, 0.5), 0 20px 60px rgba(201, 169, 97, 0.4)',
                      }}
                      onMouseEnter={(e) => {
                        if (window.innerWidth >= 1024) {
                          e.currentTarget.style.transform = 'rotate(1deg) translateY(-12px)'
                        } else {
                          e.currentTarget.style.transform = 'translateY(-8px)'
                        }
                        e.currentTarget.style.boxShadow = '0 0 50px rgba(232, 212, 160, 0.8), 0 25px 70px rgba(201, 169, 97, 0.6)'
                      }}
                      onMouseLeave={(e) => {
                        if (window.innerWidth >= 1024) {
                          e.currentTarget.style.transform = 'rotate(2deg) translateY(0)'
                        } else {
                          e.currentTarget.style.transform = 'rotate(0deg) translateY(0)'
                        }
                        e.currentTarget.style.boxShadow = '0 0 40px rgba(232, 212, 160, 0.5), 0 20px 60px rgba(201, 169, 97, 0.4)'
                      }}
                    >
                      {/* Double border effect */}
                      <div className="absolute inset-0 border-4 border-gold rounded-lg"></div>
                      <div className="absolute inset-2 border-2 border-gold-light rounded-lg opacity-50"></div>
                      
                      {/* Image */}
                      <img 
                        src={aaronsanders} 
                        alt="Aaron Sanders" 
                        className="w-full h-full object-cover rounded-lg relative z-10" 
                      />
                      
                      {/* Decorative corner elements */}
                      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold-light opacity-40 z-20"></div>
                      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold-light opacity-40 z-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Panel 2 - Both Directors */}
          {activeTab === 1 && (
          <div className="animate-fade-in">
            <div className="px-4">
              <div className="bg-gradient-to-br from-black to-gray-900 border-2 border-gold-dark rounded-lg p-8 md:p-12 shadow-[0_0_30px_rgba(201,169,97,0.3)] relative">
                {/* Decorative sparkle dots */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-gold-light rounded-full animate-sparkle"></div>
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>

                <div className="flex justify-center">
                  {/* Image Center */}
                  <div
                    className="w-full max-w-[500px] h-[400px] rounded-lg border-4 border-gold overflow-hidden shadow-[0_0_30px_rgba(232,212,160,0.5)] hover:shadow-[0_0_40px_rgba(232,212,160,0.7)] transition-all duration-300"
                  >
                    <img src={togetherdirector} alt="Both Directors" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Panel 3 - Shinel */}
          {activeTab === 2 && (
          <div className="animate-fade-in">
            <div className="px-4">
              <div className="bg-gradient-to-br from-black to-gray-900 border-2 border-gold-dark rounded-lg p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_0_30px_rgba(201,169,97,0.3)] relative">
                {/* Decorative sparkle dots */}
                <div className="absolute top-6 left-6 w-2 h-2 bg-gold-light rounded-full animate-sparkle"></div>
                <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-6 right-6 w-1 h-1 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                  {/* Image Container - Left (40%) */}
                  <div className="flex-shrink-0 order-1 w-full lg:w-auto flex justify-center lg:justify-start mb-8 lg:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div
                      className="group relative w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[380px] h-[400px] sm:h-[450px] lg:h-[480px] rounded-lg overflow-hidden transition-all duration-500 ease-out lg:[transform:rotate(-2deg)]"
                      style={{
                        boxShadow: '0 0 40px rgba(232, 212, 160, 0.5), 0 20px 60px rgba(201, 169, 97, 0.4)',
                      }}
                      onMouseEnter={(e) => {
                        if (window.innerWidth >= 1024) {
                          e.currentTarget.style.transform = 'rotate(-1deg) translateY(-12px)'
                        } else {
                          e.currentTarget.style.transform = 'translateY(-8px)'
                        }
                        e.currentTarget.style.boxShadow = '0 0 50px rgba(232, 212, 160, 0.8), 0 25px 70px rgba(201, 169, 97, 0.6)'
                      }}
                      onMouseLeave={(e) => {
                        if (window.innerWidth >= 1024) {
                          e.currentTarget.style.transform = 'rotate(-2deg) translateY(0)'
                        } else {
                          e.currentTarget.style.transform = 'rotate(0deg) translateY(0)'
                        }
                        e.currentTarget.style.boxShadow = '0 0 40px rgba(232, 212, 160, 0.5), 0 20px 60px rgba(201, 169, 97, 0.4)'
                      }}
                    >
                      {/* Double border effect */}
                      <div className="absolute inset-0 border-4 border-gold rounded-lg"></div>
                      <div className="absolute inset-2 border-2 border-gold-light rounded-lg opacity-50"></div>
                      
                      {/* Image */}
                      <img 
                        src={shineldunha} 
                        alt="Shinel Dcunha" 
                        className="w-full h-full object-cover rounded-lg relative z-10" 
                        style={{ objectFit: 'cover' }}
                      />
                      
                      {/* Decorative corner elements */}
                      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold-light opacity-40 z-20"></div>
                      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold-light opacity-40 z-20"></div>
                    </div>
                  </div>

                  {/* Text Container - Right (55%) */}
                  <div className="flex-1 order-2 lg:max-w-[600px] animate-fade-in">
                    {/* Gold accent line above name */}
                    <div className="w-20 h-0.5 bg-gold-light mb-6"></div>
                    
                    {/* Director Name */}
                    <h2 
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-4 drop-shadow-gold"
                      style={{
                        background: 'linear-gradient(135deg, #E8D4A0 0%, #C9A961 50%, #E8D4A0 100%)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: '0 0 30px rgba(232, 212, 160, 0.5)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Shinel Dcunha
                    </h2>
                    
                    {/* Role/Title */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gold mb-8 sm:mb-10 font-medium italic" style={{ letterSpacing: '0.01em' }}>
                      Co-Director & Choreographer
                    </p>
                    
                    {/* Bio Text */}
                    <div className="space-y-5 sm:space-y-6 text-gray-200 text-base sm:text-lg leading-[1.75] sm:leading-[1.8] max-w-[650px]">
                      <p>
                        With over two decades of dance experience, Shinel has been dancing since she was 4 years old. Bollywood Star shows, weddings, galas, solo competitions and winning collegiate competitions are all a part of her repertoire; her journey spans every stage.
                      </p>
                      <p>
                        She's performed for intimate audiences of 10 and crowds as large as 8,000. Now, she's channeled that lifelong passion into purpose with the launch of Desi Dance Revolution. She's our co founder, our inspiration, our star.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Directors
