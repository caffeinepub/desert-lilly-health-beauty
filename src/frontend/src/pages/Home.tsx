import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    name: "Hair Services",
    desc: "Cuts, colours, blowouts & treatments",
    href: "/services/hair",
    img: "/assets/generated/desert-lilly-hair.dim_800x500.jpg",
    alt: "Professional hair styling and colour at Desert Lilly Health & Beauty Brisbane",
  },
  {
    name: "Skin & Facial",
    desc: "Facials, peels & skin rejuvenation",
    href: "/services/skin",
    img: "/assets/generated/desert-lilly-skin.dim_800x500.jpg",
    alt: "Luxury facial skin treatment at Desert Lilly Health & Beauty Brisbane",
  },
  {
    name: "Nail Services",
    desc: "Manicures, pedicures & nail art",
    href: "/services/nails",
    img: "/assets/generated/desert-lilly-nails.dim_800x500.jpg",
    alt: "Beautiful gel nails and nail art at Desert Lilly Health & Beauty Brisbane",
  },
  {
    name: "Waxing",
    desc: "Gentle & effective hair removal",
    href: "/services/waxing",
    img: "/assets/generated/desert-lilly-waxing.dim_800x500.jpg",
    alt: "Professional body waxing service at Desert Lilly Health & Beauty Brisbane",
  },
  {
    name: "Makeup",
    desc: "Bridal, events & everyday glam",
    href: "/services/makeup",
    img: "/assets/generated/desert-lilly-makeup.dim_800x500.jpg",
    alt: "Professional bridal and event makeup artistry at Desert Lilly Health & Beauty Brisbane",
  },
  {
    name: "Brows & Lashes",
    desc: "Threading, tinting & lash extensions",
    href: "/services/brows-lashes",
    img: "/assets/generated/desert-lilly-brows.dim_800x500.jpg",
    alt: "Expert eyebrow threading and eyelash extensions at Desert Lilly Health & Beauty Brisbane",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    date: "March 2025",
    text: "Absolutely love this place! The girls are so talented and heaps friendly. Got my hair done for a wedding and it was bloody perfect. Will definitely be back!",
  },
  {
    name: "Jessica T.",
    rating: 5,
    date: "February 2025",
    text: "Best facial I've ever had in Brisbane. My skin was glowing for weeks afterwards. The staff are so professional and make you feel super relaxed the whole time.",
  },
  {
    name: "Michelle K.",
    rating: 5,
    date: "January 2025",
    text: "I reckon Desert Lilly is the best beauty salon in Brisbane! Came in for a full set of lash extensions and I'm obsessed. The attention to detail is incredible.",
  },
  {
    name: "Emma R.",
    rating: 5,
    date: "December 2024",
    text: "Treated myself to a mani-pedi and a brow shape and honestly felt like a new woman walking out. Such a lovely atmosphere and the staff are so warm and welcoming.",
  },
  {
    name: "Tanya W.",
    rating: 5,
    date: "November 2024",
    text: "Had my bridal makeup done here and I couldn't be happier! The team listened to exactly what I wanted and nailed it. Heaps of compliments on the day!",
  },
];

const faqs = [
  {
    q: "Where is Desert Lilly Health & Beauty located?",
    a: "We're based in beautiful Brisbane, QLD. You can find our exact location on the map below or ping us on WhatsApp at 0420 739 265 for directions!",
  },
  {
    q: "How do I book an appointment?",
    a: "Easy! Hit the Book Now button on our website, fill in your details, and your booking request will come straight to us. You can also WhatsApp us at 0420 739 265 — we're pretty quick to reply!",
  },
  {
    q: "What beauty services do you offer?",
    a: "We offer heaps of services — hair cuts & colour, facials, nail art, waxing, makeup, eyebrow threading, and lash extensions. Check out each service page for all the details.",
  },
  {
    q: "Do I need to make an appointment or can I walk in?",
    a: "We love bookings so we can give you the best experience! Walk-ins are welcome when we have space, but to avoid missing out, we reckon booking ahead is the way to go.",
  },
  {
    q: "How much do your services cost?",
    a: "Prices vary depending on the service and your hair length or skin type. We give you a full quote when you book. Our goal is to keep things affordable without cutting corners on quality!",
  },
  {
    q: "Do you offer bridal packages?",
    a: "Yes! We love making brides look stunning on their big day. Our bridal packages include makeup, hair styling, nail care, and more. Chat to us about a custom package for your wedding.",
  },
  {
    q: "What products do you use?",
    a: "We use top-quality, salon-grade products that are gentle on your skin and hair. We also have options for sensitive skin — just let us know when you book!",
  },
  {
    q: "Can I give Desert Lilly as a gift?",
    a: "Absolutely! We offer gift vouchers — perfect for birthdays, Mother's Day, or just because. Contact us on WhatsApp to organise one!",
  },
];

const trustPoints = [
  {
    icon: "🏅",
    title: "Fully Qualified Team",
    desc: "All our therapists hold nationally recognised qualifications and complete ongoing professional development.",
  },
  {
    icon: "🧴",
    title: "Premium Products Only",
    desc: "We use professional-grade, salon-quality products from trusted brands — gentle, effective, and safe for every skin and hair type.",
  },
  {
    icon: "✨",
    title: "Hundreds of Happy Clients",
    desc: "We've served hundreds of Brisbane locals and built our reputation on consistent, exceptional results you can see and feel.",
  },
  {
    icon: "🛡️",
    title: "Strict Hygiene Standards",
    desc: "Hospital-grade sterilisation on all tools. Clean single-use materials where required. Your safety is always our top priority.",
  },
];

