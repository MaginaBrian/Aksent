import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="aksent-header">
      <div className="aksent-header__inner container">
        <Link to="/" className="aksent-header__logo" aria-label="AKSENT Home">
          <img
            src="/aksent-logo.png"
            alt="AKSENT Knowledge Systems"
            className="aksent-header__logo-img aksent-header__logo-img--full"
          />
          <img
            src="/favicon-32.png"
            alt="AKSENT"
            className="aksent-header__logo-img aksent-header__logo-img--icon"
            aria-hidden="true"
          />
        </Link>
        <button
          type="button"
          className="aksent-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="aksent-header__toggle-bar" />
          <span className="aksent-header__toggle-bar" />
          <span className="aksent-header__toggle-bar" />
        </button>
        <nav
          id="nav-menu"
          className={`aksent-header__nav ${menuOpen ? 'aksent-header__nav--open' : ''}`}
        >
          <ul className="aksent-header__nav-list">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`aksent-header__nav-link ${location.pathname === to ? 'aksent-header__nav-link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
