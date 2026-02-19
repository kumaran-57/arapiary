"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/lang/context";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function HeroSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ================= VIDEO BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-honey.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">

          {/* Bee Icon */}
          <div className="flex justify-center">
            <BeeIcon className="w-16 h-16 text-primary animate-bounce" />
          </div>

          {/* Heading */}
          <h1
            className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance ${
              lang === "ta" ? "font-[var(--font-tamil)]" : ""
            }`}
          >
            {lang === "en" ? (
              <>
                Pure <span className="text-primary">•</span> Natural{" "}
                <span className="text-primary">•</span> Organic Honey
              </>
            ) : (
              <>தூய • இயற்கை • உயிர் தேன்</>
            )}
          </h1>

          {/* Description */}
          <p
            className={`max-w-2xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed ${
              lang === "ta" ? "font-[var(--font-tamil)]" : ""
            }`}
          >
            {lang === "en"
              ? "Experience the golden goodness of honey harvested through traditional beekeeping methods. Our honey is 100% pure, chemical-free, and sourced directly from pristine natural environments."
              : "பாரம்பரிய தேனீ வளர்ப்பு முறைகளில் சேகரிக்கப்பட்ட தூய தேனின் இனிமையை அனுபவிக்கவும். எங்கள் தேன் 100% தூயது, இரசாயனமற்றது மற்றும் இயற்கை சூழல்களில் இருந்து பெறப்பட்டது."}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#products"
              className={`inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all duration-300 hover:scale-105 shadow-lg ${
                lang === "ta" ? "font-[var(--font-tamil)]" : ""
              }`}
            >
              {lang === "en" ? "View Products" : "தயாரிப்புகளை பார்க்க"}
            </Link>

            <WhatsAppButton
              productName={lang === "en" ? "General Enquiry" : "பொது விசாரணை"}
              variant="primary"
              className="shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDownIcon className="w-8 h-8 text-white/80" />
      </div>
    </section>
  );
}

/* ================= Icons ================= */

function BeeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <ellipse cx="12" cy="14" rx="7" ry="6" />
      <circle cx="12" cy="7" r="4" />
      <path
        d="M6 10c-2-1-4-1-5 1M18 10c2-1 4-1 5 1"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
