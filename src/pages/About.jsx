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
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="prose">
            <p>
              Over time the practice expanded beyond traditional design work into the field of knowledge communication — helping organisations translate complex research, programmes, and institutional work into communication that people can understand.
            </p>
            <p>
              Today AKSENT operates at the intersection of design, knowledge systems, and institutional storytelling.
            </p>
            <p>
              We work with research organisations, foundations, and mission-driven businesses that produce complex ideas and need those ideas to travel clearly across audiences.
            </p>
            <p>
              Our role is to build the structures that allow that communication to happen — through publications, campaigns, and visual systems that make knowledge usable.
            </p>

            <h2>How we work</h2>
            <p>
              AKSENT approaches design as structure.
              We organise information, shape narrative, and build visual systems that allow complex work to move clearly across audiences.
            </p>

            <h2>Experience</h2>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat__value">15+</span>
                <span className="about-stat__label">Years of design practice</span>
              </div>
              <div className="about-stat">
                <span className="about-stat__value">Cross-sector</span>
                <span className="about-stat__label">Work with organisations in climate, gender equity, research, finance, and hospitality.</span>
              </div>
              <div className="about-stat">
                <span className="about-stat__value">Global</span>
                <span className="about-stat__label">Projects delivered across Africa, Europe, and global institutional networks.</span>
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
