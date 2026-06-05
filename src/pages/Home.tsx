/**
 * ASTRAQ Home Page
 * Sections: Hero → Products → Footer
 */

import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#050505", color: "#ffffff" }}
    >
      <HeroSection />
      <ProductsSection />
      <Footer />
    </div>
  );
}
