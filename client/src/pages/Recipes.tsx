import { Card } from "@/components/ui/card";
import { Utensils } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function Recipes() {
  useSEO({
    title: "Keto Recipes: Delicious Low-Carb Meals",
    description: "Delicious, easy-to-make ketogenic recipes for every meal. Breakfast, lunch, dinner, snacks, and desserts that fit your keto lifestyle.",
    url: "/recipes",
  });
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Utensils className="mx-auto mb-6" size={48} />
            <h1 className="mb-6">Keto Recipes</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Delicious, easy-to-make ketogenic recipes for every meal
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="editorial-card">
            <h2 className="text-2xl mb-4">Coming Soon</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're working on a comprehensive collection of keto recipes including breakfast, lunch, dinner, snacks, and desserts. Check back soon!
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
