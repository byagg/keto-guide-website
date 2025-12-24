import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Terms() {
  const { t, getLocalizedPath } = useLanguage();

  return (
    <div className="container max-w-4xl py-6 md:py-12 lg:py-16 space-y-6 md:space-y-8 lg:space-y-12">
      <div className="space-y-3 md:space-y-4 lg:space-y-6">
        <Link href={getLocalizedPath("/")}>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">{t("legal.back")}</span>
          </div>
        </Link>
        <Badge variant="outline" className="px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
          {t("legal.badge")}
        </Badge>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-serif tracking-tight text-foreground">
          {t("legal.terms.title")}
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          {t("legal.terms.intro")}
        </p>
        <p className="text-sm text-muted-foreground italic">{t("legal.terms.updated")}</p>
      </div>

      <Separator />

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold font-serif text-foreground">{t("legal.terms.use.title")}</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>{t("legal.terms.use.1")}</li>
            <li>{t("legal.terms.use.2")}</li>
            <li>{t("legal.terms.use.3")}</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold font-serif text-foreground">{t("legal.terms.ip.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("legal.terms.ip.body")}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold font-serif text-foreground">{t("legal.terms.links.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("legal.terms.links.body")}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold font-serif text-foreground">{t("legal.terms.disclaimer.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("legal.terms.disclaimer.body")}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold font-serif text-foreground">{t("legal.terms.limitation.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("legal.terms.limitation.body")}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold font-serif text-foreground">{t("legal.terms.changes.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("legal.terms.changes.body")}</p>
        </div>
      </section>
    </div>
  );
}
