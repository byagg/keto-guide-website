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
              A comprehensive, science-based resource for understanding and implementing the ketogenic diet safely and effectively.
            </p>
          </div>

          {/* Content Links */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Content
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/science">
                  <span className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    Keto Science
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/benefits">
                  <span className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    Benefits & Risks
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/start-guide">
                  <span className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    Beginner's Guide
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/recipes">
                  <span className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    Recipes
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog">
                  <span className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <span className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    FAQ
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/keto-calculator">
                  <span className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    Keto Calculator
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/food-list">
                  <span className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    Food List
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy">
                  <span className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <span className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    Terms of Use
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer">
                  <span className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-pointer">
                    Medical Disclaimer
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} KetoMindset. All rights reserved. Information is for educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
