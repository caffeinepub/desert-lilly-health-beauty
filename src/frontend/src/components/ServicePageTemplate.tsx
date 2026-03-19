import { Button } from "@/components/ui/button";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { Link } from "@tanstack/react-router";

interface Section {
  heading: string;
  content: string;
  image?: string;
  imageAlt?: string;
}

interface ServicePageProps {
  title: string;
  metaDescription: string;
  canonicalPath?: string;
  heroImage: string;
  heroImageAlt: string;
  heading: string;
  subheading: string;
  intro: string;
  whyChooseUs?: string;
  sections: Section[];
  features: string[];
  priceHint: string;
  trustNote?: string;
  closing?: string;
}

export default function ServicePageTemplate({
  title,
  metaDescription,
  heroImage,
  heroImageAlt,
  heading,
  subheading,
  intro,
  whyChooseUs,
  sections,
  features,
  priceHint,
  trustNote,
  closing,
}: ServicePageProps) {
  useSeoMeta({ title, description: metaDescription, ogImage: heroImage });

  return (
    <article itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content="Desert Lilly Health & Beauty" />
      <meta itemProp="address" content="Brisbane, QLD, Australia" />

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="w-full h-full object-cover"
          loading="eager"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-foreground/50 flex flex-col items-center justify-center text-center px-4">
          <p className="text-gold font-display text-sm tracking-widest uppercase mb-2">
            {subheading}
          </p>
          <h1 className="font-display text-3xl md:text-5xl text-background font-bold max-w-2xl leading-tight">
            {heading}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>
      </section>

      {/* Why Choose Us */}
      {whyChooseUs && (
        <section className="container mx-auto px-4 pb-8 max-w-3xl">
          <div className="bg-blush border border-primary/20 rounded-2xl p-8">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Why Brisbane Clients Choose Desert Lilly
            </h2>
            <p className="leading-relaxed text-foreground/80">{whyChooseUs}</p>
          </div>
        </section>
      )}

      {/* Sections */}
      <section className="bg-blush py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-14">
          {sections.map((s, i) => (
            <div
              key={s.heading}
              className={`grid grid-cols-1 ${s.image ? "md:grid-cols-2" : ""} gap-8 items-center`}
            >
              <div className={i % 2 !== 0 && s.image ? "md:order-2" : ""}>
                <h2 className="font-display text-2xl text-rose-deep mb-3">
                  {s.heading}
                </h2>
                <p className="leading-relaxed text-foreground/80">
                  {s.content}
                </p>
              </div>
              {s.image && (
                <div
                  className={`rounded-2xl overflow-hidden shadow-md ${i % 2 !== 0 ? "md:order-1" : ""}`}
                >
                  <img
                    src={s.image}
                    alt={s.imageAlt ?? s.heading}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="font-display text-2xl text-rose-deep mb-6">
          What You Get
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="text-gold mt-1">✦</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Trust Note */}
      {trustNote && (
        <section className="container mx-auto px-4 pb-10 max-w-3xl">
          <div className="flex gap-4 items-start bg-background border border-border rounded-xl p-6 shadow-xs">
            <span className="text-2xl">🏅</span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {trustNote}
            </p>
          </div>
        </section>
      )}

      {/* Closing paragraph */}
      {closing && (
        <section className="container mx-auto px-4 pb-10 max-w-3xl">
          <p className="leading-relaxed text-foreground/80 text-lg">
            {closing}
          </p>
        </section>
      )}

      {/* Pricing hint + CTA */}
      <section className="rose-gradient py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Pricing
          </p>
          <p className="font-display text-xl text-foreground mb-6">
            {priceHint}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-rose"
                data-ocid="service.primary_button"
              >
                Book This Service
              </Button>
            </Link>
            <a
              href="https://wa.me/61420739265"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-blush"
                data-ocid="service.secondary_button"
              >
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
