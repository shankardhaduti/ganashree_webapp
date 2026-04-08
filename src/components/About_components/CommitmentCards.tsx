const CommitmentCards = () => {
  return (
    <section className="commitment-section">
      <style>{`
       
        .commitment-section {
          padding: 10px 16px; 
        
          width: 100%;
          box-sizing: border-box;
        }
        .commitment-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .cards-grid {
          display: flex;
          flex-direction: column; /* Stack vertically on mobile */
          gap: 20px;
          width: 100%;
        }
        .card {
  padding: 24px;
  border-radius: 20px;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}

        .card-primary {
          background: #FFD700 ;
        }
        .card-secondary {
          background: #FFD700;
        }
        .card h3 {
          font-size: 1.5rem; /* Smaller font for 320px screens */
          font-weight: 1000;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .card .content p {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 12px;
  opacity: 0.85;
}
       .card .sub-text {
  margin-top: 12px;
  font-size: 0.85rem;
  opacity: 0.7;
  font-style: italic;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 16px;
}
      
        @media (min-width: 768px) {
          .commitment-section {
            padding: 20px 40px; /* More white space for desktop */
          }
          .cards-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr); 
            gap: 32px;
          }
          .card {
            padding: 45px;
            min-height: 350px; 
          }
          .card h3 {
            font-size: 2.25rem; 
          }
          .card:hover {
            transform: translateY(-10px); 
            box-shadow: 0 25px 50px -12px rgba(185, 28, 28, 0.3);
          }
        }
      `}</style>
      <div className="commitment-container">
        <div className="cards-grid">
          {/* Card 1 */}
          <div className="card card-primary">
            <h3>Our Heritage and Mission</h3>
            <div className="content">
              <p>
                Ganashri Basavaraj K Muragod is a dedicated food business operator
                committed to delivering quality products to our community. Under
                the leadership of Basavaraj K Muragod, our firm operates from
                Mangalwar Pete, Banhatti.
              </p>
              <p className="sub-text">
                Our mission is to bridge the gap between traditional food
                processing and modern safety standards.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card card-secondary">
            <h3>Core Specialization</h3>
            <div className="content">
              <p>
                We specialize in the essential sector of Vegetable Oil
                processing and units. As a licensed Retailer, we take
                pride in managing the supply chain effectively to provide
                high-quality oils.
              </p>
              <p className="sub-text">
                Operating under Registration Number: 21225005001169.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CommitmentCards;
