import { useState, useEffect } from 'react'

const PhotoGallery = ({ images, loading, error }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const openLightbox = (index) => {
    setSelectedPhoto(index)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    setSelectedPhoto((prev) => (prev + 1) % images.length)
  }

  const prevPhoto = () => {
    setSelectedPhoto((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e) => {
    if (selectedPhoto === null) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextPhoto()
    if (e.key === 'ArrowLeft') prevPhoto()
  }

  // Handle keyboard navigation
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedPhoto, images.length])

  // Loading State
  if (loading) {
    return (
      <div className="py-12 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gold border-t-transparent mb-4"></div>
        <p className="text-gold-light text-xl mb-2">Loading gallery...</p>
        <p className="text-gray-400 text-sm">Fetching images from Google Drive</p>
      </div>
    )
  }

  // Error State
  if (error) {
    return (
      <div className="py-12 text-center max-w-2xl mx-auto">
        <div className="text-6xl mb-4">⚠️</div>
        <p className="text-red-400 text-xl mb-2">Unable to load gallery</p>
        <p className="text-gray-400 mb-4">{error}</p>
        <p className="text-gray-500 text-sm">
          Please check your configuration or try again later.
        </p>
      </div>
    )
  }

  // Empty State
  if (!images || images.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="text-6xl mb-4">📸</div>
        <p className="text-gold-light text-xl mb-2">No photos available yet</p>
        <p className="text-gray-400">Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="py-12" tabIndex={0}>
      {/* Photo Grid - Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {images.map((image, index) => {
          // Calculate aspect ratio if available, otherwise use 4:3
          const aspectRatio = image.width && image.height 
            ? `${image.width} / ${image.height}`
            : '4 / 3'
          
          return (
          <div
            key={image.id}
            onClick={() => openLightbox(index)}
            className="relative rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 ease-out border-2 border-gold-dark hover:border-gold-light"
            style={{
              aspectRatio: aspectRatio,
              boxShadow: '0 0 20px rgba(201, 169, 97, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(232, 212, 160, 0.6), 0 15px 50px rgba(201, 169, 97, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(201, 169, 97, 0.3)'
            }}
          >
            <img
              src={image.thumbnailUrl}
              alt={image.name}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                const current = img.getAttribute('data-fallback-step') || '0'
                const step = Number(current)

                // Try: thumbnail -> fullUrl (uc?export=view) -> apiMediaUrl (alt=media)
                if (step === 0) {
                  img.setAttribute('data-fallback-step', '1')
                  img.src = image.fullUrl
                  return
                }

                if (step === 1 && image.apiMediaUrl) {
                  img.setAttribute('data-fallback-step', '2')
                  img.src = image.apiMediaUrl
                  return
                }
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            
            {/* Image name overlay on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm truncate">{image.name}</p>
            </div>
          </div>
          )
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && images[selectedPhoto] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-gold-light text-4xl hover:text-gold transition-colors z-10 drop-shadow-gold w-12 h-12 flex items-center justify-center rounded-full hover:bg-gold-light/20"
            aria-label="Close"
          >
            ×
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevPhoto()
                }}
                className="absolute left-4 text-gold-light text-5xl hover:text-gold transition-colors z-10 drop-shadow-gold w-12 h-12 flex items-center justify-center rounded-full hover:bg-gold-light/20"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextPhoto()
                }}
                className="absolute right-4 text-gold-light text-5xl hover:text-gold transition-colors z-10 drop-shadow-gold w-12 h-12 flex items-center justify-center rounded-full hover:bg-gold-light/20"
                aria-label="Next"
              >
                ›
              </button>
            </>
          )}

          {/* Photo Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-7xl max-h-[90vh] w-full flex flex-col items-center"
          >
            <div className="relative w-full max-h-[85vh] flex items-center justify-center">
              <img
                src={images[selectedPhoto].fullUrl}
                alt={images[selectedPhoto].name}
                className="max-w-full max-h-[85vh] object-contain rounded-lg gold-glow-lg"
                style={{
                  boxShadow: '0 0 50px rgba(232, 212, 160, 0.6)',
                }}
                onError={(e) => {
                  // Fallback to api media if uc endpoint fails
                  const img = e.currentTarget
                  if (images[selectedPhoto].apiMediaUrl && img.src !== images[selectedPhoto].apiMediaUrl) {
                    img.src = images[selectedPhoto].apiMediaUrl
                  }
                }}
              />
            </div>
            {/* Image Info */}
            <div className="mt-4 text-center">
              <p className="text-gold-light font-medium drop-shadow-gold text-lg">
                {images[selectedPhoto].name}
              </p>
              {images.length > 1 && (
                <p className="text-gray-400 mt-2">
                  {selectedPhoto + 1} / {images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotoGallery
