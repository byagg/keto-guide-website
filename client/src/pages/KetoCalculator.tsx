import { Card } from "@/components/ui/card";
import { Calculator } from "lucide-react";

export default function KetoCalculator() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="mx-auto mb-6" size={48} />
            <h1 className="mb-6">Keto Macro Calculator</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Calculate your personalized macronutrient targets for ketosis
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="editorial-card">
            <h2 className="text-2xl mb-4">Coming Soon</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're building an interactive calculator to help you determine your optimal macros based on your age, weight, height, activity level, and goals. Check back soon!
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
