import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, 
  AlertTriangle, 
  TrendingDown, 
  Brain, 
  Heart,
  Activity,
  Zap,
  Shield
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "wouter";

/**
 * Design Philosophy: Scientific Editorial
 * Balanced view of benefits and risks
 */

export default function Benefits() {
  useSEO({
    title: "Benefits & Risks of the Ketogenic Diet",
    description: "An evidence-based analysis of what the ketogenic diet can—and cannot—do for your health. Learn about proven benefits and potential risks.",
    url: "/benefits",
    type: "article",
  });
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Benefits & Risks of the Ketogenic Diet</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              An evidence-based analysis of what the ketogenic diet can—and cannot—do for your health
            </p>
            <div className="mt-8 space-x-4">
              <Link href="/science" className="text-white/80 hover:text-white transition-colors">The Science</Link>
              <Link href="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <CheckCircle2 className="text-secondary" size={32} />
            <h2 className="section-header mb-0">Proven Benefits</h2>
          </div>

          <div className="space-y-8">
            {/* Benefit 1 */}
            <Card className="editorial-card">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="text-secondary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Weight Loss & Body Composition</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Multiple meta-analyses show that ketogenic diets produce greater weight loss compared to low-fat diets, especially in the first 6 months. The effect is driven by appetite suppression, increased satiety, and metabolic advantages.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Clinical Evidence:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Average weight loss: <span className="data-highlight">8-10 kg in 6 months</span></li>
                      <li>• Preferential loss of visceral (abdominal) fat</li>
                      <li>• Better preservation of lean muscle mass vs. low-fat diets</li>
                      <li>• Reduced hunger hormones (ghrelin suppression)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Benefit 2 */}
            <Card className="editorial-card">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Activity className="text-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Type 2 Diabetes & Blood Sugar Control</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ketogenic diets dramatically improve glycemic control in people with type 2 diabetes and prediabetes. Many patients can reduce or eliminate diabetes medications under medical supervision.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Clinical Evidence:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• HbA1c reduction: <span className="data-highlight">0.9-1.5% in 6 months</span></li>
                      <li>• Fasting glucose drops by 20-40 mg/dL</li>
                      <li>• 50-95% reduction in diabetes medications</li>
                      <li>• Improved insulin sensitivity within weeks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Benefit 3 */}
            <Card className="editorial-card">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Cardiovascular Health Markers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Despite high fat intake, ketogenic diets improve most cardiovascular risk markers, particularly triglycerides and HDL cholesterol. Effects on LDL cholesterol are variable.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Clinical Evidence:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Triglycerides decrease by <span className="data-highlight">30-50%</span></li>
                      <li>• HDL ("good") cholesterol increases by 10-20%</li>
                      <li>• Blood pressure reduction: 5-10 mmHg systolic</li>
                      <li>• Improved LDL particle size (less atherogenic)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Benefit 4 */}
            <Card className="editorial-card">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="text-secondary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Neurological Conditions</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The ketogenic diet was originally developed in the 1920s to treat epilepsy and remains a proven therapy for drug-resistant seizures. Emerging research explores benefits for other neurological conditions.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Clinical Evidence:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Epilepsy: <span className="data-highlight">50-90% seizure reduction</span> in responders</li>
                      <li>• Improved cognitive function in mild cognitive impairment</li>
                      <li>• Potential benefits in Alzheimer's and Parkinson's (early research)</li>
                      <li>• Reduced migraine frequency in some studies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Benefit 5 */}
            <Card className="editorial-card">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Non-Alcoholic Fatty Liver Disease (NAFLD)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ketogenic diets rapidly reduce liver fat content, even independent of weight loss. This makes keto a promising intervention for NAFLD and NASH.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Clinical Evidence:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Liver fat reduction: <span className="data-highlight">20-50% in 6-12 months</span></li>
                      <li>• Improved liver enzymes (ALT, AST)</li>
                      <li>• Reduced liver inflammation markers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Benefit 6 */}
            <Card className="editorial-card">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Energy & Mental Clarity</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Many people report improved mental clarity, stable energy levels, and reduced "brain fog" after adapting to ketosis. While subjective, these effects are consistently reported.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Reported Benefits:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Elimination of post-meal energy crashes</li>
                      <li>• Improved focus and concentration</li>
                      <li>• Reduced afternoon fatigue</li>
                      <li>• Better mood stability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <AlertTriangle className="text-accent" size={32} />
              <h2 className="section-header mb-0">Potential Risks & Side Effects</h2>
            </div>

            <div className="space-y-8">
              {/* Risk 1 */}
              <Card className="editorial-card border-l-4 border-l-accent">
                <h3 className="text-xl mb-3 text-accent">Keto Flu (Temporary)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  During the first 1-2 weeks, many people experience flu-like symptoms as the body adapts to ketosis. This is temporary and can be minimized with proper electrolyte management.
                </p>
                <div className="bg-background p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Symptoms:</p>
                  <p className="text-sm text-muted-foreground">
                    Fatigue, headache, irritability, nausea, dizziness, muscle cramps, constipation
                  </p>
                  <p className="text-sm font-semibold mt-3 mb-2">Prevention:</p>
                  <p className="text-sm text-muted-foreground">
                    Increase sodium (3-5g/day), potassium (3-4g/day), and magnesium (300-400mg/day)
                  </p>
                </div>
              </Card>

              {/* Risk 2 */}
              <Card className="editorial-card border-l-4 border-l-accent">
                <h3 className="text-xl mb-3 text-accent">Nutrient Deficiencies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Restricting entire food groups (grains, most fruits, legumes) can lead to deficiencies in certain vitamins, minerals, and fiber if the diet is not well-planned.
                </p>
                <div className="bg-background p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">At-Risk Nutrients:</p>
                  <p className="text-sm text-muted-foreground">
                    Thiamine (B1), folate, vitamin C, vitamin D, calcium, magnesium, fiber
                  </p>
                  <p className="text-sm font-semibold mt-3 mb-2">Prevention:</p>
                  <p className="text-sm text-muted-foreground">
                    Eat diverse low-carb vegetables, consider supplementation, monitor nutrient intake
                  </p>
                </div>
              </Card>

              {/* Risk 3 */}
              <Card className="editorial-card border-l-4 border-l-accent">
                <h3 className="text-xl mb-3 text-accent">LDL Cholesterol Increase (Variable)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Some people experience significant increases in LDL cholesterol on keto, while others see decreases. The clinical significance is debated, especially when LDL particle size improves.
                </p>
                <div className="bg-background p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">What to Do:</p>
                  <p className="text-sm text-muted-foreground">
                    Monitor lipid panels regularly. If LDL rises significantly, consider modifying fat sources (more monounsaturated fats, less saturated fat) or consult a lipid specialist.
                  </p>
                </div>
              </Card>

              {/* Risk 4 */}
              <Card className="editorial-card border-l-4 border-l-accent">
                <h3 className="text-xl mb-3 text-accent">Kidney Stones (Rare)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Long-term ketogenic diets may increase the risk of kidney stones in susceptible individuals, particularly uric acid and calcium oxalate stones.
                </p>
                <div className="bg-background p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Prevention:</p>
                  <p className="text-sm text-muted-foreground">
                    Stay well-hydrated (2-3 liters/day), ensure adequate citrate intake, monitor urine pH
                  </p>
                </div>
              </Card>

              {/* Risk 5 */}
              <Card className="editorial-card border-l-4 border-l-accent">
                <h3 className="text-xl mb-3 text-accent">Digestive Issues</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Some people experience constipation, diarrhea, or changes in gut microbiome composition due to reduced fiber intake and dietary changes.
                </p>
                <div className="bg-background p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Management:</p>
                  <p className="text-sm text-muted-foreground">
                    Eat plenty of low-carb vegetables, consider psyllium husk, stay hydrated, include fermented foods
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contraindications */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-header mb-12">Who Should NOT Do Keto</h2>
          
          <Card className="editorial-card bg-destructive/5 border-destructive">
            <h3 className="text-xl mb-4 text-destructive">Absolute Contraindications</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-destructive mt-1 flex-shrink-0" size={20} />
                <span><strong>Pancreatitis:</strong> High fat intake can trigger or worsen pancreatic inflammation</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-destructive mt-1 flex-shrink-0" size={20} />
                <span><strong>Liver failure:</strong> The liver must be functional to produce ketones</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-destructive mt-1 flex-shrink-0" size={20} />
                <span><strong>Fat metabolism disorders:</strong> Conditions affecting fat digestion or transport</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-destructive mt-1 flex-shrink-0" size={20} />
                <span><strong>Porphyria:</strong> Ketosis can trigger porphyria attacks</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-destructive mt-1 flex-shrink-0" size={20} />
                <span><strong>Pregnancy & breastfeeding:</strong> Insufficient research on safety</span>
              </li>
            </ul>

            <h3 className="text-xl mb-4 mt-8 text-accent">Relative Contraindications (Requires Medical Supervision)</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span><strong>Type 1 diabetes:</strong> Risk of diabetic ketoacidosis (DKA)</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span><strong>Kidney disease:</strong> High protein intake may worsen kidney function</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span><strong>History of eating disorders:</strong> Restrictive diets may trigger relapse</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span><strong>Gallbladder removal:</strong> May have difficulty digesting high fat intake</span>
              </li>
            </ul>
          </Card>

          <div className="mt-12 bg-accent/10 p-6 rounded-xl">
            <p className="text-center font-semibold text-lg">
              ⚠️ Always consult with a healthcare provider before starting a ketogenic diet, especially if you have any medical conditions or take medications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
