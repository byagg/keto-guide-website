import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                KetoMindset
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Komplexný, vedecky podložený zdroj pre pochopenie a implementáciu ketogénnej diéty bezpečne a efektívne.
            </p>
          </div>

          {/* Content Links */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Obsah
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/veda">
                  <a className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Veda o keto
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/benefity">
                  <a className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Výhody & Riziká
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/start-guide">
                  <a className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Sprievodca pre začiatočníkov
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/recepty">
                  <a className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Recepty
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Zdroje
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog">
                  <a className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Často kladené otázky
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/kalkulacka">
                  <a className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Keto kalkulačka
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/potraviny">
                  <a className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Zoznam potravín
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Právne informácie
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy">
                  <a className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Ochrana súkromia
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Podmienky používania
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer">
                  <a className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Zdravotné vyhlásenie
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} KetoMindset. Všetky práva vyhradené. Informácie sú len na vzdelávacie účely.</p>
        </div>
      </div>
    </footer>
  );
}
