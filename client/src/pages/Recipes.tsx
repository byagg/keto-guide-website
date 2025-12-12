import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Recipes() {
  const { t, getLocalizedPath } = useLanguage();

  return (
    <div className="container max-w-6xl py-6 md:py-12 lg:py-16 space-y-6 md:space-y-8 lg:space-y-12">
      {/* Header */}
      <div className="space-y-3 md:space-y-4 lg:space-y-6">
        <Link href={getLocalizedPath("/")}>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-base font-medium font-sans">{t("recipes.back")}</span>
          </div>
        </Link>
        <Badge variant="outline" className="px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
          {t("recipes.badge")}
        </Badge>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-serif tracking-tight text-foreground">
          {t("guide.recipes.title")}
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-sans text-muted-foreground leading-relaxed max-w-2xl">
          {t("guide.recipes.subtitle")}
        </p>
      </div>

      {/* Recipes Grid */}
      <div className="grid gap-8">
        {/* Breakfast */}
        <Card className="overflow-hidden bg-card border-border">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Keto scrambled eggs with avocado" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground mb-2">{t("guide.recipes.breakfast.title")}</h3>
                <p className="text-base font-sans text-muted-foreground mb-4 leading-relaxed">{t("guide.recipes.breakfast.desc")}</p>
              </div>
              <div>
                <p className="text-base font-semibold font-sans text-foreground mb-2">{t("guide.recipes.breakfast.ingredients")}</p>
                <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("guide.recipes.breakfast.ingredients.list")}</p>
              </div>
              <div>
                <p className="text-base font-semibold font-sans text-foreground mb-2">{t("guide.recipes.breakfast.instructions")}</p>
                <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("guide.recipes.breakfast.instructions.list")}</p>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Lunch */}
        <Card className="overflow-hidden bg-card border-border">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Grilled chicken salad" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 space-y-4 order-1 md:order-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground mb-2">{t("guide.recipes.lunch.title")}</h3>
                <p className="text-base font-sans text-muted-foreground mb-4 leading-relaxed">{t("guide.recipes.lunch.desc")}</p>
              </div>
              <div>
                <p className="text-base font-semibold font-sans text-foreground mb-2">{t("guide.recipes.lunch.ingredients")}</p>
                <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("guide.recipes.lunch.ingredients.list")}</p>
              </div>
              <div>
                <p className="text-base font-semibold font-sans text-foreground mb-2">{t("guide.recipes.lunch.instructions")}</p>
                <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("guide.recipes.lunch.instructions.list")}</p>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Dinner */}
        <Card className="overflow-hidden bg-card border-border">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Salmon with roasted vegetables" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground mb-2">{t("guide.recipes.dinner.title")}</h3>
                <p className="text-base font-sans text-muted-foreground mb-4 leading-relaxed">{t("guide.recipes.dinner.desc")}</p>
              </div>
              <div>
                <p className="text-base font-semibold font-sans text-foreground mb-2">{t("guide.recipes.dinner.ingredients")}</p>
                <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("guide.recipes.dinner.ingredients.list")}</p>
              </div>
              <div>
                <p className="text-base font-semibold font-sans text-foreground mb-2">{t("guide.recipes.dinner.instructions")}</p>
                <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("guide.recipes.dinner.instructions.list")}</p>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Dessert */}
        <Card className="overflow-hidden bg-card border-border">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Keto chocolate mousse" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 space-y-4 order-1 md:order-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground mb-2">{t("guide.recipes.dessert.title")}</h3>
                <p className="text-base font-sans text-muted-foreground mb-4 leading-relaxed">{t("guide.recipes.dessert.desc")}</p>
              </div>
              <div>
                <p className="text-base font-semibold font-sans text-foreground mb-2">{t("guide.recipes.dessert.ingredients")}</p>
                <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("guide.recipes.dessert.ingredients.list")}</p>
              </div>
              <div>
                <p className="text-base font-semibold font-sans text-foreground mb-2">{t("guide.recipes.dessert.instructions")}</p>
                <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("guide.recipes.dessert.instructions.list")}</p>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Snack & Drink */}
        <Card className="overflow-hidden bg-card border-border">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Keto smoothie" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground mb-2">{t("guide.recipes.snack.title")}</h3>
                <p className="text-base font-sans text-muted-foreground mb-4 leading-relaxed">{t("guide.recipes.snack.desc")}</p>
              </div>
              <div>
                <p className="text-base font-semibold font-sans text-foreground mb-2">{t("guide.recipes.snack.ingredients")}</p>
                <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("guide.recipes.snack.ingredients.list")}</p>
              </div>
              <div>
                <p className="text-base font-semibold font-sans text-foreground mb-2">{t("guide.recipes.snack.instructions")}</p>
                <p className="text-base font-sans text-muted-foreground leading-relaxed">{t("guide.recipes.snack.instructions.list")}</p>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* CTA to Guide */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground">{t("recipes.cta.title")}</h3>
        <p className="text-base font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("recipes.cta.desc")}
        </p>
        <div className="pt-4">
          <Link href={getLocalizedPath("/guide")}>
            <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20">
              {t("recipes.cta.button")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

