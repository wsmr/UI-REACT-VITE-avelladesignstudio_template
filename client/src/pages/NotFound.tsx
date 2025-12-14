/**
 * NotFound Page - 404 Error
 * 
 * Design Philosophy: Minimalist Luxury
 * - Consistent with the overall design aesthetic
 */

import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-9xl font-black mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          404
        </h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <button className="px-8 py-3 bg-black text-white font-bold tracking-widest hover:bg-gray-800 transition-colors duration-300">
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
}
