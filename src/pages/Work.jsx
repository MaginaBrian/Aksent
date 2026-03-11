import { Link } from 'react-router-dom';
import './Page.css';

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Work</h1>
          <p className="page-hero__lead">
            Structured case studies and portfolio. See how we help organisations and brands build knowledge systems, publish with impact, and craft distinctive experiences.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="prose">
            <p>
              Case studies and studio documentation will be featured here. Each project showcases our triadic practice: Systems (knowledge architecture), Forum (publishing and circulation), and Studio (design and documentation).
            </p>
            <p>
              <Link to="/contact" className="btn btn--primary">Discuss a project</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
