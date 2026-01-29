import aboutImg from '../assets/about/nail-designer-atendimento-uberaba.jpg';

const About = () => {
  const services = [
    {
      title: 'Alongamento',
      desc: 'Extensões impecáveis com naturalidade e resistência.',
    },
    {
      title: 'Banho de Gel',
      desc: 'Camada de gel sobre a unha natural para maior durabilidade.',
    },
    {
      title: 'Blindagem',
      desc: 'Proteção extra para unhas naturais crescerem saudáveis.',
    },
    {
      title: 'Esmaltação em Gel',
      desc: 'Brilho intenso e cor perfeita por até 21 dias.',
    },
    {
      title: 'Aplicação de Postiça',
      desc: 'Praticidade e elegância para ocasiões especiais.',
    },
    {
      title: 'Manicure & Pedicure',
      desc: 'Cuidado tradicional com acabamento de luxo.',
    },
  ];

  return (
    <section id="about" className="about reveal">
      <div className="container about-container">
        <div className="about-image">
          <img
            src={aboutImg}
            style={{ width: '100%', height: '10%', objectFit: 'contain' }}
            alt="Especialista Edutra Nails realizando atendimento de luxo em Uberaba"
          />
        </div>
        <div className="about-content">
          <span className="subtitle">Sobre Mim</span>
          <h2
            className="section-title"
            style={{ textAlign: 'left', margin: '10px 0 30px' }}
          >
            Maria Eduarda Dutra
          </h2>
          {/* <p className="about-description">
            Com mais de 5 anos de experiência no ramo, meu principal objetivo é
            elevar a sua autoestima através do cuidado, conforto e qualidade que
            você merece. Eu, Maria Eduarda, busco transformar suas unhas com
            delicadeza e perfeição, proporcionando não apenas um resultado
            estético, mas uma verdadeira experiência de confiança e
            autoaceitação. Afinal, não é apenas um serviço bonito, mas sim um
            investimento no seu bem-estar e na sua inspiração diária.
          </p> */}

          <p className="about-description">
            Com mais de 5 anos de experiência na área, meu maior objetivo é
            ajudar você a se sentir mais confiante, oferecendo serviços feitos
            especialmente para você 🤍
          </p>
          <p className="about-description">
            Quero transformar suas unhas com cuidado e atenção aos detalhes,
            proporcionando não só um resultado bonito, mas também uma
            experiência que te deixe mais confortável e segura. Para mim, não é
            só um serviço de beleza, mas um investimento no seu bem-estar e na
            sua motivação do dia a dia.
          </p>

          <div className="specialties-grid">
            {services.map((service, index) => (
              <div className="specialty-card" key={index}>
                <div className="icon">✦</div>
                <div>
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
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
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        .subtitle {
          color: var(--color-gold);
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 2px;
        }
        .about-description {
          color: var(--color-text-light);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 16px;
          text-align: justify;
        }
        .specialties-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin-top: 40px;
        }
        .specialty-card {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }
        .specialty-card .icon {
          font-size: 1.2rem;
          color: var(--color-gold);
          margin-top: 3px;
        }
        .specialty-card h4 {
          font-size: 1.1rem;
          margin-bottom: 4px;
          color: var(--color-text);
        }
        .specialty-card p {
          font-size: 0.9rem;
          color: var(--color-text-light);
          line-height: 1.4;
        }
        @media (max-width: 992px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
          .about-image {
            order: 2;
          }
          .specialties-grid {
            grid-template-columns: 1fr;
            text-align: left;
            max-width: 500px;
            margin: 0 auto;
          }
          .specialty-card h4 {
            font-size: 1.2rem;
          }
          .specialty-card p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
