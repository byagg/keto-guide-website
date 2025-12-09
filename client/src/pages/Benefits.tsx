import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle, Scale } from "lucide-react";
import { Link } from "wouter";

export default function Benefits() {
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
          Indications & Contraindications
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-foreground">
          Is Keto Right for You?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          A balanced look at who can benefit most from the ketogenic diet and who should avoid it for safety reasons.
        </p>
      </div>

      {/* Who Can Benefit */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-secondary-foreground">
          <div className="bg-secondary/10 p-2 rounded-lg">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">Who Can Benefit?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Obesity & Metabolic Syndrome</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Powerful tool for achieving clinically meaningful weight loss and improving key metabolic markers like waist circumference, triglycerides, HDL cholesterol, and blood pressure.
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Type 2 Diabetes</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Supervised ketogenic diets can lead to dramatic improvements in blood sugar control (HbA1c), reduce fasting glucose, and often allow for medication reduction.
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-lg">NAFLD / MASLD</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Emerging research shows that ketogenic diets can reduce liver fat and lower liver enzymes in non-alcoholic fatty liver disease.
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-lg">PCOS</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Shown to improve weight, insulin resistance, androgen levels, and menstrual regularity in women with Polycystic Ovary Syndrome.
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Who Should Avoid */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-destructive">
          <div className="bg-destructive/10 p-2 rounded-lg">
            <XCircle className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">Absolute Contraindications</h2>
        </div>

        <Card className="bg-destructive/5 border-destructive/20">
          <CardContent className="p-6">
            <p className="font-medium text-destructive mb-4">Do NOT start a ketogenic diet if you have:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground/80">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                <span>Known disorders of fatty acid oxidation (e.g., CPT-II deficiency)</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                <span>Defects in ketone body metabolism</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                <span>Acute or severe chronic pancreatitis</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                <span>Porphyria or severe liver failure</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Caution Required */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-amber-500">
          <div className="bg-amber-500/10 p-2 rounded-lg">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">Relative Contraindications</h2>
        </div>
        
        <p className="text-muted-foreground">
          These conditions require experienced medical supervision before and during the diet:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Type 1 Diabetes",
            "Chronic Kidney Disease",
            "Pregnancy & Breastfeeding",
            "History of Eating Disorders",
            "Uncontrolled Dyslipidemia"
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 rounded-lg border bg-card">
              <Scale className="h-5 w-5 text-amber-500" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Line */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-primary">The Bottom Line</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          For people with obesity and insulin resistance, the ketogenic diet can be a highly effective tool, but it is crucial to consult with a healthcare professional before starting.
        </p>
      </div>
    </div>
  );
}
