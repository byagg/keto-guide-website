import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { 
  Cookie, 
  Dumbbell, 
  Droplets, 
  Candy, 
  Flame, 
  ChefHat, 
  Coffee, 
  Zap, 
  ShieldCheck, 
  Nut 
} from "lucide-react";

const categories = [
  { name: "Keto Snacks", slug: "snacks", icon: Cookie, desc: "Low-carb savory and sweet treats." },
  { name: "Keto Protein Powders", slug: "protein-powders", icon: Dumbbell, desc: "Proteins optimized for muscle maintenance in ketosis." },
  { name: "Keto Electrolytes", slug: "electrolytes", icon: Droplets, desc: "Essential minerals to prevent keto flu." },
  { name: "Keto Sweeteners", slug: "sweeteners", icon: Candy, desc: "Natural sugar substitutes that don't spike insulin." },
  { name: "Keto MCT Oils", slug: "mct-oils", icon: Flame, desc: "Quick energy source for brain and fat burning." },
  { name: "Keto Baking Mixes", slug: "baking-mixes", icon: ChefHat, desc: "Mixes for baking bread, pancakes, and cakes." },
  { name: "Keto Coffee & Creamers", slug: "coffee-creamers", icon: Coffee, desc: "Upgrade your morning coffee with healthy fats." },
  { name: "Keto Bars", slug: "bars", icon: Zap, desc: "Convenient on-the-go bars with clean ingredients." },
  { name: "Keto Supplements", slug: "supplements", icon: ShieldCheck, desc: "Exogenous ketones and supplements for metabolic support." },
  { name: "Keto Nut Butters", slug: "nut-butters", icon: Nut, desc: "Delicious nut butters without added sugar." },
];

export default function Products() {
  useSEO({
    title: "Best Keto Products 2026 | Comparison & Reviews",
    description: "Complete guide to the best keto products on the market. We compare the top 3 products in 10 categories according to Amazon.",
    url: "/products",
  });

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="mb-4">Best Keto Products 2026</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We have selected the highest-rated and most popular products to make your ketogenic diet journey easier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/products/${cat.slug}`}>
              <Card className="p-6 hover:border-primary transition-all cursor-pointer group h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <cat.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                <p className="text-muted-foreground">{cat.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
