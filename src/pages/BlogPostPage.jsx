import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import { ChevronLeft } from 'lucide-react';
import { getWhatsappUrl } from '../helpers/getWhatsappUrl';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  const whatsappUrl = getWhatsappUrl();

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
        <h1>Post não encontrado</h1>
        <Link to="/blog" className="btn btn-primary" style={{ marginTop: '20px' }}>Voltar ao Blog</Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="post-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container narrow">
        <Link to="/blog" className="back-link" rel="noopener noreferrer">
          <ChevronLeft size={20} /> Voltar para o blog
        </Link>

        
        <header className="post-header">
          <span>{post.date}</span>
          <h1>{post.title}</h1>
          <div className="post-img">
            <img src={post.img} alt={post.title} />
          </div>
        </header>

        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <div className="post-footer">
          <h3>Gostou deste conteúdo?</h3>
          <p>Compartilhe com suas amigas ou agende seu horário para ter unhas incríveis também!</p>
          <a href={whatsappUrl} className="btn btn-primary pulse" target="_blank" rel="noopener noreferrer">
            Agendar via WhatsApp
          </a>

        </div>
      </div>

      <style jsx="true">{`
        .post-page {
          padding-top: 150px;
          padding-bottom: 100px;
          background-color: white;
        }
        .narrow {
          max-width: 800px;
        }
        .back-link {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--color-gold);
          font-weight: 500;
          margin-bottom: 30px;
        }
        .post-header span {
          color: var(--color-gold);
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }
        .post-header h1 {
          font-size: 3.5rem;
          margin: 15px 0 40px;
        }
        .post-img {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 50px;
        }
        .post-img img {
          width: 100%;
          height: 100%;
          max-height: 500px;
          object-fit: cover;
        }
        .post-content {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--color-text-light);
        }
        .post-content p {
          margin-bottom: 25px;
        }
        .post-content h3 {
          color: var(--color-text);
          margin: 40px 0 15px;
          font-size: 1.8rem;
        }
        .post-footer {
          margin-top: 80px;
          padding: 60px;
          background-color: var(--color-sand);
          border-radius: 30px;
          text-align: center;
        }
        .post-footer h3 {
          margin-bottom: 15px;
        }
        .post-footer p {
          margin-bottom: 30px;
          color: var(--color-text-light);
        }
        @media (max-width: 768px) {
          .post-header h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default BlogPostPage;
