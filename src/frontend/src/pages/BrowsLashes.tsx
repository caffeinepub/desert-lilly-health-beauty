import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function BrowsLashes() {
  return (
    <ServicePageTemplate
      title="Eyebrow & Lash Extensions Brisbane | Desert Lilly Health & Beauty"
      metaDescription="Frame your face beautifully with expert eyebrow shaping, threading, tinting and eyelash extensions at Desert Lilly Brisbane. Book your brow & lash appointment today!"
      heroImage="/assets/generated/desert-lilly-brows.dim_800x500.jpg"
      heroImageAlt="Expert eyebrow shaping and eyelash extensions at Desert Lilly Health & Beauty Brisbane — perfect brows and lashes"
      heading="Bold Brows & Luscious Lashes"
      subheading="Eyebrow & Lash Services"
      intro="Your brows and lashes frame your entire face — and when they look great, everything else falls into place. At Desert Lilly Health & Beauty in Brisbane, we specialise in brow shaping and lash treatments that enhance your natural features and give you that wide-awake, put-together look without needing any makeup at all."
      sections={[
        {
          heading: "Eyebrow Threading — Precise & Painless",
          content:
            "Threading is the most precise method of brow shaping available, and our therapists are absolute masters at it. Using a fine cotton thread, we remove individual hairs to create perfectly symmetrical, cleanly defined brows that suit your unique face shape. Threading is also brilliant for sensitive skin because it doesn't involve any chemicals or wax. The result is crisp, defined brows with a finish that lasts longer than waxing. Once you try threading, you'll never go back!",
        },
        {
          heading: "Eyebrow Waxing & Tinting",
          content:
            "For those who prefer waxing, our eyebrow wax service is quick, efficient, and delivers beautiful results. We shape your brows to flatter your face, removing unwanted stray hairs for a clean, polished look. We also offer brow tinting to darken and define your brows — perfect if you have light, sparse, or patchy brows. A brow tint lasts 4–6 weeks and makes your brows look fuller and more defined without any daily effort. It's a total time-saver in the morning routine.",
        },
        {
          heading: "Lash Extensions — Wake Up Gorgeous",
          content:
            "Lash extensions are an absolute game changer. Imagine waking up every morning with full, beautiful lashes — no mascara, no curler, no fuss. Our technicians apply individual synthetic or silk lash extensions to each of your natural lashes for a look that's incredibly natural or as dramatic as you want. We offer classic, hybrid, and volume lash sets to suit every preference. Lash extensions last 3–4 weeks with proper care and can be refilled to maintain the look indefinitely.",
        },
        {
          heading: "Lash Lifts & Tints",
          content:
            "If you want amazing lashes but aren't ready for extensions, a lash lift and tint is the perfect option. A lash lift curls your natural lashes upwards and opens up your eyes beautifully — it basically makes your lashes look longer and curlier without adding any artificial lashes. Combined with a lash tint to darken them, you'll have striking, defined lashes that last 6–8 weeks. It's low maintenance, gorgeous, and absolutely one of our most popular services at Desert Lilly.",
        },
      ]}
      features={[
        "Eyebrow threading",
        "Eyebrow waxing & shaping",
        "Brow tinting",
        "Classic lash extensions",
        "Volume & hybrid lashes",
        "Lash refills",
        "Lash lift & tint",
        "Lash removal",
      ]}
      priceHint="Brow thread from $20. Brow tint from $25. Lash extensions from $120. Lash lift & tint from $90."
    />
  );
}
