import { Button } from "@/components/ui/button";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { Link } from "@tanstack/react-router";

interface ServicePageProps {
  title: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  heading: string;
  subheading: string;
  intro: string;
  sections: { heading: string; content: string }[];
  features: string[];
  priceHint: string;
}

export default function ServicePageTemplate({
  title,
  metaDescription,
  heroImage,
  heroImageAlt,
  heading,
  subheading,
  intro,
  sections,
  features,
  priceHint,
}: ServicePageProps) {
  useSeoMeta({ title, description: metaDescription, ogImage: heroImage });

  return (
    <article>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="w-full h-full object-cover"
          loading="eager"
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

      {/* Sections */}
      <section className="bg-blush py-12">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-2xl text-rose-deep mb-3">
                {s.heading}
              </h2>
              <p className="leading-relaxed text-foreground/80">{s.content}</p>
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
