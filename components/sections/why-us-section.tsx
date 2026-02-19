"use client";

import { whyChooseUs } from "@/lib/data";
import { useLanguage } from "@/lib/lang/context";

export function WhyUsSection() {
  const { lang } = useLanguage();

  return (
    <section id="why-us" className="py-20 bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            {lang === "en" ? "Our Promise" : "எங்கள் உறுதி"}
          </span>

          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-balance ${
              lang === "ta" ? "font-[var(--font-tamil)]" : ""
            }`}
          >
            {lang === "en"
              ? "Why Choose Golden Hive?"
              : "ஏன் Golden Hive தேர்வு செய்ய வேண்டும்?"}
          </h2>

          <p
            className={`max-w-2xl mx-auto text-accent-foreground/80 mt-4 text-lg ${
              lang === "ta" ? "font-[var(--font-tamil)]" : ""
            }`}
          >
            {lang === "en"
              ? "We're committed to delivering the finest quality honey while supporting sustainable beekeeping practices."
              : "நிலைத்த தேனீ வளர்ப்பு நடைமுறைகளை ஆதரித்து, மிக உயர்தர தேனை வழங்க நாங்கள் உறுதியளிக்கிறோம்."}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {whyChooseUs.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={
                lang === "en"
                  ? item.title
                  : translateTitle(item.icon)
              }
              description={
                lang === "en"
                  ? item.description
                  : translateDescription(item.icon)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Feature Card ================= */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center group">
      <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
        <IconComponent icon={icon} className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-serif text-lg font-semibold mb-2">{title}</h3>
      <p className="text-accent-foreground/80 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ================= Tamil Translations ================= */

function translateTitle(icon: string) {
  switch (icon) {
    case "leaf":
      return "100% இயற்கை";
    case "users":
      return "நேரடி விவசாயிகள்";
    case "badge-check":
      return "தர சோதனை";
    case "recycle":
      return "சுற்றுச்சூழல் பாதுகாப்பு";
    case "history":
      return "பாரம்பரிய முறை";
    default:
      return "";
  }
}

function translateDescription(icon: string) {
  switch (icon) {
    case "leaf":
      return "பூச்சிக்கொல்லி இல்லாத இயற்கை சூழலில் பெறப்படும் தூய தேன்.";
    case "users":
      return "நேரடி தேனீ வளர்ப்பவர்களுடன் இணைந்து செயல்படுகிறோம்.";
    case "badge-check":
      return "ஒவ்வொரு தொகுதியும் தர சோதனை செய்யப்பட்ட பின்பு வழங்கப்படுகிறது.";
    case "recycle":
      return "சுற்றுச்சூழலை பாதுகாக்கும் மறுசுழற்சி பொருட்கள்.";
    case "history":
      return "தேனின் தரத்தை பாதுகாக்கும் பாரம்பரிய சேகரிப்பு முறை.";
    default:
      return "";
  }
}

/* ================= Icons (UNCHANGED) ================= */

function IconComponent({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  switch (icon) {
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="9" cy="7" r="4" />
          <path d="M16 21v-2a4 4 0 0 0-4-4H6" />
        </svg>
      );
    case "badge-check":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "recycle":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M12 5v14" />
        </svg>
      );
    case "history":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    default:
      return null;
  }
}
