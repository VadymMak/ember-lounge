export interface NavItem {
  label: string;
  href: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: boolean;
}

export interface EventItem {
  id: string;
  icon: string;
  day: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  initial: string;
  text: string;
  rating: number;
  source: string;
}

export interface ContactItem {
  icon: string;
  title: string;
  lines: string[];
}

export interface ReservationZone {
  id: string;
  label: string;
}

export interface QuickReply {
  id: string;
  label: string;
  response: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export interface ChatConfig {
  greeting: string;
  quickReplies: QuickReply[];
  fallbackResponse: string;
  whatsappNumber: string;
}

export interface ImageMap {
  hero: string;
  about: string;
  gallery: string[];
}

export type Language = 'de' | 'sk' | 'en';

export type TranslationKey =
  | 'nav.home'
  | 'nav.about'
  | 'nav.menu'
  | 'nav.gallery'
  | 'nav.events'
  | 'nav.reservation'
  | 'nav.contact'
  | 'hero.tagline'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.cta.reserve'
  | 'hero.cta.menu'
  | 'about.badge'
  | 'about.title'
  | 'about.text1'
  | 'about.text2'
  | 'about.stat1.value'
  | 'about.stat1.label'
  | 'about.stat2.value'
  | 'about.stat2.label'
  | 'about.stat3.value'
  | 'about.stat3.label'
  | 'menu.badge'
  | 'menu.title'
  | 'menu.subtitle'
  | 'menu.tab.hookah'
  | 'menu.tab.cocktails'
  | 'menu.tab.tea'
  | 'menu.tab.snacks'
  | 'gallery.badge'
  | 'gallery.title'
  | 'gallery.subtitle'
  | 'events.badge'
  | 'events.title'
  | 'events.subtitle'
  | 'reservation.badge'
  | 'reservation.title'
  | 'reservation.subtitle'
  | 'reservation.name'
  | 'reservation.phone'
  | 'reservation.date'
  | 'reservation.time'
  | 'reservation.guests'
  | 'reservation.zone'
  | 'reservation.message'
  | 'reservation.submit'
  | 'reservation.success'
  | 'reviews.badge'
  | 'reviews.title'
  | 'reviews.subtitle'
  | 'contact.badge'
  | 'contact.title'
  | 'contact.subtitle'
  | 'footer.tagline'
  | 'footer.rights'
  | 'chat.greeting'
  | 'chat.placeholder'
  | 'chat.quickreply.menu'
  | 'chat.quickreply.reservation'
  | 'chat.quickreply.hours'
  | 'chat.fallback'
  | 'chat.whatsapp';
