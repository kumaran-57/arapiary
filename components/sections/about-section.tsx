"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/lang/context";

export function AboutSection() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/beekeeper.jpeg"
                alt="Traditional beekeeper inspecting honeycomb"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                {lang === "en" ? "Our Story" : "எங்கள் கதை"}
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
                {lang === "en"
                  ? "Tradition Meets Purity"
                  : "பாரம்பரியமும் தூய்மையும் ஒன்றாக"}
              </h2>
            </div>

            {/* Description */}
            {lang === "en" ? (
              <p className="text-muted-foreground text-lg leading-relaxed">
                At <strong>Golden Hive</strong>, we preserve the ancient art of
                beekeeping while delivering the purest honey to your table.
                Our journey began with a passion for authentic, unadulterated honey.
              </p>
            ) : (
              <p className="text-muted-foreground text-lg leading-relaxed font-[var(--font-tamil)]">
                <strong>Golden Hive</strong> இல், தேனீ வளர்ப்பின் பாரம்பரிய கலை
                பாதுகாக்கப்பட்டு, மிகத் தூய தேன் உங்களிடம் கொண்டு சேர்க்கப்படுகிறது.
              </p>
            )}

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <FeatureCard
                icon={<LeafIcon className="w-6 h-6" />}
                title={lang === "en" ? "Organic Farming" : "இயற்கை விவசாயம்"}
                description={
                  lang === "en"
                    ? "Pesticide-free natural environments."
                    : "பூச்சிக்கொல்லி இல்லாத இயற்கை சூழல்."
                }
              />

              <FeatureCard
                icon={<HandIcon className="w-6 h-6" />}
                title={lang === "en" ? "Traditional Harvesting" : "பாரம்பரிய சேகரிப்பு"}
                description={
                  lang === "en"
                    ? "Time-tested harvesting methods."
                    : "நேரம் சோதித்த பாரம்பரிய முறைகள்."
                }
              />

              <FeatureCard
                icon={<ShieldIcon className="w-6 h-6" />}
                title={lang === "en" ? "Chemical-Free" : "இரசாயனமற்றது"}
                description={
                  lang === "en"
                    ? "No preservatives or additives."
                    : "எந்த இரசாயனமும் இல்லை."
                }
              />

              <FeatureCard
                icon={<HeartIcon className="w-6 h-6" />}
                title={lang === "en" ? "Sustainable Practices" : "நிலைத்த நடைமுறை"}
                description={
                  lang === "en"
                    ? "Protecting bees and nature."
                    : "தேனீக்கள் மற்றும் இயற்கையை பாதுகாத்தல்."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= Reusable ================= */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

/* ================= ICONS (REQUIRED) ================= */

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    </svg>
  );
}

function HandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M18 11V6a2 2 0 0 0-2-2" />
      <path d="M14 10V4a2 2 0 0 0-2-2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v8" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
