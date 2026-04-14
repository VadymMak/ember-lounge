'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/lib/i18n-context';
import { IMAGES } from '@/lib/constants';

export default function GallerySection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      sectionRef.current?.querySelectorAll<HTMLElement>('.reveal:not(.visible)').forEach(el => {
        el.classList.add('visible');
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section gallery" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="gallery-header">
          <span className="badge reveal">{t('gallery.badge')}</span>
          <h2 className="section-title reveal">{t('gallery.title')}</h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>{t('gallery.subtitle')}</p>
        </div>

        <div className="gallery-grid">
          {IMAGES.gallery.map((src, idx) => (
            <div key={idx} className="gallery-item reveal">
              <Image
                src={src}
                alt={`Ember Lounge gallery ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
