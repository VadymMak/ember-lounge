'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/lib/i18n-context';
import { RESERVATION_ZONES } from '@/lib/constants';

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  zone: string;
  message: string;
}

export default function ReservationSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '', phone: '', date: '', time: '', guests: '2', zone: 'lounge', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section reservation" id="reservation" ref={sectionRef}>
      <div className="container">
        <div className="reservation-grid">
          <div className="reservation-info">
            <span className="badge reveal">{t('reservation.badge')}</span>
            <h2 className="section-title reveal">{t('reservation.title')}</h2>
            <p className="reveal">{t('reservation.subtitle')}</p>

            <div className="reservation-features">
              {[
                { icon: '🕐', text: 'Mo–Do: 16:00–02:00 | Fr–Sa: 16:00–03:00' },
                { icon: '📍', text: 'Kurfürstendamm 42, 10719 Berlin' },
                { icon: '📞', text: '+49 30 1234 5678' },
                { icon: '✨', text: 'Lounge, VIP & Terrasse verfügbar' },
              ].map((f, i) => (
                <div key={i} className="reservation-feature reveal">
                  <span className="reservation-feature-icon">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reservation-form reveal">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="res-name">{t('reservation.name')}</label>
                  <input
                    id="res-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Max Mustermann"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="res-phone">{t('reservation.phone')}</label>
                  <input
                    id="res-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 30 000 0000"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="res-date">{t('reservation.date')}</label>
                  <input
                    id="res-date"
                    name="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="res-time">{t('reservation.time')}</label>
                  <input
                    id="res-time"
                    name="time"
                    type="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="res-guests">{t('reservation.guests')}</label>
                  <select
                    id="res-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Personen'}</option>
                    ))}
                    <option value="9+">9+ Personen</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="res-zone">{t('reservation.zone')}</label>
                  <select
                    id="res-zone"
                    name="zone"
                    value={formData.zone}
                    onChange={handleChange}
                  >
                    {RESERVATION_ZONES.map((z) => (
                      <option key={z.id} value={z.id}>{z.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="res-message">{t('reservation.message')}</label>
                <textarea
                  id="res-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Besondere Anlässe, Allergien, etc."
                />
              </div>

              <button type="submit" className="form-submit">
                {t('reservation.submit')}
              </button>

              {submitted && (
                <div className="form-success">{t('reservation.success')}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
