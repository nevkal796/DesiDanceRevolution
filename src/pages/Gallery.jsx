import { useState, useEffect, useRef } from 'react'
import PhotoGallery from '../components/PhotoGallery'
import { fetchGoogleDriveImages, GALLERY_CONFIG } from '../config/gallery'

const Gallery = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const cacheRef = useRef({ data: null, timestamp: null })

  const loadImages = async (useCache = true) => {
    // Check cache first
    if (useCache && cacheRef.current.data && cacheRef.current.timestamp) {
      const cacheAge = Date.now() - cacheRef.current.timestamp
      if (cacheAge < GALLERY_CONFIG.CACHE_DURATION) {
        setImages(cacheRef.current.data)
        setLoading(false)
        return
      }
    }

    try {
      setLoading(true)
      setError(null)

      const fetchedImages = await fetchGoogleDriveImages()
      
      // Update cache
      cacheRef.current = {
        data: fetchedImages,
        timestamp: Date.now(),
      }

      setImages(fetchedImages)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching gallery images:', err)
      setError(err.message || 'Failed to load gallery images')
      setLoading(false)
    }
  }

  useEffect(() => {
    // Check if configuration is set
    if (!GALLERY_CONFIG.GOOGLE_DRIVE_FOLDER_ID || !GALLERY_CONFIG.GOOGLE_API_KEY) {
      setError('Gallery configuration is missing. Please set VITE_GOOGLE_API_KEY and VITE_GOOGLE_DRIVE_FOLDER_ID in your .env file. See GALLERY_SETUP.md for instructions.')
      setLoading(false)
      return
    }

    // Initial load
    loadImages()

    // Set up auto-refresh interval
    const interval = setInterval(() => {
      loadImages(false) // Force refresh, bypass cache
    }, GALLERY_CONFIG.REFRESH_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-gold text-center mb-4 drop-shadow-gold">
          Gallery
        </h1>
        <p className="text-xl text-gray-400 text-center mb-8">
          Our Performances, Rehearsals, and Special Events
        </p>
        {/* Photo Gallery Component */}
        <PhotoGallery images={images} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default Gallery
