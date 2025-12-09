import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle, Scale, Activity, HeartPulse, Baby } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BMICalculator } from "@/components/BMICalculator";

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <div className="container max-w-4xl py-12 md:py-24 space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <Link href="/">
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">{t("benefits.back")}</span>
          </div>
        </Link>
        <Badge variant="outline" className="px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
          {t("benefits.badge")}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-foreground">
          {t("benefits.title")}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          {t("benefits.subtitle")}
        </p>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {t("benefits.intro")}
        </p>
      </div>

      {/* BMI Calculator */}
      <BMICalculator />

      {/* Who Can Benefit */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-none">
            <CheckCircle2 className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("benefits.section1.title")}</h2>
        </div>

        {/* Image 1 */}
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50">
          <img 
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Healthy keto lifestyle" 
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="grid gap-6">
          <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                <Scale className="w-5 h-5 text-primary" />
                {t("benefits.card.obesity")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                {t("benefits.card.obesity.desc")}
              </p>
              <div className="bg-primary/5 p-6 rounded-none border-l-2 border-primary/20">
                <p className="font-medium mb-3 text-sm text-primary uppercase tracking-wide">{t("benefits.card.obesity.improvements")}</p>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {t("benefits.card.obesity.list1")}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {t("benefits.card.obesity.list2")}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {t("benefits.card.obesity.list3")}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {t("benefits.card.obesity.list4")}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                <Activity className="w-5 h-5 text-primary" />
                {t("benefits.card.diabetes")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                {t("benefits.card.diabetes.desc")}
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {t("benefits.card.diabetes.list1")}
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {t("benefits.card.diabetes.list2")}
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {t("benefits.card.diabetes.list3")}
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {t("benefits.card.diabetes.list4")}
                </li>
              </ul>
              <div className="bg-primary/5 border border-primary/20 p-4 rounded-none flex gap-3 items-start">
                <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  {t("benefits.card.diabetes.warning")}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                  <HeartPulse className="w-5 h-5 text-primary" />
                  {t("benefits.card.nafld")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {t("benefits.card.nafld.desc")}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    {t("benefits.card.nafld.list1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    {t("benefits.card.nafld.list2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    {t("benefits.card.nafld.list3")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                  <Baby className="w-5 h-5 text-primary" />
                  {t("benefits.card.pcos")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {t("benefits.card.pcos.desc")}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    {t("benefits.card.pcos.list1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    {t("benefits.card.pcos.list2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    {t("benefits.card.pcos.list3")}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Absolute Contraindications */}
      <section className="space-y-8">
        {/* Image 2 */}
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50">
          <img 
            src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Medical consultation and health assessment" 
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-none">
            <XCircle className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("benefits.section2.title")}</h2>
        </div>

        <div className="bg-muted/30 border border-border p-8 rounded-none">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <h3 className="font-bold text-lg text-foreground">{t("benefits.contra.warning")}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-sm text-primary uppercase tracking-wide">{t("benefits.contra.group1")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {t("benefits.contra.1")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {t("benefits.contra.2")}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm text-primary uppercase tracking-wide">{t("benefits.contra.group2")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {t("benefits.contra.3")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {t("benefits.contra.4")}
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="text-sm font-medium text-muted-foreground">
              {t("benefits.contra.note")}
            </p>
          </div>
        </div>
      </section>

      {/* Relative Contraindications */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-none">
            <AlertTriangle className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("benefits.section3.title")}</h2>
        </div>
        
        <p className="text-muted-foreground">
          {t("benefits.caution")}
        </p>

        <div className="grid gap-6">
          {/* Pregnancy & Breastfeeding */}
          <Card className="border-l-4 border-l-primary/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">{t("benefits.caution.pregnancy")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-2">
                {t("benefits.caution.pregnancy.desc")}
              </p>
              <p className="text-sm font-medium text-foreground">
                The safest route is to avoid strict ketogenic diets.
              </p>
            </CardContent>
          </Card>

          {/* Eating Disorders */}
          <Card className="border-l-4 border-l-primary/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">{t("benefits.caution.ed")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-2">
                {t("benefits.caution.ed.desc")}
              </p>
              <p className="text-sm font-medium text-foreground">
                Ideally avoided unless approved by a mental health professional.
              </p>
            </CardContent>
          </Card>

          {/* Dyslipidemia */}
          <Card className="border-l-4 border-l-primary/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">{t("benefits.caution.lipids")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-2">
                {t("benefits.caution.lipids.desc")}
              </p>
              <p className="text-sm font-medium text-foreground">
                {t("benefits.caution.lipids.note")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">
                {t("benefits.caution.1")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-3">{t("benefits.caution.1.desc")}</p>
              <p className="text-sm font-medium text-foreground">
                {t("benefits.caution.1.note")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">
                {t("benefits.caution.ckd")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-3">{t("benefits.caution.ckd.desc")}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary/50">•</span>
                  {t("benefits.caution.ckd.list1")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary/50">•</span>
                  {t("benefits.caution.ckd.list2")}
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-primary/50 shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">
                  {t("benefits.caution.pregnancy")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {t("benefits.caution.pregnancy.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary/50 shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">
                  {t("benefits.caution.ed")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {t("benefits.caution.ed.desc")}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-l-4 border-l-primary/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">
                {t("benefits.caution.lipids")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-2">{t("benefits.caution.lipids.desc")}</p>
              <p className="text-sm font-medium text-foreground">
                {t("benefits.caution.lipids.note")}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Image 3 */}
      <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50">
        <img 
          src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Keto diet benefits and wellness" 
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Bottom Line */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center space-y-6">
        <h3 className="text-2xl font-bold text-primary">{t("benefits.bottomline.title")}</h3>
        
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-background p-4 rounded-lg shadow-sm border border-border">
            <CheckCircle2 className="w-6 h-6 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">{t("benefits.bottomline.1")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg shadow-sm border border-border">
            <Activity className="w-6 h-6 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">{t("benefits.bottomline.2")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg shadow-sm border border-border">
            <AlertTriangle className="w-6 h-6 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">{t("benefits.bottomline.3")}</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 pt-4">
          <p className="text-lg font-medium text-foreground">
            {t("benefits.bottomline.action")}
          </p>
          <ul className="text-muted-foreground text-sm space-y-2">
            <li>{t("benefits.bottomline.step1")}</li>
            <li>{t("benefits.bottomline.step2")}</li>
            <li>{t("benefits.bottomline.step3")}</li>
          </ul>
          <p className="text-primary font-medium pt-4">
            {t("benefits.bottomline.final")}
          </p>
        </div>
      </div>
    </div>
  );
}
