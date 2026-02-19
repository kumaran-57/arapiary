"use client";

import { honeyBasedProducts } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { useLanguage } from "@/lib/lang/context";

export function HoneyBasedSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            {lang === "en" ? "Beyond Honey" : "தேனைத் தாண்டி"}
          </span>

          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-balance ${
              lang === "ta" ? "font-[var(--font-tamil)]" : ""
            }`}
          >
            {lang === "en"
              ? "Honey-Based Products"
              : "தேனை அடிப்படையாக கொண்ட தயாரிப்புகள்"}
          </h2>

          <p
            className={`max-w-2xl mx-auto text-muted-foreground mt-4 text-lg ${
              lang === "ta" ? "font-[var(--font-tamil)]" : ""
            }`}
          >
            {lang === "en"
              ? "Explore our range of natural products made with pure honey and beeswax — from skincare to home essentials."
              : "தூய தேன் மற்றும் தேன் மெழுகைப் பயன்படுத்தி தயாரிக்கப்பட்ட இயற்கை தயாரிப்புகளை கண்டறியுங்கள் — தோல் பராமரிப்பிலிருந்து வீட்டு உபயோக பொருட்கள் வரை."}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {honeyBasedProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
