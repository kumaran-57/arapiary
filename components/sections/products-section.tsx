"use client";

import { honeyProducts } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { useLanguage } from "@/lib/lang/context";

export function ProductsSection() {
  const { lang } = useLanguage();

  const featuredProduct = honeyProducts.find((p) => p.featured);
  const otherProducts = honeyProducts.filter((p) => !p.featured);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            {lang === "en" ? "Our Collection" : "எங்கள் தொகுப்பு"}
          </span>

          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-balance ${
              lang === "ta" ? "font-[var(--font-tamil)]" : ""
            }`}
          >
            {lang === "en"
              ? "Premium Honey Products"
              : "உயர்தர தேன் தயாரிப்புகள்"}
          </h2>

          <p
            className={`max-w-2xl mx-auto text-muted-foreground mt-4 text-lg ${
              lang === "ta" ? "font-[var(--font-tamil)]" : ""
            }`}
          >
            {lang === "en"
              ? "Discover our range of pure, organic honey varieties — each one carefully harvested and packed to preserve its natural goodness."
              : "தூய மற்றும் இயற்கையான தேன் வகைகளை கண்டறியுங்கள் — ஒவ்வொன்றும் அதன் இயற்கை தன்மையை பாதுகாக்க கவனமாக சேகரிக்கப்பட்டு பதப்படுத்தப்பட்டுள்ளது."}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Product */}
          {featuredProduct && (
            <ProductCard
              name={featuredProduct.name}
              description={featuredProduct.description}
              price={featuredProduct.price}
              image={featuredProduct.image}
              featured={featuredProduct.featured}
              benefits={featuredProduct.benefits}
            />
          )}

          {/* Other Products */}
          {otherProducts.map((product) => (
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
