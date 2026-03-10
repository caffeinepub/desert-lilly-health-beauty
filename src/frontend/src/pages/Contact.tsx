import { Button } from "@/components/ui/button";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { Clock, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  useSeoMeta({
    title: "Contact Desert Lilly Health & Beauty | Brisbane Beauty Salon",
    description:
      "Get in touch with Desert Lilly Health & Beauty in Brisbane. WhatsApp us at 0420 739 265 or visit us. We'd love to hear from you!",
  });

  return (
    <div>
      {/* Hero */}
      <section className="rose-gradient py-16 text-center">
        <p className="text-gold text-sm tracking-widest uppercase mb-3">
          We'd Love to Hear From You
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          Contact Us
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Got a question? Want to book? Just want to say g'day? Reach out
          anytime — we're heaps friendly!
        </p>
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
