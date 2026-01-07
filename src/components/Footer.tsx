import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div>
            <div className="flex flex-col mb-4">
              <span className="font-serif text-xl font-bold text-white">Clementi</span>
              <span className="text-xs tracking-widest text-white/60">FUSSSTUDIO</span>
            </div>
            <p className="text-white/60 text-sm">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-white">{t.footer.navigation}</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#about" className="hover:text-white transition">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-white transition">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-white">{t.contact.label}</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="tel:+41796527416" className="hover:text-white transition">
                  +41 79 652 74 16
                </a>
              </li>
              <li>
                <a href="mailto:emanuela@example.com" className="hover:text-white transition">
                  emanuela.clementi@example.com
                </a>
              </li>
              <li>Gerliswilstrasse 35</li>
              <li>6020 Emmenbrücke</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>
            © {currentYear} {t.footer.tagline}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
