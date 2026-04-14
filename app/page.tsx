import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import MenuSection from '@/components/sections/MenuSection';
import GallerySection from '@/components/sections/GallerySection';
import EventsSection from '@/components/sections/EventsSection';
import ReservationSection from '@/components/sections/ReservationSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/widgets/WhatsAppButton';
import ChatWidget from '@/components/widgets/ChatWidget';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <EventsSection />
        <ReservationSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </>
  );
}
