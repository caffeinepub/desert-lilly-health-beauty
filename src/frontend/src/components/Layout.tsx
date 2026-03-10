import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services/hair", label: "Hair" },
  { href: "/services/skin", label: "Skin & Facial" },
  { href: "/services/nails", label: "Nails" },
  { href: "/services/waxing", label: "Waxing" },
  { href: "/services/makeup", label: "Makeup" },
  { href: "/services/brows-lashes", label: "Brows & Lashes" },
  { href: "/book", label: "Book Now" },
  { href: "/offers", label: "Offers" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const whatsappUrl = "https://wa.me/61420739265";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs text-center py-2 px-4">
        <span>
          ✨ Brisbane's Premier Beauty Destination — Call or WhatsApp{" "}
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          0420 739 265
        </a>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-xs">
        <nav
          className="container mx-auto px-4 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
            <span className="text-xl md:text-2xl font-display font-bold text-rose-deep">
              Desert Lilly
            </span>
            <span className="hidden sm:block text-xs text-muted-foreground font-body tracking-widest uppercase">
              Health & Beauty
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  data-ocid="nav.link"
                  className={`px-3 py-2 rounded-md text-sm font-body transition-colors hover:text-primary hover:bg-blush ${
                    location.pathname === l.href
                      ? "text-primary font-semibold"
                      : "text-foreground/80"
                  } ${l.label === "Book Now" ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground font-semibold" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <ul className="flex flex-col py-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    data-ocid="nav.link"
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-3 text-sm font-body hover:bg-blush hover:text-primary transition-colors ${
                      location.pathname === l.href
                        ? "text-primary font-semibold bg-blush"
                        : ""
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-background/80 pt-12 pb-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl text-background mb-3">
              Desert Lilly
            </h3>
            <p className="text-sm leading-relaxed">
              Brisbane's favourite beauty salon — where every visit leaves you
              glowing, gorgeous, and feeling like a million bucks.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="hover:text-background transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p>📍 Brisbane, QLD, Australia</p>
              <p>
                <a
                  href="https://wa.me/61420739265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background flex items-center gap-2"
                >
                  <SiWhatsapp size={14} /> 0420 739 265
                </a>
              </p>
              <p>⏰ Mon–Sat: 9am–7pm | Sun: 10am–5pm</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 border-t border-background/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/60">
          <p>
            © {new Date().getFullYear()} Desert Lilly Health & Beauty. All
            rights reserved.
          </p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-background"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="nav.button"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-gold transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat with us on WhatsApp"
      >
        <SiWhatsapp size={28} color="white" />
      </a>
    </div>
  );
}
