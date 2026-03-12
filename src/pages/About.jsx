import { Link } from 'react-router-dom';
import './Page.css';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Who we are</h1>
          <p className="page-hero__lead">
            AKSENT was founded in 2009 as a design studio.
            Over the past fifteen years the practice has evolved toward knowledge communication and institutional storytelling.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="prose">
            <p>
              Today AKSENT works with research organisations, foundations, and businesses to translate complex work into communication people understand.
            </p>

            <h2>Experience</h2>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat__value">15+</span>
                <span className="about-stat__label">Years of design practice</span>
              </div>
              <div className="about-stat">
                <span className="about-stat__value">Global</span>
                <span className="about-stat__label">Network of collaborators</span>
              </div>
              <div className="about-stat">
                <span className="about-stat__value">Cross-sector</span>
                <span className="about-stat__label">Client experience</span>
              </div>
            </div>

            <p>
              <Link to="/contact" className="btn btn--primary">Start a conversation</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
