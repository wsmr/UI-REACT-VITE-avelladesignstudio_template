# Setup and Development Guide

## Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## System Requirements

- **Node.js:** 22.13.0 or higher
- **Package Manager:** pnpm 10.4.1 (recommended) or npm/yarn
- **Operating System:** macOS, Linux, or Windows
- **Browser:** Modern browser with ES2020+ support

## Project Setup Details

### What's Included

This is a **static frontend-only** project with:
- React 19 for component-based UI
- Vite for fast development and optimized builds
- TypeScript for type safety
- Tailwind CSS 4 for styling
- Wouter for client-side routing
- shadcn/ui components for UI elements

### Directory Structure

```
client/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable React components
│   ├── contexts/        # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── App.tsx          # Main app with routing
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles
└── index.html           # HTML template
```

## Development Commands

### Start Development Server
```bash
pnpm dev
```
- Hot Module Replacement (HMR) enabled
- Auto-refresh on file changes
- Available at `http://localhost:3000`

### Build for Production
```bash
pnpm build
```
- Creates optimized `dist/` directory
- Minified and tree-shaken code
- Ready for deployment

### Preview Production Build
```bash
pnpm preview
```
- Serves the production build locally
- Useful for testing before deployment

### Type Checking
```bash
pnpm check
```
- Checks TypeScript without emitting files
- Catches type errors before build

### Format Code
```bash
pnpm format
```
- Formats code with Prettier
- Ensures consistent code style

## Adding Images

To add images to the project:

1. Place image files in `client/public/images/`
2. Reference them in components with absolute paths:
   ```tsx
   <img src="/images/my-image.jpg" alt="Description" />
   ```

Supported formats: JPG, PNG, WebP, SVG, GIF

## Styling Guide

### Using Tailwind CSS

The project uses Tailwind CSS utility classes:

```tsx
// Example component with Tailwind
<div className="flex items-center justify-center min-h-screen bg-white">
  <h1 className="text-4xl font-bold text-black">Hello World</h1>
</div>
```

### Custom Styles

Global styles are in `client/src/index.css`:
- Design tokens (colors, spacing, typography)
- Custom animations
- Base element styles

### Color Palette

The minimalist luxury design uses:
- **Background:** Pure white (`oklch(1 0 0)`)
- **Foreground:** Pure black (`oklch(0 0 0)`)
- **Accent:** Black (`oklch(0 0 0)`)
- **Borders:** Light gray (`oklch(0.9 0 0)`)

## Navigation and Routing

The app uses **Wouter** for client-side routing:

```tsx
import { Link } from 'wouter';

// Navigation link
<Link href="/studio">
  <a>Go to Studio</a>
</Link>

// In App.tsx, define routes:
<Route path="/studio" component={Studio} />
```

## Component Development

### Creating a New Page

1. Create a new file in `client/src/pages/MyPage.tsx`
2. Export a default React component
3. Add the route in `client/src/App.tsx`

Example:
```tsx
// client/src/pages/MyPage.tsx
export default function MyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <h1 className="text-4xl font-bold">My Page</h1>
    </div>
  );
}
```

### Creating a Reusable Component

1. Create a new file in `client/src/components/MyComponent.tsx`
2. Export a React component
3. Import and use in pages

Example:
```tsx
// client/src/components/MyComponent.tsx
export default function MyComponent({ title }: { title: string }) {
  return <h2 className="text-2xl font-bold">{title}</h2>;
}

// Use in a page:
import MyComponent from '@/components/MyComponent';

export default function MyPage() {
  return <MyComponent title="Hello" />;
}
```

## TypeScript

The project uses TypeScript for type safety:

```tsx
interface Props {
  title: string;
  count: number;
}

export default function MyComponent({ title, count }: Props) {
  return <div>{title}: {count}</div>;
}
```

## Environment Variables

Environment variables are automatically injected by Manus:
- `VITE_APP_TITLE` - Application title
- `VITE_APP_LOGO` - Application logo URL
- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID

Access them in code:
```tsx
const title = import.meta.env.VITE_APP_TITLE;
```

## Performance Tips

1. **Code Splitting:** Vite automatically code-splits routes
2. **Image Optimization:** Use WebP format when possible
3. **Lazy Loading:** Use React.lazy() for heavy components
4. **CSS:** Tailwind automatically purges unused styles in production
5. **Fonts:** Google Fonts are preconnected for faster loading

## Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### TypeScript Errors
```bash
# Check for type errors
pnpm check

# Clear TypeScript cache
rm -rf node_modules/.vite
pnpm dev
```

### Styling Not Updating
- Clear browser cache (Ctrl+Shift+Delete)
- Restart development server
- Check class names are spelled correctly

## Browser DevTools

The app works with browser DevTools:
- React DevTools extension
- Redux DevTools (if using Redux)
- Network tab for performance analysis

## Deployment

### Build for Production
```bash
pnpm build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
1. Connect GitHub repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`

### Deploy to Traditional Hosting
1. Run `pnpm build`
2. Upload contents of `dist/` folder to your server
3. Configure server to serve `index.html` for all routes (SPA)

## Next Steps

1. Review the pages in `client/src/pages/`
2. Explore components in `client/src/components/`
3. Modify styles in `client/src/index.css`
4. Add new pages and routes as needed
5. Test on different screen sizes
6. Deploy when ready

## Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Wouter Documentation](https://github.com/molefrog/wouter)

## Support

For issues or questions:
1. Check the README.md for project overview
2. Review the code comments in component files
3. Consult the official documentation for libraries used
4. Check browser console for error messages

---

Happy coding! 🚀
