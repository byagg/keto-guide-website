import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Microscope, Dna, Flame, Zap } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Science() {
  const { t, getLocalizedPath } = useLanguage();

  return (
    <div className="container max-w-4xl py-6 md:py-12 lg:py-16 space-y-6 md:space-y-8 lg:space-y-12">
      {/* Header */}
      <div className="space-y-3 md:space-y-4 lg:space-y-6">
        <Link href={getLocalizedPath("/")}>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">{t("science.back")}</span>
          </div>
        </Link>
        <Badge variant="outline" className="px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
          {t("science.badge")}
        </Badge>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-serif tracking-tight text-foreground">
          {t("science.title")}
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          {t("science.subtitle")}
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50">
        <img
          src="/images/keto_hero_v2.png"
          alt="Molecular science and ketogenic diet research"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-blue-100 text-lg font-medium max-w-2xl">Understanding the metabolic shift from glucose to fat metabolism and the signaling power of ketone bodies</p>
        </div>
      </div>

      {/* Section 1: Glucose to Fat */}
      <section className="space-y-4 md:space-y-6 lg:space-y-8">
        <div className="flex items-center gap-3 text-primary">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Flame className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("science.section1.title")}</h2>
        </div>

        <div className="space-y-4">
          <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("science.section1.p1")}</p>
          <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("science.section1.p2")}</p>
        </div>

        {/* Ketogenesis Infographic */}
        <div className="mt-6 md:mt-8 lg:mt-12 bg-muted/30 rounded-2xl p-4 md:p-6 lg:p-8 border border-border/50">
          <h3 className="text-xl md:text-2xl font-bold font-serif mb-6 text-center text-foreground">Ketogenesis: The Body's Alternative Fuel Factory</h3>
          <p className="text-base font-sans text-muted-foreground text-center mb-6 max-w-3xl mx-auto leading-relaxed">
            The biochemical pathway for producing ketone bodies from fatty acids during low glucose states, fueling vital organs.
          </p>
          <div className="relative rounded-xl overflow-hidden shadow-xl bg-blue-50 p-4 md:p-6">
            <img
              src="/images/keto_molecular.png"
              alt="Ketogenesis: The Body's Alternative Fuel Factory - The biochemical pathway for producing ketone bodies from fatty acids during low glucose states, fueling vital organs"
              className="w-full h-auto object-contain max-w-full mx-auto"
              loading="lazy"
              onError={(e) => {
                console.error("Failed to load ketogenesis image");
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.error-message')) {
                  const errorDiv = document.createElement('div');
                  errorDiv.className = 'error-message p-8 text-center text-base font-sans text-muted-foreground';
                  errorDiv.innerHTML = '<p class="mb-2 font-semibold text-foreground">Ketogenesis infographic image is missing.</p><p class="text-sm">Please add ketogenesis.png to /client/public/images/ directory.</p>';
                  parent.appendChild(errorDiv);
                }
              }}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div>
              <h4 className="text-lg font-semibold font-sans text-foreground mb-3">Ketone Synthesis (In the Liver)</h4>
              <ul className="text-base font-sans text-muted-foreground space-y-2 list-disc pl-6 leading-relaxed">
                <li>Beta-oxidation generates a large supply of acetyl-CoA in the liver</li>
                <li>Three acetyl-CoA molecules combine to form β-hydroxy-β-methylglutaryl-CoA (HMG-CoA)</li>
                <li>HMG-CoA lyase breaks HMG-CoA into acetoacetate, which converts to β-hydroxybutyrate and acetone</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold font-sans text-foreground mb-3">Ketone Utilization (In Peripheral Tissues)</h4>
              <ul className="text-base font-sans text-muted-foreground space-y-2 list-disc pl-6 leading-relaxed">
                <li>The liver releases ketone bodies to be used by the brain, heart, and skeletal muscle</li>
                <li>An enzyme absent in the liver (β-ketoacyl-CoA transferase) converts ketones back to acetoacetyl-CoA</li>
                <li>Thiolase splits acetoacetyl-CoA into two acetyl-CoA molecules, which enter the TCA cycle to generate ATP (energy)</li>
              </ul>
            </div>
          </div>
        </div>

        <Card className="bg-muted/30 border-none">
          <CardContent className="p-4 md:p-6 lg:p-8">
            <h3 className="font-bold text-lg mb-4">{t("science.card.triggers")}</h3>
            <p className="text-muted-foreground mb-6">{t("science.card.triggers.desc")}</p>
            <ul className="grid gap-4 md:grid-cols-3">
              <li className="bg-background p-4 rounded-lg shadow-sm border border-border/50">
                <div className="font-bold text-primary mb-1">{t("science.card.insulin")}</div>
                <div className="text-base font-sans text-muted-foreground space-y-2 leading-relaxed">
                  <p>{t("science.card.insulin.desc1")}</p>
                  <p>{t("science.card.insulin.desc2")}</p>
                  <p>{t("science.card.insulin.desc3")}</p>
                </div>
              </li>
              <li className="bg-background p-4 rounded-lg shadow-sm border border-border/50">
                <div className="font-bold text-primary mb-1">{t("science.card.fat")}</div>
                <div className="text-base font-sans text-muted-foreground space-y-2 leading-relaxed">
                  <p>{t("science.card.fat.desc1")}</p>
                  <p>{t("science.card.fat.desc2")}</p>
                  <p>{t("science.card.fat.desc3")}</p>
                </div>
              </li>
              <li className="bg-background p-4 rounded-lg shadow-sm border border-border/50">
                <div className="font-bold text-primary mb-1">{t("science.card.ketone")}</div>
                <div className="text-base font-sans text-muted-foreground space-y-2 leading-relaxed">
                  <p>{t("science.card.ketone.desc1")}</p>
                  <p>{t("science.card.ketone.desc2")}</p>
                  <p>{t("science.card.ketone.desc3")}</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-background rounded-lg border border-border/50">
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                <strong className="font-semibold text-foreground">Important:</strong> {t("science.card.note")}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Section 2: Ketones as Fuel */}
      <section className="space-y-4 md:space-y-6 lg:space-y-8">
        <div className="flex items-center gap-3 text-primary">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Zap className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("science.section2.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("science.section2.p1")}</p>
            <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground mt-6 mb-4">{t("science.section2.subtitle")}</h3>
            <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("science.section2.p2")}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-base font-sans text-muted-foreground leading-relaxed">
              <li>{t("science.section2.list1")}</li>
              <li>{t("science.section2.list2")}</li>
              <li>{t("science.section2.list3")}</li>
            </ul>
            <p className="mt-4 text-base font-medium font-sans text-primary leading-relaxed">{t("science.section2.flexibility")}</p>
          </div>
          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50">
              <img
                src="/images/keto_molecular.png"
                alt="Ketone molecular structure"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-blue-100 text-xs font-medium">Visualizing Ketone Transport</p>
              </div>
            </div>
            <Card className="bg-muted/30 border-none">
              <CardContent className="p-4 md:p-6">
                <h4 className="font-bold mb-3">{t("science.transport.title")}</h4>
                <ul className="space-y-2 text-base font-sans text-muted-foreground leading-relaxed">
                  <li className="flex gap-2"><span className="text-primary">•</span> {t("science.transport.1")}</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> {t("science.transport.2")}</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> {t("science.transport.3")}</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> {t("science.transport.4")}</li>
                </ul>
                <p className="text-base font-sans italic text-muted-foreground mt-4 leading-relaxed">{t("science.transport.note")}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Infographic Feature */}
        <div className="mt-6 md:mt-8 lg:mt-12 bg-muted/30 rounded-2xl p-4 md:p-6 lg:p-8 border border-border/50">
          <h3 className="text-xl md:text-2xl font-bold font-serif mb-6 text-center text-foreground">Why Keto Works for Weight Loss (Especially in Obesity)</h3>
          <div className="relative rounded-xl overflow-hidden shadow-xl bg-blue-50 p-4 md:p-6">
            <img
              src="/images/info-keto.webp"
              alt="Infographic: Why Keto Works for Weight Loss (Especially in Obesity)"
              className="w-full h-auto object-contain max-w-full mx-auto block"
              loading="lazy"
              onError={(e) => {
                console.error("Failed to load infographic image");
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.error-message')) {
                  const errorDiv = document.createElement('div');
                  errorDiv.className = 'error-message p-8 text-center text-base font-sans text-muted-foreground';
                  errorDiv.textContent = 'Infographic image could not be loaded.';
                  parent.appendChild(errorDiv);
                }
              }}
            />
          </div>
          <p className="text-base font-sans text-muted-foreground text-center mt-6 max-w-3xl mx-auto leading-relaxed">
            Four primary mechanisms through which ketogenic diets contribute to weight loss and metabolic improvements: appetite suppression, increased energy expenditure, insulin reduction, and fat mobilization.
          </p>
        </div>
      </section>

      <Separator />

      {/* Section 3: Signaling Molecules */}
      <section className="space-y-4 md:space-y-6 lg:space-y-8">
        <div className="flex items-center gap-3 text-primary">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Dna className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("science.section3.title")}</h2>
        </div>

        <div className="mb-6">
          <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("science.section3.p1")}</p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Microscope className="h-5 w-5 text-secondary-foreground" />
                {t("science.card.anti_inflammatory")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base font-semibold font-sans text-foreground">{t("science.card.anti_inflammatory.subtitle")}</p>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("science.card.anti_inflammatory.desc1")}</p>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("science.card.anti_inflammatory.desc2")}</p>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("science.card.anti_inflammatory.desc3")}</p>
              <p className="text-base font-sans italic text-muted-foreground leading-relaxed">{t("science.card.anti_inflammatory.desc4")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Dna className="h-5 w-5 text-secondary-foreground" />
                {t("science.card.epigenetic")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base font-semibold font-sans text-foreground">{t("science.card.epigenetic.subtitle")}</p>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("science.card.epigenetic.desc1")}</p>
              <ul className="list-disc pl-6 space-y-2 text-base font-sans text-muted-foreground leading-relaxed">
                <li>{t("science.card.epigenetic.list1")}</li>
                <li>{t("science.card.epigenetic.list2")}</li>
              </ul>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("science.card.epigenetic.desc2")}</p>
              <ul className="list-disc pl-6 space-y-2 text-base font-sans text-muted-foreground leading-relaxed">
                <li>{t("science.card.epigenetic.list3")}</li>
                <li>{t("science.card.epigenetic.list4")}</li>
                <li>{t("science.card.epigenetic.list5")}</li>
              </ul>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("science.card.epigenetic.desc3")}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* References */}
      <section className="bg-muted/30 p-4 md:p-6 lg:p-8 rounded-xl space-y-3 md:space-y-4 mt-6 md:mt-8 lg:mt-12">
        <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground">{t("science.references")}</h3>
        <ul className="space-y-2 text-base font-sans text-muted-foreground list-decimal list-inside leading-relaxed">
          <li>How the ketogenic diet works – down to the molecular level. (2022). <em>Online Library</em>.</li>
          <li>Ketone body metabolism. (2022). <em>PMC</em>.</li>
          <li>Ketones as signaling molecules. (2022). <em>ScienceDirect</em>.</li>
        </ul>
      </section>
    </div>
  );
}
