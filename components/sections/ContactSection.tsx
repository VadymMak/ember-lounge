'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from '@/lib/i18n-context';
import { CONTACT_ITEMS } from '@/lib/constants';

export default function ContactSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-header">
          <span className="badge reveal">{t('contact.badge')}</span>
          <h2 className="section-title reveal">{t('contact.title')}</h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>{t('contact.subtitle')}</p>
        </div>

        <div className="contact-grid">
          <div>
            <div className="contact-items">
              {CONTACT_ITEMS.map((item, i) => (
                <div key={i} className="contact-item reveal">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-title">{item.title}</div>
                  {item.lines.map((line, j) => (
                    <div key={j} className="contact-line">{line}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="contact-map reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.197!2d13.3271!3d52.5017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zS3VyZsO8cnN0ZW5kYW1tIDQy!5e0!3m2!1sde!2sde!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ember Lounge Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
