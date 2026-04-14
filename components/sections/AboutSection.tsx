'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/lib/i18n-context';
import { IMAGES } from '@/lib/constants';

export default function AboutSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap reveal">
            <Image
              src={IMAGES.about}
              alt="About Ember Lounge"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="about-image-deco" />
          </div>

          <div className="about-text">
            <span className="badge reveal">{t('about.badge')}</span>
            <h2 className="section-title reveal">{t('about.title')}</h2>
            <p className="reveal">{t('about.text1')}</p>
            <p className="reveal">{t('about.text2')}</p>

            <div className="about-stats reveal">
              <div>
                <div className="stat-value">{t('about.stat1.value')}</div>
                <div className="stat-label">{t('about.stat1.label')}</div>
              </div>
              <div>
                <div className="stat-value">{t('about.stat2.value')}</div>
                <div className="stat-label">{t('about.stat2.label')}</div>
              </div>
              <div>
                <div className="stat-value">{t('about.stat3.value')}</div>
                <div className="stat-label">{t('about.stat3.label')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
