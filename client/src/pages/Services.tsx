/**
 * Services Page - Avella Design Studio Replica
 * 
 * Design Philosophy: Minimalist Luxury
 * - Full-screen hero with centered monogram logo
 * - Black and white color scheme
 * - Detailed service descriptions
 */

import { Link } from 'wouter';

export default function Services() {
  const services = [
    {
      title: 'Interior Design',
      description: 'From concept to completion, we create refined, timeless interiors that reflect your lifestyle. Our approach combines functionality with aesthetic excellence, ensuring every space is both beautiful and livable.'
    },
    {
      title: 'Product Design',
      description: 'Bespoke furniture and objects designed with intention. Each piece is crafted to tell a story and bring meaning to your space, blending artisanal craftsmanship with contemporary design.'
    },
    {
      title: 'Styling & Decoration',
      description: 'Transform your space with curated styling that reflects your personality. We specialize in creating atmospheres that are both visually stunning and deeply personal.'
    },
    {
      title: 'Showcase Design',
      description: 'Create compelling retail and exhibition spaces that showcase your brand. Our designs balance visual impact with functional excellence.'
    },
    {
      title: 'Freehand Drawings',
      description: 'Custom design sketches and renderings that bring your vision to life. Each drawing is a personal, intuitive gesture that becomes the foundation for your design.'
    },
    {
      title: 'Design Consultation',
      description: 'Expert guidance for your design projects. Whether you need a fresh perspective or comprehensive design strategy, we provide tailored consultation services.'
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-2">SERVICES</h1>
            <p className="text-sm tracking-widest text-gray-600">DESIGN EXCELLENCE</p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-8 py-20 bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-800">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
            <p className="text-lg leading-relaxed mb-12 text-gray-800">
              Let's discuss your vision and create something truly exceptional together. Every project begins with a story, and we're excited to hear yours.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-black text-white font-bold tracking-widest hover:bg-gray-800 transition-colors duration-300">
                GET IN TOUCH
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
