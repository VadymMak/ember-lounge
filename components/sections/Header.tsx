'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n-context';
import type { Language } from '@/lib/types';

const navLinks = [
  { key: 'nav.about' as const, href: '#about' },
  { key: 'nav.menu' as const, href: '#menu' },
  { key: 'nav.gallery' as const, href: '#gallery' },
  { key: 'nav.events' as const, href: '#events' },
  { key: 'nav.reservation' as const, href: '#reservation' },
  { key: 'nav.contact' as const, href: '#contact' },
];

const LANGS: Language[] = ['de', 'sk', 'en'];

export default function Header() {
  const { t, lang, setLang } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 60);
      setHidden(current > lastScroll && current > 200);
      setLastScroll(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}${hidden ? ' hidden' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <a href="#" className="header-logo">
            Ember <span>Lounge</span>
          </a>

          <nav>
            <ul className="header-nav">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href}>{t(link.key)}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-right">
            <div className="lang-switcher">
              {LANGS.map((l) => (
                <button
                  key={l}
                  className={`lang-btn${lang === l ? ' active' : ''}`}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="#reservation" className="header-reserve">
              {t('nav.reservation')}
            </a>
          </div>

          <button className="mobile-menu-btn" aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
