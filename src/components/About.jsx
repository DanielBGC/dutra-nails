import React from 'react';

const About = () => {
  return (
    <section id="about" className="about reveal">
      <div className="container about-container">
        <div className="about-image">
          <img src="/src/assets/working.png" alt="Nail designer trabalhando" />
        </div>
        <div className="about-content">
          <span className="subtitle">Minha Trajetória</span>
          <h2 className="section-title" style={{ textAlign: 'left', margin: '10px 0 30px' }}>Apaixonada por elevar a autoestima em cada toque.</h2>
          <p>Com mais de 5 anos de experiência no mercado de luxo, especializei-me na técnica de <strong>fibra de vidro</strong>, proporcionando resultados naturais e resistentes. Meu foco é a <strong>nail art minimalista</strong>, onde "menos é mais".</p>
          <div className="specialties">
            <div className="specialty-item">
              <div className="icon">✦</div>
              <div>
                <h4>Fibra de Vidro</h4>
                <p>Alongamento ultra-resistente com aspecto 100% natural.</p>
              </div>
            </div>
            <div className="specialty-item">
              <div className="icon">✦</div>
              <div>
                <h4>Nail Art Minimal</h4>
                <p>Designs exclusivos, traços finos e pedrarias discretas.</p>
              </div>
            </div>
            <div className="specialty-item">
              <div className="icon">✦</div>
              <div>
                <h4>Blindagem</h4>
                <p>Proteção e força para o crescimento das suas unhas naturais.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .about {
          padding: var(--section-padding);
          background-color: white;
        }
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }
        .about-image img {
          border-radius: var(--border-radius);
          box-shadow: 20px 20px 0px var(--color-sand);
        }
        .subtitle {
          color: var(--color-gold);
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 2px;
        }
        .about-content p {
          color: var(--color-text-light);
          font-size: 1.1rem;
          margin-bottom: 40px;
        }
        .specialties {
          display: grid;
          gap: 25px;
        }
        .specialty-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .specialty-item .icon {
          font-size: 1.5rem;
          color: var(--color-gold);
          line-height: 1;
        }
        .specialty-item h4 {
          font-size: 1.2rem;
          margin-bottom: 5px;
        }
        .specialty-item p {
          font-size: 0.95rem;
          margin-bottom: 0;
        }
        @media (max-width: 992px) {
          .about-container {
            grid-template-columns: 1fr;
          }
          .about-image {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
