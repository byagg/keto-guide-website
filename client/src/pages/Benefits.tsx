import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle, Scale, Activity, HeartPulse, Baby } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
        <p className="text-muted-foreground max-w-2xl">
          {t("benefits.intro")}
        </p>
      </div>

      {/* Who Can Benefit */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-secondary-foreground">
          <div className="bg-secondary/10 p-2 rounded-lg">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("benefits.section1.title")}</h2>
        </div>

        <div className="grid gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Scale className="w-5 h-5 text-primary" />
                {t("benefits.card.obesity")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                {t("benefits.card.obesity.desc")}
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium mb-2 text-sm">{t("benefits.card.obesity.improvements")}</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {t("benefits.card.obesity.list1")}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {t("benefits.card.obesity.list2")}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {t("benefits.card.obesity.list3")}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {t("benefits.card.obesity.list4")}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                {t("benefits.card.diabetes")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                {t("benefits.card.diabetes.desc")}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {t("benefits.card.diabetes.list1")}
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {t("benefits.card.diabetes.list2")}
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {t("benefits.card.diabetes.list3")}
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {t("benefits.card.diabetes.list4")}
                </li>
              </ul>
              <Alert variant="default" className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900">
                <AlertTriangle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertDescription className="text-blue-800 dark:text-blue-200 text-sm">
                  {t("benefits.card.diabetes.warning")}
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
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

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
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
        <div className="flex items-center gap-3 text-destructive">
          <div className="bg-destructive/10 p-2 rounded-lg">
            <XCircle className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("benefits.section2.title")}</h2>
        </div>

        <Alert variant="destructive" className="bg-destructive/5 border-destructive/20">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>{t("benefits.contra.warning")}</AlertTitle>
          <AlertDescription>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm">{t("benefits.contra.group1")}</h4>
                <ul className="list-disc list-inside space-y-1 text-sm opacity-90">
                  <li>{t("benefits.contra.1")}</li>
                  <li>{t("benefits.contra.2")}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">{t("benefits.contra.group2")}</h4>
                <ul className="list-disc list-inside space-y-1 text-sm opacity-90">
                  <li>{t("benefits.contra.3")}</li>
                  <li>{t("benefits.contra.4")}</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm font-medium opacity-90">
              {t("benefits.contra.note")}
            </p>
          </AlertDescription>
        </Alert>
      </section>

      {/* Relative Contraindications */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-amber-500">
          <div className="bg-amber-500/10 p-2 rounded-lg">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("benefits.section3.title")}</h2>
        </div>
        
        <p className="text-muted-foreground">
          {t("benefits.caution")}
        </p>

        <div className="grid gap-6">
          <Card className="border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200 text-lg">
                {t("benefits.caution.1")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-2">{t("benefits.caution.1.desc")}</p>
              <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                {t("benefits.caution.1.note")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200 text-lg">
                {t("benefits.caution.ckd")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-2">{t("benefits.caution.ckd.desc")}</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>{t("benefits.caution.ckd.list1")}</li>
                <li>{t("benefits.caution.ckd.list2")}</li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/10">
              <CardHeader>
                <CardTitle className="text-amber-800 dark:text-amber-200 text-lg">
                  {t("benefits.caution.pregnancy")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {t("benefits.caution.pregnancy.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/10">
              <CardHeader>
                <CardTitle className="text-amber-800 dark:text-amber-200 text-lg">
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

          <Card className="border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200 text-lg">
                {t("benefits.caution.lipids")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-2">{t("benefits.caution.lipids.desc")}</p>
              <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                {t("benefits.caution.lipids.note")}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bottom Line */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center space-y-6">
        <h3 className="text-2xl font-bold text-primary">{t("benefits.bottomline.title")}</h3>
        
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-background p-4 rounded-lg shadow-sm border">
            <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
            <p className="text-sm text-muted-foreground">{t("benefits.bottomline.1")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg shadow-sm border">
            <Activity className="w-6 h-6 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">{t("benefits.bottomline.2")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg shadow-sm border">
            <AlertTriangle className="w-6 h-6 text-amber-500 mb-2" />
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
