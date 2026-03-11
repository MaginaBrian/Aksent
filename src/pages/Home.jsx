import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">Knowledge systems, rooted in design.</h1>
            <p className="hero__lead">
              AKSENT was founded in 2009 as a design studio and has evolved into a Knowledge Systems practice. We operate through three interconnected pillars—Systems, Forum, and Studio—to elevate brands and craft transformative experiences.
            </p>
            <div className="hero__actions">
              <Link to="/work" className="btn btn--primary">View our work</Link>
              <Link to="/contact" className="btn btn--secondary">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars">
        <div className="container">
          <h2 className="section-title">Our three pillars</h2>
          <p className="section-lead">
            Structural clarity defines how we work. Each pillar extends the same brand: unified identity, subtle differentiation in tone and layout.
          </p>
          <div className="pillars__grid">
            <article className="pillar-card pillar-card--systems">
              <h3><Link to="/systems">Knowledge Systems</Link></h3>
              <p>Institutional consultancy and KM architecture. We help organisations capture, structure, and leverage collective wisdom.</p>
              <Link to="/systems" className="pillar-card__link">Learn more →</Link>
            </article>
            <article className="pillar-card pillar-card--forum">
              <h3><Link to="/forum">Forum</Link></h3>
              <p>Publishing and knowledge circulation. Ideas that move—through editorial, events, and thought leadership.</p>
              <Link to="/forum" className="pillar-card__link">Learn more →</Link>
            </article>
            <article className="pillar-card pillar-card--studio">
              <h3><Link to="/studio">Studio</Link></h3>
              <p>Applied documentation of making and material intelligence. Where craft meets strategy and brand becomes experience.</p>
              <Link to="/studio" className="pillar-card__link">Learn more →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            <div className="stat-block">
              <span className="stat-block__value">15+</span>
              <span className="stat-block__label">Years of creative excellence</span>
            </div>
            <div className="stat-block">
              <span className="stat-block__value">3</span>
              <span className="stat-block__label">Interconnected pillars</span>
            </div>
            <div className="stat-block">
              <span className="stat-block__value">Global</span>
              <span className="stat-block__label">Linchpin in creative ingenuity</span>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container">
          <blockquote className="quote">
            <p>Good design is a language, not a style.</p>
            <cite>— Massimo Vignelli</cite>
          </blockquote>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-section__inner">
          <h2 className="cta-section__title">Your trusted partner in knowledge and design</h2>
          <p className="cta-section__text">
            We don’t just make your brand visible—we make it unforgettable. In an era of transient digital impressions, our narratives and visuals create lasting impact.
          </p>
          <Link to="/contact" className="btn btn--primary btn--large">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
