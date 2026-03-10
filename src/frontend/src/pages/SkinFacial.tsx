import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function SkinFacial() {
  return (
    <ServicePageTemplate
      title="Facials & Skin Treatments Brisbane | Desert Lilly Health & Beauty"
      metaDescription="Glow up with expert facials, chemical peels and skin rejuvenation at Desert Lilly Health & Beauty Brisbane. Personalised skin treatments for every skin type."
      heroImage="/assets/generated/desert-lilly-skin.dim_800x500.jpg"
      heroImageAlt="Luxury facial skin treatment at Desert Lilly Health & Beauty Brisbane — relaxing facial massage with premium skincare products"
      heading="Glow From the Inside Out"
      subheading="Skin & Facial Treatments"
      intro="Your skin tells your story — and we want it to glow. At Desert Lilly Health & Beauty in Brisbane, our skin therapists are trained to assess your unique skin and design treatments that deliver real, visible results. Whether you want to tackle acne, reduce fine lines, or simply treat yourself to a deeply relaxing facial, we have the perfect treatment waiting for you."
      sections={[
        {
          heading: "Personalised Facial Treatments",
          content:
            "No two skins are the same, and that's exactly why we personalise every facial we do. Your therapist starts with a thorough skin analysis, then selects the right products, techniques, and tools to target your specific concerns. Whether your skin is oily, dry, sensitive, combination, or ageing, we've got a treatment that will work for you. Our facials include deep cleansing, exfoliation, massage, mask application, and a tailored serum and moisturiser. You'll walk out absolutely glowing.",
        },
        {
          heading: "Anti-Ageing & Rejuvenation",
          content:
            "Want to turn back the clock a little? Our anti-ageing treatments use proven ingredients like vitamin C, retinol, hyaluronic acid, and peptides to plump the skin, reduce fine lines, and restore a youthful glow. We use professional-grade products that go deeper than anything you can buy off the shelf. Combine this with our expert massage techniques that boost circulation and lymphatic drainage, and you've got a treatment that truly works. Your friends will be asking what you've been doing!",
        },
        {
          heading: "Chemical Peels & Exfoliation",
          content:
            "A good peel is like hitting the reset button on your skin. Our gentle chemical peels remove dead skin cells, unclog pores, reduce pigmentation, and smooth out rough texture. Don't let the word 'chemical' worry you — our peels are safe, controlled, and absolutely transformative. We match the peel strength to your skin type and concerns so you get brilliant results without any downtime. Most clients notice a real difference after just one session.",
        },
        {
          heading: "Acne & Problem Skin Treatments",
          content:
            "Dealing with breakouts is heaps stressful, and we get it. Our targeted acne treatments work to clear existing breakouts, prevent new ones, and balance your skin's oil production. We use a combination of deep cleansing, extractions (when needed), calming masks, and antibacterial treatments to get your skin back on track. We also give you personalised skincare advice to take home so you can keep your skin clear between visits. Clear, healthy skin is absolutely possible — let us help you get there.",
        },
      ]}
      features={[
        "Personalised skin analysis",
        "Deep cleansing facials",
        "Anti-ageing & rejuvenation",
        "Chemical peels",
        "Acne & oily skin treatments",
        "Sensitive skin facials",
        "LED light therapy",
        "Hydrating & glow treatments",
      ]}
      priceHint="Facial treatments start from $75. Peels from $95. Book online for the best availability."
    />
  );
}
