'use client';

import Image from 'next/image';
import { useTranslation } from '@/lib/i18n-context';
import { IMAGES } from '@/lib/constants';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <Image
          src={IMAGES.hero}
          alt="Ember Lounge"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content reveal visible">
        <p className="hero-tagline">{t('hero.tagline')}</p>
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-actions">
          <a href="#reservation" className="btn btn-gold">
            {t('hero.cta.reserve')}
          </a>
          <a href="#menu" className="btn btn-outline">
            {t('hero.cta.menu')}
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
