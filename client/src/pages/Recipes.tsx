import { Card } from "@/components/ui/card";
import { Utensils } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "wouter";

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
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're working on a comprehensive collection of keto recipes including breakfast, lunch, dinner, snacks, and desserts. Check back soon!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/food-list" className="text-secondary hover:text-secondary/80 transition-colors font-semibold">Food List</Link>
              <Link href="/keto-calculator" className="text-secondary hover:text-secondary/80 transition-colors font-semibold">Keto Calculator</Link>
              <Link href="/science" className="text-secondary hover:text-secondary/80 transition-colors font-semibold">The Science</Link>
              <Link href="/faq" className="text-secondary hover:text-secondary/80 transition-colors font-semibold">FAQ</Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
