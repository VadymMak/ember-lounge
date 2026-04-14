import type { ImageMap, MenuCategory, EventItem, Review, ContactItem, ReservationZone, ChatConfig } from './types';

export const USE_LOCAL_IMAGES = false;

export const IMAGES: ImageMap = USE_LOCAL_IMAGES
  ? {
      hero: '/images/hero.jpg',
      about: '/images/about.jpg',
      gallery: [
        '/images/gallery/1.jpg',
        '/images/gallery/2.jpg',
        '/images/gallery/3.jpg',
        '/images/gallery/4.jpg',
        '/images/gallery/5.jpg',
      ],
    }
  : {
      hero: 'https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?w=1600&q=80',
      about: 'https://images.unsplash.com/photo-1536679780597-567b55dde010?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1536679780597-567b55dde010?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?w=500&h=350&fit=crop',
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&h=350&fit=crop',
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&h=350&fit=crop',
        'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=500&h=350&fit=crop',
      ],
    };

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'hookah',
    label: 'Hookah',
    items: [
      { id: 'h1', name: 'Classic Orient', description: 'Apfel, Minze, Melone — zeitloser Genuss', price: 15 },
      { id: 'h2', name: 'Ember Special', description: 'Granatapfel, Rose, Erdbeere — unser Signature', price: 18 },
      { id: 'h3', name: 'Tropical Breeze', description: 'Mango, Kokosnuss, Ananas — exotisch & frisch', price: 17 },
      { id: 'h4', name: 'Berry Bliss', description: 'Blaubeere, Himbeere, Brombeere — intensiv süß', price: 16 },
      { id: 'h5', name: 'Royal Mint', description: 'Doppel-Minze, Eismenthol — erfrischend & stark', price: 15 },
      { id: 'h6', name: 'Desert Rose', description: 'Hibiskus, Jasmin, Litchi — blumig & verführerisch', price: 28 },
    ],
  },
  {
    id: 'cocktails',
    label: 'Cocktails',
    items: [
      { id: 'c1', name: 'Ember Negroni', description: 'Gin, Campari, Süßer Vermouth, Orangenzeste', price: 13 },
      { id: 'c2', name: 'Smoky Paloma', description: 'Mezcal, Grapefruitsaft, Salz, Limette', price: 14 },
      { id: 'c3', name: 'Golden Hour', description: 'Bourbon, Honig, Zitrone, Thymian', price: 12 },
      { id: 'c4', name: 'Rose Spritz', description: 'Rosé Wein, Elderflower, Soda, Himbeere', price: 8 },
    ],
  },
  {
    id: 'tea',
    label: 'Tee',
    items: [
      { id: 't1', name: 'Arabischer Minztee', description: 'Traditioneller Gunpowder-Tee mit frischer Minze', price: 4 },
      { id: 't2', name: 'Saffron Chai', description: 'Schwarztee, Gewürze, Safran, Milch', price: 6 },
      { id: 't3', name: 'Rose Hibiscus', description: 'Hibiskus, Rosenblüten, Hagebutte — kalt oder heiß', price: 5 },
    ],
  },
  {
    id: 'snacks',
    label: 'Snacks',
    items: [
      { id: 's1', name: 'Mezze Platte', description: 'Hummus, Baba Ganoush, Oliven, Pita', price: 12 },
      { id: 's2', name: 'Halloumi Fries', description: 'Frittierter Halloumi, Zitronen-Aioli, Kräuter', price: 9 },
      { id: 's3', name: 'Bruschetta Trio', description: 'Tomate, Pesto, Trüffel — je eine Scheibe', price: 8 },
      { id: 's4', name: 'Dessert Box', description: 'Baklava, Turkish Delight, Pistazienkonfekt', price: 6 },
    ],
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    icon: '🎵',
    day: 'Freitag',
    title: 'DJ Night',
    description: 'Orientalische Beats trifft moderne Elektronik. Unsere Resident-DJs schaffen die perfekte Atmosphäre für unvergessliche Nächte.',
  },
  {
    id: 'e2',
    icon: '🎲',
    day: 'Mittwoch',
    title: 'Game Night',
    description: 'Backgammon, Schach und Domino. Herausfordere deine Freunde in entspannter Atmosphäre mit einem Hookah in der Hand.',
  },
  {
    id: 'e3',
    icon: '🍹',
    day: 'Samstag',
    title: 'Cocktail Special',
    description: 'Jeder Signature-Cocktail zu einem besonderen Preis. Lass dich von unseren Barkeepern durch die Karte führen.',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Anna M.',
    initial: 'A',
    text: 'Absolut beeindruckende Atmosphäre! Die Hookah-Qualität ist unübertroffen und das Personal ist unglaublich aufmerksam. Unser Lieblingsort für besondere Abende.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 'r2',
    name: 'Tobias K.',
    initial: 'T',
    text: 'Das beste Hookah-Lounge in Berlin. Der Ember Special ist einfach phänomenal. Die Cocktails sind kreativ und perfekt gemacht. Wir kommen immer wieder.',
    rating: 5,
    source: 'TripAdvisor',
  },
  {
    id: 'r3',
    name: 'Sophia L.',
    initial: 'S',
    text: 'Ein verstecktes Juwel in der Stadt. Die Kombination aus orientalischem Flair und modernem Design ist perfekt. Der Saffron Chai ist ein Traum!',
    rating: 5,
    source: 'Google',
  },
  {
    id: 'r4',
    name: 'Marco D.',
    initial: 'M',
    text: 'Wir haben unseren Firmenabend hier gefeiert — alle waren begeistert. Der VIP-Bereich ist luxuriös und der Service erstklassig. Absolute Empfehlung!',
    rating: 5,
    source: 'Yelp',
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: '📍',
    title: 'Adresse',
    lines: ['Kurfürstendamm 42', '10719 Berlin, Deutschland'],
  },
  {
    icon: '📞',
    title: 'Telefon',
    lines: ['+49 30 1234 5678'],
  },
  {
    icon: '✉️',
    title: 'E-Mail',
    lines: ['info@ember-lounge.de'],
  },
  {
    icon: '🕐',
    title: 'Öffnungszeiten',
    lines: ['Mo–Do: 16:00 – 02:00', 'Fr–Sa: 16:00 – 03:00', 'So: 17:00 – 01:00'],
  },
];

