import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function NailServices() {
  return (
    <ServicePageTemplate
      title="Nail Services Brisbane | Manicure, Pedicure & Nail Art | Desert Lilly"
      metaDescription="Treat your hands and feet at Desert Lilly Brisbane. Expert manicures, pedicures, gel nails, acrylic sets and creative nail art. Book your nail appointment today!"
      heroImage="/assets/generated/desert-lilly-nails.dim_800x500.jpg"
      heroImageAlt="Elegant nail art and manicure at Desert Lilly Health & Beauty Brisbane — gel nails, acrylic and nail art designs"
      heading="Nails That Slay All Day"
      subheading="Nail Services Brisbane"
      intro="Your nails deserve some serious love. At Desert Lilly Health & Beauty in Brisbane, we do nails that look incredible, last heaps long, and make you want to show them off to everyone you meet. From a classic nude polish to bold nail art, our talented nail techs are here to make your nails the best they've ever looked."
      sections={[
        {
          heading: "Manicures for Every Mood",
          content:
            "A manicure at Desert Lilly is way more than just a polish change. We start with a relaxing hand soak, shape your nails to perfection, push back and tidy your cuticles, then treat your hands to a scrub and moisturising massage. We finish with your choice of regular polish or long-lasting gel colour. Classic, French tip, ombre, or something fun and bold — whatever you're feeling, we'll make it look amazing. Your hands will look and feel brand new.",
        },
        {
          heading: "Pedicures — Happy Feet Guaranteed!",
          content:
            "There's nothing better than a proper pedicure when your feet have been working hard. Our pedicure service includes a warm soak, callus removal, nail shaping, cuticle care, a rejuvenating scrub, and a heavenly foot and leg massage. We finish with your chosen nail colour so your toes look just as great as your fingers. Whether you're hitting the beach, wearing open-toed sandals, or just want to treat yourself, our pedicures will have your feet feeling absolutely brilliant.",
        },
        {
          heading: "Gel & Acrylic Nails",
          content:
            "If you want nails that last weeks without chipping, our gel and acrylic services are the way to go. Gel nails give you a beautiful, natural-looking finish that's flexible and chip-resistant. Acrylic nails let us add length and strength if you want a more dramatic look. Our nail techs are super skilled at shaping, sizing, and finishing your nails to exactly how you like them. We also do gel overlays on natural nails for extra strength without the added length.",
        },
        {
          heading: "Creative Nail Art",
          content:
            "Nail art is our jam! From simple geometric designs and floral patterns to detailed hand-painted art and character nails, we can create virtually anything on your nails. We love working with clients to design something unique and personal. Seasonal designs for Christmas, summer vibes, wedding nails, festival looks — just show us your inspo pic and we'll bring it to life. Our nail art is detailed, durable, and completely one-of-a-kind.",
        },
      ]}
      features={[
        "Classic & gel manicures",
        "Pedicures with massage",
        "Acrylic full sets & infills",
        "Gel overlays on natural nails",
        "Creative nail art",
        "French & ombre nails",
        "Nail repair & strengthening",
        "Callus removal",
      ]}
      priceHint="Manicures from $35. Pedicures from $50. Acrylic sets from $65. Nail art from $10 extra."
    />
  );
}
