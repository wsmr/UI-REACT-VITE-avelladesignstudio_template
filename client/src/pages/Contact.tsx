/**
 * Contact Page - Avella Design Studio Replica
 * 
 * Design Philosophy: Minimalist Luxury
 * - Full-screen hero with centered monogram logo
 * - Black and white color scheme
 * - Serif-based typography (Playfair Display for headings)
 * - Contact form with minimalist styling
 * - Generous whitespace and elegant simplicity
 */

import { useState } from 'react';
import { Link } from 'wouter';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', lastname: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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
        {/* Hero Section */}
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

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-white border-t border-gray-200">
          <div className="max-w-2xl w-full">
            <h2 className="text-4xl font-bold mb-4 text-center">Get in Touch</h2>
            <p className="text-center text-gray-600 mb-12">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <p className="text-xl font-bold text-black mb-4">Thank you for your message!</p>
                <p className="text-gray-600">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold tracking-widest mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Lastname Field */}
                <div>
                  <label htmlFor="lastname" className="block text-sm font-bold tracking-widest mb-2">
                    LASTNAME *
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black transition-colors duration-300"
                    placeholder="Your lastname"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold tracking-widest mb-2">
                    E-MAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold tracking-widest mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black transition-colors duration-300 resize-none"
                    placeholder="Write your request here"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-black text-white font-bold tracking-widest hover:bg-gray-800 transition-colors duration-300"
                  >
                    SEND MESSAGE
                  </button>
                </div>

                {/* Required Fields Note */}
                <p className="text-xs text-gray-500 text-center">* Required fields</p>
              </form>
            )}
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-12">Other Ways to Reach Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-bold mb-4">Email</h3>
                <a href="mailto:hello@avelladesign.ch" className="text-gray-600 hover:text-black transition-colors duration-300">
                  hello@avelladesign.ch
                </a>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Phone</h3>
                <a href="tel:+41123456789" className="text-gray-600 hover:text-black transition-colors duration-300">
                  +41 (0) 123 456 789
                </a>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Location</h3>
                <p className="text-gray-600">
                  Zurich, Switzerland
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4 justify-center">
                  <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Instagram</a>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">LinkedIn</a>
                </div>
              </div>
            </div>
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
