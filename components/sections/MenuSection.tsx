'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/lib/i18n-context';
import { MENU_CATEGORIES } from '@/lib/constants';

const TAB_KEYS = {
  hookah: 'menu.tab.hookah',
  cocktails: 'menu.tab.cocktails',
  tea: 'menu.tab.tea',
  snacks: 'menu.tab.snacks',
} as const;

type TabKey = keyof typeof TAB_KEYS;

export default function MenuSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabKey>('hookah');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeCategory = MENU_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section className="section menu" id="menu" ref={sectionRef}>
      <div className="container">
        <div className="menu-header">
          <span className="badge reveal">{t('menu.badge')}</span>
          <h2 className="section-title reveal">{t('menu.title')}</h2>
          <p className="section-subtitle reveal">{t('menu.subtitle')}</p>
        </div>

        <div className="menu-tabs reveal">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`menu-tab${activeTab === cat.id ? ' active' : ''}`}
              onClick={() => setActiveTab(cat.id as TabKey)}
            >
              {t(TAB_KEYS[cat.id as TabKey])}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {activeCategory?.items.map((item, i) => (
            <div key={item.id} className="menu-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div>
                <div className="menu-card-name">{item.name}</div>
                <div className="menu-card-desc">{item.description}</div>
              </div>
              <div className="menu-card-price">€{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
