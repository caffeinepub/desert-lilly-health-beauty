import { useEffect } from "react";

interface SeoMeta {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
}

export function useSeoMeta({
  title,
  description,
  ogImage,
  ogType = "website",
}: SeoMeta) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("twitter:card", ogImage ? "summary_large_image" : "summary");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (ogImage) {
      const abs = ogImage.startsWith("http")
        ? ogImage
        : window.location.origin + ogImage;
      setMeta("og:image", abs, true);
      setMeta("twitter:image", abs);
    }
  }, [title, description, ogImage, ogType]);
}
