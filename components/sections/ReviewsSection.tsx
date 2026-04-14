'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from '@/lib/i18n-context';
import { REVIEWS } from '@/lib/constants';

export default function ReviewsSection() {
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

  return (
    <section className="section reviews" id="reviews" ref={sectionRef}>
      <div className="container">
        <div className="reviews-header">
          <span className="badge reveal">{t('reviews.badge')}</span>
          <h2 className="section-title reveal">{t('reviews.title')}</h2>
          <p className="section-subtitle reveal" style={{ margin: '0 auto' }}>{t('reviews.subtitle')}</p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((review, i) => (
            <div key={review.id} className="review-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="review-stars">{'★'.repeat(review.rating)}</div>
              <p className="review-text">&ldquo;{review.text}&rdquo;</p>
              <div className="review-author">
                <div className="review-avatar">{review.initial}</div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-source">{review.source}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
