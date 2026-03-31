import { Link } from 'react-router-dom';
import './Footer.css';

const FOOTER_LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="aksent-footer">
      <div className="aksent-footer__inner container">
        <div className="aksent-footer__grid">
          <div className="aksent-footer__col aksent-footer__brand-col">
            <p className="aksent-footer__brand-name">AKSENT</p>
            <p className="aksent-footer__tagline">
              Knowledge Systems&nbsp;|&nbsp;Strategic Communication&nbsp;|&nbsp;Design Intelligence
            </p>
          </div>
          <div className="aksent-footer__col">
            <h3 className="aksent-footer__heading">Site</h3>
            <ul className="aksent-footer__list">
              {FOOTER_LINKS.map(({ to, label }) => (
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
              <li>
                Jabavu road<br />
                Kilimani<br />
                Nairobi, Kenya
              </li>
              <li>
                <a href="https://www.aksent.co.ke" target="_blank" rel="noopener noreferrer">
                  www.aksent.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="aksent-footer__bottom">
          <p className="aksent-footer__copy">© AKSENT. All rights reserved.</p>
          <Link to="/contact" className="aksent-footer__cta">
            Start a conversation
          </Link>
        </div>
      </div>
    </footer>
  );
}
