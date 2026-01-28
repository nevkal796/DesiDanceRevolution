<<<<<<< HEAD
# DesiDanceRevolution
=======
# Desi Dance Revolution Website

A modern, responsive website for Desi Dance Revolution (DDR), a Bollywood dance team, featuring a striking black and gold color theme.

## Features

- **Homepage**: Full-screen hero section with animated background, About Us section, and quick links
- **Directors Section**: Responsive grid showcasing team directors with hover effects
- **Photo Gallery**: Dynamic gallery with Google Drive integration and lightbox functionality
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Fade-ins, hover effects, and transitions throughout
- **Modern UI**: Black and gold theme with elegant typography

## Tech Stack

- React 18
- React Router DOM
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    - Navbar.jsx       # Navigation bar with mobile menu
    - Footer.jsx       # Footer with social links
    - Hero.jsx         # Hero section component
    - DirectorCard.jsx # Director card component
    - PhotoGallery.jsx # Gallery with lightbox
  pages/
    - Home.jsx         # Homepage
    - Directors.jsx    # Directors page
    - Gallery.jsx      # Gallery page
  App.jsx              # Main app component with routing
  main.jsx             # Entry point
  index.css            # Global styles and Tailwind
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:
- Gold: `#D4AF37` (primary) and `#FFD700` (light)
- Black: `#000000`

### Fonts

Fonts are configured in `index.html` and `tailwind.config.js`:
- Display: Playfair Display (headers)
- Body: Inter (body text)

### Google Drive Gallery Setup

The gallery automatically fetches images from a Google Drive folder. See [GALLERY_SETUP.md](./GALLERY_SETUP.md) for detailed setup instructions.

Quick setup:
1. Create a `.env` file in the root directory
2. Add your Google Drive API key and folder ID:
   ```
   VITE_GOOGLE_API_KEY=your-api-key-here
   VITE_GOOGLE_DRIVE_FOLDER_ID=your-folder-id-here
   ```
3. Upload photos to your Google Drive folder
4. Photos will automatically appear in the gallery

### Adding Real Images

Replace placeholder images in:
- `src/components/DirectorCard.jsx` - Director photos
- Gallery photos are managed through Google Drive (see GALLERY_SETUP.md)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Desi Dance Revolution.
>>>>>>> 01f0b09 (First Commit)
