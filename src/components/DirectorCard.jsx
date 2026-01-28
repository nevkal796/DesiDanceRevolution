const DirectorCard = ({ director }) => {
  return (
    <div className="group bg-black border-2 border-gold-dark rounded-lg p-6 hover:border-gold-light transition-all duration-300 transform hover:scale-105" style={{ boxShadow: '0 0 30px rgba(232, 212, 160, 0.4)' }}>
      {/* Image Placeholder */}
      <div 
        className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center border-2 border-gold-dark group-hover:border-gold-light transition-all duration-300 relative"
        style={{
          background: 'linear-gradient(135deg, #C9A961 0%, #E8D4A0 50%, #A08748 100%)'
        }}
      >
        <div className="text-4xl">👤</div>
        {/* Sparkle dots */}
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-gold-light rounded-full animate-sparkle"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-gold-light rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Name */}
      <h3 className="text-2xl font-display font-bold text-gold text-center mb-2 drop-shadow-gold">
        {director.name}
      </h3>

      {/* Title */}
      <p className="text-gold-light text-center mb-4 font-medium">
        {director.title}
      </p>

      {/* Bio */}
      <p className="text-gray-300 text-sm text-center mb-4 line-clamp-3">
        {director.bio}
      </p>

      {/* Social Links (Optional) */}
      {director.social && (
        <div className="flex justify-center space-x-3 mt-4">
          {director.social.instagram && (
            <a href={director.social.instagram} className="text-gold hover:text-gold-light transition-colors">
              📷
            </a>
          )}
          {director.social.linkedin && (
            <a href={director.social.linkedin} className="text-gold hover:text-gold-light transition-colors">
              💼
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default DirectorCard
