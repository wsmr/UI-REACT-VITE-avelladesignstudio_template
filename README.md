# Avella Design Studio - Frontend Replica

A pixel-perfect frontend replication of the Avella Design Studio website, featuring a minimalist luxury design aesthetic with responsive layout and elegant interactions.

## Overview

This project is a complete frontend replication of the Avella Design Studio website (https://avelladesignstudio.ch/), focusing on visual appearance, layout, and user experience. The replica captures the studio's minimalist luxury aesthetic with a black and white color scheme, serif-based typography, and generous whitespace.

## Technology Stack

### Frontend Framework
- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool with fast development server
- **TypeScript** - Type-safe JavaScript for scalable development
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development

### Key Libraries
- **Wouter** - Lightweight client-side routing for React
- **Framer Motion** - Animation library (pre-installed, available for use)
- **shadcn/ui** - High-quality React components built on Radix UI
- **Lucide React** - Beautiful, consistent icon library

### Development Tools
- **Node.js 22.13.0** - JavaScript runtime
- **pnpm 10.4.1** - Fast, space-efficient package manager
- **ESLint** - Code quality and style checking
- **Prettier** - Code formatting

## Project Structure

```
avella-replica/
├── client/
│   ├── public/
│   │   └── images/          # Static image assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React context providers
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions
│   │   ├── pages/           # Page-level components
│   │   │   ├── Home.tsx     # Home page with hero and about sections
│   │   │   ├── Studio.tsx   # Studio page with philosophy and biography
│   │   │   ├── Services.tsx # Services page with detailed offerings
│   │   │   ├── Contact.tsx  # Contact page with form
│   │   │   └── NotFound.tsx # 404 error page
│   │   ├── App.tsx          # Main app component with routing
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles and design tokens
│   └── index.html           # HTML entry point
├── server/                  # Placeholder for server compatibility
├── shared/                  # Placeholder for shared types
├── package.json             # Project dependencies and scripts
└── README.md               # This file
```

## Design Philosophy

The replica follows a **Minimalist Luxury** design approach characterized by:

### Color Palette
- **Primary:** Pure Black (#000000) and Pure White (#FFFFFF)
- **Secondary:** Subtle grays (#F5F5F5, #E0E0E0) for hierarchy
- **Accent:** Black for buttons and interactive elements

### Typography
- **Display Font:** Playfair Display (serif) for headings and logo
- **Body Font:** Lato (sans-serif) for body text and navigation
- **Hierarchy:** Clear visual distinction between headings and body text
- **Letter Spacing:** Generous tracking for luxury feel

### Layout
- **Navigation:** Fixed left sidebar with minimalist menu
- **Hero Sections:** Full-screen sections with centered content
- **Whitespace:** Generous spacing between sections
- **Responsive:** Mobile-first design with responsive breakpoints

### Interactions
- **Hover Effects:** Subtle opacity changes on interactive elements
- **Transitions:** Smooth 300-500ms animations
- **Animations:** Fade-in effects for content, bounce animation for scroll indicator
- **Focus States:** Clear keyboard navigation support

## Installation

### Prerequisites
- Node.js 22.13.0 or higher
- pnpm 10.4.1 or higher (or npm/yarn as alternatives)

### Setup Steps

1. **Clone or extract the project:**
   ```bash
   cd avella-replica
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```
   
   Or with npm:
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```
   
   The application will be available at `http://localhost:3000`

## Development

### Running the Development Server

```bash
pnpm dev
```

The development server includes:
- Hot Module Replacement (HMR) for instant updates
- TypeScript type checking
- Automatic browser refresh on file changes

### Building for Production

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

### Code Quality

**Format code:**
```bash
pnpm format
```

**Check TypeScript:**
```bash
pnpm check
```

## Pages

### Home Page (`/`)
The landing page features:
- Full-screen hero section with "AS" monogram logo
- Studio name and location (Zurich)
- Tagline and quote from Federico
- About Federico section
- Services overview grid
- Featured section with call-to-action
- Scroll indicator animation

### Studio Page (`/studio`)
The studio page includes:
- Full-screen hero section
- Studio philosophy and approach
- Detailed biography of Federico Avella
- Educational background and achievements
- Professional experience and design approach
- Personal interests and design philosophy

### Services Page (`/services`)
The services page displays:
- Full-screen hero section
- Six main service offerings:
  - Interior Design
  - Product Design
  - Styling & Decoration
  - Showcase Design
  - Freehand Drawings
  - Design Consultation
- Call-to-action section

### Contact Page (`/contact`)
The contact page features:
- Full-screen hero section
- Contact form with fields:
  - Name (required)
  - Lastname (required)
  - E-mail (required)
  - Message (required)
  - Submit button
- Alternative contact methods:
  - Email address
  - Phone number
  - Location
  - Social media links

### 404 Page (`/404`)
Error page for non-existent routes with:
- Large "404" heading
- Error message
- Back to home button

## Navigation

The application uses **Wouter** for client-side routing, providing:
- Fast, lightweight routing without page reloads
- Clean URL structure
- Browser history support
- Nested route support

### Navigation Structure
- **Home:** `/`
- **Studio:** `/studio`
- **Services:** `/services`
- **Contact:** `/contact`
- **404 Error:** `/404` (automatic fallback for unknown routes)

## Styling

### Design Tokens
Global design tokens are defined in `client/src/index.css`:
- Color variables (background, foreground, accent, etc.)
- Typography scales
- Spacing system
- Border radius values
- Shadow definitions

### Tailwind CSS Configuration
The project uses Tailwind CSS 4 with:
- Utility-first approach for rapid development
- Custom color palette aligned with minimalist luxury aesthetic
- No border radius by default (minimalist aesthetic)
- Responsive design utilities

### Custom Styles
- Fade-in animations for page content
- Bounce animation for scroll indicator
- Hover effects on interactive elements
- Smooth transitions throughout

## Responsive Design

The application is fully responsive with breakpoints:
- **Mobile:** Default styles (< 640px)
- **Tablet:** `md:` prefix (≥ 768px)
- **Desktop:** `lg:` prefix (≥ 1024px)

Navigation sidebar adapts to screen size, and content sections stack appropriately on smaller screens.

## Browser Support

The application supports modern browsers:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- **Code Splitting:** Automatic with Vite
- **Lazy Loading:** Images and components load on demand
- **Minification:** Production builds are fully minified
- **CSS Optimization:** Tailwind purges unused styles
- **Font Optimization:** Google Fonts with preconnect for faster loading

## Accessibility

The application includes:
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Clear focus indicators
- Sufficient color contrast
- Responsive text sizing

## Future Enhancements

Potential improvements for future versions:
- Image gallery with lightbox functionality
- Project portfolio showcase
- Blog or news section
- Newsletter subscription
- Backend integration for form submissions
- Dark mode toggle
- Multi-language support
- Animation enhancements with GSAP
- 3D elements with Three.js

## Deployment

### Building for Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

### Deployment Options
The project can be deployed to:
- **Vercel** - Recommended for Next.js-like projects
- **Netlify** - Excellent for static sites
- **GitHub Pages** - Free hosting for static content
- **Traditional Hosting** - Any server supporting static files

Simply deploy the contents of the `dist/` directory to your hosting provider.

## Environment Variables

The project uses environment variables for configuration:
- `VITE_APP_TITLE` - Application title
- `VITE_APP_LOGO` - Application logo URL
- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint (optional)
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID (optional)

These are automatically injected by the Manus platform.

## File Dependencies

### External Assets
The following external assets are referenced but not included in the repository:
- **Google Fonts:** Playfair Display and Lato fonts are loaded from Google Fonts CDN
- **Images:** Placeholder comments indicate where images should be placed in `client/public/images/`

To add images:
1. Place image files in `client/public/images/`
2. Reference them with absolute paths: `/images/filename.jpg`

## Troubleshooting

### Development Server Not Starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### TypeScript Errors
```bash
# Check TypeScript compilation
pnpm check
```

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Restart development server
- Check that Tailwind CSS classes are spelled correctly

## Contributing

When making changes to the design:
1. Maintain the minimalist luxury aesthetic
2. Keep typography consistent (Playfair Display for headings, Lato for body)
3. Preserve the black and white color scheme
4. Test responsiveness on mobile, tablet, and desktop
5. Ensure accessibility standards are met

## License

This project is a replica created for educational and demonstration purposes.

## Contact

For questions or support regarding this replica, please refer to the original website:
- **Website:** https://avelladesignstudio.ch/
- **Email:** hello@avelladesign.ch
- **Location:** Zurich, Switzerland

## Version

- **Version:** 1.0.0
- **Created:** December 2024
- **Node.js Version:** 22.13.0
- **Package Manager:** pnpm 10.4.1

---

**Note:** This is a frontend-only replica. It does not include backend functionality, database integration, or form submission handling. To add these features, the project would need to be upgraded to a full-stack application.
