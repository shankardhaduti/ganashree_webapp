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
    { year: "50+", title: "50+ years of experience", desc: "Its been over 50 years as our business running successfully" },
    { year: "Several", title: "Several types of oils are extracted", desc: "Several types of oils are extracted from several types of seeds like sunflower, coconut and other" },
    { year: "0%", title: "incldues cholestroll free", desc: "Extracted oils contains 0% of cholestrol or cholestrol free" },
    { year: "Across State", title: "Delievers across state", desc: "Provide delievery across Karnataka State" },
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
        .journey-section {
          padding: 100px 40px;
          background-color: #f9fafb;
        }

        /* Container forced to 896px width */
        .carousel-container {
          position: relative;
          max-width: 1200px; 
          width:100%;
          margin: 0 auto 64px;
        }

        .carousel-viewport {
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(161, 44, 52, 0.15);
          background: #000;
          /* Forced 16:9 Aspect Ratio */
          aspect-ratio: 16 / 9; 
          width: 100%;
        }

        .carousel-track {
          display: flex;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
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
          background: white;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
          z-index: 10;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .nav-btn:hover {
          color: #b91c1c;
          transform: translateY(-50%) scale(1.1);
        }

        .dot-active {
          background-color: var(--color-primary) !important;
          width: 28px !important;
          border-radius: 10px !important;
        }

        .year-badge {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: white;
          padding: 8px 16px;
          border-radius: 12px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .milestone-card {
          background: white;
          padding: 32px;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
          display: flex;
          gap: 20px;
          align-items: start;
          transition: all 0.3s ease;
          
        }

        .milestone-card h3 {
          color: var(--color-secondary);
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
          .milestone-card .content p {
            margin-top: 0;      
            line-height: 1.5;
      }

        @media (max-width: 936px) {
          .nav-btn.prev { left: 10px; }
          .nav-btn.next { right: 10px; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--color-secondary)' }}>
            Our Journey
          </h2>
          <div className="content">
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From humble beginnings to significant impact, here are the milestones that define our story.
            </p>
          </div>
        </div>

        {/* Carousel Section - Exactly 896x504 */}
        <div className="carousel-container">
          <div className="carousel-viewport">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((img, index) => (
                <div className="carousel-slide" key={index}>
                  <img src={img} alt={`Journey step ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <button className="nav-btn prev left-[10px]" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="nav-btn next right-[10px]" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button 
                key={index}
                className={`h-2.5 rounded-full transition-all duration-300 border-none cursor-pointer ${currentSlide === index ? 'dot-active' : 'w-2.5 bg-gray-300'}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((item, index) => (
            <div className="milestone-card" key={index}>
              <div className="year-badge">
                {item.year}
              </div>
              <div className="content">
                <h3>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
        <ScrollToTop/>
    </section>
    
  );
};

export default OurJourney;