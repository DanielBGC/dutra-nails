import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const items = [
    { id: 1, img: '/src/assets/nail1.png', category: 'Fibra de Vidro' },
    { id: 2, img: '/src/assets/nail2.png', category: 'Nail Art' },
    { id: 3, img: '/src/assets/nail1.png', category: 'Blindagem' },
    { id: 4, img: '/src/assets/nail2.png', category: 'Minimalist' },
    { id: 5, img: '/src/assets/nail1.png', category: 'Quartz Collection' },
    { id: 6, img: '/src/assets/nail2.png', category: 'Gold Details' },
  ];

  return (
    <section id="portfolio" className="portfolio reveal">
      <div className="container">
        <h2 className="section-title">Trabalhos Recentes</h2>
        <div className="portfolio-grid">
          {items.map((item) => (
            <motion.div 
              key={item.id} 
              className="portfolio-item"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={item.img} alt={`Portfolio ${item.id}`} />
              <div className="portfolio-overlay">
                <span>{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .portfolio {
          padding: var(--section-padding);
          background-color: var(--color-sand);
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .portfolio-item {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          aspect-ratio: 1/1;
          cursor: pointer;
        }
        .portfolio-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .portfolio-item:hover img {
          transform: scale(1.1);
        }
        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: rgba(45, 41, 38, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }
        .portfolio-overlay span {
          color: white;
          font-family: var(--font-serif);
          font-size: 1.5rem;
          padding: 10px 20px;
          border: 1px solid white;
        }
        @media (max-width: 992px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
