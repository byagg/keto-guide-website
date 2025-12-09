import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, AlertCircle, Brain, Zap, Heart, Activity } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
              <Badge variant="outline" className="px-4 py-1 text-sm border-primary/20 text-primary bg-primary/5">
                Science-Backed Nutrition
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground font-serif leading-tight">
                Unlock Metabolic Health: <span className="text-primary">The Definitive Keto Guide</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                A comprehensive exploration of how the ketogenic diet can transform your health, from molecular mechanisms to practical application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/guide">
                  <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20">
                    Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/science">
                  <Button variant="outline" size="lg" className="text-base px-8 h-12 bg-background/50 backdrop-blur">
                    Explore the Science
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 aspect-[4/3]">
                <img 
                  src="/images/keto_hero.png" 
                  alt="Healthy ketogenic meal with avocado, salmon, and eggs" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border max-w-xs hidden md:block animate-in fade-in zoom-in delay-500 duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-secondary/20 p-2 rounded-full text-secondary-foreground">
                    <Zap className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-sm">Metabolic Switch</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Shift from glucose to fat metabolism for sustained energy.
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
          <h2 className="text-3xl font-bold font-serif text-foreground">More Than Just Weight Loss</h2>
          <p className="text-lg text-muted-foreground">
            Modern research reveals that ketones are powerful signaling molecules that regulate critical cellular processes.
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
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Brain className="h-5 w-5" />
                <span>Cognitive Function</span>
              </div>
              <h3 className="text-xl font-bold">Neuroprotection</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ketones provide a stable fuel source for the brain, reducing reliance on glucose and potentially offering neuroprotective effects.
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
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-secondary-foreground font-semibold">
                <Activity className="h-5 w-5" />
                <span>Metabolic Health</span>
              </div>
              <h3 className="text-xl font-bold">Inflammation Control</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                BHB directly inhibits the NLRP3 inflammasome, a key driver of chronic inflammation, promoting better long-term health.
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
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Heart className="h-5 w-5" />
                <span>Cardiovascular</span>
              </div>
              <h3 className="text-xl font-bold">Weight Management</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Superior appetite control and fat mobilization make keto a powerful tool for sustainable weight loss and metabolic syndrome reversal.
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
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary-foreground" /> Lower Insulin</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary-foreground" /> Fat Oxidation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary-foreground" /> Ketone Production</li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif">How the Ketogenic Diet Works</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In a standard Western diet, most cells run primarily on glucose. The ketogenic diet fundamentally shifts this metabolic paradigm. By restricting carbohydrate intake and increasing healthy fats, the body enters a state of <strong>ketosis</strong>.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Efficient Fuel</h3>
                    <p className="text-muted-foreground text-sm">Ketones are water-soluble and easily transported to the brain and muscles, providing a clean-burning energy source.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Hormonal Balance</h3>
                    <p className="text-muted-foreground text-sm">Lower insulin levels unlock stored fat for energy and improve insulin sensitivity over time.</p>
                  </div>
                </div>
              </div>

              <Link href="/science">
                <Button variant="outline" className="mt-4">
                  Read the Molecular Deep Dive
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
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Ready to Transform Your Health?</h2>
            <p className="text-primary-foreground/80 text-lg">
              Get the complete guide to starting keto safely, managing side effects, and achieving long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/guide">
                <Button size="lg" variant="secondary" className="text-secondary-foreground font-bold">
                  Start the Guide
                </Button>
              </Link>
              <Link href="/benefits">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Check Indications
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
