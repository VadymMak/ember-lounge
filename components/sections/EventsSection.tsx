'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from '@/lib/i18n-context';
import { EVENTS } from '@/lib/constants';

export default function EventsSection() {
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
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section events" id="events" ref={sectionRef}>
      <div className="container">
        <div className="events-header">
          <span className="badge reveal">{t('events.badge')}</span>
          <h2 className="section-title reveal">{t('events.title')}</h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>{t('events.subtitle')}</p>
        </div>

        <div className="events-grid">
          {EVENTS.map((event, i) => (
            <div key={event.id} className="event-card reveal" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="event-icon">{event.icon}</div>
              <div className="event-day">{event.day}</div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-desc">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
