import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, lang, otherLangs, getPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 50);
  });

  const navLinks = [
    { label: t.nav.about, href: "#a-propos" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.gallery, href: "#galerie" },
    { label: t.nav.hours, href: "#horaires" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex flex-col">
          <img src="/favicon-logo.png" alt="Chez Jade Zhang" className="h-12 w-12" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side - Language & Call */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="hidden sm:flex items-center gap-2">
            <Globe className={`h-4 w-4 ${isScrolled ? "text-foreground" : "text-white"}`} />
            <div className="flex gap-2">
              <span className={`text-xs font-semibold ${isScrolled ? "text-foreground" : "text-white"}`}>
                {lang.toUpperCase()}
              </span>
              <div className="flex gap-1">
                {otherLangs.map((l) => (
                  <Link
                    key={l}
                    to={getPath(l)}
                    className={`text-xs font-medium transition-colors ${
                      isScrolled
                        ? "text-muted-foreground hover:text-primary"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {l.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Call Button */}
          <Button
            asChild
            size="sm"
            className={`hidden sm:flex ${isScrolled ? "" : "bg-primary/90 hover:bg-primary"}`}
          >
            <a href="tel:+41229010746">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <div className="flex gap-2">
                  <span className="text-xs font-semibold">{lang.toUpperCase()}</span>
                  <div className="flex gap-1">
                    {otherLangs.map((l) => (
                      <Link
                        key={l}
                        to={getPath(l)}
                        className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {l.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Button asChild size="sm" className="w-full">
                <a href="tel:+41229010746">
                  <Phone className="h-4 w-4 mr-2" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
