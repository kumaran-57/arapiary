"use client";

import Image from "next/image";
import { WhatsAppButton } from "./whatsapp-button";
import { useLanguage } from "@/lib/lang/context";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  benefits?: string[];
}

export function ProductCard({
  name,
  description,
  price,
  image,
  featured,
  benefits,
}: ProductCardProps) {
  const { lang, t } = useLanguage();

  if (featured) {
    return (
      <div className="col-span-full bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-auto">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className={`absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
            >
              {t.products.featured}
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <h3
              className={`font-serif text-3xl font-bold text-card-foreground mb-4 ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
            >
              {name}
            </h3>
            <p
              className={`text-muted-foreground leading-relaxed mb-6 ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
            >
              {description}
            </p>
            {benefits && benefits.length > 0 && (
              <ul className="space-y-2 mb-6">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className={`flex items-center gap-2 text-card-foreground ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
                  >
                    <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-3xl font-bold text-accent">
                &#x20B9;{price}
              </span>
              <WhatsAppButton productName={name} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-card rounded-xl shadow-md overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3
          className={`font-serif text-xl font-semibold text-card-foreground mb-2 ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
        >
          {name}
        </h3>
        <p
          className={`text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
        >
          {description}
        </p>
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold text-accent">
            &#x20B9;{price}
          </span>
          <WhatsAppButton productName={name} className="w-full text-sm py-2" />
        </div>
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
