import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Microscope, Dna, Flame, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Science() {
  return (
    <div className="container max-w-4xl py-12 md:py-24 space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <Link href="/">
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </div>
        </Link>
        <Badge variant="outline" className="px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
          Molecular Mechanisms
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-foreground">
          How the Ketogenic Diet Works: <br className="hidden md:block" />
          <span className="text-primary">A Molecular Deep Dive</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Understanding the metabolic shift from glucose to fat metabolism and the signaling power of ketone bodies.
        </p>
      </div>

      {/* Section 1: Glucose to Fat */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-primary">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Flame className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">From Glucose to Fat Metabolism</h2>
        </div>
        
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-muted-foreground">
          <p>
            In a typical Western diet, our cells primarily run on glucose. After a carbohydrate-rich meal, blood glucose rises, prompting the pancreas to release insulin. Insulin helps cells absorb glucose for energy and storage, while simultaneously halting the breakdown of fat.
          </p>
          <p>
            The ketogenic diet fundamentally shifts this metabolic paradigm. By restricting carbohydrate intake to less than 50 grams per day (typically 5-10% of total energy) and increasing fat intake (70-80%), the body enters a state of <strong>ketosis</strong>.
          </p>
        </div>

        <Card className="bg-muted/30 border-none">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-bold text-lg mb-4">The Metabolic Shift Triggers:</h3>
            <ul className="grid gap-4 md:grid-cols-3">
              <li className="bg-background p-4 rounded-lg shadow-sm border border-border/50">
                <div className="font-bold text-primary mb-1">Lower Insulin</div>
                <div className="text-sm text-muted-foreground">Blood glucose and insulin levels drop significantly.</div>
              </li>
              <li className="bg-background p-4 rounded-lg shadow-sm border border-border/50">
                <div className="font-bold text-primary mb-1">Fat Breakdown</div>
                <div className="text-sm text-muted-foreground">Hormone-sensitive lipase breaks down triglycerides into free fatty acids.</div>
              </li>
              <li className="bg-background p-4 rounded-lg shadow-sm border border-border/50">
                <div className="font-bold text-primary mb-1">Ketone Production</div>
                <div className="text-sm text-muted-foreground">Liver converts acetyl-CoA into ketone bodies (BHB, AcAc, Acetone).</div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Section 2: Ketones as Fuel */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-primary">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Zap className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">Ketones as a Superior Fuel Source</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="prose prose-lg prose-slate dark:prose-invert text-muted-foreground">
            <p>
              Ketone bodies are water-soluble and easily transported through the bloodstream to various tissues, including the muscle, heart, and brain. Once inside the cells, they are converted back to acetyl-CoA and enter the Krebs cycle to generate ATP—the body's energy currency.
            </p>
            <p>
              A key advantage is that the brain can derive a significant portion of its energy from ketones, reducing its reliance on glucose. This metabolic flexibility is why individuals on a ketogenic diet can maintain sharp cognitive function despite very low carbohydrate intake.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50">
            <img 
              src="/images/keto_molecular.png" 
              alt="Ketone molecular structure" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-xs font-medium">Visualizing Ketone Transport</p>
            </div>
          </div>
        </div>

        {/* Infographic Feature */}
        <div className="mt-12 bg-muted/30 rounded-2xl p-6 md:p-8 border border-border/50">
          <h3 className="text-xl font-bold font-serif mb-6 text-center">Visualizing the Impact: High Insulin vs. Ketones</h3>
          <div className="relative rounded-xl overflow-hidden shadow-xl bg-white">
            <img 
              src="/images/info-keto.png" 
              alt="Infographic: The Hidden Danger of High Insulin vs How Ketones Clean Up Your Brain" 
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
            This infographic illustrates the "fuel switch" in the brain. While high insulin levels can create metabolic debris, ketones provide a cleaner, more efficient fuel source that easily penetrates the blood-brain barrier.
          </p>
        </div>
      </section>

      <Separator />

      {/* Section 3: Signaling Molecules */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-primary">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Dna className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">More Than Just Fuel: Signaling Molecules</h2>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-muted-foreground mb-6">
          <p>
            Modern research reveals that ketones are not just fuel; they are powerful signaling molecules that regulate critical cellular processes.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Microscope className="h-5 w-5 text-secondary-foreground" />
                Anti-Inflammatory Effects
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              BHB directly inhibits the NLRP3 inflammasome, a key driver of chronic inflammation. This helps reduce the production of inflammatory cytokines like IL-1β and IL-18.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Dna className="h-5 w-5 text-secondary-foreground" />
                Epigenetic Regulation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              BHB acts as a histone deacetylase (HDAC) inhibitor, influencing gene expression related to oxidative stress resistance, metabolism, and cellular longevity. This has protective implications for cardiovascular and neurodegenerative diseases.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* References */}
      <section className="bg-muted/30 p-8 rounded-xl space-y-4 mt-12">
        <h3 className="font-bold text-foreground">Scientific References</h3>
        <ul className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
          <li>How the ketogenic diet works – down to the molecular level. (2022). <em>Online Library</em>.</li>
          <li>Ketone body metabolism. (2022). <em>PMC</em>.</li>
          <li>Ketones as signaling molecules. (2022). <em>ScienceDirect</em>.</li>
        </ul>
      </section>
    </div>
  );
}
