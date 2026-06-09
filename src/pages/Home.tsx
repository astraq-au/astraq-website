/**
 * ASTRAQ Home Page
 * Sections: Hero → Products → Stats → Footer
 */

import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
/*import StatsSection from "../components/StatsSection";*/

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
