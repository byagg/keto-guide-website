import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, AlertCircle, Brain, Zap, Heart, Activity } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
              <div className="inline-block px-4 py-1 text-sm font-medium tracking-wide uppercase text-primary border border-primary/20 bg-primary/5">
                {t("home.badge")}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground font-serif leading-tight">
                {t("home.title")}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t("home.subtitle")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mt-4">
                {t("home.subtitle2")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/guide">
                  <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20">
                    {t("home.cta.start")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/science">
                  <Button variant="outline" size="lg" className="text-base px-8 h-12 bg-background/50 backdrop-blur">
                    {t("home.cta.science")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 aspect-[4/3]">
                <img 
                  src="/images/keto_hero_v2.png" 
                  alt="Healthy ketogenic meal with avocado, salmon, and eggs" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 shadow-xl border border-border max-w-xs hidden md:block animate-in fade-in zoom-in delay-500 duration-500">
                <div className="mb-2">
                  <span className="font-semibold text-sm text-foreground block mb-1">{t("home.card.metabolic")}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t("home.card.metabolic.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />
      </section>

      {/* Key Benefits Section */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold font-serif text-foreground">{t("home.benefits.title")}</h2>
          <p className="text-lg text-muted-foreground">
            {t("home.benefits.subtitle")}
          </p>
        </div>

        {/* Infographic Feature */}
        <div className="mb-16 bg-muted/30 rounded-2xl p-6 md:p-8 border border-border/50">
          <h3 className="text-xl font-bold font-serif mb-6 text-center">{t("science.infographic.title")}</h3>
          <div className="relative rounded-xl overflow-hidden shadow-xl bg-white">
            <img 
              src="/images/info-keto.png" 
              alt="Infographic: The Hidden Danger of High Insulin vs How Ketones Clean Up Your Brain" 
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
            {t("science.infographic.desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/images/keto_brain.png" 
                alt="Brain health visualization" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-8 space-y-4">
              <div className="text-primary font-semibold tracking-wide text-sm uppercase">
                <span>{t("home.card.cognitive")}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{t("home.card.neuroprotection")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("home.card.neuroprotection.desc")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/images/keto_molecular.png" 
                alt="Molecular process of ketosis" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-8 space-y-4">
              <div className="text-primary font-semibold tracking-wide text-sm uppercase">
                <span>{t("home.card.metabolic_health")}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{t("home.card.inflammation")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("home.card.inflammation.desc")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="/images/keto_weightloss.png" 
                alt="Healthy weight management" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-8 space-y-4">
              <div className="text-primary font-semibold tracking-wide text-sm uppercase">
                <span>{t("home.card.cardio")}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{t("home.card.weight")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("home.card.weight.desc")}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50">
                <img 
                  src="/images/keto_foods.png" 
                  alt="Diverse ketogenic diet foods" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-background p-6 rounded-xl shadow-lg border border-border max-w-xs hidden lg:block">
                <h4 className="font-bold mb-2 text-primary">The Fuel Switch</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {t("science.card.insulin")}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {t("science.card.fat")}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {t("science.card.ketone")}
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif">{t("home.how.title")}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("home.how.desc")}
              </p>
              
              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{t("home.how.fuel")}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t("home.how.fuel.desc")}</p>
                </div>
                
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{t("home.how.hormones")}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t("home.how.hormones.desc")}</p>
                </div>
              </div>

              <Link href="/science">
                <Button variant="outline" className="mt-4">
                  {t("home.how.deepdive")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mb-12">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">{t("home.cta.transform")}</h2>
            <p className="text-primary-foreground/80 text-lg">
              {t("home.cta.transform.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/guide">
                <Button size="lg" variant="secondary" className="text-secondary-foreground font-bold">
                  {t("nav.guide")}
                </Button>
              </Link>
              <Link href="/benefits">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  {t("home.cta.check")}
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Abstract shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
      </section>
    </div>
  );
}
