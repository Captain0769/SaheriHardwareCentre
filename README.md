# Saheri Hardware Centre Website

A modern, fully responsive informational website for Saheri Hardware Centre, a hardware store located in Alkapuri, Vadodara, Gujarat.

## 🌟 Overview

This is a frontend-only static website built with pure HTML5, CSS3, and vanilla JavaScript. The site showcases the store's products, hardware categories, contact details, location, and business highlights to help visitors easily understand what the business offers.

**Live Website:** [To be deployed]

## ✨ Features

- **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop devices
- **Modern UI/UX** - Clean, professional design with intuitive navigation
- **SEO Optimized** - Comprehensive meta tags and structured data for search engines
- **Fast Loading** - Optimized performance with minimal dependencies
- **Mobile Menu** - Smooth hamburger menu for mobile devices
- **Contact Form** - Client-side form validation with user-friendly error messages
- **Smooth Scrolling** - Seamless navigation between sections
- **Accessibility** - Semantic HTML and proper ARIA attributes

## 📁 Project Structure

```
SaheriHardwareCentre/
├── index.html              # Main HTML file (single page)
├── css/
│   └── styles.css          # Main stylesheet (mobile-first responsive)
├── js/
│   └── main.js             # JavaScript (menu, form validation, interactivity)
├── images/
│   ├── favicon.png         # Browser favicon (placeholder)
│   ├── apple-touch-icon.png # iOS home screen icon (placeholder)
│   └── README.md           # Images documentation
├── public/                 # Static assets (if any)
├── .gitignore              # Git ignore file
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! This is a pure HTML/CSS/JavaScript website.

### Viewing Locally

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd SaheriHardwareCentre
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):

   **Using Python:**
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

   **Using Node.js (http-server):**
   ```bash
   npx http-server
   # Visit http://localhost:8080
   ```

   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

## 🎨 Tech Stack

- **HTML5** - Semantic markup with SEO optimization
- **CSS3** - Mobile-first responsive design with CSS Grid and Flexbox
- **JavaScript (Vanilla)** - No frameworks or libraries
- **Font Awesome 6.5.0** - Icons via CDN

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 768px (base styles)
- **Tablet:** 769px - 1024px
- **Desktop:** 1025px+

## 🎯 Sections

1. **Top Contact Bar** - Phone number and location
2. **Navigation Header** - Sticky navigation with mobile menu
3. **Hero Section** - Full-width banner with store name and tagline
4. **Features** - Three-column business highlights
5. **About** - Business description and history
6. **Products** - Product categories showcase (8 categories)
7. **Contact** - Contact form, map, and business information
8. **Footer** - Copyright and additional info

## 📋 Content Placeholders

The following content needs to be updated with actual business information:

### Business Details (Search for `[PLACEHOLDER]` or `XXXXXXXXXX` in files)

- [ ] **Address:** Full street address and PIN code
- [ ] **Phone:** Replace `+91-XXXXXXXXXX` with actual phone number
- [ ] **Email:** Update `info@saherihardware.com` with actual email
- [ ] **Year Established:** Replace `[YEAR]` in hero section
- [ ] **Business Hours:** Confirm days and times
- [ ] **About Content:** Replace placeholder text with actual business description

### Google Maps

Update the Google Maps embed in `index.html`:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the placeholder iframe in the Contact section

### Images

Replace placeholder images in `/images/` directory:
- `favicon.png` (32x32 or 64x64) - Use [favicon.io](https://favicon.io)
- `apple-touch-icon.png` (180x180)
- Product category images (optional - currently using Font Awesome icons)

See `/images/README.md` for detailed image requirements.

### SEO & Structured Data

Update in `index.html` `<head>` section:
- Open Graph URL: `https://www.saherihardware.com`
- Open Graph images: `/images/og-image.jpg`
- JSON-LD structured data: Address, coordinates, phone, hours

## 🔧 Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
  --accent-color: #d84315;      /* Primary brand color */
  --accent-hover: #bf360c;      /* Hover state */
  --dark-text: #333333;         /* Body text */
  --light-text: #666666;        /* Secondary text */
  /* ... more variables */
}
```

### Typography

Change font family in `css/styles.css`:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

To use Google Fonts, add to `<head>` in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Set source to `main` branch, root directory
4. Site will be live at `https://username.github.io/SaheriHardwareCentre/`

### Option 2: Netlify (Free)

1. Create account at [netlify.com](https://www.netlify.com)
2. Connect GitHub repository
3. Deploy from main branch
4. Automatic deploys on every push

### Option 3: Vercel (Free)

1. Create account at [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Deploy as static site

### Option 4: Traditional Web Hosting

1. Upload all files via FTP/SFTP
2. Ensure `index.html` is in root directory
3. Verify all paths work correctly

### Custom Domain

After deployment:
1. Purchase domain (e.g., `saherihardware.com`)
2. Point DNS to hosting provider
3. Update URLs in Open Graph tags and JSON-LD

## ✅ Testing Checklist

- [ ] Test on mobile devices (iOS, Android)
- [ ] Test on tablets
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify mobile menu works
- [ ] Test contact form validation
- [ ] Check smooth scrolling
- [ ] Verify all links work
- [ ] Test tel: and mailto: links on mobile
- [ ] Check page load speed
- [ ] Validate HTML (https://validator.w3.org)
- [ ] Check SEO (Google Search Console)
- [ ] Test social media sharing (Facebook, Twitter)

## 🔍 SEO Features

- ✅ Semantic HTML5 markup
- ✅ Descriptive title tag with keywords
- ✅ Meta description optimized for search
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (HardwareStore schema)
- ✅ Image alt attributes
- ✅ Mobile-friendly (responsive design)
- ✅ Fast loading performance
- ✅ Proper heading hierarchy

## 📞 Support

For questions or issues with the website, please contact the development team.

## 📄 License

© 2025 Saheri Hardware Centre. All Rights Reserved.

---

**Built with ❤️ for Saheri Hardware Centre**

*A modern, responsive website showcasing quality hardware and building materials in Alkapuri, Vadodara.*
