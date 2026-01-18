import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShoppingCart, Utensils, Calculator } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";

/**
 * Design Philosophy: Scientific Editorial
 * Practical step-by-step guide for beginners
 */

export default function GetStarted() {
  useSEO({
    title: "How to Start the Ketogenic Diet: Complete Beginner's Guide",
    description: "A practical, step-by-step guide to transitioning into ketosis safely and successfully. Learn how to calculate macros, plan meals, and avoid common mistakes.",
    url: "/start-guide",
    type: "article",
  });

  useEffect(() => {
    // Add HowTo Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Start the Ketogenic Diet",
      "description": "A practical, step-by-step guide to transitioning into ketosis safely and successfully",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Calculate Your Macros",
          "text": "Start by determining your personalized macronutrient targets based on your age, weight, height, activity level, and goals."
        },
        {
          "@type": "HowToStep",
          "name": "Plan Your Meals",
          "text": "Create a meal plan focusing on healthy fats, moderate protein, and low-carb vegetables."
        },
        {
          "@type": "HowToStep",
          "name": "Stock Your Kitchen",
          "text": "Purchase keto-friendly foods and remove high-carb items from your pantry."
        },
        {
          "@type": "HowToStep",
          "name": "Start Your Keto Journey",
          "text": "Begin with a 7-day plan, track your macros, and monitor your body's adaptation to ketosis."
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">How to Start the Ketogenic Diet</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A practical, step-by-step guide to transitioning into ketosis safely and successfully
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-header mb-12">Your 7-Day Keto Launch Plan</h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="numbered-item">
              <div className="numbered-item-number">1</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Calculate Your Macros</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Start by determining your personalized macronutrient targets based on your age, weight, height, activity level, and goals.
                </p>
                <Card className="editorial-card bg-secondary/5">
                  <h4 className="font-bold mb-3">Standard Keto Macros:</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-secondary mb-1">70-80%</div>
                      <div className="text-sm text-muted-foreground">Fat</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-1">15-25%</div>
                      <div className="text-sm text-muted-foreground">Protein</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">5-10%</div>
                      <div className="text-sm text-muted-foreground">Carbs</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Example for 2000 calories/day:</strong><br/>
                    • Fat: 155-178g<br/>
                    • Protein: 75-125g<br/>
                    • Carbs: 20-50g (net carbs)
                  </p>
                </Card>
                <Button className="mt-4 bg-secondary hover:bg-secondary/90">
                  <Calculator className="mr-2" size={16} />
                  Use Keto Calculator
                </Button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="numbered-item">
              <div className="numbered-item-number">2</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Clean Out Your Pantry</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Remove high-carb temptations to set yourself up for success. Donate or give away foods that don't fit your new lifestyle.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="editorial-card bg-destructive/5">
                    <h4 className="font-bold mb-3 text-destructive">❌ Foods to Remove:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Bread, pasta, rice, cereals</li>
                      <li>• Sugar, honey, maple syrup</li>
                      <li>• Potatoes, corn, beans</li>
                      <li>• Most fruits (except berries)</li>
                      <li>• Chips, crackers, cookies</li>
                      <li>• Soda, juice, sweetened drinks</li>
                    </ul>
                  </Card>
                  <Card className="editorial-card bg-secondary/5">
                    <h4 className="font-bold mb-3 text-secondary">✅ Foods to Stock:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Meat, poultry, fish, eggs</li>
                      <li>• Cheese, butter, cream</li>
                      <li>• Avocados, olive oil, nuts</li>
                      <li>• Leafy greens, cruciferous veggies</li>
                      <li>• Berries (in moderation)</li>
                      <li>• Unsweetened coffee & tea</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="numbered-item">
              <div className="numbered-item-number">3</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Stock Up on Essentials</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Create your keto-friendly shopping list and stock your kitchen with the right foods and supplements.
                </p>
                <Card className="editorial-card">
                  <h4 className="font-bold mb-3">Essential Shopping List:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-sm mb-2">Proteins:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Beef, pork, lamb</li>
                        <li>• Chicken, turkey</li>
                        <li>• Salmon, mackerel, sardines</li>
                        <li>• Eggs (pasture-raised)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-2">Fats & Oils:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Olive oil, avocado oil</li>
                        <li>• Coconut oil, MCT oil</li>
                        <li>• Butter, ghee</li>
                        <li>• Avocados</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-2">Vegetables:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Spinach, kale, lettuce</li>
                        <li>• Broccoli, cauliflower</li>
                        <li>• Zucchini, bell peppers</li>
                        <li>• Asparagus, green beans</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-2">Dairy:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Hard cheeses (cheddar, parmesan)</li>
                        <li>• Heavy cream</li>
                        <li>• Greek yogurt (full-fat, plain)</li>
                        <li>• Cream cheese</li>
                      </ul>
                    </div>
                  </div>
                </Card>
                <Button className="mt-4 bg-accent hover:bg-accent/90">
                  <ShoppingCart className="mr-2" size={16} />
                  Download Full Shopping List
                </Button>
              </div>
            </div>

            {/* Step 4 */}
            <div className="numbered-item">
              <div className="numbered-item-number">4</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Prepare for Keto Flu</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The first week can be challenging as your body adapts. Proper electrolyte management is crucial to minimize symptoms.
                </p>
                <Card className="editorial-card bg-accent/5">
                  <h4 className="font-bold mb-3">Daily Electrolyte Targets:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Sodium</span>
                      <span className="data-highlight">3,000-5,000 mg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Potassium</span>
                      <span className="data-highlight">3,000-4,000 mg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Magnesium</span>
                      <span className="data-highlight">300-400 mg</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Pro tip:</strong> Make "ketoade" by mixing water, salt, potassium chloride (salt substitute), and lemon juice. Drink 2-3 glasses daily during the first week.
                  </p>
                </Card>
              </div>
            </div>

            {/* Step 5 */}
            <div className="numbered-item">
              <div className="numbered-item-number">5</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Plan Your First Week of Meals</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Meal planning prevents decision fatigue and ensures you stay on track. Start with simple recipes.
                </p>
                <Card className="editorial-card">
                  <h4 className="font-bold mb-3">Sample Day 1 Meal Plan:</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm mb-1">Breakfast (8 AM):</p>
                      <p className="text-sm text-muted-foreground">3 eggs scrambled in butter with cheese, 2 strips bacon, coffee with heavy cream</p>
                      <p className="text-xs text-muted-foreground mt-1">Macros: 5g carbs, 35g protein, 45g fat</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Lunch (1 PM):</p>
                      <p className="text-sm text-muted-foreground">Grilled chicken salad with avocado, olive oil dressing, mixed greens</p>
                      <p className="text-xs text-muted-foreground mt-1">Macros: 8g carbs, 40g protein, 35g fat</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Snack (4 PM):</p>
                      <p className="text-sm text-muted-foreground">30g macadamia nuts</p>
                      <p className="text-xs text-muted-foreground mt-1">Macros: 4g carbs, 2g protein, 22g fat</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Dinner (7 PM):</p>
                      <p className="text-sm text-muted-foreground">Salmon fillet with roasted broccoli in garlic butter</p>
                      <p className="text-xs text-muted-foreground mt-1">Macros: 7g carbs, 45g protein, 38g fat</p>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <p className="font-semibold text-sm">Daily Total: 24g carbs, 122g protein, 140g fat (1,900 calories)</p>
                    </div>
                  </div>
                </Card>
                <Button className="mt-4 bg-primary hover:bg-primary/90">
                  <Utensils className="mr-2" size={16} />
                  Get 7-Day Meal Plan
                </Button>
              </div>
            </div>

            {/* Step 6 */}
            <div className="numbered-item">
              <div className="numbered-item-number">6</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Track Your Progress</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Monitor your ketone levels, weight, and how you feel. Adjust as needed based on your results.
                </p>
                <Card className="editorial-card">
                  <h4 className="font-bold mb-3">Tracking Methods:</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">🩸 Blood Ketone Meter (Most Accurate)</p>
                      <p className="text-sm text-muted-foreground">Target: 0.5-3.0 mmol/L. Test in the morning before eating.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">💨 Breath Ketone Meter</p>
                      <p className="text-sm text-muted-foreground">Measures acetone. Less accurate but reusable.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">🧪 Urine Ketone Strips</p>
                      <p className="text-sm text-muted-foreground">Cheap but unreliable after keto-adaptation (2-4 weeks).</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Step 7 */}
            <div className="numbered-item">
              <div className="numbered-item-number">7</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Stay Consistent & Patient</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Full keto-adaptation takes 2-4 weeks. Don't judge the diet based on the first few days. Give your body time to adjust.
                </p>
                <Card className="editorial-card bg-secondary/5">
                  <h4 className="font-bold mb-3">What to Expect:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span><strong>Days 1-3:</strong> Water weight loss (2-4 kg), possible fatigue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span><strong>Days 4-7:</strong> Ketosis begins, keto flu symptoms peak then improve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span><strong>Week 2-3:</strong> Energy returns, mental clarity improves, hunger decreases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span><strong>Week 4+:</strong> Full keto-adaptation, stable energy, consistent fat loss</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-header mb-12">Common Beginner Mistakes to Avoid</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="editorial-card">
                <h3 className="text-lg font-bold mb-2">❌ Not Eating Enough Fat</h3>
                <p className="text-sm text-muted-foreground">
                  Fat is your primary fuel source on keto. Don't be afraid of it—embrace healthy fats to stay satisfied and energized.
                </p>
              </Card>

              <Card className="editorial-card">
                <h3 className="text-lg font-bold mb-2">❌ Too Much Protein</h3>
                <p className="text-sm text-muted-foreground">
                  Excess protein can be converted to glucose through gluconeogenesis, potentially kicking you out of ketosis. Stick to moderate protein.
                </p>
              </Card>

              <Card className="editorial-card">
                <h3 className="text-lg font-bold mb-2">❌ Ignoring Electrolytes</h3>
                <p className="text-sm text-muted-foreground">
                  The #1 cause of keto flu. Supplement sodium, potassium, and magnesium from day one.
                </p>
              </Card>

              <Card className="editorial-card">
                <h3 className="text-lg font-bold mb-2">❌ Not Tracking Carbs</h3>
                <p className="text-sm text-muted-foreground">
                  Hidden carbs add up quickly. Track everything for at least the first month until you develop intuition.
                </p>
              </Card>

              <Card className="editorial-card">
                <h3 className="text-lg font-bold mb-2">❌ Giving Up Too Soon</h3>
                <p className="text-sm text-muted-foreground">
                  The first week is the hardest. Push through—it gets much easier after keto-adaptation.
                </p>
              </Card>

              <Card className="editorial-card">
                <h3 className="text-lg font-bold mb-2">❌ Not Drinking Enough Water</h3>
                <p className="text-sm text-muted-foreground">
                  Ketosis has a diuretic effect. Aim for 2.5-3 liters of water daily to stay hydrated.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
