import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle, Scale } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

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
      </div>

      {/* Who Can Benefit */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-secondary-foreground">
          <div className="bg-secondary/10 p-2 rounded-lg">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("benefits.section1.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-lg">{t("benefits.card.obesity")}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              {t("benefits.card.obesity.desc")}
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-lg">{t("benefits.card.diabetes")}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              {t("benefits.card.diabetes.desc")}
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-lg">{t("benefits.card.nafld")}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              {t("benefits.card.nafld.desc")}
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-lg">{t("benefits.card.pcos")}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              {t("benefits.card.pcos.desc")}
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
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("benefits.section2.title")}</h2>
        </div>

        <Card className="bg-destructive/5 border-destructive/20">
          <CardContent className="p-6">
            <p className="font-medium text-destructive mb-4">{t("benefits.contra.warning")}</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground/80">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                <span>{t("benefits.contra.1")}</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                <span>{t("benefits.contra.2")}</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                <span>{t("benefits.contra.3")}</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                <span>{t("benefits.contra.4")}</span>
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
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("benefits.section3.title")}</h2>
        </div>
        
        <p className="text-muted-foreground">
          {t("benefits.caution")}
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            t("benefits.caution.1"),
            t("benefits.caution.2"),
            t("benefits.caution.3"),
            t("benefits.caution.4"),
            t("benefits.caution.5")
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
        <h3 className="text-xl font-bold text-primary">{t("benefits.bottomline.title")}</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("benefits.bottomline.desc")}
        </p>
      </div>
    </div>
  );
}
