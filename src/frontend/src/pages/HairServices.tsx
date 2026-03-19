import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function HairServices() {
  return (
    <ServicePageTemplate
      title="Hair Services Brisbane | Cuts, Colour, Balayage & Treatments | Desert Lilly Health & Beauty"
      metaDescription="Expert hair cuts, balayage colour, highlights, blowouts and repair treatments at Desert Lilly Health & Beauty Brisbane. Trained stylists. Book online today!"
      heroImage="/assets/generated/desert-lilly-hair.dim_800x500.jpg"
      heroImageAlt="Professional hair styling and balayage colour service at Desert Lilly Health & Beauty Brisbane"
      heading="Beautiful Hair, Every Time"
      subheading="Hair Services Brisbane"
      intro="Your hair is your crown — and at Desert Lilly Health & Beauty, we make sure it looks absolutely stunning every single time. Our Brisbane salon has been creating beautiful hair for years, serving hundreds of satisfied clients across South East Queensland. Whether you want a fresh precision trim, a bold new colour, a sun-kissed balayage, or a luxurious treatment to bring dry and damaged locks back to life, our fully trained and experienced stylists are here to deliver exactly what you want. We listen first, recommend based on your hair type and lifestyle, then get to work with professional tools and premium products that actually last."
      whyChooseUs="At Desert Lilly, we don't just cut hair — we consult, assess, and craft. Every client receives a personalised hair analysis before we begin. We look at your hair's current condition, your face shape, your daily routine, and your style goals. This ensures we recommend the right cut, colour, and treatment for you specifically — not just what's trending on Instagram. Our stylists hold industry-recognised qualifications and complete ongoing professional development to stay ahead of the latest techniques and colour trends. We've earned the trust of Brisbane locals through consistent results, honest advice, and a genuine love for the craft."
      sections={[
        {
          heading: "Expert Haircuts for Every Style & Texture",
          content:
            "We cut hair for everyone — whether you love it short and sharp, long and flowing, wavy, curly, or somewhere in between. Our stylists use precise, scissor-over-comb and razor techniques to create a cut that suits your face shape, lifestyle, and personal style. A consultation is always included so we're completely on the same page before a single snip. We factor in how your hair naturally falls, your morning routine, and how much maintenance you want. A great haircut should look brilliant on day one and be easy to manage every day after that. We also do children's cuts and fringe trims for existing clients. Quality matters — and every cut at Desert Lilly reflects the years of skill our team has developed working with all hair types across Brisbane.",
          image: "/assets/generated/desert-lilly-hair.dim_800x500.jpg",
          imageAlt:
            "Expert haircut consultation and precision cut at Desert Lilly Health & Beauty Brisbane",
        },
        {
          heading: "Hair Colour, Balayage & Highlights",
          content:
            "Colour is where the real magic happens. Our colour specialists are trained in the latest techniques including balayage, ombre, babylights, full colour, and toning. We use premium hair colour brands that deliver rich, dimensional results while maintaining the integrity of your hair. Before we apply a single drop of colour, we do a thorough consultation to discuss your skin tone, natural base, maintenance preferences, and budget. We'll show you colour swatches, explain the process honestly, and ensure you're completely confident before we begin. Whether you want a natural sun-kissed look or a bold statement colour, our team has the experience and technical skill to deliver stunning results. Colour correction is also available for clients who've had work done elsewhere and need it fixed by a professional.",
          image:
            "/assets/generated/desert-lilly-hair-treatment.dim_800x500.jpg",
          imageAlt:
            "Professional balayage and hair colour treatment at Desert Lilly Health & Beauty Brisbane",
        },
        {
          heading: "Blowouts, Styling & Special Occasion Hair",
          content:
            "Need your hair to look incredible for a wedding, formal, photoshoot, or corporate event? Our blowout and styling service will leave your hair looking sleek, polished, and completely camera-ready. We use professional-grade diffusers, round brushes, and heat-protection products to lock in shine and hold without stiffness. Our stylists are skilled in a range of styles including bouncy blowouts, beachy waves, sleek straight finishes, elegant updos, and intricate braided styles. We recommend booking early for weddings and events as our calendar fills up fast, especially on weekends. We also offer bridal hair trials so you can see exactly how your style will look on the big day — no surprises.",
        },
        {
          heading: "Hair Treatments, Repair & Scalp Care",
          content:
            "Healthy hair starts at the scalp and depends on the strength of each strand from root to tip. If your hair has been through colour treatments, heat styling, or environmental damage, our restorative treatments will make a noticeable difference. We offer Olaplex bond-repair treatments, deep conditioning masks, protein treatments, and keratin smoothing services. Our scalp treatments address issues like dryness, oiliness, dandruff, and hair thinning — using targeted serums and massage techniques that stimulate circulation and promote healthy growth. After one of our treatment sessions, clients consistently report that their hair feels stronger, softer, and more manageable. We'll also send you home with product recommendations that are right for your hair type so you can maintain the results between visits.",
        },
      ]}
      features={[
        "Precision haircuts for all lengths & textures",
        "Balayage, ombre & babylights",
        "Full colour & highlights",
        "Colour correction",
        "Blowouts & event styling",
        "Bridal hair & trial appointments",
        "Olaplex & bond repair treatments",
        "Scalp treatments & massage",
        "Keratin smoothing services",
        "Fringe trims & tidy-ups",
      ]}
      trustNote="All Desert Lilly stylists hold Certificate III or IV in Hairdressing and complete regular professional development. We use only salon-grade colour and treatment products. Patch testing is available for colour-sensitive clients. Your safety and satisfaction are always our top priority."
      closing="Desert Lilly Health & Beauty is Brisbane's trusted destination for professional hair services that deliver real results. We combine technical expertise with genuine care to give every client an experience that exceeds expectations. Whether it's your first visit or your fiftieth, you'll always be treated like our most important client. Book your hair appointment online or WhatsApp us at 0420 739 265 — we can't wait to transform your hair."
      priceHint="Haircuts from $45. Colour services from $95. Olaplex treatments from $65. Book a consult for a personalised quote."
    />
  );
}
