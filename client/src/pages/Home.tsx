/**
 * Home Page - Avella Design Studio Replica
 * 
 * Design Philosophy: Minimalist Luxury
 * - Full-screen hero with centered monogram logo
 * - Black and white color scheme
 * - Serif-based typography (Playfair Display for headings)
 * - Generous whitespace and elegant simplicity
 * - Smooth transitions and subtle interactions
 */

import { useState } from 'react';
import { Link } from 'wouter';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation - Left Sidebar */}
      <nav className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center justify-center gap-8 z-40 bg-white border-r border-gray-200">
        <Link href="/" className="text-center">
          <span className="text-xs font-bold tracking-widest text-black hover:opacity-60 transition-opacity duration-300">HOME</span>
        </Link>
        <Link href="/studio" className="text-center">
          <span className="text-xs font-bold tracking-widest text-black hover:opacity-60 transition-opacity duration-300">STUDIO</span>
        </Link>
        <Link href="/services" className="text-center">
          <span className="text-xs font-bold tracking-widest text-black hover:opacity-60 transition-opacity duration-300">SERVICES</span>
        </Link>
        <Link href="/contact" className="text-center">
          <span className="text-xs font-bold tracking-widest text-black hover:opacity-60 transition-opacity duration-300">CONTACT</span>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="ml-20">
        {/* Hero Section - Full Screen */}
        <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-white">
          {/* Monogram Logo */}
          <div className="mb-12 animate-fade-in">
            <div className="text-9xl font-black text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
              AS
            </div>
          </div>

          {/* Studio Name */}
          <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-2">AVELLA DESIGN STUDIO</h1>
            <p className="text-sm tracking-widest text-gray-600">ZURICH</p>
          </div>

          {/* Tagline */}
          <div className="max-w-2xl text-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg leading-relaxed italic text-gray-800">
              "Where love for design, detail and atmosphere creates a space that truly reflects you."
            </p>
            <p className="text-sm tracking-widest text-gray-600 mt-4">— FEDERICO</p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-white border-t border-gray-200">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-center">About Federico</h2>
            
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Federico is an Italian-born designer with roots in the artisanal heart of Brianza and a vision shaped by international experience. From handcrafted furniture to refined interiors, his approach blends precision, storytelling, and timeless aesthetics.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Through Avella Design Studio, he creates spaces and objects that are tailored, soulful, and quietly powerful, where every detail has meaning, and every project begins with a story.
            </p>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-2xl font-bold mb-4">Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="font-bold text-lg mb-2">INTERIOR DESIGN</h4>
                  <p className="text-gray-600">Refined, timeless interiors tailored to your lifestyle</p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg mb-2">PRODUCT DESIGN</h4>
                  <p className="text-gray-600">Bespoke furniture and objects with meaning</p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg mb-2">STYLING & DECORATION</h4>
                  <p className="text-gray-600">Curated spaces that reflect your personality</p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg mb-2">DESIGN CONSULTATION</h4>
                  <p className="text-gray-600">Expert guidance for your design projects</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-8">IN FOCUS</h2>
            <h3 className="text-2xl font-bold mb-6">Are you ready for the upcoming Holiday Season?</h3>
            <p className="text-lg leading-relaxed mb-8 text-gray-800">
              Celebrate the season with a style that's uniquely yours. We transform homes, boutiques, hotels, and offices into delightful spaces, where festive spirit meets refined design.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-black text-white font-bold tracking-widest hover:bg-gray-800 transition-colors duration-300">
                LEARN MORE
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="ml-20 border-t border-gray-200 py-12 px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 mb-4">Follow Us</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Email</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Phone</a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">© 2024 Avella Design Studio. All rights reserved.</p>
          </div>
          <div className="text-center md:text-right">
            <Link href="/privacy">
              <a className="text-xs text-gray-600 hover:text-black transition-colors duration-300">Privacy & Impressum</a>
            </Link>
          </div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
