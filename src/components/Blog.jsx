import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const Blog = () => {
  return (
    <section id="blog" className="blog reveal">
      <div className="container">
        <h2 className="section-title">Dicas & Tendências</h2>
        <div className="blog-grid">
          {blogPosts.slice(0, 3).map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-img">
                <img src={post.img} alt={post.title} />
              </div>
              <div className="blog-info">
                <span>{post.date}</span>
                <h3>{post.title}</h3>
                <Link to={`/blog/${post.slug}`} className="read-more" rel="noopener noreferrer">Ler mais <span>→</span></Link>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/blog" className="btn btn-gold" rel="noopener noreferrer">Ver todos os posts</Link>
        </div>

      </div>

      <style jsx="true">{`
        .blog {
          padding: var(--section-padding);
          background-color: white;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .blog-card {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .blog-img {
          height: 250px;
        }
        .blog-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .blog-info {
          padding: 30px;
        }
        .blog-info span {
          font-size: 0.8rem;
          color: var(--color-gold);
          text-transform: uppercase;
          font-weight: 600;
        }
        .blog-info h3 {
          margin: 10px 0 20px;
          font-size: 1.4rem;
        }
        .read-more {
          color: var(--color-terracotta);
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        @media (max-width: 992px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;
