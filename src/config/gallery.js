// Gallery Configuration
export const GALLERY_CONFIG = {
  GOOGLE_DRIVE_FOLDER_ID: import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID || '',
  GOOGLE_API_KEY: import.meta.env.VITE_GOOGLE_API_KEY || '',
  IMAGES_PER_PAGE: 100,
  REFRESH_INTERVAL: 300000, // 5 minutes in milliseconds
  CACHE_DURATION: 300000, // Cache API responses for 5 minutes
}

// Google Drive API helper functions
export const getGoogleDriveImageUrl = (fileId) => {
  return `https://drive.google.com/uc?export=view&id=${fileId}`
}

export const getGoogleDriveThumbnailUrl = (fileId) => {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
}

export const getGoogleDriveApiMediaUrl = (fileId) => {
  const key = GALLERY_CONFIG.GOOGLE_API_KEY
  // Note: This still requires the file to be publicly readable.
  return `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${key}`
}

export const fetchGoogleDriveImages = async () => {
  const { GOOGLE_DRIVE_FOLDER_ID, GOOGLE_API_KEY } = GALLERY_CONFIG

  if (!GOOGLE_DRIVE_FOLDER_ID || !GOOGLE_API_KEY) {
    throw new Error('Google Drive folder ID or API key is missing. Please check your configuration.')
  }

  const url = new URL('https://www.googleapis.com/drive/v3/files')
  url.searchParams.append('q', `'${GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType contains 'image/'`)
  url.searchParams.append('fields', 'files(id, name, mimeType, thumbnailLink, webContentLink, imageMediaMetadata)')
  url.searchParams.append('key', GOOGLE_API_KEY)
  url.searchParams.append('pageSize', '1000')
  url.searchParams.append('orderBy', 'createdTime desc')

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new Error(`Failed to fetch images: ${response.statusText}`)
  }

  const data = await response.json()
  
  if (!data.files || data.files.length === 0) {
    return []
  }
  
  return data.files.map((file) => {
    // NOTE: Drive's thumbnailLink/webContentLink are often not directly renderable in <img>.
    // Use stable, public-friendly endpoints we control.
    const thumbnailUrl = getGoogleDriveThumbnailUrl(file.id)
    const fullUrl = getGoogleDriveImageUrl(file.id)
    
    return {
      id: file.id,
      name: file.name.replace(/\.[^/.]+$/, ''), // Remove file extension for cleaner display
      thumbnailUrl,
      fullUrl,
      apiMediaUrl: getGoogleDriveApiMediaUrl(file.id),
      width: file.imageMediaMetadata?.width || null,
      height: file.imageMediaMetadata?.height || null,
    }
  })
}
