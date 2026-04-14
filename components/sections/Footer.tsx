'use client';

import { useTranslation } from '@/lib/i18n-context';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Ember Lounge</div>
            <p className="footer-tagline">{t('footer.tagline')}</p>
          </div>

          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              {[
                { label: t('nav.about'), href: '#about' },
                { label: t('nav.menu'), href: '#menu' },
                { label: t('nav.gallery'), href: '#gallery' },
                { label: t('nav.events'), href: '#events' },
                { label: t('nav.reservation'), href: '#reservation' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Kontakt</div>
            <ul className="footer-links">
              <li><span style={{ color: 'var(--cream-muted)', fontSize: '0.875rem' }}>Kurfürstendamm 42</span></li>
              <li><span style={{ color: 'var(--cream-muted)', fontSize: '0.875rem' }}>10719 Berlin</span></li>
              <li><a href="tel:+4930123456789">+49 30 1234 5678</a></li>
              <li><a href="mailto:info@ember-lounge.de">info@ember-lounge.de</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-rights">{t('footer.rights')}</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="TikTok">🎵</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
