import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
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
          {t("legal.privacy.title")}
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          {t("legal.privacy.intro")}
        </p>
        <p className="text-sm text-muted-foreground italic">{t("legal.privacy.updated")}</p>
      </div>

      <Separator />

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold font-serif text-foreground">{t("legal.privacy.collect.title")}</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>{t("legal.privacy.collect.1")}</li>
            <li>{t("legal.privacy.collect.2")}</li>
            <li>{t("legal.privacy.collect.3")}</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold font-serif text-foreground">{t("legal.privacy.use.title")}</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>{t("legal.privacy.use.1")}</li>
            <li>{t("legal.privacy.use.2")}</li>
            <li>{t("legal.privacy.use.3")}</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold font-serif text-foreground">{t("legal.privacy.cookies.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("legal.privacy.cookies.body")}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold font-serif text-foreground">{t("legal.privacy.share.title")}</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>{t("legal.privacy.share.1")}</li>
            <li>{t("legal.privacy.share.2")}</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold font-serif text-foreground">{t("legal.privacy.rights.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("legal.privacy.rights.body")}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold font-serif text-foreground">{t("legal.privacy.children.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("legal.privacy.children.body")}</p>
        </div>
      </section>
    </div>
  );
}
