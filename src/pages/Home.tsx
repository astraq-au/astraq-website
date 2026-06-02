/**
 * ASTRAQ Home Page
 * Design: Dark Sci-Fi — deep black background, white text, cold blue accents
 * Sections: Hero → Stats → Products → Footer
 */

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#050505", color: "#ffffff" }}
    >
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <Footer />
    </div>
  );
}
