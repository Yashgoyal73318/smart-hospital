import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <TestimonialsCarousel />
      <ContactForm />
      <Footer />
    </>
  );
}