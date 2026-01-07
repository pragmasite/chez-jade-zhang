import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src="/favicon-logo.png" alt="Chez Jade Zhang" className="h-12 w-12 mb-4" />
            <h3 className="font-serif text-lg font-semibold mb-2">Chez Jade Zhang</h3>
            <p className="text-primary-foreground/70 text-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#a-propos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#horaires" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.contact.label}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+41229010746" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +41 22 901 07 46
                </a>
              </li>
              <li>
                <a href="mailto:jiangbei0927@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  jiangbei0927@gmail.com
                </a>
              </li>
              <li className="text-primary-foreground/70">
                Rue de Lausanne 26<br />
                1201 Genève
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">{t.nav.hours}</h4>
            <p className="text-primary-foreground/70 text-sm">
              {t.hours.today}<br />
              11:00 - 23:00
            </p>
            <p className="text-primary-foreground/50 text-xs mt-4">
              {t.hours.header}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Chez Jade Zhang. {t.footer.copyright}
          </p>
          <p className="text-center text-primary-foreground/40 text-xs mt-2">
            {t.footer.description}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
