import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, AlertCircle, Brain, Zap, Heart, Activity } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t, getLocalizedPath } = useLanguage();

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      {/* Hero Section - Direct Response Style */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-20 md:pb-24 lg:pt-32 lg:pb-32 border-b-4 border-yellow-400">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

            {/* Copy Side */}
            <div className="space-y-6 md:space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in order-2 lg:order-1">
              <div className="inline-block px-4 py-2 text-sm md:text-base font-bold tracking-wide uppercase text-white bg-red-600 rounded-sm shadow-sm rotate-1">
                ⚠️ WARNING: Don't Start Keto Until You Read This
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.1]">
                {t("home.title")}
                <span className="block text-primary mt-2">Without The Struggle.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-xl font-medium">
                {t("home.subtitle")} Stop guessing and start burning fat. Discover the simple, science-backed way to increased energy and mental clarity.
              </p>

              <div className="highlight-box bg-yellow-100 border-l-8 border-yellow-500 p-6 my-6 rounded-r-lg">
                <p className="font-bold text-lg text-black">
                  "I finally lost the weight and kept it off!"
                </p>
                <p className="text-sm text-gray-700 mt-2">- Verified Reader</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={getLocalizedPath("/guide")}>
                  <Button size="lg" className="text-lg md:text-xl font-bold px-10 py-8 h-auto shadow-xl shadow-red-200 bg-red-600 hover:bg-red-700 text-white uppercase tracking-wider w-full sm:w-auto border-2 border-red-700">
                    {t("home.cta.start")} <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href={getLocalizedPath("/science")}>
                  <Button variant="outline" size="lg" className="text-lg md:text-xl font-bold px-10 py-8 h-auto bg-white border-2 border-black text-black hover:bg-gray-100 w-full sm:w-auto uppercase">
                    {t("home.cta.science")}
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-500 italic">
                * 100% Free Guide. No Credit Card Required.
              </p>
            </div>

            {/* Image Side */}
            <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200 order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/keto_hero_v2.png"
                  alt="Healthy ketogenic meal with avocado, salmon, and eggs"
                  className="object-cover w-full h-full"
                />
                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-black font-extrabold px-4 py-2 rounded-full shadow-lg transform rotate-3 border-2 border-black">
                  New for 2025!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="container">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground">{t("home.benefits.title")}</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {t("home.benefits.subtitle")}
          </p>
        </div>

        {/* Infographic Feature */}
        <div className="mb-8 md:mb-12 lg:mb-16 bg-muted/30 rounded-2xl p-4 md:p-6 lg:p-8 border border-border/50">
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

        <div className="space-y-6 md:space-y-8 lg:space-y-12">
          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/keto_brain.png"
                alt="Brain health visualization"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4">
              <div className="text-primary font-semibold tracking-wide text-sm uppercase">
                <span>{t("home.card.cognitive")}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{t("home.card.neuroprotection")}</h3>
              <div className="text-muted-foreground text-sm leading-relaxed space-y-3 md:space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground mb-2">The brain's energy problem</h4>
                  <p>Your brain is small in size but huge in energy demand, using about <strong>20% of your resting energy</strong> even though it's only ~2% of your body weight. Under a typical high-carb diet, that energy comes primarily from glucose. When glucose supply is unstable (skipped meals, blood sugar swings, insulin resistance), many people feel:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Brain fog</li>
                    <li>Irritability</li>
                    <li>Crashes in focus and mood</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-foreground mb-2">Ketones as a stable fuel for the brain</h4>
                  <p>Nutritional ketosis offers the brain a second fuel line: <strong>ketone bodies</strong>. These are small, water-soluble molecules produced by the liver when carbohydrate intake is low and fat oxidation is high.</p>
                  <p className="mt-2">In ketosis, blood levels of BHB and acetoacetate rise into the <strong>0.5–3.0 mmol/L range</strong> (nutritional, not diabetic ketosis). These ketones:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Cross the blood–brain barrier via monocarboxylate transporters</li>
                    <li>Are converted to acetyl-CoA inside neurons</li>
                    <li>Enter the Krebs cycle to generate ATP – the cell's main energy currency</li>
                  </ul>
                  <p className="mt-2">Practically, people often report:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>More stable mental energy</li>
                    <li>Fewer energy "crashes"</li>
                    <li>Better ability to focus for longer periods</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-foreground mb-2">Why ketones may be neuroprotective</h4>
                  <p>Ketones support brain health through several interconnected pathways:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li><strong>Mitochondrial support</strong> – enhancing efficiency, reducing dysfunction, lowering ROS production</li>
                    <li><strong>Neurotransmitter balance</strong> – influencing GABA/glutamate balance</li>
                    <li><strong>Epigenetic and signaling effects</strong> – BHB acts as an HDAC inhibitor, upregulating genes involved in antioxidant defense</li>
                    <li><strong>Reduced neuroinflammation</strong> – by dampening inflammatory pathways, especially NLRP3</li>
                  </ul>
                </div>

                <p className="font-semibold text-foreground italic mt-3">Key idea: Ketones are not just an "emergency backup fuel" – they are an optimized fuel and signaling system that can support brain function, especially when glucose metabolism is impaired.</p>
              </div>
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
            <CardContent className="p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4">
              <div className="text-primary font-semibold tracking-wide text-sm uppercase">
                <span>{t("home.card.metabolic_health")}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{t("home.card.inflammation")}</h3>
              <div className="text-muted-foreground text-sm leading-relaxed space-y-3 md:space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground mb-2">Chronic inflammation: the hidden driver</h4>
                  <p>Obesity, type 2 diabetes, fatty liver, and cardiovascular disease share a common thread: <strong>chronic low-grade inflammation</strong>. This persistent inflammatory state:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Disrupts insulin signaling</li>
                    <li>Damages blood vessels</li>
                    <li>Accelerates tissue aging and organ dysfunction</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-foreground mb-2">BHB and the NLRP3 inflammasome</h4>
                  <p>A major molecular player is the <strong>NLRP3 inflammasome</strong> – a multi-protein complex inside immune cells that activates inflammatory cytokines such as IL-1β and IL-18.</p>
                  <p className="mt-2">One of the most fascinating findings: <strong>β-hydroxybutyrate directly inhibits NLRP3 inflammasome activation</strong>. Multiple lines of evidence show that BHB:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Reduces NLRP3 activation and downstream IL-1β/IL-18 secretion</li>
                    <li>Dampens microglial activation and neuroinflammation</li>
                    <li>Mitigates inflammatory damage in models of Alzheimer's disease</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-foreground mb-2">Systemic effects: beyond the brain</h4>
                  <p>The BHB–NLRP3 link has consequences across the body:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li><strong>In the liver</strong> – reduced inflammasome activation may help limit progression from simple fatty liver to more inflamed, fibrotic stages</li>
                    <li><strong>In adipose tissue</strong> – lower inflammatory signaling can improve insulin sensitivity</li>
                    <li><strong>In the vasculature</strong> – decreased IL-1β/IL-18 and oxidative stress can support healthier endothelial function</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-foreground mb-2">Metabolic benefits</h4>
                  <p>Because chronic inflammation and insulin resistance are tightly linked, reducing inflammatory activity via ketones can translate into:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Better insulin sensitivity</li>
                    <li>Lower fasting glucose and HbA1c</li>
                    <li>Improvements in liver enzymes and hepatic fat content</li>
                    <li>More favorable cardiometabolic risk profiles</li>
                  </ul>
                </div>

                <p className="font-semibold text-foreground italic mt-3">Key idea: By elevating BHB, a ketogenic diet doesn't just "change macros" – it engages an internal anti-inflammatory circuit that targets one of the core molecular drivers of metabolic disease.</p>
              </div>
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
            <CardContent className="p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4">
              <div className="text-primary font-semibold tracking-wide text-sm uppercase">
                <span>{t("home.card.cardio")}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{t("home.card.weight")}</h3>
              <div className="text-muted-foreground text-sm leading-relaxed space-y-3 md:space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground mb-2">Why weight loss is biologically hard</h4>
                  <p>Most diets fail not because people are weak, but because the body fights weight loss:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>As you lose weight, <strong>ghrelin (hunger hormone) tends to rise</strong></li>
                    <li>Satiety signals can become less effective</li>
                    <li>Metabolic rate may decrease, making it easier to regain weight</li>
                  </ul>
                  <p className="mt-2">This is where nutritional ketosis has a unique advantage. Studies show that ketogenic diets:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Prevent or blunt the typical rise in ghrelin seen with weight loss</li>
                    <li>Reduce subjective hunger and food cravings</li>
                    <li>Often lead to spontaneous calorie reduction without strict portion control</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-foreground mb-2">Fat mobilization and metabolic flexibility</h4>
                  <p>On a standard diet, <strong>high insulin keeps a tight lock on fat stores</strong>. Keto lowers insulin and improves insulin sensitivity, which:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Unlocks stored fat from adipose tissue</li>
                    <li>Increases fat oxidation in muscle and liver</li>
                    <li>Trains metabolism to be more flexible, switching between fat and ketones</li>
                  </ul>
                  <p className="mt-2">Recent meta-analyses (2023–2025) report that low-carb ketogenic diets:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Significantly reduce body weight and body fat percentage</li>
                    <li>Improve fasting glucose, HbA1c, and insulin resistance markers</li>
                    <li>Often outperform low-fat or higher-carb diets in the first 3–12 months</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-foreground mb-2">Cardiometabolic risk factors</h4>
                  <p>Weight loss alone helps cardiovascular health, but ketogenic diets also alter key risk markers:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li><strong>Triglycerides</strong> – often drop substantially</li>
                    <li><strong>HDL ("good") cholesterol</strong> – usually increases</li>
                    <li><strong>Blood pressure</strong> – tends to decrease</li>
                  </ul>
                  <p className="mt-2 text-xs italic">Note: The LDL story is more complex. Some individuals may experience increases in LDL-C on high-saturated-fat keto diets. Experts recommend emphasizing olive oil, avocado, nuts, seeds, and fatty fish, with regular lipid monitoring.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-foreground mb-2">Metabolic syndrome reversal</h4>
                  <p>For individuals with metabolic syndrome, a ketogenic diet can:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Rapidly reduce waist circumference</li>
                    <li>Improve blood pressure, triglycerides, HDL, and glycaemic control</li>
                    <li>Reduce liver fat and improve liver enzymes in MASLD/NAFLD</li>
                    <li>Provide a powerful "reset" for transitioning to a more moderate, sustainable pattern</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/30 py-12 md:py-16 lg:py-24">
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

            <div className="order-1 lg:order-2 space-y-4 md:space-y-6 lg:space-y-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif">{t("home.how.title")}</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t("home.how.desc")}
              </p>

              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{t("home.how.fuel")}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t("home.how.fuel.desc")}</p>
                </div>

                <div className="border-l-2 border-primary pl-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{t("home.how.hormones")}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t("home.how.hormones.desc")}</p>
                </div>
              </div>

              <Link href={getLocalizedPath("/science")}>
                <Button variant="outline" className="mt-4">
                  {t("home.how.deepdive")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mb-6 md:mb-8 lg:mb-12">
        <div className="bg-primary rounded-3xl p-6 md:p-8 lg:p-16 text-center text-primary-foreground relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif">{t("home.cta.transform")}</h2>
            <p className="text-primary-foreground/80 text-base md:text-lg">
              {t("home.cta.transform.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href={getLocalizedPath("/guide")}>
                <Button size="lg" variant="secondary" className="text-secondary-foreground font-bold">
                  {t("nav.guide")}
                </Button>
              </Link>
              <Link href={getLocalizedPath("/benefits")}>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  {t("home.cta.check")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Abstract shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
      </section>
    </div>
  );
}