export default function Home() {
  useSeoMeta({
    title:
      "Desert Lilly Health & Beauty | Best Beauty Salon in Brisbane — Hair, Skin, Nails & More",
    description:
      "Brisbane's trusted beauty salon. Expert hair cuts & colour, skin facials, nail art, waxing, bridal makeup and lash extensions. Qualified therapists. Book your appointment today!",
    ogImage: "/assets/generated/desert-lilly-hero.dim_1200x600.jpg",
  });

  return (
    <div itemScope itemType="https://schema.org/BeautySalon">
      <meta itemProp="name" content="Desert Lilly Health & Beauty" />
      <meta itemProp="telephone" content="+61420739265" />
      <meta itemProp="address" content="Brisbane, QLD, Australia" />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img
          src="/assets/generated/desert-lilly-hero.dim_1200x600.jpg"
          alt="Desert Lilly Health & Beauty Brisbane — luxury beauty salon interior with expert hair, skin, nail and makeup services"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-gold font-body text-sm tracking-widest uppercase mb-4">
              Brisbane's Premier Beauty Salon
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-background font-bold leading-tight mb-6">
              Desert Lilly
              <br />
              <span className="text-gold">Health & Beauty</span>
            </h1>
            <p className="text-background/90 text-lg leading-relaxed mb-8">
              We make you look and feel amazing. Come in for a trim, a facial,
              or a full glam makeover — we've got you covered, Brisbane!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-rose w-full sm:w-auto"
                  data-ocid="hero.primary_button"
                >
                  Book Your Appointment
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
                  className="border-background text-background hover:bg-background/10 w-full sm:w-auto"
                  data-ocid="hero.secondary_button"
                >
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm tracking-widest uppercase mb-3">
                About Us
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Brisbane's Most Trusted Beauty Team
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  G'day! Welcome to{" "}
                  <strong>Desert Lilly Health & Beauty</strong> — Brisbane's
                  favourite destination for expert beauty services. We started
                  with one simple goal: to make everyone who walks through our
                  door feel absolutely brilliant. Years later, that goal hasn't
                  changed — it's only grown stronger.
                </p>
                <p>
                  Our team of qualified beauty therapists and stylists brings a
                  combined wealth of experience and industry knowledge to every
                  single appointment. We hold nationally recognised
                  qualifications, complete regular professional development, and
                  stay constantly up to date with the latest techniques,
                  products, and trends in the beauty industry.
                </p>
                <p>
                  We serve hundreds of Brisbane clients every year — from busy
                  professionals squeezing in a quick lash tint to brides
                  trusting us with their most important day. Each one receives
                  the same level of expert care, honest advice, and genuine
                  attention that has made Desert Lilly a name Brisbane locals
                  trust and recommend.
                </p>
                <p>
                  We do everything from <strong>hair cuts and colour</strong> to{" "}
                  <strong>relaxing facials</strong>, <strong>nail art</strong>,{" "}
                  <strong>waxing</strong>, <strong>bridal makeup</strong>, and{" "}
                  <strong>brow and lash treatments</strong>. Book one service or
                  combine a few for the ultimate beauty day.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/generated/desert-lilly-team.dim_1200x600.jpg"
                alt="Desert Lilly Health & Beauty Brisbane — professional and friendly salon team ready to welcome you"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Points */}
      <section className="bg-blush py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((t) => (
              <div
                key={t.title}
                className="text-center p-6 bg-background rounded-2xl shadow-xs"
              >
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-display text-base text-foreground mb-2">
                  {t.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16" id="services">
        <div className="container mx-auto px-4">
          <p className="text-gold text-sm tracking-widest uppercase text-center mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-10">
            Our Beauty Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`services.item.${i + 1}`}
              >
                <Link to={s.href} className="block group">
                  <Card className="overflow-hidden hover:shadow-rose transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-display text-lg text-foreground mb-1">
                        {s.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                      <p className="text-primary text-sm font-semibold mt-2">
                        Learn more →
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-blush py-16">
        <div className="container mx-auto px-4">
          <p className="text-gold text-sm tracking-widest uppercase text-center mb-3">
            Happy Clients
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-10">
            What Brisbane Locals Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`reviews.item.${i + 1}`}
              >
                <Card className="h-full shadow-card">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5]
                        .filter((n) => n <= r.rating)
                        .map((n) => (
                          <Star
                            key={n}
                            size={16}
                            className="fill-gold text-gold"
                          />
                        ))}
                    </div>
                    <p className="text-foreground/80 italic leading-relaxed mb-4">
                      "{r.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" id="faq">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-gold text-sm tracking-widest uppercase text-center mb-3">
            FAQs
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-10">
            Got Questions? We've Got Answers!
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="bg-background rounded-lg border border-border shadow-xs"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:no-underline hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-blush py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-3">
            Ready to Glow?
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Book Your Appointment Today
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            It only takes a minute to book and we'll have you looking stunning
            in no time. Our Brisbane team is ready to take care of you — can't
            wait to see you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-ocid="cta.primary_button"
              >
                Book Now
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
                data-ocid="cta.secondary_button"
              >
                WhatsApp 0420 739 265
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section
        className="h-80 md:h-96"
        id="location"
        aria-label="Desert Lilly location map Brisbane"
      >
        <iframe
          title="Desert Lilly Health & Beauty location on Google Maps Brisbane"
          src="https://www.google.com/maps?q=Desert+Lilly+Health+%26+Beauty+Brisbane&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          data-ocid="home.map_marker"
        />
      </section>
    </div>
  );
}
