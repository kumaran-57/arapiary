"use client";

import Image from "next/image";
import { beekeepingMaterials } from "@/lib/data";
import { useLanguage } from "@/lib/lang/context";

export function MaterialsSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            {lang === "en" ? "For Beekeepers" : "தேனீ வளர்ப்பவர்களுக்கு"}
          </span>

          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-balance ${
              lang === "ta" ? "font-[var(--font-tamil)]" : ""
            }`}
          >
            {lang === "en"
              ? "Beekeeping Materials"
              : "தேனீ வளர்ப்பு உபகரணங்கள்"}
          </h2>

          <p
            className={`max-w-2xl mx-auto text-muted-foreground mt-4 text-lg ${
              lang === "ta" ? "font-[var(--font-tamil)]" : ""
            }`}
          >
            {lang === "en"
              ? "Quality equipment and supplies for starting or expanding your beekeeping journey."
              : "தேனீ வளர்ப்பை தொடங்க அல்லது விரிவுபடுத்த தேவையான உயர்தர உபகரணங்கள் மற்றும் பொருட்கள்."}
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {beekeepingMaterials.map((material) => (
            <MaterialCard
              key={material.id}
              name={material.name}
              description={material.description}
              image={material.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialCard({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className="group bg-card rounded-xl shadow-md overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      <div className="relative h-40 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
