import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Activity, BookOpen, AlertTriangle, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: Activity },
    { href: "/science", label: "The Science", icon: BookOpen },
    { href: "/benefits", label: "Benefits & Risks", icon: AlertTriangle },
    { href: "/guide", label: "Start Guide", icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
                <Activity className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">Keto<span className="text-foreground">Guide</span></span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary cursor-pointer flex items-center gap-1.5",
                    location === item.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.label}
                </span>
              </Link>
            ))}
            <Button variant="default" size="sm" className="ml-4">
              Get Started
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
                    "text-base font-medium transition-colors hover:text-primary cursor-pointer flex items-center gap-2 p-2 rounded-md hover:bg-muted",
                    location === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </span>
              </Link>
            ))}
            <Button className="w-full mt-2">Get Started</Button>
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
              <div className="bg-primary text-primary-foreground p-1 rounded-md">
                <Activity className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-primary">Keto<span className="text-foreground">Guide</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A comprehensive, science-backed resource for understanding and implementing the ketogenic diet safely and effectively.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Content</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/science"><span className="hover:text-primary cursor-pointer">The Science</span></Link></li>
              <li><Link href="/benefits"><span className="hover:text-primary cursor-pointer">Benefits & Risks</span></Link></li>
              <li><Link href="/guide"><span className="hover:text-primary cursor-pointer">Start Guide</span></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-primary cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-primary cursor-pointer">Terms of Service</span></li>
              <li><span className="hover:text-primary cursor-pointer">Medical Disclaimer</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Language</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                🇺🇸 English
              </Button>
            </div>
            <div className="mt-2">
              <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
                🇸🇰 Slovak (Coming Soon)
              </Button>
            </div>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KetoGuide. All rights reserved. Information is for educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}
