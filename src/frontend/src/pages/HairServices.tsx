import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function HairServices() {
  return (
    <ServicePageTemplate
      title="Hair Services Brisbane | Cuts, Colour & Treatments | Desert Lilly"
      metaDescription="Get stunning hair cuts, balayage colour, blowouts and treatments at Desert Lilly Health & Beauty in Brisbane. Book your hair appointment today!"
      heroImage="/assets/generated/desert-lilly-hair.dim_800x500.jpg"
      heroImageAlt="Professional hair styling and colouring at Desert Lilly Health & Beauty Brisbane — expert haircuts, balayage and treatments"
      heading="Beautiful Hair, Every Time"
      subheading="Hair Services Brisbane"
      intro="Your hair is your crown — and at Desert Lilly Health & Beauty, we make sure it looks absolutely stunning. Whether you want a fresh trim, a bold new colour, or a luxurious treatment to bring your locks back to life, our expert stylists in Brisbane are ready to make it happen."
      sections={[
        {
          heading: "Expert Haircuts for Every Style",
          content:
            "We cut hair for everyone — whether you like it short, long, straight, curly, or somewhere in between. Our stylists listen to what you want and then deliver a cut that suits your face shape, lifestyle, and personal style. We use sharp, precise techniques to give you a cut that looks amazing fresh out of the salon and is easy to manage at home. A great haircut changes everything, and we reckon every Brisbane local deserves one.",
        },
        {
          heading: "Hair Colour & Highlights",
          content:
            "Want to go blonde? Try a deep brunette? Or maybe add some beautiful highlights that catch the sunlight? Our colour specialists use premium hair colour products that give rich, long-lasting results without wrecking your hair. We do full colour, balayage, highlights, ombre, and toning treatments. We'll chat with you about what will work best for your hair type and maintenance goals before we pick up the brush. The result? Gorgeous colour that turns heads.",
        },
        {
          heading: "Blowouts & Styling",
          content:
            "Getting ready for a big event? Or just want to feel extra polished on a Tuesday? Our blowout and styling service will have your hair looking sleek, bouncy, and beautiful. We use professional-grade tools and products to lock in shine and hold without leaving your hair feeling stiff or crunchy. Blowouts, waves, sleek straight styles, updos — our stylists can do it all. Perfect for weddings, formals, work presentations, or just because you deserve it.",
        },
        {
          heading: "Hair Treatments & Repair",
          content:
            "Has your hair been through a lot? Sun damage, heat styling, or colour treatments can leave hair feeling dry, brittle, or frizzy. Our nourishing hair treatments target the problem areas and restore your hair's natural strength, softness, and shine. We offer Olaplex treatments, deep conditioning masks, scalp treatments, and keratin smoothing services. Think of it as a spa day — but for your hair. You'll walk out with locks that feel healthy, hydrated, and absolutely lush.",
        },
      ]}
      features={[
        "Haircuts for all lengths and textures",
        "Balayage, highlights & full colour",
        "Blowouts & special occasion styling",
        "Olaplex & repair treatments",
        "Scalp treatments & massages",
        "Keratin smoothing services",
        "Colour correction",
        "Fringe trims & tidy-ups",
      ]}
      priceHint="Hair services start from $45 for a trim. Colour services from $95. Book a consult for a personalised quote."
    />
  );
}
