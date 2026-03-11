import { Link } from 'react-router-dom';
import './Footer.css';

const FOOTER_LINKS = {
  pillars: [
    { to: '/systems', label: 'Systems' },
    { to: '/forum', label: 'Forum' },
    { to: '/studio', label: 'Studio' },
  ],
  site: [
    { to: '/work', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="aksent-footer">
      <div className="aksent-footer__inner container">
        <div className="aksent-footer__grid">
          <div className="aksent-footer__col aksent-footer__col--pillars">
            <h3 className="aksent-footer__heading">Pillars</h3>
            <ul className="aksent-footer__list">
              {FOOTER_LINKS.pillars.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="aksent-footer__col">
            <h3 className="aksent-footer__heading">Site</h3>
            <ul className="aksent-footer__list">
              {FOOTER_LINKS.site.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="aksent-footer__col aksent-footer__contact">
            <h3 className="aksent-footer__heading">Contact</h3>
            <ul className="aksent-footer__list aksent-footer__contact-list">
              <li>
                <a href="tel:+254722311089">+254 722 311 089</a>
              </li>
              <li>
                <a href="mailto:hello@aksent.co.ke">hello@aksent.co.ke</a>
              </li>
              <li>Mbaazi Street, Nairobi, Kenya</li>
              <li>
                <a href="https://www.aksent.co.ke" target="_blank" rel="noopener noreferrer">
                  www.aksent.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="aksent-footer__bottom">
          <p className="aksent-footer__brand">AKSENT</p>
          <p className="aksent-footer__copy">AKSENT Creative Services. All rights reserved.</p>
          <Link to="/contact" className="aksent-footer__cta">
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
