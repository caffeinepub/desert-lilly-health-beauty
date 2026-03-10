import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function WaxingServices() {
  return (
    <ServicePageTemplate
      title="Waxing Brisbane | Gentle Hair Removal | Desert Lilly Health & Beauty"
      metaDescription="Smooth, long-lasting hair removal at Desert Lilly Brisbane. Expert body waxing, Brazilian, bikini, facial waxing and more. Book your waxing appointment today!"
      heroImage="/assets/generated/desert-lilly-waxing.dim_800x500.jpg"
      heroImageAlt="Professional body waxing service at Desert Lilly Health & Beauty Brisbane — gentle and effective hair removal"
      heading="Smooth Skin, Sorted!"
      subheading="Waxing Services Brisbane"
      intro="Say goodbye to razors and hello to silky smooth skin that lasts for weeks! At Desert Lilly Health & Beauty in Brisbane, we use premium wax products and expert techniques to give you a hair removal experience that is as comfortable, effective, and long-lasting as possible. Our trained therapists make even the most nervous first-timers feel totally at ease."
      sections={[
        {
          heading: "Body Waxing — Smooth Everywhere",
          content:
            "Whether you want to wax your legs, arms, underarms, back, chest, or stomach, we've got you covered. We use premium strip and hard wax depending on the area being treated, ensuring the most effective hair removal with minimum discomfort. Our therapists work quickly and confidently so you're in and out in no time. Regular waxing means your hair grows back finer and sparser over time — it's a total game changer. Most clients notice a big improvement after just a few sessions.",
        },
        {
          heading: "Brazilian & Bikini Waxing",
          content:
            "Our Brazilian and bikini wax services are done with total professionalism and care. We use hard wax for these sensitive areas, which grips the hair — not the skin — making it heaps less painful than traditional strip waxing. Our therapists are experienced, discreet, and create a comfortable environment so you always feel respected and at ease. Whether you want a basic bikini tidy-up or a full Brazilian, we'll do exactly what you're comfortable with. Clean, smooth results every time.",
        },
        {
          heading: "Facial Waxing & Threading",
          content:
            "Facial hair can be really bothersome, but our gentle facial waxing treatments sort it out quickly and effectively. We wax the upper lip, chin, cheeks, and full face — whatever you need. Our therapists use specialised facial wax that is gentle enough for sensitive skin and won't cause irritation or redness. For brow shaping, we also offer threading as an alternative. Your face will be smooth, clean, and absolutely fresh after every visit.",
        },
        {
          heading: "Pre & Post Wax Care Tips",
          content:
            "We want your waxing experience to be as comfy as possible, so we share pre and post-care advice at every appointment. Before your wax, grow your hair to about 5mm for best results, exfoliate the area 24 hours before, and avoid sun exposure. After your wax, we recommend avoiding hot showers, gym sessions, and tight clothing for 24 hours. We also sell post-wax soothing products in salon to keep your skin calm and ingrown-hair free between appointments.",
        },
      ]}
      features={[
        "Full leg & half leg waxing",
        "Underarm waxing",
        "Brazilian & bikini waxing",
        "Back & chest waxing",
        "Upper lip & chin wax",
        "Full face waxing",
        "Eyebrow waxing & shaping",
        "Pre & post-wax care advice",
      ]}
      priceHint="Underarm from $20. Full legs from $55. Brazilian from $65. Facial waxing from $15."
    />
  );
}
