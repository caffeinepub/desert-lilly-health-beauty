import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function MakeupServices() {
  return (
    <ServicePageTemplate
      title="Makeup Artist Brisbane | Bridal & Special Occasion Makeup | Desert Lilly"
      metaDescription="Professional makeup artistry at Desert Lilly Brisbane. Bridal makeup, special occasion glam, party makeup and makeup lessons. Book your makeup artist today!"
      heroImage="/assets/generated/desert-lilly-makeup.dim_800x500.jpg"
      heroImageAlt="Professional makeup application at Desert Lilly Health & Beauty Brisbane — bridal and special occasion makeup artistry"
      heading="Glam Up With Our Expert Makeup Team"
      subheading="Makeup Services Brisbane"
      intro="There's something magical about sitting in a makeup chair and watching yourself transform. At Desert Lilly Health & Beauty in Brisbane, our makeup artists are passionate about enhancing your natural beauty and helping you feel absolutely incredible. Whether it's your wedding day, a birthday bash, or just a night out with the girls, we've got a look for every occasion."
      sections={[
        {
          heading: "Bridal Makeup — Your Perfect Wedding Day Look",
          content:
            "Your wedding day is one of the most important days of your life, and your makeup should be perfect. Our bridal makeup artists work with you beforehand to understand your style, skin tone, and the overall aesthetic of your wedding. We do a trial run so you can see exactly how you'll look on the big day — no surprises! We use long-wearing, photograph-friendly products so your makeup stays flawless from the ceremony to the last dance. We also offer bridesmaid packages so your whole crew looks stunning.",
        },
        {
          heading: "Special Occasion & Event Makeup",
          content:
            "Got a big event coming up? Formal, gala, birthday, engagement party, corporate function — whatever the occasion, our makeup artists will create a look that's perfectly suited to the event and to you. We take into account the lighting, dress code, and your personal style to deliver a look that photographs beautifully and lasts all night. We can do bold and dramatic, soft and romantic, edgy and modern, or classic and elegant — you name it, we can create it.",
        },
        {
          heading: "Everyday & Natural Makeup",
          content:
            "Not every day needs a full glam look — sometimes you just want to look polished and put-together with minimal fuss. Our natural and everyday makeup service is perfect for job interviews, professional headshots, casual events, or simply giving yourself a little confidence boost. We'll enhance your features with subtle colour, perfect your base, and define your eyes and brows so you look like the best version of yourself. It's the kind of makeup that makes people say 'you look great today' without knowing why.",
        },
        {
          heading: "Makeup Lessons",
          content:
            "Want to learn how to do your own makeup like a pro? Our one-on-one makeup lessons are a brilliant way to level up your beauty skills. Our artists teach you techniques suited to your face shape, eye shape, and skin tone so what you learn actually works for you specifically. We cover everything from a simple everyday base to contouring, eye looks, and flawless lip colour. You'll leave with heaps of new skills and the confidence to recreate them at home.",
        },
      ]}
      features={[
        "Bridal makeup & trials",
        "Bridesmaid packages",
        "Special occasion glam",
        "Everyday & natural makeup",
        "Long-wearing & waterproof options",
        "Makeup lessons",
        "Airbrush makeup",
        "Lash application included",
      ]}
      priceHint="Everyday makeup from $80. Special occasion from $120. Bridal from $180 (trial included). Makeup lessons from $100/hr."
    />
  );
}
