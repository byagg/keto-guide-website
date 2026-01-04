import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownloadPDF = () => {
    window.open('https://pub-a7352293629341aba0c417463676ed63.r2.dev/keto-pdf/7-day-keto-plan.pdf', '_blank');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                KetoMindset
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <span className="text-foreground hover:text-secondary transition-colors font-medium cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/science">
              <span className="text-foreground hover:text-secondary transition-colors font-medium cursor-pointer">
                Science
              </span>
            </Link>
            <Link href="/benefits">
              <span className="text-foreground hover:text-secondary transition-colors font-medium cursor-pointer">
                Benefits & Risks
              </span>
            </Link>
            <Link href="/start-guide">
              <span className="text-foreground hover:text-secondary transition-colors font-medium cursor-pointer">
                Get Started
              </span>
            </Link>
            <Link href="/recipes">
              <span className="text-foreground hover:text-secondary transition-colors font-medium cursor-pointer">
                Recipes
              </span>
            </Link>
            <Link href="/blog">
              <span className="text-foreground hover:text-secondary transition-colors font-medium cursor-pointer">
                Blog
              </span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-accent hover:bg-accent/90 text-white font-semibold"
              style={{ fontFamily: 'var(--font-heading)' }}
              onClick={handleDownloadPDF}
            >
              Free 7-Day Plan
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
                <span 
                  className="text-foreground hover:text-secondary transition-colors font-medium py-2 cursor-pointer block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </span>
              </Link>
              <Link href="/science">
                <span 
                  className="text-foreground hover:text-secondary transition-colors font-medium py-2 cursor-pointer block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Science
                </span>
              </Link>
              <Link href="/benefits">
                <span 
                  className="text-foreground hover:text-secondary transition-colors font-medium py-2 cursor-pointer block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Benefits & Risks
                </span>
              </Link>
              <Link href="/start-guide">
                <span 
                  className="text-foreground hover:text-secondary transition-colors font-medium py-2 cursor-pointer block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </span>
              </Link>
              <Link href="/recipes">
                <span 
                  className="text-foreground hover:text-secondary transition-colors font-medium py-2 cursor-pointer block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Recipes
                </span>
              </Link>
              <Link href="/blog">
                <span 
                  className="text-foreground hover:text-secondary transition-colors font-medium py-2 cursor-pointer block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </span>
              </Link>
              <Button 
                className="bg-accent hover:bg-accent/90 text-white font-semibold mt-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownloadPDF();
                }}
              >
                Free 7-Day Plan
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
