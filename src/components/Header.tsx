import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span className={`font-serif text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>
            Clementi
          </span>
          <span
            className={`text-xs tracking-widest ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}
          >
            {t.nav.profession}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition">
            {t.nav.about}
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition">
            {t.nav.services}
          </a>
          <a href="#gallery" className="text-sm font-medium hover:text-primary transition">
            {t.nav.gallery}
          </a>
          <a href="#hours" className="text-sm font-medium hover:text-primary transition">
            {t.nav.hours}
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition">
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className="flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg hover:bg-secondary transition"
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild>
            <a href="tel:+41796527416">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            to={otherLangPath}
            className="flex items-center gap-1.5 text-sm font-medium px-2 py-1 rounded"
          >
            <Globe className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background border-t">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            <a href="#about" className="px-4 py-2 hover:bg-secondary rounded">
              {t.nav.about}
            </a>
            <a href="#services" className="px-4 py-2 hover:bg-secondary rounded">
              {t.nav.services}
            </a>
            <a href="#gallery" className="px-4 py-2 hover:bg-secondary rounded">
              {t.nav.gallery}
            </a>
            <a href="#hours" className="px-4 py-2 hover:bg-secondary rounded">
              {t.nav.hours}
            </a>
            <a href="#contact" className="px-4 py-2 hover:bg-secondary rounded">
              {t.nav.contact}
            </a>
            <Button asChild className="w-full mt-2">
              <a href="tel:+41796527416">{t.nav.call}</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
