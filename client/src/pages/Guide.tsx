import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Droplets, Pill, Utensils, AlertTriangle, Activity, Heart, Users, Target, CheckCircle2 } from "lucide-react";
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

      {/* Hero Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50">
        <img 
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Getting started with keto guide" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-white text-lg font-medium max-w-2xl">A step-by-step guide to navigating the induction phase, managing side effects, and setting yourself up for long-term success</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Introduction */}
        <div className="bg-muted/30 rounded-xl p-6 border border-border/50 space-y-3">
          <p className="text-muted-foreground leading-relaxed">{t("guide.intro")}</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>{t("guide.intro.list1")}</li>
            <li>{t("guide.intro.list2")}</li>
            <li>{t("guide.intro.list3")}</li>
            <li>{t("guide.intro.list4")}</li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Step 1: Medical Prep */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">1</div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("guide.step1.title")}</h2>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">{t("guide.step1.intro")}</p>

        <div className="space-y-6">
          {/* Health History */}
        <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                {t("guide.step1.history")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{t("guide.step1.history.desc")}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>{t("guide.step1.history.list1")}</li>
                <li>{t("guide.step1.history.list2")}</li>
                <li>{t("guide.step1.history.list3")}</li>
                <li>{t("guide.step1.history.list4")}</li>
              </ul>
              <p className="text-sm text-muted-foreground italic mt-4">{t("guide.step1.history.note")}</p>
            </CardContent>
          </Card>

          {/* Medications */}
          <Card className="border-l-4 border-l-primary/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5 text-primary" />
                {t("guide.step1.meds")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{t("guide.step1.meds.desc")}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>{t("guide.step1.meds.list1")}</li>
                <li>{t("guide.step1.meds.list2")}</li>
                <li>{t("guide.step1.meds.list3")}</li>
              </ul>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 mt-4">
                <p className="font-semibold text-foreground mb-2">{t("guide.step1.meds.warning")}</p>
                <p className="text-sm text-muted-foreground mb-3">Because keto often lowers blood sugar and blood pressure quickly, your doctor may need to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-muted-foreground">
                  <li>{t("guide.step1.meds.action1")}</li>
                  <li>{t("guide.step1.meds.action2")}</li>
                  <li>{t("guide.step1.meds.action3")}</li>
                </ul>
                </div>
            </CardContent>
          </Card>

          {/* Lab Work */}
          <Card className="border-l-4 border-l-primary/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                {t("guide.step1.labs")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{t("guide.step1.labs.desc")}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>{t("guide.step1.labs.1")}</li>
                <li>{t("guide.step1.labs.2")}</li>
                <li>{t("guide.step1.labs.3")}</li>
                <li>{t("guide.step1.labs.4")}</li>
                <li>{t("guide.step1.labs.5")}</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">{t("guide.step1.labs.note")}</p>
            </CardContent>
          </Card>

          {/* Environment */}
          <Card className="border-l-4 border-l-primary/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                {t("guide.step1.env")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{t("guide.step1.env.desc")}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>{t("guide.step1.env.1")}</li>
                <li>{t("guide.step1.env.2")}</li>
                <li>{t("guide.step1.env.3")}</li>
            </ul>
          </CardContent>
        </Card>
        </div>

        {/* Image after Step 1 */}
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50 mt-8">
          <img 
            src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Medical consultation" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white text-sm font-medium">Preparing medically ensures a safe and successful keto journey</p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Step 2: Induction */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">2</div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("guide.step2.title")}</h2>
        </div>

        <p className="text-muted-foreground leading-relaxed">{t("guide.step2.intro")}</p>

        {/* Metabolic Expectations */}
        <Card>
          <CardHeader>
            <CardTitle>{t("guide.step2.metabolic")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{t("guide.step2.metabolic.desc")}</p>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="space-y-6">
          <h3 className="font-bold text-lg text-foreground">{t("guide.step2.timeline")}</h3>
          
          <Card className="border-l-4 border-l-primary/60">
            <CardHeader>
              <CardTitle className="text-lg">{t("guide.step2.phase1.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>{t("guide.step2.phase1.s1")}</li>
                <li>{t("guide.step2.phase1.s2")}</li>
                <li>{t("guide.step2.phase1.s3")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary/60">
            <CardHeader>
              <CardTitle className="text-lg">{t("guide.step2.phase2.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>{t("guide.step2.phase2.s1")}</li>
                <li>{t("guide.step2.phase2.s2")}</li>
                <li>{t("guide.step2.phase2.s3")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary/60">
            <CardHeader>
              <CardTitle className="text-lg">{t("guide.step2.phase3.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>{t("guide.step2.phase3.s1")}</li>
                <li>{t("guide.step2.phase3.s2")}</li>
                <li>{t("guide.step2.phase3.s3")}</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Keto Flu */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              {t("guide.step2.flu.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{t("guide.step2.flu.desc")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
              <li>{t("guide.step2.flu.s1")}</li>
              <li>{t("guide.step2.flu.s2")}</li>
              <li>{t("guide.step2.flu.s3")}</li>
              <li>{t("guide.step2.flu.s4")}</li>
              <li>{t("guide.step2.flu.s5")}</li>
              <li>{t("guide.step2.flu.s6")}</li>
            </ul>
            <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/50">
              <p className="font-semibold text-foreground mb-2">Common causes:</p>
              <p className="text-sm text-muted-foreground">{t("guide.step2.flu.cause")}</p>
            </div>
            <p className="text-sm font-medium text-foreground mt-4">{t("guide.step2.flu.note")}</p>
          </CardContent>
        </Card>

        {/* Image after Step 2 */}
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50 mt-8">
          <img 
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Healthy keto foods" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white text-sm font-medium">The induction phase transitions your body to fat-burning mode</p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Step 3: Side Effects */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">3</div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("guide.step3.title")}</h2>
        </div>

        <p className="text-muted-foreground leading-relaxed">{t("guide.step3.intro")}</p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Hydration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-primary" />
                {t("guide.step3.hydrate")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">{t("guide.step3.hydrate.desc")}</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-muted-foreground">
                <li>{t("guide.step3.hydration.1")}</li>
                <li>{t("guide.step3.hydration.2")}</li>
                <li>{t("guide.step3.hydration.3")}</li>
              </ul>
              <p className="text-xs text-muted-foreground italic mt-3">{t("guide.step3.hydration.rule")}</p>
            </CardContent>
          </Card>

          {/* Electrolytes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                {t("guide.step3.electrolytes")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">{t("guide.step3.electrolytes.desc")}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">{t("guide.step3.sodium")}</h4>
                  <p className="text-xs text-muted-foreground">{t("guide.step3.sodium.desc")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">{t("guide.step3.potassium")}</h4>
                  <p className="text-xs text-muted-foreground">{t("guide.step3.potassium.desc")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">{t("guide.step3.magnesium")}</h4>
                  <p className="text-xs text-muted-foreground">{t("guide.step3.magnesium.desc")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ease Into It */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {t("guide.step3.ease")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">{t("guide.step3.ease.desc")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
              <li>{t("guide.step3.ease.1")}</li>
              <li>{t("guide.step3.ease.2")}</li>
              <li>{t("guide.step3.ease.3")}</li>
            </ul>
          </CardContent>
        </Card>

        {/* Exercise */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              {t("guide.step3.exercise")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground text-sm mb-3">{t("guide.step3.exercise.desc")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
              <li>{t("guide.step3.exercise.1")}</li>
              <li>{t("guide.step3.exercise.2")}</li>
              <li>{t("guide.step3.exercise.3")}</li>
              <li>{t("guide.step3.exercise.4")}</li>
            </ul>
          </CardContent>
        </Card>

        {/* When to Call Doctor */}
        <Card className="border-l-4 border-l-destructive">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              {t("guide.step3.doctor")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground text-sm">{t("guide.step3.doctor.desc")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
              <li>{t("guide.step3.doctor.1")}</li>
              <li>{t("guide.step3.doctor.2")}</li>
              <li>{t("guide.step3.doctor.3")}</li>
              <li>{t("guide.step3.doctor.4")}</li>
            </ul>
            <p className="text-sm font-semibold text-foreground mt-4">{t("guide.step3.doctor.note")}</p>
          </CardContent>
        </Card>

        {/* Image after Step 3 */}
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50 mt-8">
          <img 
            src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Water and hydration" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white text-sm font-medium">Proper hydration and electrolytes are key to managing side effects</p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Step 4: Long-Term */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">4</div>
          <h2 className="text-2xl font-bold font-serif text-foreground">{t("guide.step4.title")}</h2>
        </div>

        <p className="text-muted-foreground leading-relaxed">{t("guide.step4.intro")}</p>

        {/* Find Your Why */}
        <Card className="border-l-4 border-l-primary/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              {t("guide.step4.why")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">{t("guide.step4.why.desc")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
              <li>{t("guide.step4.why.1")}</li>
              <li>{t("guide.step4.why.2")}</li>
              <li>{t("guide.step4.why.3")}</li>
              <li>{t("guide.step4.why.4")}</li>
            </ul>
            <p className="text-sm text-muted-foreground italic mt-3">{t("guide.step4.why.note")}</p>
          </CardContent>
        </Card>

        {/* Plan Ahead */}
        <Card className="border-l-4 border-l-primary/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {t("guide.step4.plan")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
              <li>{t("guide.step4.plan.1")}</li>
              <li>{t("guide.step4.plan.2")}</li>
              <li>{t("guide.step4.plan.3")}</li>
            </ul>
            <p className="text-sm text-muted-foreground italic mt-3">{t("guide.step4.plan.note")}</p>
          </CardContent>
        </Card>

        {/* Support System */}
        <Card className="border-l-4 border-l-primary/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              {t("guide.step4.support")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">{t("guide.step4.support.desc")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
              <li>{t("guide.step4.support.1")}</li>
              <li>{t("guide.step4.support.2")}</li>
              <li>{t("guide.step4.support.3")}</li>
            </ul>
            <p className="text-sm text-muted-foreground italic mt-3">{t("guide.step4.support.note")}</p>
          </CardContent>
        </Card>

        {/* Common Pitfalls */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold font-serif text-foreground">{t("guide.step4.pitfalls.title")}</h3>

          {/* Nutrient Deficiencies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t("guide.step4.pitfalls.nutrients")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">{t("guide.step4.pitfalls.nutrients.desc")}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>{t("guide.step4.pitfalls.nutrients.1")}</li>
                <li>{t("guide.step4.pitfalls.nutrients.2")}</li>
                <li>{t("guide.step4.pitfalls.nutrients.3")}</li>
              </ul>
              <p className="text-sm text-muted-foreground italic mt-3">{t("guide.step4.pitfalls.nutrients.note")}</p>
            </CardContent>
          </Card>

          {/* Kidney Stones */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t("guide.step4.pitfalls.stones")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{t("guide.step4.pitfalls.stones.desc")}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>{t("guide.step4.pitfalls.stones.1")}</li>
                <li>{t("guide.step4.pitfalls.stones.2")}</li>
                <li>{t("guide.step4.pitfalls.stones.3")}</li>
              </ul>
              <div className="mt-4">
                <p className="font-semibold text-foreground mb-2">{t("guide.step4.pitfalls.stones.prevention")}</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  <li>{t("guide.step4.pitfalls.stones.prevention.1")}</li>
                  <li>{t("guide.step4.pitfalls.stones.prevention.2")}</li>
                  <li>{t("guide.step4.pitfalls.stones.prevention.3")}</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Elevated LDL */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t("guide.step4.pitfalls.ldl")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{t("guide.step4.pitfalls.ldl.desc")}</p>
              <div>
                <p className="font-semibold text-foreground mb-2">{t("guide.step4.pitfalls.ldl.management")}</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  <li>{t("guide.step4.pitfalls.ldl.management.1")}</li>
                  <li>{t("guide.step4.pitfalls.ldl.management.2")}</li>
                  <li>{t("guide.step4.pitfalls.ldl.management.3")}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image after Step 4 */}
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50 mt-8">
          <img 
            src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Healthy lifestyle and wellness" 
            className="w-full h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white text-sm font-medium">Long-term success comes from sustainable habits and support</p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Conclusion */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold font-serif text-foreground">{t("guide.conclusion.title")}</h2>
        <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 space-y-4">
          <p className="text-muted-foreground leading-relaxed">{t("guide.conclusion.desc")}</p>
          <div>
            <p className="font-semibold text-foreground mb-2">{t("guide.conclusion.success")}</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
              <li>{t("guide.conclusion.success.1")}</li>
              <li>{t("guide.conclusion.success.2")}</li>
              <li>{t("guide.conclusion.success.3")}</li>
            </ul>
          </div>
          <p className="font-semibold text-foreground mt-4">{t("guide.conclusion.final")}</p>
        </div>
      </section>
    </div>
  );
}
