# Gallery Setup Guide - Google Drive Integration

This guide will help you set up the photo gallery to automatically fetch images from Google Drive.

## Overview

The gallery fetches images from a Google Drive folder. When you add new photos to the folder, they automatically appear in the gallery without code changes or redeployment.

## Step 1: Create Google Drive Folder

1. Go to [Google Drive](https://drive.google.com)
2. Create a new folder (e.g., "DDR Gallery Photos")
3. Right-click the folder → **Share** → **General access**
4. Set to **"Anyone with the link"** → **Viewer**
5. Copy the folder ID from the URL:
   ```
   https://drive.google.com/drive/folders/FOLDER_ID_HERE
   ```
   The folder ID is the long string after `/folders/`

## Step 2: Get Google API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Drive API**:
   - Navigate to "APIs & Services" → "Library"
   - Search for "Google Drive API"
   - Click "Enable"
4. Create API credentials:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key
5. **Secure your API key** (Important!):
   - Click on your API key to edit it
   - Under "API restrictions", select "Restrict key"
   - Choose "Google Drive API"
   - Under "Application restrictions", add your website domain (e.g., `yourdomain.com`)
   - Save changes

## Step 3: Configure Environment Variables

1. In the project root, create a `.env` file:
   ```bash
   # Copy from .env.example
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```
   VITE_GOOGLE_API_KEY=your-actual-api-key-here
   VITE_GOOGLE_DRIVE_FOLDER_ID=your-actual-folder-id-here
   ```

3. **Important**: Never commit `.env` to version control (it's already in `.gitignore`)

## Step 4: Upload Photos

1. Navigate to your Google Drive folder
2. Upload photos directly to the folder
3. Supported formats: JPG, PNG, WEBP, GIF
4. Recommended: Max 5MB per image for optimal loading
5. Photos will appear in the gallery within 5 minutes (or on next page refresh)

## Step 5: Test the Gallery

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Gallery page
3. You should see your photos loading
4. Click any photo to open the lightbox
5. Use arrow keys or buttons to navigate

## Troubleshooting

### Gallery shows "Unable to load gallery"
- Check that your `.env` file exists and has correct values
- Verify your API key is valid and has Google Drive API enabled
- Ensure the folder ID is correct
- Check browser console for error messages

### API Key Errors
- Make sure Google Drive API is enabled in Google Cloud Console
- Verify API key restrictions allow your domain
- Check that the API key hasn't expired

### Images Not Appearing
- Verify folder permissions: "Anyone with the link can view"
- Check that images are actually in the folder (not subfolders)
- Ensure images are valid image files (JPG, PNG, etc.)
- Wait a few minutes for Google Drive to process new uploads

### CORS Errors
- Google Drive API should handle CORS automatically
- If issues persist, check API key restrictions
- Ensure you're using the correct API endpoint

## Gallery Features

- **Automatic Updates**: New photos appear automatically (refreshes every 5 minutes)
- **Manual Refresh**: Click the "Refresh Gallery" button to check for new photos immediately
- **Lightbox View**: Click any photo to view full-size
- **Keyboard Navigation**: Use arrow keys or ESC to navigate in lightbox
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Lazy Loading**: Images load as you scroll for better performance
- **Error Handling**: Graceful fallbacks if images fail to load
- **Smart Caching**: API responses are cached for 5 minutes to reduce API calls

## Adding Photos (For Content Managers)

1. Go to your Google Drive folder: [LINK_TO_YOUR_FOLDER]
2. Drag and drop photos into the folder
3. Photos will appear in the gallery automatically
4. No technical knowledge required!

## Performance Tips

- **Image Size**: Compress images before uploading (recommended: max 2-3MB)
- **Image Count**: Gallery supports up to 1000 images
- **Format**: Use JPG for photos, PNG for graphics with transparency
- **Naming**: Use descriptive filenames (they appear as captions)

## Security Notes

- API key is restricted to Google Drive API only
- Folder is view-only (public cannot edit)
- API key should be restricted to your domain in production
- Never share your `.env` file publicly

## Support

If you encounter issues:
1. Check browser console for error messages
2. Verify all configuration steps were completed
3. Test API key and folder ID separately
4. Ensure Google Drive API is enabled in your project
