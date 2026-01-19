import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Hero = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/553484285707?text=Vi%20seu%20portfolio%20e%20adorei%20o%20trabalho%2C%20gostaria%20de%20agendar%20um%20horario";

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + href);
    }
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hero-badge">Clean Girl Aesthetic</span>
          <h1>A elegância em cada detalhe das suas mãos.</h1>
          <p>Especialista em alongamentos em fibra de vidro e nail art minimalista. Um refúgio de sofisticação para quem valoriza o natural.</p>
          <div className="hero-btns">
            <a href={whatsappUrl} className="btn btn-primary pulse" style={{ padding: '16px 40px', fontSize: '1.1rem' }} target="_blank" rel="noopener noreferrer">
               Agende via WhatsApp
            </a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="btn" style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }} target="_blank" rel="noopener noreferrer">Ver Portfólio</a>
          </div>

        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="image-wrapper">
            <img src="/src/assets/nail1.png" alt="Unhas minimalistas luxuosas" />
            <div className="image-accent"></div>
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          background: linear-gradient(135deg, var(--color-off-white) 0%, var(--color-sand) 100%);
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: var(--color-quartz);
          color: var(--color-terracotta);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .hero h1 {
          font-size: 4rem;
          margin-bottom: 24px;
          color: var(--color-text);
        }
        .hero p {
          font-size: 1.2rem;
          color: var(--color-text-light);
          margin-bottom: 40px;
          max-width: 600px;
        }
        .hero-btns {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .hero-image {
          position: relative;
        }
        .image-wrapper {
          position: relative;
          z-index: 1;
        }
        .image-wrapper img {
          border-radius: 200px 200px 0 0;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
        }
        .image-accent {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100%;
          height: 100%;
          border: 2px solid var(--color-gold);
          border-radius: 200px 200px 0 0;
          z-index: -1;
        }
        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero h1 {
            font-size: 3rem;
          }
          .hero p {
            margin: 0 auto 40px;
          }
          .hero-btns {
            justify-content: center;
          }
          .hero-image {
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
