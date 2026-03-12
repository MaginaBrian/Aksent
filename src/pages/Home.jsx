import { Link } from 'react-router-dom';
import './Home.css';

const SELECTED_WORK = [
  {
    client: 'Africa Bioenergy Programs',
    description: 'Campaign communication for biodigester adoption',
    tag: 'Campaign Communication',
  },
  {
    client: 'WomanKind Worldwide',
    description: 'Digital advocacy campaign',
    tag: 'Digital Advocacy',
  },
  {
    client: 'Hivos',
    description: 'Knowledge publication design',
    tag: 'Publication Design',
  },
  {
    client: 'American Chamber of Commerce Kenya',
    description: 'Business summit brand development',
    tag: 'Brand Development',
  },
];

const CLIENT_LOGOS = [
  'Africa Bioenergy Programs',
  'WomanKind Worldwide',
  'Hivos',
  'AmCham Kenya',
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">AKSENT</p>
            <h1 className="hero__title">
              Clarity is structure.<br />
              <span className="hero__title-sub">Knowledge systems, rooted in design.</span>
            </h1>
            <p className="hero__lead">
              AKSENT translates complex work into communication people understand.
              Research, institutions, and brands rely on clarity to move ideas across audiences.
            </p>
            <div className="hero__actions">
              <Link to="/work" className="btn btn--primary">View our work</Link>
              <Link to="/contact" className="btn btn--secondary">Start a conversation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="selected-work">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Selected work</h2>
            <Link to="/work" className="section-link">All projects →</Link>
          </div>
          <div className="work-grid">
            {SELECTED_WORK.map((item, i) => (
              <article key={i} className="work-tile">
                <div className="work-tile__image-placeholder" />
                <div className="work-tile__body">
                  <span className="work-tile__tag">{item.tag}</span>
                  <h3 className="work-tile__client">{item.client}</h3>
                  <p className="work-tile__desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="what-we-do">
        <div className="container what-we-do__inner">
          <div className="what-we-do__label">
            <span>What we do</span>
          </div>
          <div className="what-we-do__content">
            <p className="what-we-do__lead">
              AKSENT works with organisations that produce complex knowledge.
            </p>
            <p className="what-we-do__sub">Our work focuses on:</p>
            <ul className="what-we-do__list">
              <li>Campaign communication</li>
              <li>Research and publication design</li>
              <li>Institutional storytelling</li>
              <li>Brand and communication systems</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="design-structure">
        <div className="container">
          <h2 className="design-structure__title">Design is structure.</h2>
        </div>
      </section>

      <section className="clients">
        <div className="container">
          <p className="clients__label">Trusted by</p>
          <div className="clients__grid">
            {CLIENT_LOGOS.map((name, i) => (
              <div key={i} className="client-logo">
                <span className="client-logo__name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-section__inner">
          <h2 className="cta-section__title">Ready to work together?</h2>
          <p className="cta-section__text">
            We translate complex work into communication people understand.
            Clarity is not a finish — it is a foundation.
          </p>
          <Link to="/contact" className="btn btn--primary btn--large">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}
