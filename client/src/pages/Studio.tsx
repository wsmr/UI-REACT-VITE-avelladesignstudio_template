/**
 * Studio Page - Avella Design Studio Replica
 * 
 * Design Philosophy: Minimalist Luxury
 * - Full-screen hero with centered monogram logo
 * - Black and white color scheme
 * - Serif-based typography (Playfair Display for headings)
 * - Generous whitespace and elegant simplicity
 * - Long-form content about the studio and designer
 */

import { Link } from 'wouter';

export default function Studio() {
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

        {/* Studio Philosophy Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-white border-t border-gray-200">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Philosophy</h2>
            
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Born from the desire to combine functionality, aesthetics, and the culture of living.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Our philosophy is rooted in a timeless idea of design — one defined by pure forms, refined materials, and tailor-made solutions. We create objects and spaces, each project is a narrative shaped with intention, a dialogue between beauty, functional aesthetics and the personality of those who are going to live in it.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              With a deep respect for craftsmanship and a quiet elegance that speaks for itself:
            </p>

            <p className="text-xl font-bold text-center py-8 border-y border-gray-200">
              Avella Design Studio designs with soul, timeless, essential, and distinctively personal.
            </p>
          </div>
        </section>

        {/* Federico Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-center">Federico Avella</h2>
            
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Federico is a 35-year-old designer born and raised in Italy, in the heart of Brianza, the region internationally known for its deep-rooted tradition in furniture craftsmanship and design. His passion for interiors began in childhood, shaped by the creative legacy of his grandfather, a skilled artisan and designer who crafted bespoke furniture in his atelier.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              He attended a specialised high school for Art and Interior Design, where he learned to develop furniture and interior concepts from initial sketch to scale prototype. A formative experience that laid the foundation for his detail-driven approach. Federico went on to study Product and Furniture Design at the Politecnico di Milano, one of Europe's leading universities for design.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              In 2013, he was awarded first prize in the design competition "Fuori Salone Dentro Como" promoted by the Politecnico di Milano, thanks to the creation of a sculptural lamp designed specifically for the event. He later lived and studied in Brighton, UK, to expand his international perspective. During that time, he also worked as a contributor for the Lifestyle & Design blog of the magazine Grazia.it, writing about interiors, aesthetics, and creative culture.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              In 2018, Federico moved to Zurich, joining Zingg-Lamprecht, a prestigious Swiss interior design firm known for its exclusive, high-end projects. As Creative Director, he spent over seven years deepening his expertise in interior design, styling, visual merchandising, and brand development, working closely with international clients in a luxury-focused environment.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              His approach to design is holistic and thoughtful: he believes that every detail matters, and that a space should be as functional as it is beautiful. Federico's aesthetic embraces both the minimal and essential, with clean, austere lines, as well as the more modern-classical style, rich in warmth, layering, and subtle contrasts. Always seeking balance between purity and personality.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Also passionate about traveling, discovering distant cultures, tasting new cuisines, and meeting people whose stories and aesthetics differ from his own — experiences that continuously enrich his creative language. He has a particular affection for vintage and antique objects, pieces that carry invisible histories and emotional weight. He firmly believes that certain objects hold energy, memory, and timeless presence, giving interiors soul and meaning.
            </p>

            <p className="text-lg leading-relaxed text-gray-800">
              Through Avella Design Studio, Federico brings his vision to life, crafting refined, timeless interiors and bespoke objects that reflect the identity and lifestyle of those who live within them. Every project begins with a story, and often with a freehand sketch, a personal, intuitive gesture that becomes the foundation for a design meant to last.
            </p>
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
