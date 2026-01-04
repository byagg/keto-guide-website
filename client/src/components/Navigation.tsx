import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                KetoMindset
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-foreground hover:text-secondary transition-colors font-medium">
                Domov
              </a>
            </Link>
            <Link href="/veda">
              <a className="text-foreground hover:text-secondary transition-colors font-medium">
                Veda
              </a>
            </Link>
            <Link href="/benefity">
              <a className="text-foreground hover:text-secondary transition-colors font-medium">
                Výhody & Riziká
              </a>
            </Link>
            <Link href="/start-guide">
              <a className="text-foreground hover:text-secondary transition-colors font-medium">
                Začať
              </a>
            </Link>
            <Link href="/recepty">
              <a className="text-foreground hover:text-secondary transition-colors font-medium">
                Recepty
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-foreground hover:text-secondary transition-colors font-medium">
                Blog
              </a>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-accent hover:bg-accent/90 text-white font-semibold"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              7-dňový plán zadarmo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/">
                <a 
                  className="text-foreground hover:text-secondary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Domov
                </a>
              </Link>
              <Link href="/veda">
                <a 
                  className="text-foreground hover:text-secondary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Veda
                </a>
              </Link>
              <Link href="/benefity">
                <a 
                  className="text-foreground hover:text-secondary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Výhody & Riziká
                </a>
              </Link>
              <Link href="/start-guide">
                <a 
                  className="text-foreground hover:text-secondary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Začať
                </a>
              </Link>
              <Link href="/recepty">
                <a 
                  className="text-foreground hover:text-secondary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Recepty
                </a>
              </Link>
              <Link href="/blog">
                <a 
                  className="text-foreground hover:text-secondary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </a>
              </Link>
              <Button 
                className="bg-accent hover:bg-accent/90 text-white font-semibold mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                7-dňový plán zadarmo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
