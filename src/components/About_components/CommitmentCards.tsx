import React from 'react';

const CommitmentCards = () => {
  return (
    <section className="commitment-section">
      <style>{`
        .commitment-section {
          padding: 80px 20px;
          background-color: #ffffff;
        }

        .commitment-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .card {
          padding: 40px;
          border-radius: 20px;
          color: #ffffff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.2);
        }

        /* Using your global CSS variables */
        .card-primary {
          background-color: red;
        }

        .card-secondary {
          background-color: red;
        }

        .card h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        /* This matches your global .content p rule indirectly 
           or you can rely on the global import */
        .card .sub-text {
          margin-top: 16px;
          font-size: 0.9rem;
          opacity: 0.8;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .commitment-section { padding: 60px 16px; }
          .card h3 { font-size: 1.75rem; }
        }
      `}</style>

      <div className="commitment-container">
        <div className="cards-grid">
          
          {/* Card 1: Commitment */}
          <div className="card card-primary">
            <h3>Our Heritage and Mission</h3>
            {/* The 'content' class triggers your global: .content p { @apply my-6; } */}
            <div className="content">
              <p>
            Ganha Shree BK Muragod is a dedicated food business operator committed to delivering 
            quality products to our community. Under the leadership of Basavaraj Muragod, 
            our firm operates from its primary premises at Mangalwar Pete, Banhatti (Rural)
              </p>
              <p className="sub-text">
             Our mission is to bridge the gap between traditional food processing and modern safety
            standards, ensuring that every product reaching your kitchen is safe, pure, and healthy..
              </p>
            </div>
          </div>

          {/* Card 2: Looking Ahead */}
          <div className="card card-secondary">
            <h3>Core Specialization</h3>
            <div className="content">
              <p>
              We specialize in the essential sector of Vegetable Oil and Processing Units. As a licensed
               Retailer, we take pride in managing the supply chain effectively to provide high-quality
                oils that serve as the foundation for nutritious meals.
              </p>
              <p className="sub-text">
                
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommitmentCards;