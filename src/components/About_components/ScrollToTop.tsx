import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <style>{`
        .scroll-to-top-btn {
          background-color: #FFD700 ; 
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease-in-out;
          opacity: ${isVisible ? '1' : '0'};
          visibility: ${isVisible ? 'visible' : 'hidden'};
          transform: translateY(${isVisible ? '0' : '20px'});
        }

        .scroll-to-top-btn:hover {
          background-color: #7a1f26; /* Darker red on hover */
          transform: scale(1.1);
        }

        @media (max-width: 640px) {
          .scroll-to-top-btn {
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <button
        type="button"
        onClick={scrollToTop}
        className="scroll-to-top-btn"
        aria-label="Scroll to top"
      >
        <ArrowUpwardIcon fontSize="medium" />
      </button>
    </div>
  );
};

export default ScrollToTop;