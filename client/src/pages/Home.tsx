import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Heart, 
  TrendingDown, 
  Zap, 
  Shield, 
  Activity,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

/**
 * Design Philosophy: Scientific Editorial
 * - Magazine-inspired multi-column layouts
 * - Clean white base with deep navy for authority
 * - Bright teal accents for energy
 * - Professional editorial photography
 */

export default function Home() {
  const [, setLocation] = useLocation();
  
  useSEO({
    title: "Complete Ketogenic Diet Guide 2025",
    description: "Discover how the ketogenic diet transforms metabolism, supports weight loss, and improves mental clarity. Science-based guide for beginners and advanced users.",
    url: "/",
  });
  
  useEffect(() => {
    // Add structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "KetoMindset",
      "url": "https://ketomindset.org",
      "description": "A comprehensive, science-based resource for understanding and implementing the ketogenic diet",
      "publisher": {
        "@type": "Organization",
        "name": "KetoMindset"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ketomindset.org/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
            {/* Left Column - Text */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent/30">
                <AlertCircle size={16} />
                <span className="text-sm font-semibold">IMPORTANT: Read Before Starting</span>
              </div>
              
              <h1 className="text-white mb-6">
                Complete Guide to the Ketogenic Diet
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                A science-based journey to metabolic transformation — from molecular mechanisms in cells to practical applications for weight loss, type 2 diabetes, and metabolic syndrome.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8"
                  onClick={() => setLocation('/start-guide')}
                >
                  Start Keto <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                      variant="outline" 
                  className="text-white border-white/50 hover:bg-white/10 hover:text-white font-semibold text-lg px-8"
                  onClick={() => setLocation("/calculator")}
                >
                  Keto Calculator
                </Button>
              </div>
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold text-white">Explore More:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/recipes" className="text-white/80 hover:text-white transition-colors">Recipes</Link>
                  <Link href="/food-list" className="text-white/80 hover:text-white transition-colors">Food List</Link>
                  <Link href="/science" className="text-white/80 hover:text-white transition-colors">The Science</Link>
                  <Link href="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>No Credit Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>Science-Backed</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/images/keto-salmon-avocado.jpg" 
                  alt="Ketogenic food - salmon with avocado"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white px-6 py-4 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">2025</div>
                <div className="text-sm">Latest Research</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-muted py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-secondary">10,000+</div>
              <div className="text-sm text-muted-foreground">Happy Readers</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">Scientific Studies</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-secondary">100%</div>
              <div className="text-sm text-muted-foreground">Evidence-Based</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - What is Keto */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-header">What is the Ketogenic Diet?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              The ketogenic diet is a dietary regimen characterized by <span className="data-highlight">very low carbohydrate intake (5-10% of calories)</span>, high fat intake (70-80% of calories), and moderate protein intake (15-25% of calories). This macronutrient ratio leads to a metabolic state called <strong>ketosis</strong>, in which the body primarily uses ketones instead of glucose as an energy source.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="editorial-card">
              <div className="text-4xl font-bold text-secondary mb-3">5-10%</div>
              <h4 className="font-bold mb-2">Carbohydrates</h4>
              <p className="text-sm text-muted-foreground">Typically 20-50g daily to achieve ketosis</p>
            </Card>
            
            <Card className="editorial-card">
              <div className="text-4xl font-bold text-secondary mb-3">70-80%</div>
              <h4 className="font-bold mb-2">Fats</h4>
              <p className="text-sm text-muted-foreground">Healthy fats as the primary energy source</p>
            </Card>
            
            <Card className="editorial-card">
              <div className="text-4xl font-bold text-secondary mb-3">15-25%</div>
              <h4 className="font-bold mb-2">Protein</h4>
              <p className="text-sm text-muted-foreground">Sufficient to maintain muscle mass</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">More Than Just Weight Loss</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern research reveals that ketones are powerful signaling molecules that regulate critical cellular processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <Card className="editorial-card">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <Brain className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl mb-3">Cognitive Function</h3>
              <h4 className="text-lg font-semibold mb-3 text-secondary">Neuroprotection</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ketones provide the brain with a stable energy source, leading to improved mental clarity, focus, and potentially neuroprotective effects.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                  <span>Stable mental energy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                  <span>Less "brain fog"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                  <span>Better concentration</span>
                </li>
              </ul>
            </Card>

            {/* Benefit 2 */}
            <Card className="editorial-card">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="text-accent" size={28} />
              </div>
              <h3 className="text-xl mb-3">Metabolic Health</h3>
              <h4 className="text-lg font-semibold mb-3 text-accent">Inflammation Control</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beta-hydroxybutyrate directly inhibits the NLRP3 inflammasome, reducing chronic inflammation associated with metabolic diseases.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span>Reduced systemic inflammation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span>Improved insulin sensitivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span>Lower blood sugar levels</span>
                </li>
              </ul>
            </Card>

            {/* Benefit 3 */}
            <Card className="editorial-card">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingDown className="text-primary" size={28} />
              </div>
              <h3 className="text-xl mb-3">Cardiovascular Health</h3>
              <h4 className="text-lg font-semibold mb-3 text-primary">Weight Management</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The ketogenic diet promotes weight loss through appetite suppression, increased energy expenditure, and reduced insulin levels.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Efficient fat burning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Reduced triglycerides</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Increased HDL cholesterol</span>
                </li>
              </ul>
            </Card>

            {/* Benefit 4 */}
            <Card className="editorial-card">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl mb-3">Stable Energy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ketones provide a constant supply of energy without blood sugar fluctuations, eliminating energy "crashes" throughout the day.
              </p>
            </Card>

            {/* Benefit 5 */}
            <Card className="editorial-card">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="text-accent" size={28} />
              </div>
              <h3 className="text-xl mb-3">Type 2 Diabetes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Significant improvement in blood sugar control, reduced HbA1c, and often allows for reduction of diabetes medications.
              </p>
            </Card>

            {/* Benefit 6 */}
            <Card className="editorial-card">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Activity className="text-primary" size={28} />
              </div>
              <h3 className="text-xl mb-3">Fatty Liver Disease</h3>
              <p className="text-muted-foreground leading-relaxed">
                Studies show a 20-50% reduction in liver fat content over 6-12 months on a ketogenic diet.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-header">How the Ketogenic Diet Works</h2>
          
          <div className="space-y-8 mt-12">
            <div className="numbered-item">
              <div className="numbered-item-number">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Insulin Reduction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Restricting carbohydrates significantly lowers insulin levels in the blood. Low insulin signals the body to start releasing fat from fat cells (lipolysis).
                </p>
              </div>
            </div>

            <div className="numbered-item">
              <div className="numbered-item-number">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fat Breakdown (Lipolysis)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fatty acids are released from adipocytes and transported to the liver, where they are converted into ketone bodies through a process called ketogenesis.
                </p>
              </div>
            </div>

            <div className="numbered-item">
              <div className="numbered-item-number">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ketone Production (Ketogenesis)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The liver produces three types of ketone bodies: <span className="data-highlight">beta-hydroxybutyrate (BHB)</span>, acetoacetate, and acetone. BHB is the primary ketone that serves as fuel for the brain, heart, and muscles.
                </p>
              </div>
            </div>

            <div className="numbered-item">
              <div className="numbered-item-number">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Metabolic Adaptation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  After 2-4 weeks, the body fully adapts to using ketones and fats as the primary energy source. This state is called <strong>keto-adaptation</strong> or <strong>metabolic flexibility</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="mt-16 bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Adaptation Timeline</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  1-2
                </div>
                <div className="font-semibold mb-2">Day 1-2</div>
                <p className="text-sm text-muted-foreground">Glycogen depletion</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  3-4
                </div>
                <div className="font-semibold mb-2">Day 3-4</div>
                <p className="text-sm text-muted-foreground">Ketosis begins</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  1
                </div>
                <div className="font-semibold mb-2">Week 1</div>
                <p className="text-sm text-muted-foreground">Adaptation, keto flu</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  2-4
                </div>
                <div className="font-semibold mb-2">Week 2-4</div>
                <p className="text-sm text-muted-foreground">Full keto-adaptation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="bg-muted py-20">
        <div className="container max-w-4xl">
          <h2 className="section-header mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card className="editorial-card">
              <h3 className="text-lg font-bold mb-3 text-secondary">What is the ketogenic diet?</h3>
              <p className="text-muted-foreground leading-relaxed">
                The ketogenic diet (keto) is a dietary regimen with very low carbohydrate content, moderate protein, and high fat content. The goal is to get the body into a metabolic state called ketosis, where the body burns fat as its primary energy source instead of carbohydrates.
              </p>
            </Card>

            <Card className="editorial-card">
              <h3 className="text-lg font-bold mb-3 text-secondary">How does ketosis work?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ketosis occurs when you restrict carbohydrate intake to approximately 20-50 grams per day. The liver begins producing molecules called ketones (e.g., beta-hydroxybutyrate or BHB) from fatty acids, which serve as an alternative fuel source for the brain, muscles, and other organs.
              </p>
            </Card>

            <Card className="editorial-card">
              <h3 className="text-lg font-bold mb-3 text-secondary">Is the ketogenic diet safe?</h3>
              <p className="text-muted-foreground leading-relaxed">
                For most healthy people, the ketogenic diet is considered safe when followed correctly and ideally under professional supervision. It is not suitable for people with certain health conditions (e.g., pancreatic, liver, or kidney diseases). It's important to consult with your doctor before starting any diet.
              </p>
            </Card>

            <Card className="editorial-card">
              <h3 className="text-lg font-bold mb-3 text-secondary">What are the main benefits of the keto diet?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Main benefits include effective weight loss, improved blood sugar control, increased mental clarity and energy, reduced inflammation in the body, and potential improvement of certain neurological conditions.
              </p>
            </Card>

            <Card className="editorial-card">
              <h3 className="text-lg font-bold mb-3 text-secondary">What can I eat on the keto diet?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Focus on healthy fats (avocado, olive oil, nuts), meat, fish, eggs, and low-carb vegetables (leafy greens, broccoli, cauliflower). Avoid sugar, grains, legumes, most fruits, and starchy vegetables.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Transform Your Health?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get the complete guide on how to safely start keto, manage side effects, and achieve long-term success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8"
              onClick={() => setLocation('/start-guide')}
            >
              Beginner's Guide <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-semibold text-lg px-8"
              onClick={() => setLocation('/benefits')}
            >
              Benefits & Risks
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
