import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProductsSection } from "@/components/sections/products-section";
import { HoneyBasedSection } from "@/components/sections/honey-based-section";
import { MaterialsSection } from "@/components/sections/materials-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <HoneyBasedSection />
      <MaterialsSection />
      <WhyUsSection />
      <ContactSection />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
