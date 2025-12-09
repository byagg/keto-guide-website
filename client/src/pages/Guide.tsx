import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Droplets, Pill, Utensils, AlertTriangle, Activity } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Guide() {
  const { t } = useLanguage();

  return (
    <div className="container max-w-4xl py-12 md:py-24 space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <Link href="/">
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">{t("guide.back")}</span>
          </div>
        </Link>
        <Badge variant="outline" className="px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
          {t("guide.badge")}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-foreground">
          {t("guide.title")}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          {t("guide.subtitle")}
        </p>
      </div>

      {/* Step 1: Medical Prep */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">1</div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("guide.step1.title")}</h2>
        </div>
        
        <Card className="border-l-4 border-l-primary">
          <CardContent className="p-6 space-y-4">
            <p className="text-muted-foreground">{t("guide.step1.desc")}</p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <div className="bg-primary/10 p-1.5 rounded-md h-fit mt-0.5"><Pill className="h-4 w-4 text-primary" /></div>
                <div>
                  <span className="font-bold block text-foreground">{t("guide.step1.meds")}</span>
                  <span className="text-sm text-muted-foreground">{t("guide.step1.meds.desc")}</span>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 p-1.5 rounded-md h-fit mt-0.5"><Activity className="h-4 w-4 text-primary" /></div>
                <div>
                  <span className="font-bold block text-foreground">{t("guide.step1.labs")}</span>
                  <span className="text-sm text-muted-foreground">{t("guide.step1.labs.desc")}</span>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Step 2: Induction */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">2</div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("guide.step2.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t("guide.step2.expect")}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("guide.step2.expect.desc")}
            </p>
            <div className="bg-muted/50 p-4 rounded-lg border border-border/50">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" /> {t("guide.step2.flu")}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t("guide.step2.flu.desc")}
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img 
              src="/images/keto_weightloss.png" 
              alt="Person measuring waist" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Step 3: Management */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">3</div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("guide.step3.title")}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <div className="mx-auto bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-fit text-blue-600 dark:text-blue-400">
                <Droplets className="h-6 w-6" />
              </div>
              <h3 className="font-bold">{t("guide.step3.hydrate")}</h3>
              <p className="text-sm text-muted-foreground">{t("guide.step3.hydrate.desc")}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <div className="mx-auto bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-fit text-green-600 dark:text-green-400">
                <Utensils className="h-6 w-6" />
              </div>
              <h3 className="font-bold">{t("guide.step3.electrolytes")}</h3>
              <p className="text-sm text-muted-foreground">{t("guide.step3.electrolytes.desc")}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <div className="mx-auto bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-fit text-purple-600 dark:text-purple-400">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-bold">{t("guide.step3.ease")}</h3>
              <p className="text-sm text-muted-foreground">{t("guide.step3.ease.desc")}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Long Term */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold font-serif text-foreground">{t("guide.longterm.title")}</h2>
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-muted-foreground">
          <p>{t("guide.longterm.p1")}</p>
          <p dangerouslySetInnerHTML={{ __html: t("guide.longterm.p2") }} />
        </div>
      </section>
    </div>
  );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
