import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import './Home.css';

const SELECTED_WORK_SLUGS = ['amcham', 'hivos'];

const SELECTED_WORK = SELECTED_WORK_SLUGS.map((slug) => {
  const p = getProjectBySlug(slug);
  return p ? { slug: p.slug, title: p.title, description: p.description, image: p.images?.[0] } : null;
}).filter(Boolean);

const CLIENT_LOGOS = [
  { name: 'Acorn Law', logo: '/client-logos/Acorn-Law-Logo-white-bg.jpg' },
  { name: 'ACRE', logo: '/client-logos/ACRE-LOGO-2.png' },
  { name: 'Enaai', logo: '/client-logos/Enaai.png', scale: 1.18 },
  { name: 'Hivos', logo: '/client-logos/Hivos-logo.png', scale: 1.14 },
  { name: 'ICPAC', logo: '/client-logos/Icpac-logo.png', scale: 1.18 },
  { name: 'Kalua Farms', logo: '/client-logos/Kalua-Farms-logos-4-8217.jpg' },
  { name: 'KBP', logo: '/client-logos/KBP-Logo-01.jpg' },
  { name: 'KRK Advocates', logo: '/client-logos/KRK-Advocates-Logo.png' },
  { name: 'PolycomGirls', logo: '/client-logos/PolycomGirls.svg' },
  { name: 'WomanKind Worldwide', logo: '/client-logos/WomanKindWorldwide.png' },
];

export default function Home() {
  const [logoIndex, setLogoIndex] = useState(0);
  const totalLogos = CLIENT_LOGOS.length;

  const goPrevLogo = useCallback(() => {
    setLogoIndex((i) => (i <= 0 ? totalLogos - 1 : i - 1));
  }, [totalLogos]);

  const goNextLogo = useCallback(() => {
    setLogoIndex((i) => (i >= totalLogos - 1 ? 0 : i + 1));
  }, [totalLogos]);

  useEffect(() => {
    const t = setInterval(goNextLogo, 4000);
    return () => clearInterval(t);
  }, [goNextLogo]);

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
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
            {SELECTED_WORK.map((item) => (
              <Link key={item.slug} to={`/work/${item.slug}`} className="work-tile work-tile--project">
                <div className="work-tile__media">
                  {item.image ? (
                    <img src={item.image} alt="" className="work-tile__img" />
                  ) : (
                    <div className="work-tile__image-placeholder" />
                  )}
                </div>
                <div className="work-tile__body">
                  <h3 className="work-tile__client">{item.title}</h3>
                  <p className="work-tile__desc">{item.description}</p>
                </div>
              </Link>
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
              <li><Link to="/work#campaign-communication">Campaign communication</Link></li>
              <li><Link to="/work#research-publication">Research and publication design</Link></li>
              <li><Link to="/work#institutional-storytelling">Institutional storytelling</Link></li>
              <li><Link to="/work#brand-systems">Brand and communication systems</Link></li>
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
          <div className="clients-slider">
            <button
              type="button"
              className="clients-slider__arrow clients-slider__arrow--prev"
              onClick={goPrevLogo}
              aria-label="Previous"
            />
            <div className="clients-slider__track">
              {CLIENT_LOGOS.map((item, i) => (
                <div
                  key={i}
                  className={`client-logo ${i === logoIndex ? 'is-active' : ''}`}
                  aria-hidden={i !== logoIndex}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="client-logo__img"
                    style={item.scale ? { transform: `scale(${item.scale})` } : undefined}
                  />
                  <span className="client-logo__name sr-only">{item.name}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="clients-slider__arrow clients-slider__arrow--next"
              onClick={goNextLogo}
              aria-label="Next"
            />
            <div className="clients-slider__dots">
              {CLIENT_LOGOS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`clients-slider__dot ${i === logoIndex ? 'is-active' : ''}`}
                  onClick={() => setLogoIndex(i)}
                  aria-label={`Go to logo ${i + 1}`}
                />
              ))}
            </div>
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
