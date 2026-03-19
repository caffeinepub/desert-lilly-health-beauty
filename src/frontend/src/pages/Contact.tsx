import { Button } from "@/components/ui/button";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { Clock, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  useSeoMeta({
    title:
      "Contact Desert Lilly Health & Beauty | Brisbane Beauty Salon — Book or Enquire",
    description:
      "Get in touch with Desert Lilly Health & Beauty — Brisbane's trusted beauty salon. WhatsApp us at 0420 739 265, find us on the map, or book your appointment online. Friendly team, quick replies!",
    ogImage: "/assets/generated/desert-lilly-contact.dim_1200x400.jpg",
  });

  return (
    <div itemScope itemType="https://schema.org/BeautySalon">
      <meta itemProp="name" content="Desert Lilly Health & Beauty" />
      <meta itemProp="telephone" content="+61420739265" />
      <meta itemProp="address" content="Brisbane, QLD, Australia" />

      {/* Hero Image */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <img
          src="/assets/generated/desert-lilly-contact.dim_1200x400.jpg"
          alt="Desert Lilly Health & Beauty Brisbane — welcoming salon reception and luxury beauty studio"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/50 flex flex-col items-center justify-center text-center px-4">
          <p className="text-gold text-sm tracking-widest uppercase mb-3">
            We'd Love to Hear From You
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-background font-bold mb-3">
            Contact Us
          </h1>
          <p className="text-background/90 max-w-xl mx-auto">
            Got a question? Want to book? Just want to say g'day? Reach out
            anytime — we're heaps friendly!
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-blush rounded-xl">
            <MapPin size={36} className="text-primary mx-auto mb-3" />
            <h2 className="font-display text-lg text-foreground mb-2">
              Our Location
            </h2>
            <p className="text-muted-foreground text-sm">
              Brisbane, QLD, Australia
            </p>
            <a
              href="https://maps.app.goo.gl/QbcXxznZZCKEQZkV9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm font-semibold hover:underline mt-2 inline-block"
              data-ocid="contact.link"
            >
              Get Directions →
            </a>
          </div>
          <div className="text-center p-6 bg-blush rounded-xl">
            <Phone size={36} className="text-primary mx-auto mb-3" />
            <h2 className="font-display text-lg text-foreground mb-2">
              WhatsApp Us
            </h2>
            <p className="text-muted-foreground text-sm mb-3">
              Quick replies, friendly chat!
            </p>
            <a
              href="https://wa.me/61420739265"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.button"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <SiWhatsapp size={16} /> 0420 739 265
              </Button>
            </a>
          </div>
          <div className="text-center p-6 bg-blush rounded-xl">
            <Clock size={36} className="text-primary mx-auto mb-3" />
            <h2 className="font-display text-lg text-foreground mb-2">
              Opening Hours
            </h2>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Mon – Fri: 9:00am – 7:00pm</p>
              <p>Saturday: 9:00am – 6:00pm</p>
              <p>Sunday: 10:00am – 5:00pm</p>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="prose max-w-none space-y-5 text-foreground/80 mb-12">
          <h2 className="font-display text-2xl text-foreground">
            Brisbane's Trusted Beauty Salon — Desert Lilly Health & Beauty
          </h2>
          <p>
            At <strong>Desert Lilly Health & Beauty</strong>, we've built our
            reputation in Brisbane one client at a time — through consistently
            excellent results, genuine care, and the kind of professional
            service that keeps people coming back year after year. We are proud
            to be a trusted destination for hair, skin, nails, waxing, makeup,
            brows, and lash services across South East Queensland.
          </p>
          <p>
            Our team of qualified, experienced beauty therapists and stylists
            work together in a warm, welcoming salon environment designed to
            make every visit feel special. Whether you're popping in for a quick
            brow shape or treating yourself to a full day of pampering, you'll
            be greeted with a smile and taken care of every step of the way.
          </p>
          <p>
            We are passionate about staying at the forefront of the industry.
            Our team regularly participates in professional development
            training, product education, and technique workshops to ensure we're
            always offering Brisbane clients the best, most up-to-date
            treatments available. We don't just follow trends — we understand
            the science behind the treatments we deliver.
          </p>
          <p>
            Hygiene and safety are non-negotiable at Desert Lilly. We follow
            strict sterilisation and sanitation protocols across all service
            areas — from waxing and nails to lash treatments and facials. You
            can always trust that your health and safety are fully protected in
            our care.
          </p>
          <p>
            Ready to experience the Desert Lilly difference? Book your
            appointment online in seconds, or send us a WhatsApp message at{" "}
            <strong>0420 739 265</strong> and one of our friendly team members
            will get back to you quickly. We can't wait to have you in.
          </p>
        </div>
      </section>

      {/* Google Map */}
      <section
        className="h-96"
        aria-label="Desert Lilly Health & Beauty location map Brisbane"
      >
        <iframe
          title="Desert Lilly Health & Beauty on Google Maps Brisbane"
          src="https://www.google.com/maps?q=Desert+Lilly+Health+%26+Beauty+Brisbane&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          data-ocid="contact.map_marker"
        />
      </section>
    </div>
  );
}
