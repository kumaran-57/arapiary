"use client";

import React from "react"

import { useState } from "react";
import { useLanguage } from "@/lib/lang/context";

export function ContactSection() {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`text-primary font-semibold uppercase tracking-wider text-sm ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
          >
            {t.contact.label}
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 text-balance ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
          >
            {t.contact.title}
          </h2>
          <p
            className={`max-w-2xl mx-auto text-muted-foreground mt-4 text-lg ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
          >
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            {submitted ? (
              <div className="h-full flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3
                    className={`font-serif text-2xl font-bold text-card-foreground mb-2 ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
                  >
                    {t.contact.form.success}
                  </h3>
                  <p
                    className={`text-muted-foreground ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
                  >
                    {t.contact.form.successMessage}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium text-card-foreground mb-2 ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium text-card-foreground mb-2 ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium text-card-foreground mb-2 ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:brightness-110 transition-all duration-300 hover:scale-[1.02] ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
                >
                  {t.contact.form.submit}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <ContactCard
                icon={<MapPinIcon className="w-6 h-6" />}
                title={t.contact.info.visit}
                content={t.contact.info.address}
                lang={lang}
              />
              <ContactCard
                icon={<PhoneIcon className="w-6 h-6" />}
                title={t.contact.info.call}
                content={t.contact.info.phone}
                href="tel:+918122001006"
                lang={lang}
              />
              <ContactCard
                icon={<MailIcon className="w-6 h-6" />}
                title={t.contact.info.email}
                content={t.contact.info.emailAddress}
                href={`mailto:${t.contact.info.emailAddress}`}
                lang={lang}
              />
              <ContactCard
                icon={<ClockIcon className="w-6 h-6" />}
                title={t.contact.info.hours}
                content={t.contact.info.hoursValue}
                lang={lang}
              />
            </div>

            {/* Map */}
            <div className="h-64 rounded-xl overflow-hidden border border-border shadow-lg">
              <iframe
              
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52459.095266587196!2d78.34194459449061!3d11.90977410364352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac71a2787c174b%3A0xa2050bf3668404a!2sar%20apiary!5e1!3m2!1sen!2sin!4v1770121375031!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AR Apiary Location - Tamil Nadu"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  content,
  href,
  lang,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
  lang: "en" | "ta";
}) {
  const ContentWrapper = href ? "a" : "div";
  return (
    <div className="bg-card p-4 rounded-xl border border-border">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          {icon}
        </div>
        <div>
          <h3
            className={`font-semibold text-card-foreground text-sm ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
          >
            {title}
          </h3>
          <ContentWrapper
            {...(href
              ? { href, className: "hover:text-primary transition-colors" }
              : {})}
          >
            <p
              className={`text-muted-foreground text-sm mt-1 ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
            >
              {content}
            </p>
          </ContentWrapper>
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

function MapPinIcon({ className }: { className?: string }) {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
