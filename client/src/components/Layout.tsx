import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Activity, BookOpen, AlertTriangle, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { href: "/", label: t("nav.home"), icon: Activity },
    { href: "/science", label: t("nav.science"), icon: BookOpen },
    { href: "/benefits", label: t("nav.benefits"), icon: AlertTriangle },
    { href: "/guide", label: t("nav.guide"), icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-2xl font-bold tracking-tight text-foreground hover:text-primary/90 transition-colors">KetoMindset</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                    location === item.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Button variant="default" size="sm" className="ml-4">
              {t("nav.getStarted")}
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b bg-background p-4 space-y-4 animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span 
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary cursor-pointer block p-2 rounded-md hover:bg-muted",
                    location === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Button className="w-full mt-2">{t("nav.getStarted")}</Button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 mt-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">KetoMindset</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t("footer.content")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/science"><span className="hover:text-primary cursor-pointer">{t("nav.science")}</span></Link></li>
              <li><Link href="/benefits"><span className="hover:text-primary cursor-pointer">{t("nav.benefits")}</span></Link></li>
              <li><Link href="/guide"><span className="hover:text-primary cursor-pointer">{t("nav.guide")}</span></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t("footer.legal")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-primary cursor-pointer">{t("footer.privacy")}</span></li>
              <li><span className="hover:text-primary cursor-pointer">{t("footer.terms")}</span></li>
              <li><span className="hover:text-primary cursor-pointer">{t("footer.disclaimer")}</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t("footer.language")}</h3>
            <div className="flex flex-col gap-2">
              <Button 
                variant={language === 'en' ? "default" : "outline"} 
                size="sm" 
                className="w-full justify-start"
                onClick={() => setLanguage('en')}
              >
                🇺🇸 English
              </Button>
              <Button 
                variant={language === 'es' ? "default" : "outline"} 
                size="sm" 
                className="w-full justify-start"
                onClick={() => setLanguage('es')}
              >
                🇪🇸 Español
              </Button>
              <Button 
                variant={language === 'cn' ? "default" : "outline"} 
                size="sm" 
                className="w-full justify-start"
                onClick={() => setLanguage('cn')}
              >
                🇨🇳 中文
              </Button>
              <Button 
                variant={language === 'sk' ? "default" : "outline"} 
                size="sm" 
                className="w-full justify-start"
                onClick={() => setLanguage('sk')}
              >
                🇸🇰 Slovenčina
              </Button>
            </div>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {t("footer.rights")}</p>
        </div>
      </footer>
    </div>
  );
}
