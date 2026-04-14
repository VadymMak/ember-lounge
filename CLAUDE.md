# CLAUDE.md — ember-lounge

## Проект
Сайт hookah & cocktail бара Ember Lounge. Мультиязычный (DE/SK/EN).
Стек: Next.js 15 App Router, TypeScript, pure CSS (НЕ Tailwind), pnpm.

## Команды
pnpm dev
pnpm build
npx tsc --noEmit — ОБЯЗАТЕЛЬНО перед каждым коммитом

## ВАЖНО: Next.js версия
ТОЛЬКО Next.js 15 (стабильный). НИКОГДА не использовать Next.js 16.

## Правила

### Стилизация
- Pure CSS с CSS Variables — никакого Tailwind
- Все стили в app/globals.css
- CSS @keyframes для анимаций
- IntersectionObserver для reveal-on-scroll (.reveal → .visible)

### CSS Variables (тёмная premium палитра)
--black: #0A0A0A
--black-light: #141414
--card: #1A1614
--card-hover: #221E1A
--gold: #D4A853
--gold-dark: #B8923F
--gold-light: #E8C882
--brick: #8B4513
--leather: #3D2B1F
--cream: #E8E0D4
--cream-muted: #A89F94
--white: #F5F2EE
--white-dim: rgba(245,242,238,0.6)
--shadow: 0 4px 24px rgba(0,0,0,0.4)
--shadow-lg: 0 12px 48px rgba(0,0,0,0.6)
--shadow-gold: 0 4px 20px rgba(212,168,83,0.15)
--radius: 16px
--radius-sm: 10px
--transition: all 0.3s ease

### Шрифты
- Заголовки: Playfair Display (serif) — через next/font/google
- Текст: Inter (sans-serif) — через next/font/google

### TypeScript
- Строгая типизация, никаких any
- Типы в lib/types.ts
- Данные в lib/constants.ts
- Никакого хардкода текстов в компонентах

### Изображения — ВАЖНАЯ АРХИТЕКТУРА
ВСЕ пути к изображениям в одном месте: lib/constants.ts → объект IMAGES
Переключатель USE_LOCAL_IMAGES:
- false (дефолт) = Unsplash URL для демо
- true = /public/images/ для реальных фото клиента

Структура public/images/:
  hero.jpg, about.jpg
  gallery/1.jpg ... gallery/5.jpg

ВСЕ Image fill → sizes prop. Hero: priority={true}.

### i18n (простой, без next-intl)
3 языка: DE (default), SK, EN
Все тексты в lib/translations.ts
Переключение через React Context (LanguageProvider)

### Компоненты
- 'use client' только где state/effects
- Все тексты через useTranslation() хук