export const RESERVATION_ZONES: ReservationZone[] = [
  { id: 'lounge', label: 'Lounge' },
  { id: 'vip', label: 'VIP' },
  { id: 'terrasse', label: 'Terrasse' },
];

export const CHAT_CONFIG: ChatConfig = {
  greeting: 'Herzlich willkommen im Ember Lounge! 🔥 Wie kann ich Ihnen helfen?',
  quickReplies: [
    {
      id: 'menu',
      label: 'Speisekarte',
      response: 'Unsere Karte umfasst Premium Hookahs (€15–28), Signature Cocktails (€8–14), orientalische Tees (€4–6) und Snacks (€6–12). Besuchen Sie uns für das volle Erlebnis!',
    },
    {
      id: 'reservation',
      label: 'Reservierung',
      response: 'Sie können direkt über unser Formular reservieren oder uns unter +49 30 1234 5678 anrufen. Wir empfehlen eine Reservierung für Wochenenden!',
    },
    {
      id: 'hours',
      label: 'Öffnungszeiten',
      response: 'Mo–Do: 16:00–02:00 | Fr–Sa: 16:00–03:00 | So: 17:00–01:00. Wir freuen uns auf Ihren Besuch!',
    },
  ],
  fallbackResponse: 'Danke für Ihre Nachricht! Für persönliche Anfragen erreichen Sie uns unter +49 30 1234 5678 oder schreiben Sie uns auf WhatsApp.',
  whatsappNumber: '+4930123456789',
};
