import { Card } from "@/components/ui/card";
import { Brain, Zap, Activity, TrendingUp, Atom, Microscope } from "lucide-react";
import { useEffect } from "react";

/**
 * Design Philosophy: Scientific Editorial
 * Deep dive into the science behind ketosis
 */

export default function Science() {
  useEffect(() => {
    // Add structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Science Behind Ketosis: Molecular Mechanisms",
      "description": "Comprehensive scientific explanation of how ketosis works at the cellular level",
      "author": {
        "@type": "Organization",
        "name": "KetoMindset"
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
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Microscope size={16} />
              <span className="text-sm font-semibold">PEER-REVIEWED RESEARCH</span>
            </div>
            <h1 className="mb-6">The Science Behind Ketosis</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Understanding the molecular mechanisms that make the ketogenic diet a powerful metabolic intervention
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-header">What Happens in Your Body</h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed">
              When you drastically reduce carbohydrate intake to <span className="data-highlight">20-50 grams per day</span>, your body undergoes a profound metabolic shift. Within 2-4 days, liver glycogen stores become depleted, forcing the body to find alternative fuel sources. This triggers a cascade of hormonal and enzymatic changes that fundamentally alter how your cells produce energy.
            </p>
          </div>

          {/* Process Cards */}
          <div className="space-y-8 mb-16">
            <Card className="editorial-card">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Activity className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Step 1: Insulin Suppression</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Carbohydrate restriction causes a dramatic drop in blood glucose, which triggers a corresponding decrease in insulin secretion from pancreatic beta cells. Low insulin levels signal adipocytes (fat cells) to release stored triglycerides through hormone-sensitive lipase activation.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Key Mechanism:</p>
                    <p className="text-sm text-muted-foreground">
                      Insulin normally inhibits lipolysis. When insulin drops below <span className="data-highlight">~5 μU/mL</span>, the inhibition is released, and fat breakdown accelerates.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="editorial-card">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Atom className="text-accent" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Step 2: Lipolysis & Fatty Acid Release</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Triglycerides stored in adipose tissue are broken down into glycerol and three fatty acid molecules. These free fatty acids (FFAs) are released into the bloodstream and transported to the liver bound to albumin protein.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Chemical Process:</p>
                    <p className="text-sm text-muted-foreground">
                      Triglyceride → Glycerol + 3 Fatty Acids<br/>
                      The liver can process up to <span className="data-highlight">180g of fatty acids per day</span> during full ketosis.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="editorial-card">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Step 3: Ketogenesis in the Liver</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In hepatic mitochondria, fatty acids undergo beta-oxidation to produce acetyl-CoA. When acetyl-CoA accumulates faster than the citric acid cycle can process it, the liver converts excess acetyl-CoA into ketone bodies through a series of enzymatic reactions.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Three Ketone Bodies Produced:</p>
                    <ul className="text-sm text-muted-foreground space-y-2 mt-2">
                      <li>• <strong>Acetoacetate (AcAc)</strong> - The first ketone formed</li>
                      <li>• <strong>Beta-hydroxybutyrate (BHB)</strong> - Primary ketone, 70-80% of total</li>
                      <li>• <strong>Acetone</strong> - Volatile, exhaled through breath (causes "keto breath")</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="editorial-card">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Step 4: Ketone Utilization</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ketone bodies are released into the bloodstream and transported to peripheral tissues (brain, heart, skeletal muscle). Inside cells, BHB is converted back to acetyl-CoA, which enters the citric acid cycle to produce ATP—the cellular energy currency.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Energy Efficiency:</p>
                    <p className="text-sm text-muted-foreground">
                      Ketones provide <span className="data-highlight">~27 ATP molecules</span> per BHB molecule—more efficient than glucose metabolism in certain tissues.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Ketone Levels */}
          <h2 className="section-header">Measuring Ketosis</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="editorial-card text-center">
              <div className="text-4xl font-bold text-muted-foreground mb-3">&lt; 0.5</div>
              <h4 className="font-bold mb-2">Not in Ketosis</h4>
              <p className="text-sm text-muted-foreground">Blood ketone levels below 0.5 mmol/L indicate carbohydrate metabolism</p>
            </Card>
            
            <Card className="editorial-card text-center border-2 border-secondary">
              <div className="text-4xl font-bold text-secondary mb-3">0.5-3.0</div>
              <h4 className="font-bold mb-2">Nutritional Ketosis</h4>
              <p className="text-sm text-muted-foreground">Optimal range for weight loss and metabolic benefits</p>
            </Card>
            
            <Card className="editorial-card text-center">
              <div className="text-4xl font-bold text-accent mb-3">&gt; 3.0</div>
              <h4 className="font-bold mb-2">Deep Ketosis</h4>
              <p className="text-sm text-muted-foreground">Higher levels, often seen during fasting or therapeutic keto</p>
            </Card>
          </div>

          {/* Molecular Benefits */}
          <h2 className="section-header">Beyond Energy: Signaling Molecules</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg leading-relaxed">
              Recent research reveals that ketones—especially BHB—are not just fuel molecules but powerful signaling agents that regulate gene expression, inflammation, and cellular stress responses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="editorial-card">
              <h3 className="text-xl mb-3">NLRP3 Inflammasome Inhibition</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                BHB directly inhibits the NLRP3 inflammasome, a protein complex responsible for triggering inflammatory responses. This mechanism explains keto's anti-inflammatory effects.
              </p>
              <div className="text-sm text-secondary font-semibold">
                Clinical Impact: Reduced IL-1β and IL-18 cytokine production
              </div>
            </Card>

            <Card className="editorial-card">
              <h3 className="text-xl mb-3">HDAC Inhibition</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                BHB acts as a histone deacetylase (HDAC) inhibitor, altering gene expression patterns. This epigenetic effect influences metabolism, stress resistance, and longevity pathways.
              </p>
              <div className="text-sm text-secondary font-semibold">
                Clinical Impact: Enhanced mitochondrial biogenesis and antioxidant defenses
              </div>
            </Card>

            <Card className="editorial-card">
              <h3 className="text-xl mb-3">AMPK Activation</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Ketosis activates AMP-activated protein kinase (AMPK), a master metabolic regulator that promotes fat oxidation, mitochondrial biogenesis, and autophagy.
              </p>
              <div className="text-sm text-secondary font-semibold">
                Clinical Impact: Improved insulin sensitivity and cellular cleanup
              </div>
            </Card>

            <Card className="editorial-card">
              <h3 className="text-xl mb-3">Nrf2 Pathway Activation</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Ketones upregulate the Nrf2 transcription factor, which controls the expression of antioxidant and detoxification genes, protecting cells from oxidative stress.
              </p>
              <div className="text-sm text-secondary font-semibold">
                Clinical Impact: Neuroprotection and reduced oxidative damage
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Research References */}
      <section className="bg-muted py-20">
        <div className="container max-w-4xl">
          <h2 className="section-header mb-12">Key Research Studies</h2>
          
          <div className="space-y-4">
            <Card className="editorial-card">
              <p className="text-sm font-semibold mb-2">Youm et al. (2015) - Nature Medicine</p>
              <p className="text-sm text-muted-foreground">
                "The ketone metabolite β-hydroxybutyrate blocks NLRP3 inflammasome-mediated inflammatory disease"
              </p>
            </Card>

            <Card className="editorial-card">
              <p className="text-sm font-semibold mb-2">Newman et al. (2017) - Cell Metabolism</p>
              <p className="text-sm text-muted-foreground">
                "Ketone body signaling mediates intestinal stem cell homeostasis and adaptation to diet"
              </p>
            </Card>

            <Card className="editorial-card">
              <p className="text-sm font-semibold mb-2">Shimazu et al. (2013) - Science</p>
              <p className="text-sm text-muted-foreground">
                "Suppression of oxidative stress by β-hydroxybutyrate, an endogenous histone deacetylase inhibitor"
              </p>
            </Card>

            <Card className="editorial-card">
              <p className="text-sm font-semibold mb-2">Veech et al. (2017) - Frontiers in Physiology</p>
              <p className="text-sm text-muted-foreground">
                "Ketone bodies mimic the life span extending properties of caloric restriction"
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
