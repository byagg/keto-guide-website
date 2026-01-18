import { Card } from "@/components/ui/card";
import { CheckCircle2, X } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function FoodList() {
  useSEO({
    title: "Keto Food List: What to Eat and Avoid",
    description: "Complete guide to keto-friendly foods and foods to avoid. Comprehensive list of proteins, vegetables, fats, and snacks for your ketogenic diet.",
    url: "/food-list",
  });
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Keto Food List</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Complete guide to keto-friendly and foods to avoid
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Foods to Eat */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-secondary" size={32} />
                <h2 className="section-header mb-0">Foods to Eat</h2>
              </div>

              <div className="space-y-6">
                <Card className="editorial-card bg-secondary/5">
                  <h3 className="text-xl font-bold mb-3">Proteins</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Beef, pork, lamb, veal</li>
                    <li>• Chicken, turkey, duck</li>
                    <li>• Salmon, mackerel, sardines, tuna</li>
                    <li>• Shrimp, crab, lobster</li>
                    <li>• Eggs (all types)</li>
                    <li>• Bacon, sausage (check for added sugar)</li>
                  </ul>
                </Card>

                <Card className="editorial-card bg-secondary/5">
                  <h3 className="text-xl font-bold mb-3">Fats & Oils</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Olive oil, avocado oil</li>
                    <li>• Coconut oil, MCT oil</li>
                    <li>• Butter, ghee</li>
                    <li>• Avocados</li>
                    <li>• Lard, tallow</li>
                    <li>• Mayonnaise (sugar-free)</li>
                  </ul>
                </Card>

                <Card className="editorial-card bg-secondary/5">
                  <h3 className="text-xl font-bold mb-3">Dairy</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hard cheeses (cheddar, parmesan, gouda)</li>
                    <li>• Soft cheeses (brie, mozzarella, feta)</li>
                    <li>• Heavy cream, sour cream</li>
                    <li>• Cream cheese</li>
                    <li>• Greek yogurt (full-fat, plain)</li>
                    <li>• Butter</li>
                  </ul>
                </Card>

                <Card className="editorial-card bg-secondary/5">
                  <h3 className="text-xl font-bold mb-3">Vegetables (Low-Carb)</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Spinach, kale, lettuce, arugula</li>
                    <li>• Broccoli, cauliflower, cabbage</li>
                    <li>• Zucchini, cucumber</li>
                    <li>• Bell peppers, jalapeños</li>
                    <li>• Asparagus, green beans</li>
                    <li>• Mushrooms, celery</li>
                  </ul>
                </Card>

                <Card className="editorial-card bg-secondary/5">
                  <h3 className="text-xl font-bold mb-3">Nuts & Seeds</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Macadamia nuts, pecans</li>
                    <li>• Almonds, walnuts</li>
                    <li>• Chia seeds, flax seeds</li>
                    <li>• Pumpkin seeds, sunflower seeds</li>
                    <li>• Nut butters (no added sugar)</li>
                  </ul>
                </Card>

                <Card className="editorial-card bg-secondary/5">
                  <h3 className="text-xl font-bold mb-3">Beverages</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Water, sparkling water</li>
                    <li>• Coffee, tea (unsweetened)</li>
                    <li>• Bone broth</li>
                    <li>• Unsweetened almond/coconut milk</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Foods to Avoid */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <X className="text-destructive" size={32} />
                <h2 className="section-header mb-0">Foods to Avoid</h2>
              </div>

              <div className="space-y-6">
                <Card className="editorial-card bg-destructive/5">
                  <h3 className="text-xl font-bold mb-3">Grains & Starches</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bread, pasta, rice</li>
                    <li>• Cereals, oatmeal</li>
                    <li>• Crackers, chips</li>
                    <li>• Corn, tortillas</li>
                    <li>• Quinoa, couscous</li>
                  </ul>
                </Card>

                <Card className="editorial-card bg-destructive/5">
                  <h3 className="text-xl font-bold mb-3">Sugars & Sweets</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sugar (white, brown, raw)</li>
                    <li>• Honey, maple syrup, agave</li>
                    <li>• Candy, chocolate (regular)</li>
                    <li>• Cookies, cakes, pastries</li>
                    <li>• Ice cream (regular)</li>
                  </ul>
                </Card>

                <Card className="editorial-card bg-destructive/5">
                  <h3 className="text-xl font-bold mb-3">Fruits (Most)</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bananas, apples, oranges</li>
                    <li>• Grapes, mangoes, pineapple</li>
                    <li>• Dried fruits</li>
                    <li>• Fruit juices</li>
                    <li>• OK in moderation: berries (small amounts)</li>
                  </ul>
                </Card>

                <Card className="editorial-card bg-destructive/5">
                  <h3 className="text-xl font-bold mb-3">Legumes</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Beans (black, kidney, pinto)</li>
                    <li>• Lentils, chickpeas</li>
                    <li>• Peas</li>
                    <li>• Peanuts (technically a legume)</li>
                  </ul>
                </Card>

                <Card className="editorial-card bg-destructive/5">
                  <h3 className="text-xl font-bold mb-3">Starchy Vegetables</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Potatoes, sweet potatoes</li>
                    <li>• Yams, cassava</li>
                    <li>• Carrots (in large amounts)</li>
                    <li>• Beets</li>
                  </ul>
                </Card>

                <Card className="editorial-card bg-destructive/5">
                  <h3 className="text-xl font-bold mb-3">Beverages</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Soda, juice</li>
                    <li>• Sweetened coffee/tea drinks</li>
                    <li>• Beer (regular), sweet wines</li>
                    <li>• Sports drinks, energy drinks</li>
                    <li>• Milk (high in lactose)</li>
                  </ul>
                </Card>

                <Card className="editorial-card bg-destructive/5">
                  <h3 className="text-xl font-bold mb-3">Processed Foods</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Low-fat products (often high in sugar)</li>
                    <li>• Processed meats with added sugar</li>
                    <li>• Margarine, vegetable oils</li>
                    <li>• "Diet" foods with artificial ingredients</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
