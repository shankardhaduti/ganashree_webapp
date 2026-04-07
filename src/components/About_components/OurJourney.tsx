import { useState, FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollToTop from "./ScrollToTop";

interface Milestone {
  year: string;
  title: string;
  desc: string;
}

const OurJourney: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const images: string[] = [
    
    "/assets/images/img1.jpeg",
    "/assets/images/img2.jpeg",
    "/assets/images/img3.jpeg",
    "/assets/images/img4.jpeg",
    
   
    "/assets/images/img11.jpeg",
  ];

  const milestones: Milestone[] = [
    {
      year: "50+",
      title: "50+ years of experience",
      desc: "It's been over 50 years of our business running successfully.",
    },
    {
      year: "Several",
      title: "Various Oils Extracted",
      desc: "Extracted from seeds like sunflower, coconut, and more.",
    },
    {
      year: "0%",
      title: "Cholesterol Free",
      desc: "Extracted oils contain 0% cholesterol for a healthier heart.",
    },
    {
      year: "Statewide",
      title: "Karnataka Delivery",
      desc: "Providing delivery across the entire state of Karnataka.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="journey-section">
      <style>{`
        :root {
          --color-primary: #FFD700;
          --color-secondary: #8B4513;
        }

        /* SECTION */
        .journey-section {
          padding: 20px 16px 60px;
          background-color: #ffffff;
        }

        .carousel-container {
          position: relative;
          max-width: 1000px;
          width: 100%;
          margin: 0 auto 40px;
        }

        /* MOBILE FIXED HEIGHT */
        .carousel-viewport {
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 20px 40px -12px rgba(161, 44, 52, 0.15);
          background: #000;
          width: 100%;
          height: 220px;
        }

        .carousel-track {
          display: flex;
          height: 100%;
          transition: transform 0.6s ease;
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
          border: none;
          cursor: pointer;
          z-index: 10;
        }

        .nav-btn.prev { left: 10px; }
        .nav-btn.next { right: 10px; }

        .dot-active {
          background-color: var(--color-primary) !important;
          width: 24px !important;
          border-radius: 10px !important;
        }

        /* GRID */
        .milestone-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .milestone-card {
          background: white;
          padding: 20px;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }

        .year-badge {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: white;
          padding: 6px 14px;
          border-radius: 10px;
          font-weight: bold;
          font-size: 0.85rem;
        }

        .content {
          width: 100%;
        }

        .milestone-card h3 {
          color: #111827;
          font-weight: 700;
          margin-bottom: 6px;
          font-size: 1.1rem;
        }

        .milestone-card p {
          color: #6b7280;
          font-size: 0.9rem;
        }

        /* DESKTOP */
        @media (min-width: 768px) {
          .journey-section {
            padding: 100px 40px;
          }

          .carousel-viewport {
            height: auto;
            aspect-ratio: 16 / 9;
          }

          .nav-btn {
            width: 52px;
            height: 52px;
          }

          .milestone-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .milestone-card {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
            padding: 24px;
          }

          .milestone-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-10 px-2">
          <h2
            className="text-3xl md:text-5xl font-extrabold mb-4"
            style={{ color: "var(--color-secondary)" }}
          >
            Our Journey
          </h2>
          <p className="text-gray-500 text-sm md:text-lg max-w-xl mx-auto">
            From humble beginnings to significant impact, here are the
            milestones that define our story.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="carousel-container">
          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {images.map((img, index) => (
                <div className="carousel-slide" key={index}>
                  <img src={img} alt={`slide-${index}`} />
                </div>
              ))}
            </div>
          </div>

          <button className="nav-btn prev" onClick={prevSlide}>
            <ChevronLeft size={22} />
          </button>

          <button className="nav-btn next" onClick={nextSlide}>
            <ChevronRight size={22} />
          </button>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full ${
                  currentSlide === index
                    ? "dot-active"
                    : "w-2 bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="milestone-grid">
          {milestones.map((item, index) => (
            <div className="milestone-card" key={index}>
              <div className="year-badge">{item.year}</div>
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
 
