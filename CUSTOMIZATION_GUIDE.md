# Modeling Portfolio - Customization Guide

## Getting Started

Your portfolio is now running at http://localhost:5173/

## Customization Instructions

### 1. Update Personal Information

#### Navigation & Hero Section
**File:** `src/components/Hero/Hero.jsx`

Replace these lines:
```jsx
<h1>MODEL NAME</h1>
<p>Fashion & Editorial Model</p>
```
With your girlfriend's actual name and title.

**File:** `src/components/Navigation/Navigation.jsx`

Change the logo text:
```jsx
<div className="text-white text-2xl font-light tracking-widest">
  PORTFOLIO
</div>
```

### 2. Replace Hero Background Image

**File:** `src/components/Hero/Hero.jsx` (line 10)

Replace the placeholder image URL with your own:
```jsx
style={{
  backgroundImage: "url('YOUR_IMAGE_URL_HERE')",
}}
```

### 3. Add Portfolio Gallery Images

**File:** `src/components/Gallery/Gallery.jsx` (lines 8-35)

Replace the sample images array with actual portfolio photos:
```jsx
const images = [
  {
    id: 1,
    src: 'path/to/image1.jpg',
    alt: 'Description of photo',
  },
  // Add more images...
];
```

**Recommended:**
- Use high-quality images (at least 1920px width)
- Maintain consistent aspect ratios (3:4 portrait recommended)
- Optimize images for web to improve loading speed

### 4. Update About Section

**File:** `src/components/About/About.jsx`

Update:
- Bio text (lines 21-31)
- Statistics (lines 35-47)
- Measurements (lines 51-68)
- About image (line 12)

### 5. Update Contact Information

**File:** `src/components/Contact/Contact.jsx`

Replace:
- Email address (line 45)
- Phone number (line 60)
- Social media links (lines 72-98)

### 6. Connect Contact Form

**File:** `src/components/Contact/Contact.jsx` (lines 4-8)

The form currently shows an alert. To make it functional, you can:

**Option 1: Use FormSubmit (Free, No Backend)**
```jsx
<form action="https://formsubmit.co/YOUR_EMAIL" method="POST">
```

**Option 2: Use Netlify Forms (if hosting on Netlify)**
```jsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  // ... rest of form
</form>
```

**Option 3: Integrate with backend service**
- Add your own API endpoint
- Use services like EmailJS, SendGrid, etc.

### 7. Add Custom Images Locally

Create a folder structure:
```
src/
  assets/
    images/
      hero/
      gallery/
      about/
```

Import and use images:
```jsx
import heroImage from '../assets/images/hero/main.jpg';

// Then use it:
style={{ backgroundImage: `url(${heroImage})` }}
```

### 8. Customize Colors

**File:** `tailwind.config.js`

Add custom colors:
```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
},
```

### 9. Update Page Title and Favicon

**File:** `index.html`

Change:
- Page title (line 7)
- Add a favicon in the public folder

## Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment Options

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### GitHub Pages
```bash
npm install -D gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## Tips for Best Results

1. **Image Optimization:** Use tools like TinyPNG or ImageOptim before uploading
2. **Professional Photos:** High-quality photos are crucial for a modeling portfolio
3. **Keep it Simple:** Less is more - let the photos speak for themselves
4. **Mobile First:** Test on mobile devices - most visitors will view on phone
5. **Fast Loading:** Optimize all images to keep the site fast

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
```

## Need Help?

The portfolio is fully responsive and works on all screen sizes. Test it on different devices to ensure everything looks perfect!
