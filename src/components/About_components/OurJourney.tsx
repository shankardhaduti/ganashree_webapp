import React, { useState, FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollToTop from './ScrollToTop';
interface Milestone {
  year: string;
  title: string;
  desc: string;
}
const OurJourney: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const images: string[] = [
    
    "./assets/images/WhatsApp Image 2026-03-31 at 3.49.19 PM.jpeg",
    "./assets/images/WhatsApp Image 2026-03-30 at 8.27.27 PM.jpeg", 
    "./assets/images/WhatsApp Image 2026-03-30 at 8.27.23 PM.jpeg", 
    "./assets/images/WhatsApp Image 2026-03-30 at 8.27.25 PM (1).jpeg",
    "./assets/images/WhatsApp Image 2026-03-30 at 8.27.28 PM.jpeg",  
    "./assets/images/WhatsApp Image 2026-03-30 at 8.27.26 PM.jpeg"
  ];
  const milestones: Milestone[] = [
    { year: "50+", title: "50+ years of experience", desc: "It's been over 50 years of our business running successfully." },
    { year: "Several", title: "Various Oils Extracted", desc: "Extracted from seeds like sunflower, coconut, and more." },
    { year: "0%", title: "Cholesterol Free", desc: "Extracted oils contain 0% cholesterol for a healthier heart." },
    { year: "Statewide", title: "Karnataka Delivery", desc: "Providing delivery across the entire state of Karnataka." },
  ];
  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <section className="journey-section">
      <style>{`
        :root {
          --color-primary: #b91c1c;
          --color-secondary: #7a1f26;
        }
        .journey-section {
  padding: 0 00px 100px 40px; /* Top padding is now 0 */
  background-color: #ffffff; /* Background matches ImpactPage */
}
        .carousel-container {
          position: relative;
          max-width: 1000px; 
          width: 100%;
          margin: 0 auto 48px;
        }
        .carousel-viewport {
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 20px 40px -12px rgba(161, 44, 52, 0.15);
          background: #000;
          /* Mobile Aspect Ratio (Taller) */
          aspect-ratio: 4 / 3; 
          width: 100%;
        }
        .carousel-track {
          display: flex;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .carousel-slide {
          min-width: 100%;
          height: 100%;
        }
        .carousel-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 10;
          border: none;
          cursor: pointer;
        }
        .nav-btn.prev { left: 10px; }
        .nav-btn.next { right: 10px; }
        .dot-active {
          background-color: var(--color-primary) !important;
          width: 24px !important;
          border-radius: 10px !important;
        }
        /* MILESTONE GRID */
        .milestone-grid {
          display: grid;
          grid-template-columns: 1fr; /* 1 Column on mobile */
          gap: 20px;
        }
        .milestone-card {
          background: white;
          padding: 24px;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column; /* Stack on mobile */
          gap: 16px;
          align-items: flex-start;
          transition: transform 0.3s ease;
        }
        .year-badge {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: white;
          padding: 6px 14px;
          border-radius: 10px;
          font-weight: bold;
          font-size: 0.85rem;
          flex-shrink: 0;
        }
        .milestone-card h3 {
          color: #111827;
          font-weight: 700;
          margin: 0 0 8px 0;
          font-size: 1.2rem;
          line-height: 1.2;
        }
        .milestone-card p {
          color: #6b7280;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }
        /* DESKTOP QUERIES (768px and up) */
        @media (min-width: 768px) {
          .journey-section {
            padding: 100px 40px;
            
          }
          .carousel-viewport {
            aspect-ratio: 16 / 9; /* Wider for desktop */
          }
          .nav-btn {
            width: 52px;
            height: 52px;
          }
          .milestone-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 Columns on desktop */
          }
          .milestone-card {
            flex-direction: row; /* Side-by-side on desktop */
            padding: 32px;
          }
          .milestone-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
          }
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--color-secondary)' }}>
            Our Journey
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto px-4">
            From humble beginnings to significant impact, here are the milestones that define our story.
          </p>
        </div>
        {/* Carousel Section */}
        <div className="carousel-container">
          <div className="carousel-viewport">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((img, index) => (
                <div className="carousel-slide" key={index}>
                  <img src={img} alt={`Journey step ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <button className="nav-btn next" onClick={nextSlide} aria-label="Next">
            <ChevronRight size={24} />
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button 
                key={index}
                className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${currentSlide === index ? 'dot-active' : 'w-2 bg-gray-300'}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
        {/* Milestones Grid */}
        <div className="milestone-grid">
          {milestones.map((item, index) => (
            <div className="milestone-card" key={index}>
              <div className="year-badge">
                {item.year}
              </div>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
};
export default OurJourney;