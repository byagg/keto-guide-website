import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Activity, BookOpen, AlertTriangle, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { KETO_PLAN_URL } from "@/const";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage, getLocalizedPath } = useLanguage();

  const navItems = [
    { href: getLocalizedPath("/"), label: t("nav.home"), icon: Activity },
    { href: getLocalizedPath("/science"), label: t("nav.science"), icon: BookOpen },
    { href: getLocalizedPath("/benefits"), label: t("nav.benefits"), icon: AlertTriangle },
    { href: getLocalizedPath("/guide"), label: t("nav.guide"), icon: HelpCircle },
    { href: getLocalizedPath("/blog"), label: "Blog", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen font-sans text-foreground flex flex-col relative bg-background">
      {/* Top Bar - High CTR Element */}
      <div className="bg-yellow-400 text-black text-center py-2 px-4 text-sm md:text-base font-bold relative z-50">
        <span className="mr-2">🚀 New to Keto?</span>
        <a href={KETO_PLAN_URL} download className="underline hover:text-gray-800">
          Get the FREE 7-Day Keto Blueprint Download Here »
        </a>
      </div>

      <div className="relative z-0 min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
          <div className="container flex h-20 items-center justify-between">
            <Link href={getLocalizedPath("/")}>
              <div className="flex items-center gap-2 cursor-pointer">
                {/* Logo / Brand Name - Larger and bolder */}
                <span className="text-3xl font-extrabold tracking-tight text-primary hover:opacity-90 transition-opacity">
                  KetoMindset
                </span>
              </div>
            </Link>

            {/* Desktop Nav - Clean and Bold */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = location === item.href || location.startsWith(item.href + '/');
                return (
                  <Link key={item.href} href={item.href}>
                    <span
                      className={cn(
                        "text-base font-bold hover:text-primary cursor-pointer uppercase tracking-tight",
                        isActive ? "text-primary border-b-2 border-primary" : "text-gray-600"
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
              <a
                href={KETO_PLAN_URL}
                download
                className="text-base font-bold hover:text-primary cursor-pointer uppercase tracking-tight text-gray-600"
              >
                {t("nav.plan")}
              </a>
              <Link href={getLocalizedPath("/recipes")}>
                <Button variant="default" size="lg" className="ml-4 font-bold bg-green-600 hover:bg-green-700 text-white border-none shadow-md">
                  {t("nav.recipes")}
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </header>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b bg-background p-4 space-y-4 animate-in slide-in-from-top-5 shadow-lg">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = location === item.href || location.startsWith(item.href + '/');
                return (
                  <Link key={item.href} href={item.href}>
                    <span
                      className={cn(
                        "text-lg font-bold transition-colors hover:text-primary cursor-pointer block p-3 rounded-md hover:bg-gray-100",
                        isActive ? "bg-gray-100 text-primary" : "text-gray-600"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
              <a
                href={KETO_PLAN_URL}
                download
                className="text-lg font-bold transition-colors hover:text-primary cursor-pointer block p-3 rounded-md hover:bg-gray-100 text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.plan")}
              </a>
              <Link href={getLocalizedPath("/recipes")} className="w-full">
                <Button className="w-full mt-2 font-bold text-lg py-6 bg-green-600 hover:bg-green-700 text-white">{t("nav.recipes")}</Button>
              </Link>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer - Functional and SEO heavy */}
        <footer className="border-t bg-gray-100 py-12 mt-12">
          <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">KetoMindset</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("footer.desc")}
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900 uppercase tracking-wider">{t("footer.content")}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href={getLocalizedPath("/science")}><span className="hover:text-primary cursor-pointer hover:underline">{t("nav.science")}</span></Link></li>
                <li><Link href={getLocalizedPath("/benefits")}><span className="hover:text-primary cursor-pointer hover:underline">{t("nav.benefits")}</span></Link></li>
                <li><Link href={getLocalizedPath("/guide")}><span className="hover:text-primary cursor-pointer hover:underline">{t("nav.guide")}</span></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900 uppercase tracking-wider">{t("footer.legal")}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="hover:text-primary cursor-pointer hover:underline">{t("footer.privacy")}</span></li>
                <li><span className="hover:text-primary cursor-pointer hover:underline">{t("footer.terms")}</span></li>
                <li><span className="hover:text-primary cursor-pointer hover:underline">{t("footer.disclaimer")}</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900 uppercase tracking-wider">{t("footer.language")}</h3>
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
          <div className="container mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} {t("footer.rights")}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
