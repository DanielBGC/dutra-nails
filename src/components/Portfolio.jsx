import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const items = [
    { id: 1, img: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1000', category: 'Alongamento' },
    { id: 2, img: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmFpbHN8ZW58MHx8MHx8fDA%3D', category: 'Banho de Gel' },
    { id: 3, img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=1000', category: 'Blindagem' },
    { id: 4, img: 'https://images.unsplash.com/photo-1612887390768-fb02affea7a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpbHN8ZW58MHx8MHx8fDA%3D', category: 'Esmaltação em Gel' },
    { id: 5, img: 'https://images.unsplash.com/photo-1588359953494-0c215e3cedc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5haWxzfGVufDB8fDB8fHww', category: 'Aplicação de Postiça' },
    { id: 6, img: 'https://images.unsplash.com/photo-1587729927069-ef3b7a5ab9b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5haWxzfGVufDB8fDB8fHww', category: 'Manicure & Pedicure' },


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
              <img src={item.img} alt={`${item.category} feito por Edutra Nails em Uberaba`} />
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
